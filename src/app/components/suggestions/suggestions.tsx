import { Category, Sort, getSuggestions } from "@/app/api/suggestions";
import Suggestion from "./suggestion";

type SuggestionsProps = {
  category: Category;
  sort: Sort;
};

export default async function Suggestions({
  category = "all",
  sort = "latest",
}: SuggestionsProps) {
  const suggestions = await getSuggestions(category, sort);

  return (
    <section>
      <h2 className="sr-only">List of feedbacks from users</h2>
      {suggestions.map(function renderSuggestion(suggestion) {
        return <Suggestion key={suggestion.id} data={suggestion} />;
      })}
    </section>
  );
}
