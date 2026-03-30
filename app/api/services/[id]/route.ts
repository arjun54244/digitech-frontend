import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { serviceSchema } from "@/lib/schemas/service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rows = await sql`SELECT * FROM services WHERE id = ${id} LIMIT 1`;
    if (!rows[0]) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("[GET /api/services/:id]", error);
    return NextResponse.json({ error: "Failed to fetch service" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = serviceSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const {
      title, slug, short_description, content,
      image_url, image_alt, meta_title, meta_description, meta_keywords,
    } = parsed.data;

    const rows = await sql`
      UPDATE services SET
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
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error: any) {
    if (error?.code === "23505") {
      return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
    }
    console.error("[PUT /api/services/:id]", error);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rows = await sql`DELETE FROM services WHERE id = ${id} RETURNING id`;
    if (!rows[0]) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Service deleted" });
  } catch (error) {
    console.error("[DELETE /api/services/:id]", error);
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
  }
}
