"use server";

import { headers } from "next/headers";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function handleLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("pw");

  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  redirect("/");
}

export async function handleSignup(formData) {
  const email = formData.get("email");
  const password = formData.get("pw");

  const origin = headers().get("origin");
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return console.error("Error signing up:", error.message);
  }

  redirect("/");
}
