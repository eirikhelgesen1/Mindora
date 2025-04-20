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

type FormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    const { email, password } = data
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'
      router.push(redirectedFrom)
    }
  }

  return (
    <Card className="w-full max-w-md border shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-indigo-600 text-2xl font-bold">
          Logg inn
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
                Logger inn...
              </div>
            ) : (
              'Logg inn'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}