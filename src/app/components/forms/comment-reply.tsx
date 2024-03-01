"use client";

import { useState } from "react";

export default function ReplyForm() {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setComment(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={handleChange} />
      <button type="submit">Reply</button>
    </form>
  );
}
