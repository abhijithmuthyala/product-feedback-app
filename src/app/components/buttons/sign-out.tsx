"use client";

import { usePathname, useRouter } from "next/navigation";

import { createClient } from "@/supabase/client";
import { useFormStatus } from "react-dom";

export default function SignOutButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { pending } = useFormStatus();

  async function handleSignout() {
    const supabase = createClient();
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error(error.message);
      }

      // push only if in a different route other than /
      // refresh takes care of the / route
      if (pathname !== "/") {
        router.push("/");
      }
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      formAction={handleSignout}
      className="rounded-md bg-delete px-4 py-2.5 text-sm font-bold text-neutral-1"
    >
      {pending ? "Signing out..." : "Signout"}
    </button>
  );
}
