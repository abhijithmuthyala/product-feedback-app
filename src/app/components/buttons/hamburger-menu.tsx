"use client";

import { useState } from "react";
import { useAuthStatus } from "../auth-context";

const menuIcons = new Map([
  [true, "bg-close"],
  [false, "bg-hamburger"],
]);

const ariaLabel = new Map([
  [true, "Close menu"],
  [false, "Open menu"],
]);

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useAuthStatus();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className={`${menuIcons.get(isOpen)} h-4 w-5 bg-contain bg-center bg-no-repeat transition-all duration-300 md:hidden`}
        aria-label={ariaLabel.get(isOpen)}
        onClick={toggleMenu}
      ></button>
    </>
  );
}
