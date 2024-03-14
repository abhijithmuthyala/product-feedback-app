"use client";

import { useRef, useTransition } from "react";
import TextArea from "../text-area";

export default function CommentReplyForm({
  onSuccess = null,
  action,
  postButton,
}) {
  // using a transition results in a better ux - the new
  // comment appears immediately after the form is closed.
  // TODO: THIS FEELS LIKE A BLACK BOX. EXPLORE MORE!
  const [pending, startTransition] = useTransition();
  const formRef = useRef(null);

  async function postReply(formData) {
    startTransition(async function postCommentActionTransition() {
      await action(formData);
      if (!pending) {
        formRef.current?.reset();
      }
    });
    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <form action={postReply} className="grid gap-y-2" ref={formRef}>
      <TextArea placeholder="Type your comment here" />
      {postButton}
    </form>
  );
}
