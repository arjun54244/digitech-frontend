"use client"

import { MouseEvent, useState, RefObject } from "react"

export function useTiltEffect(ref: RefObject<HTMLElement | null>, tiltAmount = 15) {
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        // Position within the element
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Calculate percentage from center (-0.5 to 0.5)
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        // Invert Y axis tilt so top goes backwards when hovering top
        setRotateX(yPct * -tiltAmount)
        setRotateY(xPct * tiltAmount)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return { rotateX, rotateY, handleMouseMove, handleMouseLeave }
}
