"use client";

import { postCommentReply } from "@/actions/post-comment";

export default function CommentReplyForm({ parentID, postID }) {
  return (
    <form action={postCommentReply.bind(null, parentID, postID)}>
      <label htmlFor="comment">
        <textarea required name="comment" id="comment" />
      </label>
      <button type="submit">Reply</button>
    </form>
  );
}
