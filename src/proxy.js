import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  
  const protectedRoutes = ["/addProducts"];

  
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/addProducts/:path*", 
  ],
}
