"use client";

import { useContext, useState } from "react";

import { postCommentReply } from "@/actions/post-comment";
import { useAuthStatus } from "../auth-context";
import Avatar from "../avatar";
import PostCommentButton from "../buttons/post-comment";
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
  const replyingTo = data.replying_to;

  function toggleReplyForm() {
    if (!isAuthenticated) return;
    setShowReplyForm(!showReplyForm);
  }

  return (
    <article style={{ marginLeft: `${level * 24}px` }}>
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 md:gap-x-8">
        <Avatar firstname={userData.firstname} lastname={userData.lastname} />
        <div className="grid grid-cols-[auto_auto] items-center">
          <UserProfile data={userData} />
          <div className="justify-self-end">
            <ReplyButton onClick={toggleReplyForm} />
          </div>
        </div>
        <p className="col-span-full text-sm text-neutral-6 md:col-start-2 md:text-base">
          {parentUserName && (
            <span className="font-semibold text-primary">@{replyingTo}</span>
          )}{" "}
          {data.comment}
        </p>
      </div>
      {showReplyForm && isAuthenticated && (
        <div className="mt-4">
          <CommentReplyForm
            onSuccess={toggleReplyForm}
            action={postCommentReply.bind(null, replyParentID, data.id, postID)}
            postButton={<PostCommentButton>Post reply</PostCommentButton>}
          />
        </div>
      )}
      {data.replies?.length > 0 && (
        <div className="mt-6 grid gap-y-6 border-l-1 border-neutral-4 md:gap-y-8">
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
      {!isLastComment && <hr className="mt-8 border-neutral-4" />}
    </article>
  );
}
