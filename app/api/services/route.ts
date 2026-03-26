import { NextResponse } from "next/server"
import { servicesData } from "@/lib/data/services"

export async function GET() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    return NextResponse.json(servicesData)
}
