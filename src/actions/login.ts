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
  } catch (error) {
    throw new Error(error);
  }
}
