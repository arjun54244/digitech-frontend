"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

export function HeroBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-24 top-[-140px] h-[340px] w-[340px] rounded-full bg-gradient-to-br from-orange-400/25 via-fuchsia-500/20 to-cyan-400/15 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 24, 0], y: [0, 18, 0], opacity: [0.95, 0.8, 0.95] }
        }
        transition={reducedMotion ? undefined : { duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute -right-28 top-[-80px] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-cyan-400/25 via-fuchsia-500/20 to-orange-400/15 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, -20, 0], y: [0, 14, 0], opacity: [0.85, 0.72, 0.85] }
        }
        transition={reducedMotion ? undefined : { duration: 12, repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,66,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(109,209,138,0.12),transparent_50%)]" />

      <motion.div
        className="absolute bottom-[-120px] left-1/2 h-[220px] w-[720px] -translate-x-1/2 rounded-[999px] bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-xl"
        animate={reducedMotion ? undefined : { opacity: [0.35, 0.65, 0.35] }}
        transition={reducedMotion ? undefined : { duration: 6, repeat: Infinity }}
      />
    </div>
  )
}

