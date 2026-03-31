"use client"

import { ArrowUp } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"

export function ScrollToTop() {
    const { scrollTo } = useSmoothScroll()

    return (
        <button
            aria-label="Scroll to top"
            onClick={() => scrollTo(0, { duration: 1.2 })}
            className="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg transition-all hover:scale-110"
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    )
}