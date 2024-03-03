import CancelEditButton from "../buttons/cancel-edit";
import DeletePostButton from "../buttons/delete-post";
import UpdataPostButton from "../buttons/submit-edit";

export default function EditPostActions({ postID }) {
  return (
    <div>
      <DeletePostButton postID={postID} />
      <div>
        <CancelEditButton />
        <UpdataPostButton postID={postID} />
      </div>
    </div>
  );
}
