// AboutAnimations.tsx
"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutAnimations() {
    useEffect(() => {
        gsap.from(".about-title", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-title",
                start: "top 80%",
            },
        })

        gsap.from(".about-text", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".about-text",
                start: "top 85%",
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
    }, [])

    return null
}