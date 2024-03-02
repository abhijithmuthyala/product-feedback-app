import { notFound } from "next/navigation";

import Comments from "@/app/components/comments/comments";
import Suggestion from "@/app/components/suggestions/suggestion";

import { getSuggestion } from "@/api/suggestion";

export default async function DetailsPage({ params }) {
  let suggestionData;
  try {
    suggestionData = await getSuggestion(params.id);
  } catch {
    return notFound();
  }

  return (
    <>
      <main>
        <h1>Post</h1>
        <Suggestion data={suggestionData} />
        <Comments postId={params.id} />
      </main>
    </>
  );
}
