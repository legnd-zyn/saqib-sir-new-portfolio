import { cookies } from "next/headers";
import { verifyToken } from "../signin/signJWT";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token =
    request.nextUrl.searchParams.get("token") ||
    request?.cookies?.get("token")?.value ||
    "";

  try {
    await verifyToken(token);
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
