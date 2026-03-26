"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMouseParallax } from "@/hooks/useMouseParallax"
import dynamic from "next/dynamic"

const FloatingCanvas = dynamic(() => import("@/components/shared/FloatingCanvas"), { ssr: false })

export function BlogHero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    // Scroll parallax for text block
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    // Mouse parallax for immersive glows
    const { x: mouseX, y: mouseY } = useMouseParallax(30, 80)

    const moveXBg1 = useTransform(mouseX, [-1, 1], ["-2%", "2%"])
    const moveYBg1 = useTransform(mouseY, [-1, 1], ["-2%", "2%"])
    const moveXBg2 = useTransform(mouseX, [-1, 1], ["3%", "-3%"])
    const moveYBg2 = useTransform(mouseY, [-1, 1], ["3%", "-3%"])

    return (
        <section
            ref={containerRef}
            className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030308]"
        >
            {/* 3D Model background */}
            <FloatingCanvas showParticles={true} showModel={false} particleColor="#ec4899" />

            {/* Heavy Mesh Gradient overlay for Light Mode */}
            <motion.div
                style={{ x: moveXBg1, y: moveYBg1 }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-pink-200/50 dark:hidden rounded-full blur-[120px] mix-blend-multiply pointer-events-none"
            />

            {/* Ambient Glows for Dark Mode */}
            <motion.div
                style={{ x: moveXBg1, y: moveYBg1 }}
                className="hidden dark:block absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                style={{ x: moveXBg2, y: moveYBg2 }}
                className="hidden dark:block absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"
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
                    <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2.5 text-sm font-bold text-pink-600 dark:text-pink-400 backdrop-blur-md mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                        </span>
                        Latest Transmissions
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 dark:from-pink-400 dark:to-indigo-400">Insights</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium tracking-tight">
                        Dive into the minds shaping the future of digital marketing.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bottom fade out to seamlessly transition to grid */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#030308] to-transparent pointer-events-none z-10" />
        </section>
    )
}
