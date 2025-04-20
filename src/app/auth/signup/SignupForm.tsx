'use client'

// 📦 react-hook-form brukes for håndtering av inputfelter og validering
import { useForm } from 'react-hook-form'
// 🎯 useState brukes for å håndtere feilmeldinger
import { useState } from 'react'
// 🔐 Supabase-klienten for autentisering
import { supabase } from '@/lib/supabase/client'
// 🧭 Router og URL-parametere fra Next.js
import { useRouter, useSearchParams } from 'next/navigation'

// 🎯 Definerer hvilke felter skjemaet inneholder og hvilken type de har
type FormData = {
  email: string
  password: string
}

export default function SignupForm() {
  // 🎯 Initialiserer react-hook-form for å håndtere skjemaet
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('') // Brukes til å vise feilmeldinger i UI
  const router = useRouter() // Navigasjon etter vellykket innlogging
  const searchParams = useSearchParams() // Fanger eventuell redirect

  // 🔁 Kjøres når brukeren sender inn skjemaet
  const onSubmit = async (data: FormData) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!

    // 🔐 Genererer nytt reCAPTCHA-token når skjemaet sendes inn
    const recaptchaToken = await window.grecaptcha.execute(siteKey, {
      action: 'signup',
    })

    if (!recaptchaToken) {
      alert('Klarte ikke hente reCAPTCHA-token.')
      return
    }

    // 🔍 Sender token til backend for validering mot Google
    const verify = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: recaptchaToken }),
    })

    const verifyResult = await verify.json()

    // ❌ Stopper registrering hvis token ikke er gyldig eller scoren er for lav
    if (!verify.ok || !verifyResult.success || verifyResult.score < 0.5) {
      alert('Vi kunne ikke verifisere at du er et menneske. Prøv igjen.')
      return
    }

    // 📩 Brukeren er verifisert – fortsett med Supabase-registrering
    const { email, password } = data
    const { error: signupError } = await supabase.auth.signUp({ email, password })

    // ❌ Viser feil hvis registrering feiler
    if (signupError) {
      setError(signupError.message)
      return
    }

    // 🔑 Logger inn brukeren automatisk etter vellykket registrering
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })

    if (loginError) {
      setError(loginError.message)
      return
    }

    // 🚀 Sender brukeren videre til dashboard eller opprinnelig side
    const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
    router.push(redirectedFrom)
  }

  // 🧾 Skjemaet og visningen i brukergrensesnittet
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Opprett konto
      </h1>

      {/* 🔴 Viser feilmeldinger hvis noe går galt */}
      {error && (
        <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
      )}

      {/* 📬 Skjema for e-post og passord */}
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