'use client'

// src/components/layout/LegalLayout.tsx
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const [showBanner, setShowBanner] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

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
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-30 px-6 py-4 border-b">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-indigo-600">Mindora</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-16 px-6 text-gray-800 leading-relaxed">
        <div className="prose prose-indigo prose-sm sm:prose-base lg:prose-lg">
          {children}
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-10">
        <p>
          <Link href="/privacy" className="underline mr-4">Personvern</Link>
          <Link href="/terms" className="underline mr-4">Vilkår</Link>
          <Link href="/cookies" className="underline">Cookies</Link>
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Mindora</p>
      </footer>

      {showBanner && (
        <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-300 shadow p-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
          <p className="text-sm text-gray-700">
            Vi bruker cookies og reCAPTCHA for å forbedre opplevelsen. Se våre{' '}
            <Link href="/cookies" className="underline text-indigo-600">retningslinjer</Link>.
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

      {/* Load Google Analytics only if consent is given */}
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
    </div>
  )
}