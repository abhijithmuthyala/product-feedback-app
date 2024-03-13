import { notFound } from "next/navigation";

import Comment from "./comment";
import { LevelContextProvider } from "./level-context";

import { getComments } from "@/api/comments";

export default async function Comments({ postId }) {
  let comments;

  try {
    comments = await getComments(postId);
  } catch (err) {
    console.error(err);
    return notFound();
  }

  const numberOfComments = getNumberOfComments(comments);

  return (
    <section className="rounded-md bg-neutral-0 px-6 py-6">
      <h2 className="text-lg font-bold text-neutral-7">
        {numberOfComments} Comments
      </h2>
      <div className="mt-6 grid gap-y-6">
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
  );
}

function getNumberOfComments(comments) {
  return comments.reduce(function (total, comment) {
    return total + getNumberOfComments(comment.replies ?? []);
  }, comments.length);
}
