import Header from "./components/header";
import NewSuggestionLink from "./components/new-suggestion-link";
import RoadmapSummary from "./components/roadmap-summary";
import SortOptions from "./components/sort-options";
import SuggestionsFilters from "./components/suggestions-filters";
import Suggestions from "./components/suggestions/suggestions";

export default function Home({ searchParams }) {
  const { category, sort } = searchParams;

  return (
    <main className="max-w-content mx-auto grid lg:grid-cols-[16rem_1fr] lg:gap-x-8 lg:px-body-offset">
      <div className="grid gap-2.5 md:grid-cols-3 md:px-body-offset md:pb-10 md:pt-14 lg:col-start-1 lg:auto-rows-max lg:grid-cols-1 lg:px-0 lg:pt-24">
        <Header />
        <SuggestionsFilters />
        <RoadmapSummary />
      </div>
      <div className="lg:col-start-2 lg:pt-24">
        <div className="bg-neutral-8 px-body-offset md:bg-inherit lg:px-0">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-md py-2 text-sm text-neutral-1 md:bg-neutral-8 md:px-6 md:py-3.5">
            <SortOptions />
            <NewSuggestionLink />
          </div>
        </div>
        <div className="px-body-offset py-8 md:py-6 lg:px-0">
          <Suggestions category={category} sort={sort} />
        </div>
      </div>
    </main>
  );
}
