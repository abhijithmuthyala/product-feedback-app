import { updatePost } from "@/actions/edit-post";

export default function UpdataPostButton({ postID }) {
  return <button formAction={updatePost.bind(null, postID)}>Submit</button>;
}
