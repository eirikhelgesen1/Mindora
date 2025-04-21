"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const titleMap: { [key: string]: string } = {
    '/privacy': 'Personvernerklæring',
    '/terms': 'Vilkår for bruk',
    '/cookies': 'Informasjonskapsler',
  }

  const pageTitle = titleMap[pathname] || 'Juridisk informasjon'

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-gray-900">
      <header className="text-center pt-12 pb-4 px-4">
        <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
        <p className="mt-2 text-sm text-gray-600">
          Les nøye gjennom informasjonen nedenfor.
        </p>
      </header>

      <main className="flex-1 max-w-3xl mx-auto py-10 px-6 text-gray-800 leading-relaxed">
        <div className="prose prose-indigo prose-sm sm:prose-base lg:prose-lg">
          {children}
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-10">
        <p>
          <Link href="/privacy" className="underline mr-4" aria-label="Gå til personvernerklæring">Personvern</Link>
          <Link href="/terms" className="underline mr-4" aria-label="Gå til vilkår for bruk">Vilkår</Link>
          <Link href="/cookies" className="underline" aria-label="Gå til informasjon om cookies">Cookies</Link>
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Mindora</p>
      </footer>
    </div>
  )
}
