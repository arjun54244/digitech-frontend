import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const projects = await sql`
      SELECT * FROM projects ORDER BY created_at DESC
    `;
    return NextResponse.json(projects);
  } catch (error: any) {
    console.error("Fetch projects error:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, image_url, project_url, category, tech_stack } = await req.json();

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const res = await sql`
      INSERT INTO projects (title, description, image_url, project_url, category, tech_stack)
      VALUES (${title}, ${description}, ${image_url}, ${project_url}, ${category}, ${tech_stack})
      RETURNING *
    `;

    return NextResponse.json(res[0]);
  } catch (error: any) {
    console.error("Create project error:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
