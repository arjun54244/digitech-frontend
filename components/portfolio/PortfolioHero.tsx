"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import { useMouseParallax } from "@/hooks/useMouseParallax"

const FloatingCanvas = dynamic(() => import("@/components/shared/FloatingCanvas"), { ssr: false })

export function PortfolioHero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    // Scroll parallax for text block
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    // Advanced mouse parallax for background layers
    const { x: mouseX, y: mouseY } = useMouseParallax(30, 80)

    // Create opposite movement ranges
    const moveXBg1 = useTransform(mouseX, [-1, 1], ["-2%", "2%"])
    const moveYBg1 = useTransform(mouseY, [-1, 1], ["-2%", "2%"])
    const moveXBg2 = useTransform(mouseX, [-1, 1], ["3%", "-3%"])
    const moveYBg2 = useTransform(mouseY, [-1, 1], ["3%", "-3%"])

    return (
        <section
            ref={containerRef}
            className="relative flex h-[70vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030308]"
        >
            {/* 3D Model background */}
            <FloatingCanvas showParticles={false} showModel={true} modelColor="#f97316" />

            {/* Mouse Reactive Ambient Glows (Light Mode) */}
            <motion.div
                style={{ x: moveXBg1, y: moveYBg1 }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-200/50 dark:hidden rounded-full blur-[120px] mix-blend-multiply pointer-events-none"
            />

            {/* Mouse Reactive Ambient Glows (Dark Mode) */}
            <motion.div
                style={{ x: moveXBg1, y: moveYBg1 }}
                className="hidden dark:block absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                style={{ x: moveXBg2, y: moveYBg2 }}
                className="hidden dark:block absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none"
            />

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 flex flex-col items-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-sm font-bold text-orange-600 dark:text-orange-400 backdrop-blur-md mb-8 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-orange-500 dark:bg-orange-400 animate-pulse" />
                        Selected Works
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400">Portfolio</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium tracking-tight">
                        A showcase of digital gravity defined. We construct experiences that defy expectations.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bottom fade out to seamlessly transition to grid */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#030308] to-transparent pointer-events-none z-10" />
        </section>
    )
}
