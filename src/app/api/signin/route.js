import { NextResponse } from "next/server";
import Admin from "./adminModel";
import connectDB from "@/libs/connection";
import { signToken } from "./signJWT";
import { cookies } from "next/headers";

export async function POST(req) {
  await connectDB();

  const { username, password } = await req.json();

  // const newAdmin = new Admin({ username });
  // const savedAdmin = await newAdmin.createAndHashPassword(password);

  const findedUser = await Admin.findOne({ username });
  console.log(await findedUser.validatePassword(password));

  const oneDay = 24 * 60 * 60 * 1000;
  const token = await signToken({ username });

  cookies().set("token", token, { expires: Date.now() + oneDay });

  return NextResponse.json({ success: true });
}
