'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRecaptchaToken } from '@/hooks/useRecaptchaToken'

type FormData = {
  email: string
  password: string
}

export default function SignupForm() {
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  // ✅ Bruk recaptchaToken direkte fra hook
  const recaptchaToken = useRecaptchaToken('signup')

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      alert('Klarte ikke hente reCAPTCHA-token.')
      return
    }
  
    // ✅ 1. Verifiser tokenet mot backend før du oppretter bruker
    const verify = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: recaptchaToken }),
    })
  
    const verifyResult = await verify.json()
  
    if (!verify.ok || !verifyResult.success) {
      alert('Vi kunne ikke verifisere at du er et menneske. Prøv igjen.')
      return
    }
  
    // ✅ 2. Fortsett som før: registrer og logg inn brukeren
    const { email, password } = data
  
    const { error: signupError } = await supabase.auth.signUp({ email, password })
  
    if (signupError) {
      setError(signupError.message)
      return
    }
  
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })
  
    if (loginError) {
      setError(loginError.message)
      return
    }
  
    const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
    router.push(redirectedFrom)
  }
  

  return (
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
