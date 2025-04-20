'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client" // ✅ Oppdatert import
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push("/auth/login")
      } else {
        setUser(user)
        setLoading(false)
      }
    }
    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Laster inn dashboard...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-gray-900">
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-8">
        <h1 className="text-3xl font-bold text-indigo-700 text-center">
          Velkommen tilbake, {user?.email} 👋
        </h1>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow p-6 border">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🧱 Mål & Vaner</h2>
            <p className="text-sm text-gray-600 mb-4">Hold oversikt over daglige mål og fremgang.</p>
            <div className="text-gray-400 italic">Ingen vaner lagt til ennå.</div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">🪞 Refleksjon</h2>
            <p className="text-sm text-gray-600 mb-4">Skriv ned tanker og følelser, og få AI-innsikt.</p>
            <div className="text-gray-400 italic">Du har ikke skrevet noe i dag.</div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6 border">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">⏱ Fokusmodus</h2>
          <p className="text-sm text-gray-600 mb-4">Bruk Pomodoro-teknikken for å holde fokus og få AI-belønning etter økten.</p>
          <div className="text-gray-400 italic">Start en fokusøkt når du er klar.</div>
        </section>
      </div>
    </main>
  )
}
