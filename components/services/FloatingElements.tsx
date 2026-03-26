"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
      {/* Big Gradient Blob */}
      <motion.div
        className="absolute top-[-80px] left-[-60px] h-[300px] w-[300px] rounded-full bg-orange-400/50 dark:bg-orange-500/40 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pink Blob */}
      <motion.div
        className="absolute top-[20%] right-[-80px] h-[260px] w-[260px] rounded-full bg-pink-500/50 dark:bg-pink-600/40 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyan Blob */}
      <motion.div
        className="absolute bottom-[-100px] left-[30%] h-[280px] w-[280px] rounded-full bg-cyan-400/50 dark:bg-cyan-500/40 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-white/40 dark:bg-white/20 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
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