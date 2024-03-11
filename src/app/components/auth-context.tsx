"use client";

import { createContext, useContext } from "react";

const ClientAuthContext = createContext(false);

export function useAuthStatus() {
  return useContext(ClientAuthContext);
}

export function AuthStatusProvider({ children, value }) {
  return (
    <ClientAuthContext.Provider value={value}>
      {children}
    </ClientAuthContext.Provider>
  );
}
