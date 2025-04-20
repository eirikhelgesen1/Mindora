'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'

type FormData = {
  email: string
  password: string
}

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  const onSubmit = async (data: FormData) => {
    const { email, password } = data
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
      router.push(redirectedFrom)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Logg inn
        </h1>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">E-post</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Passord</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Logg inn
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Har du ikke konto?{' '}
          <a href="/auth/signup" className="text-indigo-600 hover:underline">
            Registrer deg her
          </a>
        </p>
      </div>
    </main>
  )
}
