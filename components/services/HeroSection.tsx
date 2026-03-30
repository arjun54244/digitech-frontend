"use client";

import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/services/AnimatedSection";
import { HeroBackground } from "./HeroBackground";

export type HeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta: ReactNode;
  secondaryCta?: ReactNode;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <AnimatedSection className="relative overflow-hidden border-b border-black/5 dark:border-white/10 
      bg-gradient-to-b from-white via-indigo-50/40 to-purple-50/30 
      dark:from-[#0b0b12] dark:via-[#0f0f1a] dark:to-black">

      {/* Background */}
      <HeroBackground />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:pt-32">

        {/* 🔹 Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full 
          border border-black/10 dark:border-white/10
          bg-white/60 dark:bg-white/5 
          px-4 py-2 text-xs font-medium 
          text-gray-800 dark:text-gray-200 backdrop-blur-xl shadow-sm">

          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 animate-pulse" />
          {eyebrow}
        </div>

        {/* 🔥 Title */}
        <header className="mt-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-600 
              dark:from-white dark:via-indigo-300 dark:to-purple-400 
              bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed 
            text-gray-600 dark:text-gray-400 sm:text-lg">
            {description}
          </p>
        </header>

        {/* 🎯 CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="w-full sm:w-auto">{primaryCta}</div>
          {secondaryCta && (
            <div className="w-full sm:w-auto">{secondaryCta}</div>
          )}
        </div>

        {/* 💎 Feature Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { label: "SSR-first performance", value: "Fast by default" },
            { label: "Accessible design systems", value: "WCAG-aware" },
            { label: "Conversion-focused delivery", value: "Built to scale" },
          ].map((item) => (
            <article
              key={item.label}
              className="group relative rounded-2xl p-5 
                border border-black/10 dark:border-white/10
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                shadow-md hover:shadow-xl
                transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                {item.value}
              </p>

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
            </article>
          ))}
        </div>

        {/* 🏷 Tags + Trust */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Trusted by teams who value premium UI, performance, and results.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {["Design Systems", "SEO & Growth", "Secure Delivery"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium
                  border border-black/10 dark:border-white/10
                  bg-white/60 dark:bg-white/5
                  text-gray-800 dark:text-gray-200
                  backdrop-blur-lg hover:scale-105 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 