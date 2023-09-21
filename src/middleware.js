import { NextResponse } from "next/server";

export async function middleware(request) {
  const { value: token } = request.cookies.get("token");

  console.log(request.url);

  try {
    // const isAuthenticated = await verifyToken(token);
    await isAuthenticated(token);
    if (request.nextUrl.pathname != "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } catch (error) {
    console.log(error);

    if (request.nextUrl.pathname != "/dashboard/signin") {
      return NextResponse.redirect(new URL("/dashboard/signin", request.url));
    }
  }
}

async function isAuthenticated(token, origin) {
  const res = await fetch(`/api/isauthenticated?token=${token}`, {
    cache: "no-store",
  });

  const { authenticated } = await res.json();
  console.log(authenticated);
  if (authenticated) {
    return true;
  }
  throw new Error("User is not authenticated");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
