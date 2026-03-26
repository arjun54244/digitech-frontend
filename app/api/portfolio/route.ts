import { NextResponse } from "next/server"
import { portfolioData } from "@/lib/data/portfolio"

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 600)) // simulate network
    return NextResponse.json(portfolioData)
}
