import PostCommentButton from "../buttons/post-comment";
import TextArea from "../text-area";

export default function CommentReplyForm({ onSuccess, action }) {
  async function postReply(formData) {
    await action(formData);
    onSuccess();
  }

  return (
    <form action={postReply} className="grid gap-y-2">
      <TextArea placeholder="Type your comment here" />
      <PostCommentButton>Post comment</PostCommentButton>
    </form>
  );
}
