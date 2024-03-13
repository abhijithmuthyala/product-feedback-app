"use client";

import { useMenuState } from "./hamburger-menu";

const menuIcons = new Map([
  [true, "bg-close"],
  [false, "bg-hamburger"],
]);

const ariaLabel = new Map([
  [true, "Close menu"],
  [false, "Open menu"],
]);

export default function MenuButton({ className }) {
  const { isOpen, toggleMenu } = useMenuState();

  return (
    <button
      className={`${menuIcons.get(isOpen)} h-4 w-5 bg-contain bg-center bg-no-repeat transition-all duration-300 ${className}`}
      aria-label={ariaLabel.get(isOpen)}
      onClick={toggleMenu}
    ></button>
  );
}
