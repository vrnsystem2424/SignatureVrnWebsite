import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ye exact pages khulenge
  const allowedPaths = ["/", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

  // In projects ke saare pages khulenge (project page + thankyou page)
  const allowedProjects = ["/paradise", "/signatureheritage", "/ultimateheight"];

  const isProjectPage = allowedProjects.some(
    (project) => pathname === project || pathname.startsWith(`${project}/`)
  );

  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api");

  if (allowedPaths.includes(pathname) || isProjectPage || isAsset) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};