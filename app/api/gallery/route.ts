import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const galleryItems = await sql`
      SELECT * FROM gallery ORDER BY created_at DESC
    `;
    return NextResponse.json(galleryItems);
  } catch (error: any) {
    console.error("Fetch gallery error:", error);
    return NextResponse.json({ error: "Failed to fetch gallery items" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const uploadDir = join(process.cwd(), "public", "uploads", "gallery");
    const filePath = join(uploadDir, filename);

    // Write the file
    await writeFile(filePath, buffer);

    // Save to database
    const imageUrl = `/uploads/gallery/${filename}`;
    const result = await sql`
      INSERT INTO gallery (title, image_url)
      VALUES (${title || ""}, ${imageUrl})
      RETURNING *
    `;

    return NextResponse.json(result[0]);
  } catch (error: any) {
    console.error("Gallery upload error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
