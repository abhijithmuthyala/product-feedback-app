"use client";

import { useContext, useState } from "react";

import { LevelContext, LevelContextProvider } from "./level-context";

export default function Comment({ data, isAuthenticated }) {
  const level = useContext(LevelContext);
  const [showReplyForm, setShowReplyForm] = useState(false);

  function toggleReplyForm() {
    if (!isAuthenticated) return;
    setShowReplyForm(!showReplyForm);
  }

  return (
    <article style={{ marginLeft: `${level * 40}px` }}>
      <h3>{data.comment}</h3>
      {data.replies?.length > 0 && (
        <LevelContextProvider>
          {data.replies.map(function renderComment(data) {
            return (
              <Comment
                key={data.id}
                data={data}
                isAuthenticated={isAuthenticated}
              />
            );
          })}
        </LevelContextProvider>
      )}
    </article>
  );
}
