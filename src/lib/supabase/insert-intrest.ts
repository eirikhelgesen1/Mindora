import { supabase } from "./client"

export async function insertInterest({ email, name }: { email: string; name: string }) {
  const { data, error } = await supabase
    .from("interesse")
    .insert([{ email, name }])
  return { data, error }
}
