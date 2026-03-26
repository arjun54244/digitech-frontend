"use client"

import type { ReactNode } from "react"
import { AnimatedSection } from "@/components/services/AnimatedSection"
import { HeroBackground } from "./HeroBackground"

export type HeroSectionProps = {
  eyebrow: string
  title: ReactNode
  description: string
  primaryCta: ReactNode
  secondaryCta?: ReactNode
}

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <AnimatedSection className="relative overflow-hidden border-b border-white/10 dark:border-black/20 bg-gradient-to-b from-indigo-50/40 via-purple-100/20 to-white dark:from-indigo-900/60 dark:via-purple-950/40 dark:to-black">
      {/* Hero Background for floating shapes */}
      <HeroBackground />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-24 sm:pb-16 sm:pt-28 md:pb-20">
        {/* Eyebrow / Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-black/20 bg-gradient-to-r from-pink-100/30 via-orange-100/20 to-purple-100/20 dark:from-indigo-800/40 dark:via-purple-900/30 dark:to-black/20 px-4 py-2 text-xs font-medium text-gray-900 dark:text-gray-50 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400" />
          {eyebrow}
        </div>

        {/* Title & Description */}
        <header className="mt-6">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            {description}
          </p>
        </header>

        {/* Call-to-Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="w-full sm:w-auto">{primaryCta}</div>
          {secondaryCta && <div className="w-full sm:w-auto">{secondaryCta}</div>}
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: "SSR-first performance", value: "Fast by default" },
            { label: "Accessible design systems", value: "WCAG-aware" },
            { label: "Conversion-focused delivery", value: "Built to ship" },
          ].map((item) => (
            <article
              key={item.label}
              className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/5 dark:bg-black/5 p-5 backdrop-blur-lg shadow-lg hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <p className="text-xs font-medium text-gray-500 dark:text-gray-300">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-50">{item.value}</p>
            </article>
          ))}
        </div>

        {/* Tags & Trusted Message */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Trusted by teams who want premium UI, measurable results, and smooth delivery.
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["Design Systems", "SEO & Growth", "Secure Delivery"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/20 dark:border-black/20 bg-gradient-to-r from-pink-100/20 via-orange-100/10 to-purple-100/10 dark:from-indigo-800/30 dark:via-purple-900/20 dark:to-black/20 px-3 py-1 text-xs font-medium text-gray-900 dark:text-gray-50 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}