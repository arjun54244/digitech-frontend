import { NextResponse } from "next/server"
import { portfolioData } from "@/lib/data/portfolio"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params
    await new Promise((resolve) => setTimeout(resolve, 100)) // simulate network

    const project = portfolioData.find((p) => p.id === resolvedParams.id)

    if (!project) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json(project)
}
