import { getRoadmapStats } from "@/api/roadmap-stats";
import { roadmapStates } from "@/constants";
import { getAuthStatus } from "@/supabase/server";
import BackButton from "../components/buttons/back";
import AddNewPostButton from "../components/buttons/new-post";
import LoginLink from "../components/links/login-link";
import RoadmapStatusTabs from "../components/roadmap/roadmap-status-tabs";
import RoadmapSuggestionsSection from "../components/roadmap/roadmap-suggestions";

import type { Metadata } from "next";
import { Suspense } from "react";
import SuggestionsSkeleton from "../components/skeletons/suggestions";

export const metadata: Metadata = {
  title: "Product feedback | Roadmap",
  description:
    "Roadmap representing the status of feedbacks received from users.",
};

export default async function RoadmapPage({ searchParams }) {
  const stats = await getRoadmapStats();
  const isAuthenticated = await getAuthStatus();

  let { status } = searchParams;
  if (!status || !roadmapStates.includes(status)) {
    status = "live";
  }

  delete stats.suggestions;

  return (
    <main className="mx-auto max-w-[1110px] md:px-10 md:pb-24 md:pt-14">
      <header className="flex flex-wrap items-center justify-between bg-neutral-8 px-6 py-6.5 md:rounded-lg">
        <div className="flex flex-col gap-y-0.5">
          <BackButton className="text-neutral-0" />
          <h1 className="text-lg font-bold text-neutral-0">Roadmap</h1>
        </div>
        {isAuthenticated ? <AddNewPostButton /> : <LoginLink />}
      </header>
      <RoadmapStatusTabs stats={stats} activeStatus={status} />
      <div className="px-6 py-6 md:px-0">
        <Suspense fallback={<SuggestionsSkeleton />} key={status}>
          <RoadmapSuggestionsSection status={status} />
        </Suspense>
      </div>
    </main>
  );
}
