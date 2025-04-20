// src/components/layout/LegalLayout.tsx
import React from 'react'
import Link from 'next/link'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900 flex flex-col">
      <header className="bg-white shadow sticky top-0 z-30 px-6 py-4 border-b">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700 transition">
            Mindora
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto py-16 px-6 text-gray-800 leading-relaxed">
        <div className="prose prose-indigo prose-sm sm:prose-base lg:prose-lg">
          {children}
        </div>
      </main>

      <footer className="bg-gray-100 border-t py-8">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p className="mb-4 space-x-4">
            <Link href="/privacy" className="underline hover:text-indigo-600 transition">Personvern</Link>
            <Link href="/terms" className="underline hover:text-indigo-600 transition">Vilkår</Link>
            <Link href="/cookies" className="underline hover:text-indigo-600 transition">Cookies</Link>
          </p>
          <p className="mt-2 text-gray-500">&copy; {new Date().getFullYear()} <span className="font-semibold">Mindora</span></p>
        </div>
      </footer>
    </div>
  )
}
