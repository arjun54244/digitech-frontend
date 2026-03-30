import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

// POST /api/blogs/reorder
// Body: { items: Array<{ id: string; sort_order: number }> }
export async function POST(request: Request) {
  try {
    const { items } = await request.json() as { items: { id: string; sort_order: number }[] };

    if (!Array.isArray(items)) {
      return NextResponse.json({ error: "items array required" }, { status: 400 });
    }

    await Promise.all(
      items.map(({ id, sort_order }) =>
        sql`UPDATE blogs SET sort_order = ${sort_order} WHERE id = ${id}`
      )
    );

    return NextResponse.json({ message: "Order updated" });
  } catch (error) {
    console.error("[POST /api/blogs/reorder]", error);
    return NextResponse.json({ error: "Failed to reorder blogs" }, { status: 500 });
  }
}
