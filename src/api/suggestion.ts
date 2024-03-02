import { suggestionByID } from "@/supabase/functions";
import { createClient } from "@/supabase/server";

export async function getSuggestion(id: number) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc(suggestionByID, {
    post_id_param: id,
  });
  const suggestions = data[0];

  if (error || !suggestions) {
    throw new Error(error);
  }

  return suggestions;
}
