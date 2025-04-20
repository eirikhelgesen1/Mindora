// 📦 Next.js sin helper for å returnere HTTP-svar fra API-ruter
import { NextResponse } from 'next/server'

// 📬 POST-handler for å verifisere reCAPTCHA-token sendt fra frontend
export async function POST(req: Request) {
  // 🔓 Hent token fra request-body (forventet: { token: '...' })
  const { token } = await req.json()

  // ❌ Returner 400 Bad Request hvis token mangler
  if (!token) {
    return NextResponse.json(
      { success: false, message: 'Missing token' },
      { status: 400 }
    )
  }

  // 🔐 Henter secret key fra miljøvariabler (skal ikke være offentlig!)
  const secret = process.env.RECAPTCHA_SECRET_KEY

  // 🌍 Sender token og secret til Googles API for verifisering
  const verificationResponse = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    }
  )

  // 🔍 Henter JSON-respons fra Google – f.eks. { success: true, score: 0.9, ... }
  const result = await verificationResponse.json()

  // ❌ Avvis hvis verifisering feiler, eller scoren er lav (< 0.5 antyder bot)
  if (!result.success || result.score < 0.5) {
    return NextResponse.json(
      {
        success: false,
        score: result.score,
        message: 'reCAPTCHA verification failed',
      },
      { status: 403 }
    )
  }

  // ✅ Alt OK – token er ekte og scoren høy nok (mest sannsynlig ekte bruker)
  return NextResponse.json({ success: true, score: result.score })
}
