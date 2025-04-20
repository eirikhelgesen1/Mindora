'use client'

import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-neutral-50 text-gray-900 min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-indigo-600">Velkommen til Mindora</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Bygg vaner som varer. Reflekter med innsikt. Fokuser uten stress.
        </p>
        <Link href="/auth/signup">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 transition">
            Kom i gang gratis
          </button>
        </Link>
      </section>

      {/* Funksjoner */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
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
      </section>

      {/* For hvem */}
      <section className="py-20 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Hvem er Mindora for?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Enten du er student, gründer, eller bare ønsker mer struktur i hverdagen, gir Mindora deg verktøyene for å utvikle deg selv – ett skritt av gangen.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 Mindora. Alle rettigheter reservert.
      </footer>
    </main>
  )
}
