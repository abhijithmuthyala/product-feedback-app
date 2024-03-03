import { deletePost } from "@/actions/edit-post";

export default function DeletePostButton({ postID }) {
  return (
    <button formAction={deletePost.bind(null, postID)}>Delete Post</button>
  );
}
