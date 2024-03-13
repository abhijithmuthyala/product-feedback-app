import Link from "next/link";

export default function EditFeedbackLink({ id }) {
  return (
    <Link
      href={`/edit/${id}`}
      className="rounded-md bg-secondary px-4 py-2.5 font-bold text-neutral-0"
    >
      Edit Feedback
    </Link>
  );
}
