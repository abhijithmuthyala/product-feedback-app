import { suggestionByID } from "@/supabase/functions";
import { createClient } from "@/supabase/server";

export async function getSuggestion(id: number) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc(suggestionByID, {
    post_id_param: id,
  });
  const suggestion = data[0];

  if (error || !suggestion) {
    throw new Error(error.message);
  }

  return suggestion;
}
