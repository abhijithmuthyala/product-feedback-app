import Link from "next/link";

export default function NewSuggestionLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-neutral-1"
    >
      <span className="aspect-square w-3 bg-plus bg-contain bg-no-repeat"></span>
      <span>Add Feedback</span>
    </Link>
  );
}
