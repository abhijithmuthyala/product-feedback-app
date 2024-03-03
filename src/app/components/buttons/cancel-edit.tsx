"use client";

import { useRouter } from "next/navigation";

export default function CancelEditPost() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Cancel Edit
      </button>
    </div>
  );
}
