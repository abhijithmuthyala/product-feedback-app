"use client";

import { deletePost } from "@/actions/edit-post";
import { useFormStatus } from "react-dom";

export default function DeletePostButton({ postID }) {
  const { pending, action: formAction } = useFormStatus();
  const deleteAction = deletePost.bind(null, postID);

  return (
    <button
      formAction={deleteAction}
      className="rounded-md bg-delete px-5 py-2.5 font-bold text-neutral-1"
    >
      {pending && formAction === deleteAction ? "Deleting..." : "Delete Post"}
    </button>
  );
}
