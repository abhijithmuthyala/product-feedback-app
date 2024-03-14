import { notFound } from "next/navigation";

import Comment from "./comment";
import { LevelContextProvider } from "./level-context";

import { getComments } from "@/api/comments";
import { getAuthStatus } from "@/supabase/server";
import NewCommentForm from "../new-comment";

export default async function Comments({ postId }) {
  let comments;

  try {
    comments = await getComments(postId);
  } catch (err) {
    console.error(err);
    return notFound();
  }

  const isAuthenticated = await getAuthStatus();
  const numberOfComments = getNumberOfComments(comments);

  return (
    <>
      <section className="rounded-md bg-neutral-0 px-6 py-6 md:px-8 md:pb-8">
        <h2 className="text-lg font-bold text-neutral-7">
          {numberOfComments} Comments
        </h2>
        <div className="mt-6 grid gap-y-6 md:mt-7">
          <LevelContextProvider>
            {comments.map(function renderComment(data, index) {
              return (
                <Comment
                  key={data.id}
                  data={data}
                  isLastComment={index === comments.length - 1}
                />
              );
            })}
          </LevelContextProvider>
        </div>
      </section>
      {isAuthenticated && (
        <div className="mt-6 rounded-md bg-neutral-0 p-6 md:p-8">
          <h2 className="mb-6 text-lg font-bold text-neutral-7">Add Comment</h2>
          <NewCommentForm postID={postId} />
        </div>
      )}
    </>
  );
}

function getNumberOfComments(comments) {
  return comments.reduce(function (total, comment) {
    return total + getNumberOfComments(comment.replies ?? []);
  }, comments.length);
}
