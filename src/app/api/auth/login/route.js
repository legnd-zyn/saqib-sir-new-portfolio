import { NextResponse } from "next/server";

async function POST(req) {
  return NextResponse.json(
    { status: 200, messange: "HellowWorld" },
    { status: 200 }
  );
}

export { POST };
