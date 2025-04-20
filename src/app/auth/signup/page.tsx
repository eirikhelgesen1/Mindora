'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import ReCAPTCHA from 'react-google-recaptcha'

type FormData = {
  email: string
  password: string
}

export default function SignupPage() {
  const { register, handleSubmit } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      alert("Vennligst bekreft at du ikke er en robot.")
      return
    }

    // ✅ reCAPTCHA-token er tilgjengelig her, kan sendes til backend hvis ønskelig

    const { email, password } = data
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Opprett konto
        </h1>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            Takk! Du er registrert. Du kan nå logge inn.
          </div>
        ) : (
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
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              size="invisible"
              badge="bottomleft"
              onChange={(token: string | null) => setRecaptchaToken(token)}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Registrer deg
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
