const options = [
  "most_upvotes",
  "least_upvotes",
  "most_comments",
  "least_comments",
  "latest",
  "oldest",
];

export default function SortOptions() {
  return (
    <div className="">
      <span>Sort by : </span>
      <select
        name="sort"
        id="sort"
        className="bg-inherit font-semibold"
        defaultValue={options[0]}
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
