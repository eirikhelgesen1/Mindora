import { supabase } from "./client"

export async function insertInterest(email: string, name: string, score: number) {
  return await supabase
    .from("interesse")
    .insert([
      {
        email,
        name,
        recaptcha_score: score,
      },
    ])
    .select()
    .single()
}
