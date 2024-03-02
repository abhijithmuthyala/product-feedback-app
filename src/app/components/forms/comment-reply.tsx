"use client";

import { postCommentReply } from "@/actions/post-comment";

export default function CommentReplyForm({ commentData }) {
  return (
    <form action={postCommentReply.bind(null, commentData)}>
      <label htmlFor="comment">
        <textarea required name="comment" id="comment" />
      </label>
      <button type="submit">Reply</button>
    </form>
  );
}
