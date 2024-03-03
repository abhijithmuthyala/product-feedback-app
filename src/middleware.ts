import { NextResponse, type NextRequest } from "next/server";

import { updateSession } from "./supabase/middleware";

export async function middleware(request: NextRequest) {
  const { response, data, error } = await updateSession(request);

  const isLoginPage = request.nextUrl.pathname === "/login";
  const isHomePage = request.nextUrl.pathname === "/";

  if (!data.user || error) {
    if (isLoginPage || isHomePage) {
      return response;
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/login", "/edit/:id*"],
};
