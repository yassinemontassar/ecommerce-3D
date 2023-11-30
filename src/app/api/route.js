import { NextResponse } from 'next/server';
export async function GET(req) {
  console.log("It works !");
  return NextResponse.json("Hello Sawos !", { status: 200 });
}