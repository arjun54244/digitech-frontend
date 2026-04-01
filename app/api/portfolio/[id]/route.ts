import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    
    if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    await sql`
      DELETE FROM portfolios WHERE id = ${id}
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete portfolio error:", error);
    return NextResponse.json({ error: "Failed to delete portfolio" }, { status: 500 });
  }
}
