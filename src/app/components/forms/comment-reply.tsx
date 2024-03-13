"use client";

import { useTransition } from "react";
import PostCommentButton from "../buttons/post-comment";
import TextArea from "../text-area";

export default function CommentReplyForm({ onSuccess, action }) {
  // using a transition results in a better ux - the new
  // comment appears immediately after the form is closed.
  // TODO: THIS FEELS LIKE A BLACK BOX. EXPLORE MORE!
  const [pending, startTransition] = useTransition();

  async function postReply(formData) {
    startTransition(action(formData));
    onSuccess();
  }

  return (
    <form action={postReply} className="grid gap-y-2">
      <TextArea placeholder="Type your comment here" />
      <PostCommentButton>Post comment</PostCommentButton>
    </form>
  );
}
