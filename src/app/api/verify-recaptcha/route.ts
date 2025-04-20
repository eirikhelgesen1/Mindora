import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { token } = await req.json()

  if (!token) {
    return NextResponse.json(
      { success: false, message: 'Missing token' },
      { status: 400 }
    )
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY

  const verificationResponse = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    }
  )

  const result = await verificationResponse.json()

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

  return NextResponse.json({ success: true, score: result.score })
}
