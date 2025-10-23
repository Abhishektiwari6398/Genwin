import { NextResponse } from "next/server";

export function middleware(req) {
  // Get token from cookies (preferred) or headers/localStorage
  const token = req.cookies.get("token") || req.headers.get("authorization");

  // Check if the token exists; if not, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Optionally verify the token (requires a JWT verification library)
    // Example: jwt.verify(token, process.env.JWT_SECRET);

    return NextResponse.next(); // Allow access
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Define which paths middleware should protect
export const config = {
  matcher: ["/admin/:path*"], // Protect all routes under `/admin`
};
