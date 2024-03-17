import { notFound } from "next/navigation";

import Comments from "@/app/components/comments/comments";
import Suggestion from "@/app/components/suggestions/suggestion";

import { getSuggestion } from "@/api/suggestion";
import BackButton from "@/app/components/buttons/back";
import EditFeedbackLink from "@/app/components/edit-feedback-link";
import LoginLink from "@/app/components/login-link";
import { getAuthStatus } from "@/supabase/server";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Feedback | Details",
  description: "Discussion on the feedback provided",
};

export default async function DetailsPage({ params }) {
  let suggestionData;
  try {
    suggestionData = await getSuggestion(params.id);
  } catch {
    return notFound();
  }

  const isAuthenticated = await getAuthStatus();

  return (
    <main className="mx-auto max-w-[730px] px-6 pb-16 pt-6 md:pt-14 lg:px-0 lg:pt-20">
      <h1 className="sr-only">Comment details</h1>
      <div className="flex items-center justify-between pb-6 text-sm md:px-0.5">
        <BackButton className="text-neutral-6" />
        {isAuthenticated ? (
          suggestionData.owner && <EditFeedbackLink id={params.id} />
        ) : (
          <LoginLink />
        )}
      </div>
      <Suggestion data={suggestionData} />
      <div className="mt-6">
        <Comments postId={params.id} />
      </div>
    </main>
  );
}
