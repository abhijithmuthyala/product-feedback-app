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

export async function updatePost(postID, formData) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("suggestions")
    .update({
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      status: formData.get("status"),
    })
    .eq("id", postID)
    .select();

  if (error) {
    return console.error(error);
  }

  redirect("/details/" + postID);
}
