"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, Users } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CardScroll3D from "./CardScroll3D"
import dynamic from "next/dynamic"
const DigitalMarking = dynamic(() => import("./DigitalMarking"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
  ),
})

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Users, value: 1500, label: "Healthcare Professionals" },
  { icon: Stethoscope, value: 500, label: "Marketing Campaigns" },
  { icon: HeartPulse, value: 98, label: "Client Satisfaction %" },
  { icon: Activity, value: 10, label: "Years Experience" },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
      })

      counterRefs.current.forEach((el, i) => {
        const endValue = stats[i].value

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-28"
    >
      {/* Floating Icons */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Activity className="absolute top-20 left-10 h-14 w-14 text-[#326072]" />
        <HeartPulse className="absolute right-20 bottom-20 h-16 w-16 text-[#f69d33]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <span className="font-semibold tracking-widest text-[#f69d33] uppercase">
            About DigiTech Healthcare
          </span>

          <h2 className="about-title mt-4 text-4xl leading-tight font-bold lg:text-5xl">
            Transforming Healthcare
            <span className="block text-[#326072] dark:text-[#f69d33]">
              Through Digital Innovation
            </span>
          </h2>

          <p className="about-text mt-6 text-lg leading-relaxed text-muted-foreground">
            DigiTech Healthcare is a specialized healthcare digital marketing
            company dedicated to helping doctors, hospitals, and clinics grow
            their digital presence and attract more patients.
          </p>

          <p className="about-text mt-4 leading-relaxed text-muted-foreground">
            With innovative marketing strategies, advanced technology, and deep
            healthcare expertise, we help medical professionals build powerful
            online brands that inspire trust and drive growth.
          </p>
        </div>

        {/* RIGHT SIDE ILLUSTRATION */}
        <div className="relative">
          {/* Glass Card Illustration */}
          <div className="h-fit w-full overflow-hidden">
            <DigitalMarking className="h-[400px] w-full" />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid mx-auto mt-20 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon

          return (
            <Card
              key={i}
              className="stat-card rounded-2xl border border-white/20 bg-white/50 shadow-xl backdrop-blur-lg dark:bg-white/5"
            >
              <CardContent className="p-8 text-center">
                <Icon className="mx-auto mb-4 h-10 w-10 text-[#f69d33]" />

                <h3 className="text-4xl font-bold text-[#326072] dark:text-white">
                  <span
                    ref={(el: HTMLSpanElement | null) => {
                      counterRefs.current[i] = el
                    }}
                  >
                    0
                  </span>
                  +
                </h3>

                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

