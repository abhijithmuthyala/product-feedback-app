import { comments } from "@/supabase/functions";
import { createClient } from "@/supabase/server";

export async function getComments(postID: number) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc(comments, {
    post_id_param: postID,
  });

  if (error) {
    throw new Error(error);
  }

  return data;
}
