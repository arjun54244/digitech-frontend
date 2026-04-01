import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const items = await sql`
      SELECT * FROM testimonials ORDER BY created_at DESC
    `;
    return NextResponse.json(items);
  } catch (error: any) {
    console.error("Fetch testimonials error:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    if (!name || !message) {
      return NextResponse.json({ error: "Name and Message are required" }, { status: 400 });
    }

    let avatarUrl = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const uploadDir = join(process.cwd(), "public", "uploads", "testimonials");
      const filePath = join(uploadDir, filename);

      await writeFile(filePath, buffer);
      avatarUrl = `/uploads/testimonials/${filename}`;
    }

    const result = await sql`
      INSERT INTO testimonials (name, message, avatar_url)
      VALUES (${name}, ${message}, ${avatarUrl})
      RETURNING *
    `;

    return NextResponse.json(result[0]);
  } catch (error: any) {
    console.error("Testimonial creation error:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
