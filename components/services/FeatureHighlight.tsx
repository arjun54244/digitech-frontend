"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Sparkles, Wand2, Zap } from "lucide-react"

const glassCardBase =
  "rounded-3xl border p-6 backdrop-blur transition-shadow hover:shadow-[0_30px_90px_-60px_rgba(0,0,0,0.6)]"

export function FeatureHighlight() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="feature" className="relative overflow-hidden py-24 sm:py-28">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-visible">
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-400/30 via-fuchsia-400/25 to-cyan-400/20 blur-3xl"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/4 -right-32 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-400/25 to-lime-400/15 blur-3xl"
              animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-tl from-orange-400/25 via-fuchsia-500/20 to-cyan-400/15 blur-3xl"
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Left Content */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-foreground/80 backdrop-blur dark:border-black/20 dark:bg-black/20 dark:text-foreground/90">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-cyan-400" />
              Feature highlight
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
              A delivery workflow built for{" "}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                speed and clarity
              </span>
              .
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
              We combine design systems, performance-first development, and
              measured optimization—so every sprint ships something tangible.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                {
                  icon: Sparkles,
                  text: "Design that looks premium and scales with your team.",
                },
                {
                  icon: Zap,
                  text: "Engineering tuned for real-world performance and accessibility.",
                },
                {
                  icon: Wand2,
                  text: "Playbooks and automations that remove repetitive work.",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 dark:bg-black/20 dark:ring-black/20">
                    <item.icon
                      className="h-4 w-4 text-orange-400"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="relative md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-6 shadow-xl backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.25)] dark:border-black/10 dark:from-[#326072]/30 dark:via-[#326072]/20 dark:to-orange-400/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-orange-500 uppercase dark:text-orange-400">
                      What you get
                    </p>
                    <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-50">
                      Premium outputs every sprint
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur dark:border-black/20 dark:bg-black/20">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-cyan-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                      Live improvements
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      label: "Time to value",
                      value: "Days not weeks",
                      accent: "from-pink-500 via-fuchsia-500 to-cyan-400",
                    },
                    {
                      label: "Performance",
                      value: "Speed-first",
                      accent: "from-cyan-400 via-sky-500 to-lime-400",
                    },
                    {
                      label: "Design system",
                      value: "Reusable UI",
                      accent: "from-orange-500 via-fuchsia-500 to-cyan-400",
                    },
                    {
                      label: "Optimization",
                      value: "Measured wins",
                      accent: "from-indigo-500 via-violet-500 to-teal-400",
                    },
                  ].map((card) => (
                    <motion.div
                      key={card.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.2)] dark:border-black/10 dark:bg-black/20"
                      whileHover={
                        !reducedMotion
                          ? { y: -4, rotateX: 1.5, rotateY: -1.5 }
                          : undefined
                      }
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-300">
                        {card.label}
                      </p>
                      <div className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl dark:text-gray-50">
                        {card.value}
                      </div>
                      <div
                        className={`mt-3 h-1 w-full rounded-full bg-gradient-to-r ${card.accent}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
