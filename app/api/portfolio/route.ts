import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const [portfolios, projects] = await Promise.all([
      sql`SELECT * FROM portfolios ORDER BY created_at DESC`,
      sql`SELECT * FROM projects ORDER BY created_at DESC`
    ]);

    // Format for frontend
    const portfolioItems = portfolios.map((p: any) => ({
      id: `pdf-${p.id}`,
      title: p.name,
      category: "PDF Portfolio",
      image: "/pdf-placeholder.png", // Or a dynamic screenshot if we had one
      description: `View our PDF portfolio: ${p.name}`,
      techStack: ["PDF"],
      gallery: [],
      link: p.pdf_path,
      type: "pdf"
    }));

    const projectItems = projects.map((p: any) => ({
      id: p.id,
      title: p.title,
      category: p.category || "Website",
      image: p.image_url || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: p.description,
      techStack: p.tech_stack || [],
      gallery: [],
      link: p.project_url,
      type: "website"
    }));

    return NextResponse.json([...portfolioItems, ...projectItems]);
  } catch (error: any) {
    console.error("Unified portfolio fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 });
  }
}
