import { categories } from "@/constants";
import CategoryFilter from "./buttons/category-filter";

export default function SuggestionsFilters() {
  return (
    <ul className="flex flex-wrap items-center gap-2 rounded-lg bg-neutral-0 px-6 py-6">
      {categories.map(function renderCategoryFilter(category) {
        return (
          <li key={category}>
            <CategoryFilter category={category} />
          </li>
        );
      })}
    </ul>
  );
}
