import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract metadata
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

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and Slug are required" }, { status: 400 });
    }

    let image_url = formData.get("existing_image_url") as string || null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const uploadDir = join(process.cwd(), "public", "uploads", "services");
      const filePath = join(uploadDir, filename);

      await writeFile(filePath, buffer);
      image_url = `/uploads/services/${filename}`;
    }

    const [{ max }] = await sql`SELECT COALESCE(MAX(sort_order), -1) AS max FROM services`;

    const [service] = await sql`
      INSERT INTO services (
        title, slug, short_description, content,
        image_url, image_alt, meta_title, meta_description,
        meta_keywords, sort_order
      ) VALUES (
        ${title}, ${slug}, ${short_description || null}, ${content || null},
        ${image_url}, ${image_alt || null},
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
