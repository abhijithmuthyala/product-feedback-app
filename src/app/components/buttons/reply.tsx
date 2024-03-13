"use client";

export default function ReplyButton({ onClick }) {
  return (
    <button onClick={onClick} className="text-sm font-semibold text-secondary">
      Reply
    </button>
  );
}
