"use client";

import { useContext, useState } from "react";

import { postCommentReply } from "@/actions/post-comment";
import { useAuthStatus } from "../auth-context";
import ReplyButton from "../buttons/reply";
import CommentReplyForm from "../forms/comment-reply";
import UserProfile from "../user-profile";
import { LevelContext, LevelContextProvider } from "./level-context";

export default function Comment({
  data,
  isLastComment,
  parentUserName = null,
}) {
  const level = useContext(LevelContext);
  const isAuthenticated = useAuthStatus();
  const [showReplyForm, setShowReplyForm] = useState(false);

  const replyParentID = level === 0 ? data.id : data.comment_parent_id;
  const postID = data.comment_post_id;
  const userData = data.user_data;
  const numReplies = data.replies?.length ?? 0;

  function toggleReplyForm() {
    if (!isAuthenticated) return;
    setShowReplyForm(!showReplyForm);
  }

  return (
    <article style={{ marginLeft: `${level * 24}px` }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <UserProfile data={userData} />
        <ReplyButton onClick={toggleReplyForm} />
      </div>
      <p className="mt-4 text-sm text-neutral-6">
        {parentUserName && (
          <span className="font-semibold text-primary">@{parentUserName}</span>
        )}{" "}
        {data.comment}
      </p>
      {showReplyForm && isAuthenticated && (
        <div className="mt-4">
          <CommentReplyForm
            onSuccess={toggleReplyForm}
            action={postCommentReply.bind(null, replyParentID, postID)}
          />
        </div>
      )}
      {data.replies?.length > 0 && (
        <div className="mt-6 grid gap-y-6 border-l-1 border-neutral-4">
          <LevelContextProvider>
            {data.replies.map(function renderComment(data, index) {
              const replyData = {
                ...data,
                comment_parent_id: data.comment_parent_id,
              };

              return (
                <Comment
                  key={replyData.id}
                  data={replyData}
                  isLastComment={index === numReplies - 1}
                  parentUserName={userData.username}
                />
              );
            })}
          </LevelContextProvider>
        </div>
      )}
      {!isLastComment && <hr className="mt-6 border-neutral-4" />}
    </article>
  );
}
