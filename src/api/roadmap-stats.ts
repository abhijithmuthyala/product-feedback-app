import { roadmapStats } from "@/supabase/functions";
import { createClient } from "@/supabase/server";

export async function getRoadmapStats() {
  const supabase = createClient();
  const { data, error } = await supabase.rpc(roadmapStats);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
