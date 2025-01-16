"use client";

import { useFormStatus } from "react-dom";

export default function SignInButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-md bg-primary px-3 py-2 text-base font-bold text-neutral-1"
    >
      {pending ? "Loggin in..." : "Login"}
    </button>
  );
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
