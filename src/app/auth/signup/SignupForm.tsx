'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Typedef for skjema
type FormData = {
  email: string
  password: string
}

export default function SignupForm() {
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!

    try {
      const recaptchaToken = await window.grecaptcha.execute(siteKey, {
        action: 'signup',
      })

      if (!recaptchaToken) {
        alert('Klarte ikke hente reCAPTCHA-token.')
        setLoading(false)
        return
      }

      const verify = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: recaptchaToken }),
      })

      const verifyResult = await verify.json()

      if (!verify.ok || !verifyResult.success || verifyResult.score < 0.5) {
        alert('Vi kunne ikke verifisere at du er et menneske. Prøv igjen.')
        setLoading(false)
        return
      }

      const { email, password } = data
      const { error: signupError } = await supabase.auth.signUp({ email, password })

      if (signupError) {
        setError(signupError.message)
        setLoading(false)
        return
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })

      if (loginError) {
        setError(loginError.message)
        setLoading(false)
        return
      }

      const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
      router.push(redirectedFrom)
    } catch (err) {
      console.error('Uventet feil:', err)
      alert('Noe gikk galt. Prøv igjen senere.')
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-indigo-600 text-2xl font-bold">
          Opprett konto
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email">E-post</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { required: true })}
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="password">Passord</Label>
            <Input
              id="password"
              type="password"
              {...register('password', { required: true })}
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin h-4 w-4" />
                Laster inn...
              </div>
            ) : (
              'Registrer deg'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}