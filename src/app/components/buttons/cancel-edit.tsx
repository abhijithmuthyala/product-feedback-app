"use client";

import { useRouter } from "next/navigation";

export default function CancelButton({ className = "", children }) {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-md bg-cancel px-5 py-2.5 font-bold text-neutral-1 ${className}`}
    >
      {children}
    </button>
  );
}
