'use client'

// 📦 react-hook-form brukes for enkel håndtering av inputfeltene og validering
import { useForm } from 'react-hook-form'
// 🎯 useState for å håndtere eventuelle feilmeldinger
import { useState } from 'react'
// 🔐 Supabase-klienten for å opprette og logge inn brukere
import { supabase } from '@/lib/supabase/client'
// 🧭 Router og URL-parametere fra Next.js
import { useRouter, useSearchParams } from 'next/navigation'
// 🔐 Hook som henter reCAPTCHA v3-token fra Google
import { useRecaptchaToken } from '@/hooks/useRecaptchaToken'

// 🎯 Definerer hvilke felter skjemaet inneholder og hvilken type de har
type FormData = {
  email: string
  password: string
}

export default function SignupForm() {
  // Initialiserer react-hook-form for email og passord
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('') // Feilmelding vises i UI hvis noe går galt
  const router = useRouter() // Brukes til å navigere etter vellykket registrering
  const searchParams = useSearchParams() // For å finne eventuell redirect etter innlogging

  // 🔒 Henter et reCAPTCHA-token fra Google v3 for "signup"-action
  const recaptchaToken = useRecaptchaToken('signup')

  // 🔁 Kalles når brukeren sender inn skjemaet
  const onSubmit = async (data: FormData) => {
    // ✅ Sjekker at token er mottatt før man går videre
    if (!recaptchaToken) {
      alert('Klarte ikke hente reCAPTCHA-token.')
      return
    }

    // 🔍 Sender token til backend for server-side verifisering mot Google
    const verify = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: recaptchaToken }),
    })

    const verifyResult = await verify.json()

    // ❌ Hvis verifiseringen feiler, stopper prosessen
    if (!verify.ok || !verifyResult.success) {
      alert('Vi kunne ikke verifisere at du er et menneske. Prøv igjen.')
      return
    }

    // 📩 Brukeren har passert reCAPTCHA – nå registreres de i Supabase
    const { email, password } = data

    const { error: signupError } = await supabase.auth.signUp({ email, password })

    // ❌ Hvis det oppstår feil ved registrering, vis feilmelding
    if (signupError) {
      setError(signupError.message)
      return
    }

    // 🔑 Automatisk innlogging etter vellykket registrering
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })

    if (loginError) {
      setError(loginError.message)
      return
    }

    // 🚀 Etter innlogging: send brukeren til dashboard eller redirect-URL
    const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
    router.push(redirectedFrom)
  }

  // 🧾 JSX for skjemaet og visning
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Opprett konto
      </h1>

      {/* Viser feilmeldinger hvis noe går galt */}
      {error && (
        <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
      )}

      {/* Bruk react-hook-form sin submit-handler */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">E-post</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Passord</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Registrer deg
        </button>
      </form>
    </div>
  )
}
