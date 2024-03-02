import { notFound } from "next/navigation";

import Comment from "./comment";
import { LevelContextProvider } from "./level-context";

import { getComments } from "@/api/comments";
import { getAuthStatus } from "@/supabase/server";
import CommentReplyForm from "../forms/comment-reply";

export default async function Comments({ postId }) {
  const isAuthenticated = await getAuthStatus();
  let comments;

  try {
    comments = await getComments(postId);
  } catch (err) {
    return notFound();
  }

  return (
    <section>
      <h2 className="sr-only">List of comments from users</h2>
      <LevelContextProvider>
        {comments.map(function renderComment(data) {
          return (
            <Comment
              key={data.id}
              data={data}
              isAuthenticated={isAuthenticated}
            />
          );
        })}
      </LevelContextProvider>
      <CommentReplyForm postID={postId} parentID={null} />
    </section>
  );
}
