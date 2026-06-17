import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const allowedPaths = ["/", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api");

  if (allowedPaths.includes(pathname) || isAsset) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
