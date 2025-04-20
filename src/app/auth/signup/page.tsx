'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'

type FormData = {
  email: string
  password: string
}

export default function SignupPage() {
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      alert("Vennligst bekreft at du ikke er en robot.")
      return
    }

    const { email, password } = data

    // Opprett bruker
    const { error: signupError } = await supabase.auth.signUp({ email, password })

    if (signupError) {
      setError(signupError.message)
      return
    }

    // Automatisk innlogging etter registrering
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })

    if (loginError) {
      setError(loginError.message)
      return
    }

    // Redirect tilbake til opprinnelig side
    const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
    router.push(redirectedFrom)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Opprett konto
        </h1>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">E-post</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Passord</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* reCAPTCHA v3 - usynlig */}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
             onChange={(token: string | null) => setRecaptchaToken(token)}
          />


          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Registrer deg
          </button>
        </form>
      </div>
    </main>
  )
}
