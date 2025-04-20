import React from 'react'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6 text-gray-800 leading-relaxed">
      <div className="prose prose-indigo prose-sm sm:prose-base lg:prose-lg">
        {children}
      </div>
    </main>
  )
}
