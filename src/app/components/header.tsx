import Link from "next/link";

import { getAuthStatus } from "@/supabase/server";

import SignOutButton from "./buttons/sign-out";

export default async function Header() {
  const isAuthenticated = await getAuthStatus();

  if (isAuthenticated) {
    return <SignOutButton />;
  }
  return (
    <>
      <Link href="/login">Login</Link>
    </>
  );
}
