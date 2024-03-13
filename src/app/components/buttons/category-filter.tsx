"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMenuState } from "./hamburger-menu";

const bgStyle = new Map([
  [true, "bg-secondary text-neutral-0"],
  [false, "bg-neutral-1 text-secondary"],
]);

export default function CategoryFilter({ category }) {
  const params = useSearchParams();
  const router = useRouter();
  const menuState = useMenuState();

  const selectedCategory = params.get("category") || "all";
  const isSelected = selectedCategory === category;
  const formattedCategory = category.replace(
    category[0],
    category[0].toUpperCase(),
  );

  async function updateCategory() {
    // menuState doesn't exist for viewport widths >= 768px
    menuState?.toggleMenu();
    router.replace(`/?category=${category}`);
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
