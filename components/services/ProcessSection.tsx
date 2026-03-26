"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { processSteps } from "@/components/services/services-data"

// Floating elements for premium effect
function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
      {/* Big Orange Blob */}
      <motion.div
        className="absolute top-[-80px] left-[-60px] h-[300px] w-[300px] rounded-full bg-orange-400/50 dark:bg-orange-500/30 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Pink Blob */}
      <motion.div
        className="absolute top-[20%] right-[-80px] h-[260px] w-[260px] rounded-full bg-pink-500/50 dark:bg-pink-600/30 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Cyan Blob */}
      <motion.div
        className="absolute bottom-[-100px] left-[30%] h-[280px] w-[280px] rounded-full bg-cyan-400/50 dark:bg-cyan-500/30 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Small floating orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-white/30 dark:bg-white/20 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // ✅ cast to tuple
    },
  },
}

export function ProcessSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const progressRef = React.useRef<HTMLDivElement | null>(null)
  const tweensRef = React.useRef<{ kill?: () => void } | null>(null)

  React.useEffect(() => {
    let cancelled = false
      ; (async () => {
        const gsapModule = await import("gsap")
        const gsap = gsapModule.gsap ?? gsapModule.default ?? gsapModule
        const scrollTriggerModule = await import("gsap/ScrollTrigger")
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger

        if (cancelled) return
        gsap.registerPlugin(ScrollTrigger)

        const root = sectionRef.current
        const progress = progressRef.current
        if (!root || !progress) return

        gsap.set(progress, { scaleY: 0, transformOrigin: "top" })

        tweensRef.current = gsap.to(progress, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
          },
        })
      })()

    return () => {
      cancelled = true
      tweensRef.current?.kill?.()
    }
  }, [])

  return (
    <motion.section
      id="process"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-white/10 py-24 sm:py-28 bg-gray-50 dark:bg-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Floating Elements */}
      <FloatingElements />

      {/* Background grids */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.18),transparent_55%)] dark:opacity-30" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20 dark:opacity-5" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              A clear process that{" "}
              <span className="bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                delivers
              </span>
              .
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Reduce uncertainty with a focused, iterative workflow. Each phase delivers value early and keeps teams aligned.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/20 dark:bg-white/5 p-4 backdrop-blur">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Timeline that stays transparent</p>
            <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">Discover → Design → Build → Optimize</p>
          </div>
        </header>

        {/* Timeline */}
        <div className="relative mt-14 pb-2">
          {/* Static Timeline Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-300 dark:bg-white/20" />
          {/* Animated Progress Line */}
          <div
            ref={progressRef}
            className="origin-top pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-orange-400/90 via-fuchsia-500/70 to-cyan-400/90 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />

          <ol className="relative grid gap-8 md:grid-cols-2 md:gap-x-12">
            {processSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0
              const dotSide = isLeft ? "right-[-10px]" : "left-[-10px]"
              const connectorSide = isLeft ? "right-0" : "left-0"

              return (
                <motion.li
                  key={step.key}
                  className={cn(
                    "relative rounded-3xl border border-gray-300 dark:border-white/10 bg-white/20 dark:bg-white/5 p-6 backdrop-blur transition-shadow shadow-sm hover:shadow-[0_25px_90px_-60px_rgba(0,0,0,0.8)]",
                    isLeft ? "md:justify-self-end md:text-right md:pl-10" : "md:justify-self-start md:text-left md:pr-10"
                  )}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={isLeft ? { y: -6, rotate: 0.1 } : { y: -6, rotate: -0.1 }}
                >
                  {/* Step Dot */}
                  <div
                    className={cn(
                      "absolute top-8 z-10 h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400 ring-1 ring-white/20",
                      dotSide
                    )}
                  />
                  {/* Connector Line */}
                  <div
                    className={cn(
                      "absolute top-[55px] z-0 h-px bg-gradient-to-r from-orange-400/70 via-fuchsia-500/60 to-cyan-400/70",
                      connectorSide,
                      "w-14"
                    )}
                  />

                  <div className={cn("flex items-center gap-3", isLeft ? "md:justify-end" : "md:justify-start")}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 dark:bg-white/20 ring-1 ring-white/20">
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">{step.title}</h3>
                  </div>

                  <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">{step.description}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.detail}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </motion.section>
  )
}