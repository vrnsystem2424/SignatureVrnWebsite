// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const allowedPaths = ["/", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

//   const isAsset =
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/images") ||
//     pathname.startsWith("/api");

//   if (allowedPaths.includes(pathname) || isAsset) {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: ["/((?!.*\\.).*)"],
// };



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. यहाँ अपने सभी पेजेस के रास्ते ALLOW करें:
  const allowedPaths = [
    "/",
    "/paradise",
    "/signatureheritage",
    "/ultimateheight",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
  ];

  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api");

  // Trailing slash (आख़िरी का /) हटाकर चेक करें
  const cleanPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (allowedPaths.includes(cleanPath) || isAsset) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};