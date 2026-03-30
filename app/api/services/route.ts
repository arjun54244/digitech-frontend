import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { serviceSchema } from "@/lib/schemas/service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const services = await sql`SELECT * FROM services WHERE slug = ${slug} LIMIT 1`;
      if (!services[0]) {
        return NextResponse.json({ error: "Service not found" }, { status: 404 });
      }
      return NextResponse.json(services[0]);
    }

    const services = await sql`
      SELECT * FROM services ORDER BY sort_order ASC, created_at DESC
    `;
    return NextResponse.json(services);
  } catch (error) {
    console.error("[GET /api/services]", error);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const parsed = serviceSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const {
      title, slug, short_description, content,
      image_url, image_alt, meta_title, meta_description, meta_keywords,
    } = parsed.data;

    const [{ max }] = await sql`SELECT COALESCE(MAX(sort_order), -1) AS max FROM services`;

    const [service] = await sql`
      INSERT INTO services (
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

    return NextResponse.json(service, { status: 201 });
  } catch (error: any) {
    if (error?.code === "23505") {
      return NextResponse.json({ error: "A service with this slug already exists" }, { status: 409 });
    }
    console.error("[POST /api/services]", error);
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}
