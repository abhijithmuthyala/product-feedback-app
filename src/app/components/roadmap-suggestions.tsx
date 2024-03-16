import { getPostsByRoadmapStatus } from "@/api/suggestions";
import { descriptions } from "@/constants";
import Suggestion from "./suggestions/suggestion";

export default async function RoadmapSuggestionsSection({ status }) {
  const suggestions = await getPostsByRoadmapStatus(status);

  return (
    <section className="">
      <h2 className="text-lg font-bold text-neutral-7">
        {descriptions[status]}
      </h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
        {suggestions.map(function renderSuggestion(data) {
          return (
            <li key={data.id} className="grid">
              <Suggestion data={data} asLink />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
