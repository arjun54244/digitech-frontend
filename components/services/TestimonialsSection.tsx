"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import { testimonials } from "@/components/services/services-data"

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export function TestimonialsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.section
      id="testimonials"
      className="relative w-full overflow-hidden bg-gradient-to-b from-pink-100/20 via-white/0 to-transparent py-24 sm:py-28 dark:from-slate-950/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Radial Lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(244,63,94,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_50%_95%,rgba(99,102,241,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:26px_26px] opacity-50 dark:opacity-15" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-50">
              Trusted feedback from teams who ship
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Real testimonials, delivered with premium glass-card styling and
              smooth autoplay.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/20 via-white/10 to-white/5 px-4 py-3 backdrop-blur dark:border-black/20 dark:bg-gradient-to-br dark:from-black/40 dark:via-black/20 dark:to-black/10">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Client stories
            </p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              Auto-play with gentle transitions
            </p>
          </div>
        </div>

        <Swiper
          loop
          speed={900}
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          grabCursor
          pagination={{ clickable: true }}
          autoplay={
            reducedMotion ? false : { delay: 5000, disableOnInteraction: false }
          }
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.key} className="w-full pb-10">
              <motion.article
                className="relative h-full rounded-2xl border border-white/20 bg-gradient-to-br from-pink-50/40 via-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.3)] dark:border-black/20 dark:bg-gradient-to-tr dark:from-indigo-900/50 dark:via-black/30 dark:to-black/10"
                whileHover={!reducedMotion ? { y: -3, scale: 1.02 } : undefined}
              >
                <span className="bg-[linear-gradient(120deg,rgba(255,255,255,0.12),rgba(255,255,255,0) 70%)] pointer-events-none absolute inset-0 animate-[shine_3s_ease-in-out_infinite] rounded-2xl" />
                <div className="mb-3 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full border border-white/20 object-cover dark:border-black/20"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-50">
                      {t.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="mb-3 flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < t.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  "{t.quote}"
                </p>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}
