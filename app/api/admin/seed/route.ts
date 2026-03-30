import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";

// POST /api/admin/seed — creates the first admin user
// Only works if no admin users exist (safe to call once)
export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const existing = await sql`SELECT id FROM admin_users LIMIT 1`;
    if (existing.length > 0) {
      return NextResponse.json({ error: "Admin already exists. Use login." }, { status: 409 });
    }

    const password_hash = await bcrypt.hash(password, 12);
    const [user] = await sql`
      INSERT INTO admin_users (email, password_hash, name)
      VALUES (${email}, ${password_hash}, ${name ?? "Admin"})
      RETURNING id, email, name, created_at
    `;

    return NextResponse.json({ message: "Admin created", user }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/admin/seed]", error);
    return NextResponse.json({ error: "Failed to seed admin" }, { status: 500 });
  }
}
