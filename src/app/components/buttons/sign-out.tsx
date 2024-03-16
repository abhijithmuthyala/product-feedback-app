"use client";

import { usePathname, useRouter } from "next/navigation";

import { createClient } from "@/supabase/client";

export default function SignOutButton() {
  const router = useRouter();
  const pathname = usePathname();

  async function handleSignout() {
    const supabase = createClient();
    const data = await supabase.auth.signOut();

    // push only if in a different route other than /
    // refresh takes care of the / route
    if (pathname !== "/") {
      return router.push("/");
    }
    // TODO: Figure out alternate approach. revalidatePath()?
    router.refresh();
  }

  return (
    <button
      onClick={handleSignout}
      className="rounded-md bg-delete px-4 py-2.5 text-sm font-bold text-neutral-1"
    >
      Signout
    </button>
  );
}
