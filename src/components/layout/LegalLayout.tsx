// src/components/layout/LegalLayout.tsx
import React from 'react'
import Link from 'next/link'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
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
    </div>
  )
}
