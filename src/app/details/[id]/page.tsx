import { notFound } from "next/navigation";

import Comments from "@/app/components/comments/comments";
import Suggestion from "@/app/components/suggestions/suggestion";

import { getSuggestion } from "@/api/suggestion";
import BackButton from "@/app/components/buttons/back";
import EditFeedbackLink from "@/app/components/edit-feedback-link";

export default async function DetailsPage({ params }) {
  let suggestionData;
  try {
    suggestionData = await getSuggestion(params.id);
  } catch {
    return notFound();
  }

  return (
    <main className="px-6 pb-16 pt-6">
      <h1 className="sr-only">Comment details</h1>
      <div className="flex items-center justify-between pb-6">
        <BackButton />
        <EditFeedbackLink id={params.id} />
      </div>
      <Suggestion data={suggestionData} />
      <div className="mt-6">
        <Comments postId={params.id} />
      </div>
    </main>
  );
}
