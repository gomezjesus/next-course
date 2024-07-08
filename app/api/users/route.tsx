import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Jesus" },
    { id: 2, name: "Gerardo" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json(body);
}
