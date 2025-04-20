'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navbar-with-popover"
import '@/styles/mindora-colors.css';

export default function Home() {
  const [, setUser] = useState<null | object>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })
  }, [])

  return (
    <main className="bg-[var(--color-background)] text-gray-900 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="py-24 text-center px-4 bg-orange-50" id="cta">
        <h1 className="text-5xl font-bold mb-4 text-green-900">Velkommen til Mindora</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Bygg vaner som varer. Reflekter med innsikt. Fokuser uten stress.
        </p>
        <Link href="/auth/signup">
          <button className="bg-green-900 text-white px-6 py-3 rounded-xl text-lg hover:bg-[var(--color-accent)] transition-colors duration-200">
            Kom i gang gratis
          </button>
        </Link>
      </section>

      {/* Funksjoner */}
      <section className="py-20 bg-[var(--color-background)]" id="features">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🧱 Vaner og mål</h3>
            <p className="text-sm text-gray-600">Lag daglige vaner og følg progresjon med visualisering og AI-motivasjon.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🪞 Refleksjon</h3>
            <p className="text-sm text-gray-600">Guidet dagbok med AI-støtte og PDF-eksport – forstå tankene dine bedre.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">⏱ Fokusmodus</h3>
            <p className="text-sm text-gray-600">Pomodoro-timer med AI-basert belønningssystem og statistikk.</p>
          </div>
        </div>
        <Analytics />
      </section>

      {/* For hvem */}
      <section className="py-20 bg-[var(--color-background)] text-center px-6" id="target">
        <h2 className="text-3xl font-bold mb-4">Hvem er Mindora for?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Enten du er student, gründer, leder eller bare ønsker mer struktur i hverdagen, gir Mindora deg verktøyene for å utvikle deg selv – ett skritt av gangen. Du får støtte i form av innsikt, visualisering, AI og egen refleksjon.
        </p>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-[var(--color-background)] text-center">
        <h2 className="text-2xl font-semibold mb-4">Klar for å starte din utviklingsreise?</h2>
        <p className="text-gray-600 mb-6">Registrer deg gratis og få tilgang til dine egne mål, refleksjoner og fokusverktøy.</p>
        <Link href="/auth/signup">
          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl text-lg hover:bg-[var(--color-accent)] transition">
            Opprett konto
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-[var(--coloar-primary)] bg-white">
        © 2025 Mindora. Alle rettigheter reservert.
        <p>
          <Link href="/privacy" className="underline mr-4">Personvern</Link>
          <Link href="/terms" className="underline mr-4">Vilkår</Link>
          <Link href="/cookies" className="underline">Cookies</Link>
        </p>
      </footer>
    </main>
  )
}
