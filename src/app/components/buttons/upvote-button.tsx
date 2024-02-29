"use client";

export default function UpvoteButton({ disabled, upvotes }) {
  return <button disabled={disabled}>Upvotes: {upvotes}</button>;
}
