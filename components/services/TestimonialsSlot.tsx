"use client"

import dynamic from "next/dynamic"

const TestimonialsSection = dynamic(
  () => import("@/components/services/TestimonialsSection").then((m) => m.TestimonialsSection),
  { ssr: false }
)

export function TestimonialsSlot() {
  return <TestimonialsSection />
}

