import { getAuthStatus } from "@/supabase/server";

import UpvoteButton from "../buttons/upvote-button";
import CategoryTag from "./category-tag";

export default async function Suggestion({ data }) {
  const isAuthenticated = await getAuthStatus();

  return (
    <article>
      <UpvoteButton
        disabled={!isAuthenticated}
        upvotes={data.upvotes_count}
        upvoted={data.upvoted}
        postID={data.id}
      />
      {isAuthenticated && data.upvoted && <strong>(Upvoted)</strong>}
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <CategoryTag category={data.category} />
      </div>
      <SuggestionCommentsNumber numComments={data.comments_count} />
    </article>
  );
}

function SuggestionCommentsNumber({ numComments }) {
  return <p>Comments: {numComments}</p>;
}
