'use client'

export default function DashboardPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700 text-center">Ditt Dashboard</h1>

      <section className="grid gap-6 md:grid-cols-2">
        {/* Vaner og mål */}
        <div className="bg-white rounded-xl shadow p-6 border">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">🧱 Mål & Vaner</h2>
          <p className="text-sm text-gray-600 mb-4">Hold oversikt over daglige mål og fremgang.</p>
          {/* TODO: HabitList */}
          <div className="text-gray-400 italic">Ingen vaner lagt til ennå.</div>
        </div>

        {/* Refleksjon */}
        <div className="bg-white rounded-xl shadow p-6 border">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">🪞 Refleksjon</h2>
          <p className="text-sm text-gray-600 mb-4">Skriv ned tanker og følelser, og få AI-innsikt.</p>
          {/* TODO: ReflectionForm */}
          <div className="text-gray-400 italic">Du har ikke skrevet noe i dag.</div>
        </div>
      </section>

      {/* Fokusmodus */}
      <section className="bg-white rounded-xl shadow p-6 border">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">⏱ Fokusmodus</h2>
        <p className="text-sm text-gray-600 mb-4">Bruk Pomodoro-teknikken for å holde fokus og få AI-belønning etter økten.</p>
        {/* TODO: FocusTimer */}
        <div className="text-gray-400 italic">Start en fokusøkt når du er klar.</div>
      </section>
    </main>
  )
}
