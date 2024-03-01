"use client";

import { createContext, useContext } from "react";

export const LevelContext = createContext(-1);

export function LevelContextProvider({ children }) {
  const level = useContext(LevelContext);

  return (
    <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
  );
}
