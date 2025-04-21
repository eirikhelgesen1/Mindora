import { NextResponse } from "next/server"

// Din service_role nøkkel må aldri eksponeres i frontend!
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function POST(req: Request) {
  const { email, name, recaptcha_score } = await req.json()

  if (!email || !name) {
    return NextResponse.json({ error: "Mangler data" }, { status: 400 })
  }

  const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/interesse`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify([
      { email, name, recaptcha_score },
    ]),
  })

  if (!insertRes.ok) {
    const err = await insertRes.json()
    return NextResponse.json(err, { status: insertRes.status })
  }

  const data = await insertRes.json()
  return NextResponse.json(data, { status: 201 })
}
