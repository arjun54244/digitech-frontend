import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { sql } from "@/lib/db";

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
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await request.formData();
    
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const short_description = formData.get("short_description") as string;
    const content = formData.get("content") as string;
    const image_alt = formData.get("image_alt") as string;
    const meta_title = formData.get("meta_title") as string;
    const meta_description = formData.get("meta_description") as string;
    const meta_keywords_str = formData.get("meta_keywords") as string;
    const meta_keywords = meta_keywords_str ? meta_keywords_str.split(',') : [];
    
    const file = formData.get("file") as File | null;
    let image_url = formData.get("existing_image_url") as string || null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const uploadDir = join(process.cwd(), "public", "uploads", "blogs");
      const filePath = join(uploadDir, filename);

      await writeFile(filePath, buffer);
      image_url = `/uploads/blogs/${filename}`;
    }

    const rows = await sql`
      UPDATE blogs SET
        title = ${title},
        slug = ${slug},
        short_description = ${short_description || null},
        content = ${content || null},
        image_url = ${image_url},
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
