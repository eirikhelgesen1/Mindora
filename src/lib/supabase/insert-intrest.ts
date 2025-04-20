import { supabase } from "./client"

export async function insertInterest(email: string, name: string, result: { score: number }) {
  return await supabase.from("interesse").insert([
    {
      email,
      name,
    },
  ]).select().single()
}