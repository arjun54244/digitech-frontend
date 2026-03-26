import { NextResponse } from "next/server";
import { blogsData } from "@/lib/data/blogs";

export async function GET() {
    // Simulate network delay for anti-gravity loading effect testing
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(blogsData);
}
