"use server";

import { toggleUpvote } from "@/supabase/functions";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateUpvote(postID, upvoted) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc(toggleUpvote, {
    post_id_param: postID,
    upvoted_param: !upvoted,
  });

  if (error) console.error(error);
  revalidatePath("/details");
}
