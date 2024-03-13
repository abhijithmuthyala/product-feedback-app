"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  "most_upvotes",
  "least_upvotes",
  "most_comments",
  "least_comments",
  "latest",
  "oldest",
];

export default function SortOptions() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  function handleSortChange(e) {
    const sort = e.target.value;
    const searchParams = new URLSearchParams([...params.entries()]);
    searchParams.set("sort", sort);

    router.replace(`${pathname}?${searchParams}`);
  }

  return (
    <div className="">
      <span>Sort by : </span>
      <select
        name="sort"
        id="sort"
        className="bg-inherit font-semibold"
        defaultValue={options[0]}
        onChange={handleSortChange}
      >
        {options.map(function renderOption(option) {
          return (
            <option
              value={option}
              key={option}
              className="bg-neutral-6 text-inherit"
            >
              {option
                .trim()
                .split("_")
                .map((s) => s[0].toUpperCase() + s.slice(1))
                .join(" ")}
            </option>
          );
        })}
      </select>
    </div>
  );
}
