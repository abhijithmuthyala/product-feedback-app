"use server";

import { headers } from "next/headers";

import { createClient } from "@/supabase/server";

export async function handleLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("pw");

  const supabase = createClient();
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!data || error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function handleSignup(formData) {
  const email = formData.get("email");
  const password = formData.get("pw");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const username = firstname + "_" + lastname;

  const origin = headers().get("origin");
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (!data || error) {
      throw new Error(error.message);
    }

    const { data: nextUserID } = await supabase.rpc("get_next_user_id");
    const { error: newUserError } = await supabase.from("user_info").insert({
      id: nextUserID,
      email: email,
      first_name: firstname,
      last_name: lastname,
      username: username,
    });

    if (newUserError) {
      throw new Error(newUserError.message);
    }
  } catch (error) {
    throw new Error(error);
  }
}
