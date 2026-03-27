"use client"

import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Boxes } from "@/components/ui/boxes"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = {
  services: [
    { name: "SEO Services", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "Paid Advertising", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Tools", href: "#" },
    { name: "FAQ", href: "#" },
  ],
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)
  const waveRef = useRef<SVGSVGElement>(null)
  const { scrollTo } = useSmoothScroll()

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

  const handleScrollTop = () => {
    scrollTo(0, { duration: 1.2 })
  }

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#326072]/10 via-transparent to-[#326072]/10 dark:from-[#326072]/20 dark:to-[#326072]/20"
    >
      <div className="relative flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background boxes */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <Boxes className="boder-none" />
        </div>

        {/* Animated Wave */}
        <svg
          ref={waveRef}
          className="absolute top-0 left-0 h-20 w-full -translate-y-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(28 100% 55% / 0.25)" />
              <stop offset="50%" stopColor="hsl(193 50% 35% / 0.25)" />
              <stop offset="100%" stopColor="hsl(28 100% 55% / 0.25)" />
            </linearGradient>
          </defs>

          <path
            d="M0,64 C200,100 400,20 600,64 C800,108 1000,20 1200,64 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>

        {/* Glass Container */}
        <div className="relative container mx-auto px-6">
          <div className="p-12">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
              {/* Brand */}
              <div className="footer-col lg:col-span-2">
                {/* <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  DigiTech
                </h3> */}
                <Link
                  href="/"
                  className="flex h-10 items-center justify-center rounded-lg bg-white px-2"
                >
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={110}
                    height={28}
                    // style={{ width: "110px", height: "auto" }}
                    className="object-contain"
                  />
                </Link>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your trusted partner for data-driven digital marketing
                  solutions that deliver measurable growth.
                </p>

                {/* Contact */}
                <div className="mt-6 space-y-3 text-sm">
                  <a className="z-20 flex items-center gap-3 text-muted-foreground transition-all hover:translate-x-1 hover:text-accent">
                    <Mail className="h-5 w-5 text-accent" />
                    hello@digitech.com
                  </a>

                  <a className="z-20 flex items-center gap-3 text-muted-foreground transition-all hover:translate-x-1 hover:text-accent">
                    <Phone className="h-5 w-5 text-accent" />
                    +1 (234) 567-890
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-accent" />
                    San Francisco, CA
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-6 flex gap-4">
                  {socialLinks.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      className="z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/40"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link Columns */}
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="footer-col">
                  <h4 className="mb-5 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                    {title}
                  </h4>

                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a className="z-20 inline-block text-sm text-muted-foreground transition-all hover:translate-x-1 hover:text-accent">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Newsletter */}
              <div className="footer-col lg:col-span-2">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  Subscribe to our newsletter
                </h4>

                <p className="mb-4 text-sm text-muted-foreground">
                  Get marketing insights and growth strategies delivered weekly.
                </p>

                <div className="z-20 flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="border-white/20 bg-white/10"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
              <p className="text-muted-foreground">
                © 2025 DigiTech. All rights reserved.
              </p>

              <div className="flex gap-6">
                <a className="text-muted-foreground transition-colors hover:text-accent">
                  Privacy Policy
                </a>

                <a className="text-muted-foreground transition-colors hover:text-accent">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          aria-label="Scroll to top"
          onClick={handleScrollTop}
          className="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  )
}
