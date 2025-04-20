'use client'

import { useEffect, useState } from 'react'

export function useRecaptchaToken(action: string) {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (!window.grecaptcha || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) return

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action })
        .then(setToken)
        .catch(() => setToken(null))
    })
  }, [action])

  return token
}
