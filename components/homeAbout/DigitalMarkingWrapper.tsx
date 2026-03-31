// DigitalMarkingWrapper.tsx
"use client"

import dynamic from "next/dynamic"

const DigitalMarking = dynamic(() => import("@/components/DigitalMarking"), {
    ssr: false,
    loading: () => (
        <div className="h-[400px] w-full animate-pulse rounded-2xl bg-muted" />
    ),
})

export default function DigitalMarkingWrapper() {
    return <DigitalMarking className="h-[400px] w-full" />
}