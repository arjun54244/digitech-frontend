import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { join } from "path";
import "dotenv/config";

async function migrate() {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  const sql = neon(DATABASE_URL);
  const schemaPath = join(process.cwd(), "lib", "db", "schema.sql");
  const schema = readFileSync(schemaPath, "utf-8");

  console.log("🚀 Running database migration...");
  // await sql.query(schema as any);

  function splitSqlStatements(sql: string): string[] {
    const statements: string[] = [];
    let current = "";
    let inDollarQuote = false;

    const lines = sql.split("\n");

    for (let line of lines) {
      // detect $$ start/end
      if (line.includes("$$")) {
        inDollarQuote = !inDollarQuote;
      }

      current += line + "\n";

      // only split if NOT inside $$ block
      if (!inDollarQuote && line.trim().endsWith(";")) {
        statements.push(current.trim());
        current = "";
      }
    }

    if (current.trim()) {
      statements.push(current.trim());
    }

    return statements;
  }
  const queries = splitSqlStatements(schema);

  for (const query of queries) {
    console.log("👉 Running:", query.slice(0, 60) + "...");
    await sql.query(query);
  }
  console.log("✅ Migration complete!");
}

migrate().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
