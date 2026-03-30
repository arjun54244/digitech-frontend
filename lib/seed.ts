import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

async function seedAdmin() {
    const DATABASE_URL = process.env.DATABASE_URL;
    const email = process.env.ADMIN_SEED_EMAIL;
    const password = process.env.ADMIN_SEED_PASSWORD;

    if (!DATABASE_URL) throw new Error("DATABASE_URL not set");
    if (!email || !password) throw new Error("Admin seed credentials not set");

    const sql = neon(DATABASE_URL);

    console.log("🌱 Seeding admin user...");

    // Check if already exists
    const existing = await sql.query(
        "SELECT id FROM admin_users WHERE email = $1",
        [email]
    );

    if (existing.length > 0) {
        console.log("⚠️ Admin already exists, skipping...");
        return;
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert admin user
    await sql.query(
        `
    INSERT INTO admin_users (email, password_hash, name, role)
    VALUES ($1, $2, $3, $4)
    `,
        [email, passwordHash, "Admin", "admin"]
    );

    console.log("✅ Admin user created!");
}

seedAdmin().catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
});