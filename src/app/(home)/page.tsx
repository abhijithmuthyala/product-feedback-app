import type { Metadata } from "next";
import { Suspense } from "react";
import SuggestionsSkeleton from "../components/skeletons/suggestions";
import Suggestions from "../components/suggestions/suggestions";

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "Let your users provide valuable feedback on your app.",
};

export default async function Home({ searchParams }) {
  const { category, sort } = searchParams;

  return (
    <div>
      {/* Doesn't work without a key. Even with a key, it's not working on initial load */}
      <Suspense fallback={<SuggestionsSkeleton />} key={category + sort}>
        <Suggestions category={category} sort={sort} />
      </Suspense>
    </div>
  );
}
