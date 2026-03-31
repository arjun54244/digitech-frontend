"use client"

import { useEffect, RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
    footerRef: RefObject<HTMLElement | null>
    waveRef: RefObject<SVGSVGElement | null>
}

export function FooterAnimations({ footerRef, waveRef }: Props) {
    useEffect(() => {
        const footer = footerRef.current
        const wave = waveRef.current

        if (footer) {
            gsap.from(footer.querySelectorAll(".footer-col"), {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footer,
                    start: "top 90%",
                },
            })
        }

        if (wave) {
            gsap.to(wave.querySelectorAll("path"), {
                attr: {
                    d: "M0,64 C200,20 400,100 600,64 C800,28 1000,100 1200,64 L1200,120 L0,120 Z",
                },
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })
        }
    }, [])

    return null
}