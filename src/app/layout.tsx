import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { useEffect, useState } from "react"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// ❗️ Flytt metadata til egen serverkomponent f.eks. layout.metadata.ts om du bruker "use client"
// export const metadata: Metadata = { ... }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
    <html lang="no">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* 🔐 Google reCAPTCHA v3 – lastes én gang etter sideinteraksjon */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        {/* 🍪 Cookie consent banner */}
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

        {/* 📈 Google Analytics 4 – lastes kun ved samtykke */}
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
      </body>
    </html>
  )
}
