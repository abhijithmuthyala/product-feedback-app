import { Category, Sort, getSuggestions } from "@/app/api/suggestions";

type SuggestionsProps = {
  category: Category;
  sort: Sort;
};

export default async function Suggestions({
  category = "all",
  sort = "latest",
}: SuggestionsProps) {
  const suggestions = await getSuggestions(category, sort);
  console.log("🔥", suggestions);
  return <></>;
}
