import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { blogSchema } from "@/lib/schemas/blog";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const blogs = await sql`SELECT * FROM blogs WHERE slug = ${slug} LIMIT 1`;
      if (!blogs[0]) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(blogs[0]);
    }

    const blogs = await sql`
      SELECT * FROM blogs ORDER BY sort_order ASC, created_at DESC
    `;
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("[GET /api/blogs]", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = blogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const {
      title,
      slug,
      short_description,
      content,
      image_url,
      image_alt,
      meta_title,
      meta_description,
      meta_keywords,
    } = parsed.data;

    // Get max sort_order
    const [{ max }] = await sql`SELECT COALESCE(MAX(sort_order), -1) AS max FROM blogs`;

    const [blog] = await sql`
      INSERT INTO blogs (
        title, slug, short_description, content,
        image_url, image_alt, meta_title, meta_description,
        meta_keywords, sort_order
      ) VALUES (
        ${title}, ${slug}, ${short_description || null}, ${content || null},
        ${image_url || null}, ${image_alt || null},
        ${meta_title || null}, ${meta_description || null},
        ${meta_keywords}, ${Number(max) + 1}
      )
      RETURNING *
    `;

    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    if (error?.code === "23505") {
      return NextResponse.json({ error: "A blog with this slug already exists" }, { status: 409 });
    }
    console.error("[POST /api/blogs]", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
