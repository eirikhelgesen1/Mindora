'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  email: string
  password: string
}

export default function SignupPage() {
  const { register, handleSubmit } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    console.log('Registrerer bruker:', data)
    setSubmitted(true)
    // Her kommer Supabase-auth senere
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Opprett konto
        </h1>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            Takk! Du er registrert (demo). Du kan nå logge inn.
          </div>
        ) : (
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
              Registrer deg
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
