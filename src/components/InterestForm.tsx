"use client"

import { useState } from "react"
import { insertInterest } from "@/lib/supabase/insert-intrest"

export default function InterestForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
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
    <section className="bg-orange-50 rounded-3xl shadow-md max-w-6xl mx-auto my-10 px-6 py-20 text-center" id="intrest">
      <h2 className="text-2xl font-semibold mb-4">Få tidlig tilgang</h2>
      <p className="text-gray-600 mb-6">Legg igjen e-posten din og bli blant de første som får prøve Mindora.</p>

      {submitted ? (
        <p className="text-green-700 font-medium">Takk! Vi kontakter deg snart 🌱</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4 items-center p-1"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="din@email.no"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-center"
          />
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ditt navn"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-center"
          />
          <button
            type="submit"
            className="bg-green-900 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition-colors whitespace-nowrap"
          >
            Meld interesse
          </button>
        </form>

      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </section>
  )
}
