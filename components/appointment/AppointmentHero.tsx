"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"

const FloatingCanvas = dynamic(() => import("@/components/shared/FloatingCanvas"), { ssr: false })

export function AppointmentHero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section
            ref={containerRef}
            className="
        relative flex h-[60vh] min-h-[520px] w-full items-center justify-center overflow-hidden
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-[#050510] dark:via-[#07071a] dark:to-black
      "
        >
            {/* Canvas */}
            <FloatingCanvas
                showParticles
                particleColor="#a78bfa" // works in both themes
            />

            {/* LIGHT MODE BLOBS */}
            <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-orange-300/40 blur-[120px] dark:hidden" />
            <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-300/40 blur-[120px] dark:hidden" />

            {/* DARK MODE BLOBS */}
            <div className="hidden dark:block absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-orange-600/20 blur-[140px]" />
            <div className="hidden dark:block absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-600/20 blur-[140px]" />

            {/* SUBTLE GRID */}
            <div className="
        pointer-events-none absolute inset-0
        bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:28px_28px]
        dark:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        opacity-40 dark:opacity-20
      " />

            {/* CONTENT */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 flex flex-col items-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* HEADING */}
                    <h1 className="
            text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6
            text-gray-900 dark:text-white
          ">
                        <span className="
              bg-gradient-to-r
              from-orange-400 via-fuchsia-500 to-cyan-400
              dark:from-orange-400 dark:via-fuchsia-500 dark:to-cyan-400
              bg-clip-text text-transparent
            ">
                            Schedule Your
                        </span>
                        <br />
                        <span className="text-gray-900 dark:text-white">
                            Consultation
                        </span>
                    </h1>

                    {/* SUBTEXT */}
                    <p className="
            max-w-2xl mx-auto text-base md:text-xl font-medium
            text-gray-600 dark:text-gray-300
          ">
                        Choose a time that works for you. Let's discuss your next project,
                        explore digital strategies, and see how we can help you grow.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}
