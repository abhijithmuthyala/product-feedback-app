import CancelEditButton from "../buttons/cancel-edit";
import DeletePostButton from "../buttons/delete-post";
import UpdatePostButton from "../buttons/submit-edit";

export default function EditPostActions({ postID }) {
  return (
    <div className="mx-auto flex flex-col-reverse gap-4 max-sm:max-w-80 sm:flex-row sm:items-center">
      <DeletePostButton postID={postID} />
      <CancelEditButton className="sm:ml-auto" />
      <UpdatePostButton postID={postID} />
    </div>
  );
}
