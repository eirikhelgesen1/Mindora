'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function RouteChangeTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-93G4YM6WTB', {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}
