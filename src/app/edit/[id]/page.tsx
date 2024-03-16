import { getSuggestion } from "@/api/suggestion";
import BackButton from "@/app/components/buttons/back";
import EditPostForm from "@/app/components/edit-post/edit-post";
import { getAuthStatus } from "@/supabase/server";
import { notFound } from "next/navigation";

export default async function EditPage({ params }) {
  const isAuthenticated = await getAuthStatus();
  const postData = await getSuggestion(params.id);

  if (!isAuthenticated || !postData.owner) {
    return notFound();
  }

  return (
    <>
      <main className="mx-auto max-w-edit-form px-6 pb-20 pt-8 md:pb-30 md:pt-14 lg:pb-32 lg:pt-24">
        <h1 className="sr-only">Update or delete feedback</h1>
        <div>
          <BackButton className="text-neutral-6" />
        </div>
        <div className="relative mt-14 rounded-lg bg-neutral-0 px-6 pb-6 pt-11">
          <div className="absolute left-6 top-0 aspect-square w-8 -translate-y-1/2 bg-edit bg-contain bg-center bg-no-repeat"></div>
          <section>
            <h2 className="sr-only">
              Editing <span>{postData.title}</span>
            </h2>
            <EditPostForm postData={postData} />
          </section>
        </div>
      </main>
    </>
  );
}
