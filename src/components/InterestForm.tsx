"use client"

import { useState } from "react"
import { insertInterest } from "@/lib/supabase/insert-intrest"

export default function InterestForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const { error } = await insertInterest(email)
    if (error) {
      setError("Noe gikk galt, prøv igjen.")
    } else {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-10 bg-[var(--color-background)] text-center px-2" id="intrest">
      <h2 className="text-2xl font-semibold mb-4">Få tidlig tilgang</h2>
      <p className="text-gray-600 mb-6">Legg igjen e-posten din og bli blant de første som får prøve Mindora.</p>

      {submitted ? (
        <p className="text-green-700 font-medium">Takk! Vi kontakter deg snart 🌱</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="din@email.no"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Meld interesse
          </button>
        </form>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </section>
  )
}
