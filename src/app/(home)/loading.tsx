import SuggestionsSkeleton from "../components/skeletons/suggestions";

export default function Loading() {
  const numberOfSkeletons = 5;

  return (
    <div className="flex flex-col gap-y-4">
      {Array.from({ length: numberOfSkeletons }).map(
        function renderSkeleton(_, i) {
          return <SuggestionsSkeleton key={i} />;
        },
      )}
    </div>
  );
}
