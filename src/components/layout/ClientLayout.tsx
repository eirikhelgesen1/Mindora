'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      setConsentGiven(true)
    }
  }, [])

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'declined')
    setShowBanner(false)
    if (accepted) setConsentGiven(true)
  }

  return (
    <>
      {children}

      {/* 🔐 reCAPTCHA */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      {/* 🍪 Cookie banner */}
      {showBanner && (
        <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-300 shadow p-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
          <p className="text-sm text-gray-700">
            Vi bruker cookies og reCAPTCHA for å forbedre opplevelsen. Se våre{' '}
            <a href="/cookies" className="underline text-indigo-600">retningslinjer</a>.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleConsent(false)}
              className="text-sm border border-gray-400 px-4 py-1 rounded hover:bg-gray-100"
            >
              Avslå
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="text-sm bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Godta
            </button>
          </div>
        </div>
      )}

      {/* 📈 GA4 */}
      {consentGiven && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
    </>
  )
}
