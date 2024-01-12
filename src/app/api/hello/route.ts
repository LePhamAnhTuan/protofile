
import { fetchWithBearerToken } from "@/lib/action";
import { NextResponse } from "next/server";

export async function GET() {

    const response = await fetchWithBearerToken("hello", {
        method: "GET"
    });
    return NextResponse.json(response);


}