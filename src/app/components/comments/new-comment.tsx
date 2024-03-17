"use client";

import { postCommentReply } from "@/actions/post-comment";
import PostCommentButton from "../buttons/post-comment";
import CommentReplyForm from "../forms/comment-reply";

export default function NewCommentForm({ postID }) {
  return (
    <CommentReplyForm
      action={postCommentReply.bind(null, null, postID, null)}
      postButton={<PostCommentButton>Post comment</PostCommentButton>}
    />
  );
}
