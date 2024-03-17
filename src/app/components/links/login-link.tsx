import Link from "next/link";

export default function LoginLink() {
  return (
    <Link
      href="/login"
      className="rounded-md bg-primary px-4 py-2 text-lg font-bold text-neutral-1"
    >
      Login
    </Link>
  );
}
