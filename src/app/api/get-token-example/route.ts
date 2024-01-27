import { getToken } from "@/lib/action"
import { NextResponse } from "next/server"

export async function GET() {
    const response = await getToken();
    return NextResponse.json(response);

}