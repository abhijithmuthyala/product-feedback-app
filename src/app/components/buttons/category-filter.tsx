"use client";

import { categoryFilters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMenuState } from "./hamburger-menu";

const bgStyle = new Map([
  [true, "bg-secondary text-neutral-0"],
  [false, "bg-neutral-1 text-secondary"],
]);

const actionStyle = new Map([
  [true, "animate-glow"],
  [false, ""],
]);

export default function CategoryFilter({ category }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const menuState = useMenuState();

  let selectedCategory = params.get("category");
  if (!categoryFilters.includes(selectedCategory)) {
    selectedCategory = "all";
  }
  const isSelected = selectedCategory === category;
  const formattedCategory = category.replace(
    category[0],
    category[0].toUpperCase(),
  );

  async function updateCategory() {
    // menuState doesn't exist for viewport widths >= 768px
    const searchParams = new URLSearchParams(window.location.search);

    menuState?.toggleMenu();
    searchParams.set("category", category);
    router.replace(`${pathname}?${searchParams}`);
  }

  return (
    <button
      className={`${bgStyle.get(isSelected)} rounded-md px-4 py-1.5 font-semibold`}
      onClick={updateCategory}
    >
      {formattedCategory}
    </button>
  );
}
