"use client";

import { handleSignup } from "@/actions/login";
import { useRouter } from "next/navigation";

export default function SignUpButton({}) {
  const router = useRouter();

  async function signup(formData) {
    await handleSignup(formData);
    router.push("/");
  }

  return (
    <button
      type="submit"
      formAction={signup}
      className="rounded-md bg-secondary px-3 py-2 text-base font-bold text-neutral-1"
    >
      Signup
    </button>
  );
}
