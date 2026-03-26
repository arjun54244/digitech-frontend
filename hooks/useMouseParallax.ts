"use client"

import { useEffect } from "react"
import { useMotionValue, useSpring, MotionValue } from "framer-motion"

export function useMouseParallax(damping = 20, stiffness = 100): { x: MotionValue<number>; y: MotionValue<number> } {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping, stiffness }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse coordinates to range [-1, 1] relative to window center
            const normX = (e.clientX / window.innerWidth) * 2 - 1
            const normY = (e.clientY / window.innerHeight) * 2 - 1
            mouseX.set(normX)
            mouseY.set(normY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return { x, y }
}
