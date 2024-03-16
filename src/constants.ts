export const categories = ["ui", "ux", "enhancement", "bug", "feature"];
export const categoryFilters = ["all", ...categories];

export const roadmapStates = ["planned", "in-progress", "live"];
export const postStates = ["suggestion", ...roadmapStates];

export const options = [
  "most_upvotes",
  "least_upvotes",
  "most_comments",
  "least_comments",
  "latest",
  "oldest",
];

export const descriptions = {
  live: "Released features",
  "in-progress": "Currently being developed",
  planned: "Ideas prioritized for research",
};
