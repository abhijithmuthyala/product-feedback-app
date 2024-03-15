"use client";

import { insertPost } from "@/actions/edit-post";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export default function AddNewPostButton({}) {
  const { pending, action: formAction } = useFormStatus();
  const router = useRouter();

  async function submitAction(formData) {
    // await updatePost(postID, formData);
    // router.push(`/suggestions/${postID}`);
  }

  return (
    <button
      formAction={insertPost}
      className={`rounded-md bg-save px-5 py-2.5 font-bold text-neutral-1`}
    >
      {pending && formAction === insertPost ? "Adding..." : "Add Feedback"}
    </button>
  );
}
