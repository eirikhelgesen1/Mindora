'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState({
    given: false,
    analytics: false,
    marketing: false,
  });
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsConsent, setAnalyticsConsent] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const initializeConsent = () => {
    const analytics = localStorage.getItem('cookie-analytics') === 'true';
    const marketing = localStorage.getItem('cookie-marketing') === 'true';
    setAnalyticsConsent(analytics);
    setMarketingConsent(marketing);

    const consentStatus = localStorage.getItem('cookie-consent');
    if (!consentStatus) {
      setShowBanner(true);
    } else if (consentStatus === 'accepted') {
      setConsent({
        given: true,
        analytics,
        marketing,
      });
    }
  };

  useEffect(() => {
    initializeConsent();
  }, []);

  const handleConsent = (accepted: boolean, consent: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'declined')
    localStorage.setItem('cookie-analytics', consent.analytics.toString())
    localStorage.setItem('cookie-marketing', consent.marketing.toString())
    setShowBanner(false)
    setShowPreferences(false)
    if (accepted) {
      setConsent((prev) => ({ ...prev, given: true }));
    }
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
            🍪 Vi bruker informasjonskapsler for å sikre nettstedets funksjonalitet, analysere trafikk og tilpasse innhold. Se vår{' '}
            <a href="/cookies" className="underline text-indigo-600">cookie-policy</a>.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleConsent(false, consent)}
              className="text-sm border border-gray-400 px-4 py-1 rounded hover:bg-gray-100"
            >
              Bare nødvendige
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="text-sm border border-gray-400 px-4 py-1 rounded hover:bg-gray-100"
            >
              Tilpass innstillinger
            </button>
            <button
              onClick={() => {
                setConsent({ given: true, analytics: true, marketing: true });
                handleConsent(true, { analytics: true, marketing: true })
              }}
              className="text-sm bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Godta alle
            </button>
          </div>
        </div>
      )}

     {/* Preferences Modal */}
{showPreferences && (
  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md border border-gray-300 pointer-events-auto">
      <h2 className="text-lg font-bold mb-4">Tilpass informasjonskapsler</h2>
      <div className="space-y-2 mb-4">
        <label className="flex items-center">
          <input type="checkbox" checked disabled className="mr-2" />
          Nødvendige (alltid aktivert)
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={analyticsConsent}
            onChange={() => setAnalyticsConsent(!analyticsConsent)}
          />
          Analyse og ytelse
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={marketingConsent}
            onChange={() => setMarketingConsent(!marketingConsent)}
          />
          Markedsføring
        </label>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowPreferences(false)}
          className="text-sm border border-gray-400 px-4 py-1 rounded hover:bg-gray-100"
        >
          Avbryt
        </button>
        <button
          onClick={() => handleConsent(true, { analytics: analyticsConsent, marketing: marketingConsent })}
          className="text-sm bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
        >
          Lagre innstillinger
        </button>
      </div>
    </div>
  </div>
)}


      {/* 📈 GA4 */}
      {consent.given && consent.analytics && (
        <>
          {process.env.NEXT_PUBLIC_GA_ID ? (
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
          ) : (
            console.error("Google Analytics ID mangler")
          )}
        </>
      )}
    </>
  )
}
function setShowBanner(arg0: boolean) {
  throw new Error('Function not implemented.');
}

