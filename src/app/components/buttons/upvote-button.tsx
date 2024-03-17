"use client";

import { updateUpvote } from "@/actions/upvote";
import { useFormStatus } from "react-dom";
import { useAuthStatus } from "../auth-context";

const voteIcons = new Map([
  [false, "bg-up-arrow"],
  [true, "bg-down-arrow"],
]);

const background = new Map([
  [true, "bg-neutral-4"],
  [false, "bg-neutral-1"],
]);

const actionBackground = new Map([
  [true, "animate-glow"],
  [false, ""],
]);

export default function UpvoteButton({ upvotes, upvoted, postID }) {
  const isAuthenticated = useAuthStatus();
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      formAction={updateUpvote.bind(null, postID, upvoted)}
      disabled={!isAuthenticated}
      className={`flex items-center gap-2 rounded-md px-4 py-1.5 disabled:cursor-not-allowed sm:flex-col sm:px-3 sm:py-3 ${background.get(isAuthenticated && upvoted)} ${actionBackground.get(pending)}`}
    >
      <span
        className={`${voteIcons.get(upvoted)} h-2 w-2.5 bg-cover bg-center bg-no-repeat`}
      ></span>
      <span className="font-bold">{upvotes}</span>
    </button>
  );
}
