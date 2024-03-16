"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className = "" }) {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <button
      onClick={goBack}
      className={`${className} flex items-center gap-x-2 font-bold`}
    >
      <span className="h-2.5 w-2 bg-left-arrow bg-contain bg-center bg-no-repeat"></span>
      Go back
    </button>
  );
}
