"use client";

import { options } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortOptions() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  let selectedOption = params.get("sort");
  if (!options.includes(selectedOption)) {
    selectedOption = "latest";
  }

  function handleSortChange(e) {
    const sort = e.target.value;
    const searchParams = new URLSearchParams([...params.entries()]);
    searchParams.set("sort", sort);

    router.replace(`${pathname}?${searchParams}`);
  }

  return (
    <div className="">
      <span>Sort by : </span>
      <label htmlFor="sort" className="sr-only">
        Filter by
      </label>
      <select
        name="sort"
        id="sort"
        className="bg-inherit font-semibold"
        defaultValue={selectedOption}
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
