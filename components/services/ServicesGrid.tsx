"use client"

import * as React from "react"
import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"

import { Card, CardHeader } from "@/components/ui/card"
import { services } from "@/components/services/services-data"
import { cn } from "@/lib/utils"
import { FloatingElements } from "./FloatingElements"

const sectionVariants: MotionProps["variants"] = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants: MotionProps["variants"] = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function ServicesGrid() {
  return (
    <motion.section
      id="services"
      className="relative w-full overflow-hidden border-b border-white/10 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-black/40 dark:to-transparent dark:from-black dark:via-black/40 dark:to-transparent"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <FloatingElements />
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_45%),radial-gradient(circle_at_70%_15%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_40%_90%,rgba(34,211,238,0.10),transparent_45%)]" />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Premium Digital Services
            </h2>
            <p className="mt-3 text-muted-foreground text-base">
              Powerful, scalable and beautifully crafted services designed to elevate your brand and accelerate growth.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-lg">
            <p className="text-sm font-semibold">All-in-one growth stack</p>
            <p className="mt-1 text-xs text-muted-foreground">Design • Build • Scale</p>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.key}
                className="relative group h-full rounded-3xl"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                {/* Glow Layer */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.accentColor}40, transparent 70%)`,
                  }}
                />

                {/* Card */}
                <Card
                  className={cn(
                    "relative h-full rounded-3xl",
                    "bg-white dark:bg-white/5 backdrop-blur-xl",
                    "border border-gray-200 dark:border-white/10",
                    "shadow-sm hover:shadow-2xl",
                    "transition-all duration-500 hover:-translate-y-1"
                  )}
                >
                  <CardHeader className="flex flex-col gap-4">
                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-xl ring-1 ring-white/10",
                        "bg-gradient-to-br",
                        service.iconGradientClass
                      )}
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Fancy Tag */}
                    <div className="mt-2 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                      Popular
                    </div>
                  </CardHeader>

                  {/* Bottom Glow Line */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(to right, transparent, ${service.accentColor}, transparent)`,
                    }}
                  />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}