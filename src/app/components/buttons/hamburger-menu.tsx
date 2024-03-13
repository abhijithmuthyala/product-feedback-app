"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext(null);

export function useMenuState() {
  return useContext(MenuContext);
}

export default function MenuProvider({ button, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(function negateOpenState(isOpen) {
      return !isOpen;
    });
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {button}
      {isOpen && content}
    </MenuContext.Provider>
  );
}
