"use client"

import { useState } from "react"
import Script from "next/script"
import { insertInterest } from "@/lib/supabase/insert-intrest"

export default function InterestForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "interest" }
      )

      const res = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })

      const result: { success: boolean; score: number } = await res.json()

      if (!result.success || result.score < 0.5) {
        setError("Vi kunne ikke bekrefte at du er et menneske.")
        return
      }

      const { error } = await insertInterest(email, name, result.score)
      if (error) {
        if (error.code === "23505") {
          setError("Denne e-posten er allerede registrert.")

          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "duplicate_interest", {
              event_category: "Interest Form",
              event_label: `Email: ${email} | Name: ${name}`,
            })
          }
        } else {
          setError("Noe gikk galt, prøv igjen.")
        }
      } else {
        setSubmitted(true)
        setEmail("")
        setName("")

        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "submitted_interest", {
            event_category: "Interest Form",
            event_label: `Email: ${email} | Name: ${name}`,
          })
        }
      }
    } catch (error: unknown) {
      console.error("Recaptcha error:", error)
      setError("Uventet feil oppstod.")
    }
  }

  return (
    <section className="bg-orange-50 rounded-3xl shadow-md max-w-6xl mx-auto my-10 px-6 py-20 text-center" id="intrest">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <h2 className="text-2xl font-semibold mb-4">Få tidlig tilgang</h2>
      <p className="text-gray-600 mb-6">Legg igjen e-posten din og bli blant de første som får prøve Mindora.</p>

      {submitted ? (
        <p className="text-green-700 font-medium">Takk! Vi kontakter deg snart 🌱</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4 items-center p-1">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="din@email.no"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-center"
          />
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ditt navn"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-center"
          />
          <button
            type="submit"
            className="bg-green-900 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition-colors whitespace-nowrap"
          >
            Meld interesse
          </button>
        </form>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </section>
  )
}

export {}

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
    gtag?: (...args: unknown[]) => void
  }
}
