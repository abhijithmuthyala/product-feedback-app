import { getSuggestion } from "@/api/suggestion";
import EditPostActions from "@/app/components/edit-post/actions";
import EditPostForm from "@/app/components/edit-post/edit-post";
import { getAuthStatus } from "@/supabase/server";
import { notFound } from "next/navigation";

export default async function EditPage({ params }) {
  const isAuthenticated = await getAuthStatus();
  const postData = await getSuggestion(params.id);

  if (!isAuthenticated || !postData.owner) {
    return notFound();
  }

  const actions = <EditPostActions postID={params.id} />;

  return (
    <>
      <main>
        <EditPostForm actions={actions} postData={postData} />
      </main>
    </>
  );
}
