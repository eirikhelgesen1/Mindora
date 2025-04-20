'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import type { User } from "@supabase/supabase-js"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

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

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Laster inn...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-indigo-600">Mindora</div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link href="/dashboard" className="hover:text-indigo-600">Oversikt</Link></li>
          <li><Link href="/dashboard/habits" className="hover:text-indigo-600">Mål & Vaner</Link></li>
          <li><Link href="/dashboard/reflection" className="hover:text-indigo-600">Refleksjon</Link></li>
          <li><Link href="/dashboard/focus" className="hover:text-indigo-600">Fokusmodus</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden md:block">Innlogget som {user?.email}</span>
          <button onClick={handleLogout} className="text-sm text-gray-600 hover:text-red-600">Logg ut</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-10 px-4">
        {children}
      </main>
    </div>
  )
}
