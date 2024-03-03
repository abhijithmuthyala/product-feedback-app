import { getSuggestion } from "@/api/suggestion";
import EditPostActions from "@/app/components/edit-post/actions";
import EditPostForm from "@/app/components/edit-post/edit-post";
import { getAuthStatus } from "@/supabase/server";
import { notFound } from "next/navigation";

export default async function EditPage({ params }) {
  const isAuthenticated = await getAuthStatus();
  const { owner: isOwner } = await getSuggestion(params.id);

  if (!isAuthenticated || !isOwner) {
    return notFound();
  }

  const actions = <EditPostActions postID={params.id} />;

  return (
    <>
      <main>
        <EditPostForm actions={actions} />
      </main>
    </>
  );
}
