import { Jost } from "next/font/google";
import "./globals.css";

import { getAuthStatus } from "@/supabase/server";
import { AuthStatusProvider } from "./components/auth-context";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({ children }) {
  const isAuthenticated = await getAuthStatus();

  return (
    <html lang="en">
      <AuthStatusProvider value={isAuthenticated}>
        <body className={`${jost.className} bg-body bg-neutral-3 text-base`}>
          {children}
        </body>
      </AuthStatusProvider>
    </html>
  );
}
