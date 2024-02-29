import { getAuthStatus } from "@/supabase/server";

import UpvoteButton from "../buttons/upvote-button";
import CategoryTag from "./category-tag";

export default async function Suggestion({ data }) {
  const isAuthenticated = await getAuthStatus();

  return (
    <article>
      <UpvoteButton disabled={!isAuthenticated} upvotes={data.upvotes_count} />
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <CategoryTag category={data.category} />
      </div>
      <SuggestionCommentsNumber />
    </article>
  );
}

function SuggestionUpvoteButton() {
  return <></>;
}

function SuggestionCommentsNumber() {
  return <></>;
}
