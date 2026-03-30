import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { blogSchema } from "@/lib/schemas/blog";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rows = await sql`SELECT * FROM blogs WHERE id = ${id} LIMIT 1`;
    if (!rows[0]) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("[GET /api/blogs/:id]", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = blogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const {
      title, slug, short_description, content,
      image_url, image_alt, meta_title, meta_description, meta_keywords,
    } = parsed.data;

    const rows = await sql`
      UPDATE blogs SET
        title = ${title},
        slug = ${slug},
        short_description = ${short_description || null},
        content = ${content || null},
        image_url = ${image_url || null},
        image_alt = ${image_alt || null},
        meta_title = ${meta_title || null},
        meta_description = ${meta_description || null},
        meta_keywords = ${meta_keywords}
      WHERE id = ${id}
      RETURNING *
    `;

    if (!rows[0]) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error: any) {
    if (error?.code === "23505") {
      return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
    }
    console.error("[PUT /api/blogs/:id]", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rows = await sql`DELETE FROM blogs WHERE id = ${id} RETURNING id`;
    if (!rows[0]) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Blog deleted" });
  } catch (error) {
    console.error("[DELETE /api/blogs/:id]", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
