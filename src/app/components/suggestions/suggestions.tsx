import { Category, Sort, getSuggestions } from "@/api/suggestions";
import RequestToAddFeedback from "./request-feedback";
import Suggestion from "./suggestion";

type SuggestionsProps = {
  category: Category;
  sort: Sort;
};

function wait(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

export default async function Suggestions({
  category = "all",
  sort = "latest",
}: SuggestionsProps) {
  const suggestions = await getSuggestions(category, sort);

  if (suggestions.length === 0) {
    return <RequestToAddFeedback />;
  }

  return (
    <section className="flex flex-col gap-y-4">
      <h2 className="sr-only">List of feedbacks from users</h2>
      {suggestions.map(function renderSuggestion(suggestion) {
        return (
          <Suggestion key={suggestion.id} data={suggestion} asLink={true} />
        );
      })}
    </section>
  );
}
