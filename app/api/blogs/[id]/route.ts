import { NextResponse } from "next/server";
import { blogsData } from "@/lib/data/blogs";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    const blog = blogsData.find((b) => b.id === resolvedParams.id);

    if (!blog) {
        return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
}
