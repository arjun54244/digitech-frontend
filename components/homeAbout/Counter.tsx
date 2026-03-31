"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, Users } from "lucide-react"

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default function Counter() {
    const stats = [
        { icon: Users, value: 1500, label: "Healthcare Professionals", gradient: "from-green-400 via-green-300 to-green-200" },
        { icon: Stethoscope, value: 500, label: "Marketing Campaigns", gradient: "from-orange-400 via-orange-300 to-orange-200" },
        { icon: HeartPulse, value: 98, label: "Client Satisfaction %", gradient: "from-yellow-400 via-yellow-300 to-yellow-200" },
        { icon: Activity, value: 10, label: "Years Experience", gradient: "from-sky-400 via-sky-300 to-sky-200" },
    ]

    // Create a ref for each counter dynamically
    const refs = useRef<HTMLSpanElement[]>([])

    useEffect(() => {
        refs.current.forEach((el, i) => {
            if (!el) return
            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: stats[i].value,
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
    }, [stats])

    return (
        <div className="stats-grid mx-auto mt-20 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                    <Card
                        key={i}
                        className={`
              relative
              rounded-3xl
              border border-white/10
              bg-gradient-to-tr from-white/20 via-white/10 to-white/5
              dark:from-white/5 dark:via-white/3 dark:to-white/0
              backdrop-blur-2xl
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-500
              overflow-hidden
            `}
                    >
                        <CardContent className="p-8 text-center relative z-10">
                            {/* Glowing gradient circle behind icon */}
                            <div className={`absolute -top-6 -left-6 h-28 w-28 rounded-full bg-gradient-to-br ${stat.gradient} blur-3xl opacity-40 -z-10`}></div>

                            {/* Icon */}
                            <div className="mb-4 flex justify-center">
                                <div className={`rounded-xl p-4 bg-gradient-to-br ${stat.gradient} shadow-inner`}>
                                    <Icon className="h-10 w-10 text-white drop-shadow-md" />
                                </div>
                            </div>

                            {/* Counter */}
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground relative z-10">
                                <span
                                    ref={(el) => {
                                        if (el) refs.current[i] = el
                                    }}
                                >
                                    0
                                </span>
                                +
                            </h3>

                            {/* Label */}
                            <p className="mt-2 text-sm sm:text-base text-muted-foreground font-medium tracking-wide">
                                {stat.label}
                            </p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}