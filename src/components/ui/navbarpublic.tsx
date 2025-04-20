'use client'

import Link from 'next/link'

export default function NavbarPublic() {
  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-#f5f2ea">
          Mindora
        </Link>
        <div className="space-x-4">
          <Link href="/auth/login" className="text-sm text-gray-700 hover:text-indigo-600">
            Logg inn
          </Link>
          <Link href="/auth/signup" className="text-sm text-gray-700 hover:text-indigo-600">
            Opprett konto
          </Link>
        </div>
      </div>
    </nav>
  )
}
