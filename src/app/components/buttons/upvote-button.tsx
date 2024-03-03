"use client";

import { updateUpvote } from "@/actions/upvote";

export default function UpvoteButton({ disabled, upvotes, upvoted, postID }) {
  return (
    <form action={updateUpvote.bind(null, postID, upvoted)}>
      <button type="submit" disabled={disabled}>
        Upvotes: {upvotes}
      </button>
    </form>
  );
}
