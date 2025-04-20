import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return new Response("Ikke autorisert", { status: 401 })
  }

  const body = await req.json()
  const { title } = body

  const { error } = await supabase
    .from("habits")
    .insert([{ title, user_id: user.id }])

  if (error) {
    return new Response("Feil under lagring", { status: 500 })
  }

  return new Response("Lagret", { status: 200 })
}
