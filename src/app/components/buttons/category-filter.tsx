"use client";

import { useSearchParams } from "next/navigation";

const bgStyle = new Map([
  [true, "bg-secondary text-neutral-0"],
  [false, "bg-neutral-1 text-secondary"],
]);

export default function CategoryFilter({ category }) {
  const params = useSearchParams();
  const selectedCategory = params.get("category") || "all";
  const isSelected = selectedCategory === category;

  const formattedCategory = category.replace(
    category[0],
    category[0].toUpperCase(),
  );

  return (
    <button
      className={`${bgStyle.get(isSelected)} rounded-md px-4 py-1.5 font-semibold`}
    >
      {formattedCategory}
    </button>
  );
}
