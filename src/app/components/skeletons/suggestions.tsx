export default function SuggestionsSkeleton({ numberOfSkeletons = 5 }) {
  return (
    <div className="flex flex-col gap-y-4">
      {Array.from({ length: numberOfSkeletons }).map(
        function renderSkeleton(_, i) {
          return <SuggestionSkeleton key={i} />;
        },
      )}
    </div>
  );
}

/*
TODO: 

This seems to be a maintenance nightmare. The layout and styles 
are coupled one to one with the actual component. Just use a 
random skeleton that looks close-enough instead? Or the good-old
spinner should work just as fine 🤷
*/

function SuggestionSkeleton({}) {
  return (
    <article className="grid min-h-30 grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-y-4 rounded-lg bg-neutral-0 px-6 py-6 text-sm sm:grid-rows-1 sm:gap-x-10 md:px-8 md:py-7">
      <div className="flex flex-col items-start gap-4 max-sm:col-span-full sm:col-start-2 sm:row-start-1">
        <header className="flex w-full flex-col gap-2">
          <h2 className="suggestion-skeleton h-4 w-1/2 animate-pulse rounded-lg bg-neutral-2 font-bold text-neutral-7 sm:text-lg"></h2>
          <p className="suggestion-skeleton h-3 w-3/4 animate-pulse rounded-lg bg-neutral-1 text-neutral-6 sm:text-base"></p>
          <p className="suggestion-skeleton h-3 w-2/5 animate-pulse rounded-lg bg-neutral-1 text-neutral-6 sm:text-base"></p>
        </header>
        <div className="h-8 w-24 animate-pulse rounded-lg bg-neutral-2 sm:row-start-1"></div>
      </div>
      <div className="h-8 w-6 animate-pulse rounded-lg bg-neutral-2 sm:row-start-1"></div>
      <div className="suggestion-skeleton col-start-3 h-6 w-6 animate-pulse self-center rounded-lg bg-neutral-2 sm:row-start-1"></div>
    </article>
  );
}
