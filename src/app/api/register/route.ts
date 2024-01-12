
import { fetchWithBearerToken } from "@/lib/action";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    const response = await fetchWithBearerToken("auth/register", { method: "POST" }, data)
    return NextResponse.json(response);
}