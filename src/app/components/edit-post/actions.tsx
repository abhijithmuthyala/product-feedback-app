import CancelEditPost from "../buttons/cancel-edit";
import DeletePostButton from "../buttons/delete-post";

export default function EditPostActions({ postID }) {
  return (
    <div>
      <DeletePostButton postID={postID} />
      <div>
        <CancelEditPost />
      </div>
    </div>
  );
}
