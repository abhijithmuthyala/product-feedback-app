"use client";

import { updatePost } from "@/actions/edit-post";
import { useFormStatus } from "react-dom";

export default function UpdatePostButton({ postID }) {
  const { pending, action: formAction } = useFormStatus();
  const submitAction = updatePost.bind(null, postID);

  return (
    <button
      formAction={submitAction}
      className={`rounded-md bg-save px-5 py-2.5 font-bold text-neutral-1`}
    >
      {pending && formAction === submitAction ? "Updating..." : "Submit"}
    </button>
  );
}
