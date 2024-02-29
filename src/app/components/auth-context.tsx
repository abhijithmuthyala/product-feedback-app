"use client";

import { createClient } from "@/supabase/client";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const supabase = createClient();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(function updateAuth() {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    function handleAuthStateChange(event, session) {
      console.log("event", event);
      console.log("session", session);
    }

    return subscription.unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={supabase}>{children}</AuthContext.Provider>
  );
}
