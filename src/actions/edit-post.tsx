"use server";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function deletePost(postID) {
  const supabase = createClient();

  // RLS policy takes care of authorization, safe to delete
  const { error } = await supabase
    .from("suggestions")
    .delete()
    .eq("id", postID);

  if (error) {
    return console.error(error);
  }

  redirect("/");
}
