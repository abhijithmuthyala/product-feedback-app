"use server";

import { createClient } from "@/supabase/server";

export async function postCommentReply(commentData, formData) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc("insert_comment", {
    comment_param: formData.get("comment"),
    parent_id_param: commentData.id,
    post_id_param: commentData.comment_post_id,
  });
  if (error) console.error(error);
  return data;
}
