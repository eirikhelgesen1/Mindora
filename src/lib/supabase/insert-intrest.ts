import { supabase } from "./client"

export async function insertInterest(email: string) {
  const { data, error } = await supabase
    .from("interesse")
    .insert([{ email }])

  return { data, error }
}
