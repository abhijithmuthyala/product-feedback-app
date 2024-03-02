"use client";

import { useContext, useState } from "react";

import CommentReplyForm from "../forms/comment-reply";
import { LevelContext, LevelContextProvider } from "./level-context";

export default function Comment({ data, isAuthenticated }) {
  const level = useContext(LevelContext);
  const [showReplyForm, setShowReplyForm] = useState(true);

  const replyParentID = level === 0 ? data.id : data.comment_parent_id;

  function toggleReplyForm() {
    if (!isAuthenticated) return;
    setShowReplyForm(!showReplyForm);
  }

  return (
    <article style={{ marginLeft: `${level * 40}px` }}>
      <h3>{data.comment}</h3>
      {showReplyForm && (
        <CommentReplyForm
          parentID={replyParentID}
          postID={data.comment_post_id}
        />
      )}
      {data.replies?.length > 0 && (
        <LevelContextProvider>
          {data.replies.map(function renderComment(data) {
            const replyData = {
              ...data,
              comment_parent_id: data.comment_parent_id,
            };

            return (
              <Comment
                key={replyData.id}
                data={replyData}
                isAuthenticated={isAuthenticated}
              />
            );
          })}
        </LevelContextProvider>
      )}
    </article>
  );
}
