import { NextResponse, type NextRequest } from "next/server";

import { updateSession } from "./supabase/middleware";

export async function middleware(request: NextRequest) {
  const { response, data, error } = await updateSession(request);

  if (!data.user || error) {
    if (
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/"
    ) {
      return response;
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/login", "/edit/:id*"],
};
