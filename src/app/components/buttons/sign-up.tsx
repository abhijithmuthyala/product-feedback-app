"use client";

import { useFormStatus } from "react-dom";

export default function SignUpButton({}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-md bg-secondary px-3 py-2 text-base font-bold text-neutral-1"
    >
      {pending ? "Signing up..." : "Signup"}
    </button>
  );
}
