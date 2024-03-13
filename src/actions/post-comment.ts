"use server";

import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";

export async function postCommentReply(parentID, postID, formData) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc("insert_comment", {
    comment_param: formData.get("comment"),
    parent_id_param: parentID,
    post_id_param: postID,
  });

  if (error) console.error(error);
  revalidatePath("/details");
  return data;
}
