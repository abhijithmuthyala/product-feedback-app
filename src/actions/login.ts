"use server";

import { headers } from "next/headers";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function handleLogin(formState, formData) {
  const email = formData.get("email");
  const password = formData.get("pw");

  const supabase = createClient();
  let error;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!data || error) {
      throw new Error(error.message);
    }
  } catch (error) {
    error = error;
    return { error: error.message };
  }

  if (!error) {
    redirect("/");
  }
}

export async function handleSignup(formState, formData) {
  const email = formData.get("email");
  const password = formData.get("pw");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const username = firstname + "_" + lastname;

  const origin = headers().get("origin");
  const supabase = createClient();
  let error;

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
    error = error;
    return { error: error.message };
  }
  if (!error) {
    redirect("/");
  }
}
