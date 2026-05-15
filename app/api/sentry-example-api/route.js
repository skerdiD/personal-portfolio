import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  throw new Error("Portfolio monitoring diagnostic API error");
  return NextResponse.json({ data: "Monitoring diagnostic dispatched." });
}
