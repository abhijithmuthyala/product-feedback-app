import { suggestions } from "@/supabase/functions";
import { createClient } from "@/supabase/server";

export type Category = "all" | "ui" | "ux" | "enhancement" | "bug" | "feature";
export type Sort =
  | "most_upvotes"
  | "least_upvotes"
  | "most_comments"
  | "least_comments"
  | "latest"
  | "oldest";

export async function getSuggestions(category: Category, sort: Sort) {
  try {
    const supabase = createClient();
    let { data, error } = await supabase.rpc(suggestions, {
      category_param: category,
      sort_param: sort,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
