import { NextResponse } from "next/server"
import { servicesData } from "@/lib/data/services"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const service = servicesData.find((s) => s.id === resolvedParams.id)

    if (!service) {
        return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    return NextResponse.json(service)
}
