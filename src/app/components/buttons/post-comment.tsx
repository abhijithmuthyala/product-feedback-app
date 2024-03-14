"use client";

import { useFormStatus } from "react-dom";

export default function PostCommentButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="max-w-48 rounded-md bg-primary px-6 py-3 font-bold text-neutral-1"
    >
      {pending ? "Posting..." : children}
    </button>
  );
}
