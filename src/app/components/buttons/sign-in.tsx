"use client";

import { handleLogin } from "@/actions/login";
import { useRouter } from "next/navigation";

export default function SignInButton({}) {
  const router = useRouter();

  async function login(formData) {
    await handleLogin(formData);
    router.push("/");
  }

  return (
    <button
      type="submit"
      formAction={login}
      className="rounded-md bg-primary px-3 py-2 text-base font-bold text-neutral-1"
    >
      Login
    </button>
  );
}
