import NewSuggestionLink from "./components/new-suggestion-link";
import SortOptions from "./components/sort-options";
import Suggestions from "./components/suggestions/suggestions";

export default function Home({ searchParams }) {
  const { category, sort } = searchParams;

  return (
    <>
      <main className="">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-neutral-8 px-body-offset py-2 text-sm text-neutral-1">
          <SortOptions />
          <NewSuggestionLink />
        </div>
        <div className="px-body-offset py-8">
          <Suggestions category={category} sort={sort} />
        </div>
      </main>
    </>
  );
}
