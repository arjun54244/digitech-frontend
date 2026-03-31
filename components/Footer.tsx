
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
  Facebook,
  PaintbrushVertical,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Boxes } from "@/components/ui/boxes"
import Link from "next/link"
import Image from "next/image"
import { socialMediaLinks } from "@/lib/data/socalmedia"
import { IconBrandThreads, IconBrandWhatsapp } from "@tabler/icons-react"
import { FooterAnimations } from "./Footer/FooterAnimations"
import { ScrollToTop } from "./Footer/ScrollToTop"

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { icon: Instagram, href: socialMediaLinks.instagram, label: "Instagram" },
  { icon: Linkedin, href: socialMediaLinks.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: socialMediaLinks.twitter, label: "Twitter" },
  { icon: Facebook, href: socialMediaLinks.facebook, label: "Facebook" },
  { icon: Youtube, href: socialMediaLinks.youtube, label: "YouTube" },
  { icon: PaintbrushVertical, href: socialMediaLinks.pintrust, label: "Pintrust" },
  { icon: IconBrandWhatsapp, href: socialMediaLinks.whatsapp, label: "Whatsapp" },
  { icon: IconBrandThreads, href: socialMediaLinks.threads, label: "Threads" },
]

const footerLinks = {
  services: [
    { name: "SEO Services", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "Paid Advertising", href: "#" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blogs" },
    { name: "Guides", href: "/blogs" },
    { name: "Tools", href: "/abvout#tools" },
    { name: "FAQ", href: "/faqs" },
  ],
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)
  const waveRef = useRef<SVGSVGElement>(null)

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#326072]/10 via-transparent to-[#326072]/10 dark:from-[#326072]/20 dark:to-[#326072]/20"
    >
      <FooterAnimations footerRef={footerRef} waveRef={waveRef} />
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
                  <a className="z-20 flex items-center gap-3 text-muted-foreground transition-all hover:translate-x-1 hover:text-accent" href="mailto:info@digitechhealthcare.com" aria-label="info@digitechhealthcare.com" >
                    <Mail className="h-5 w-5 text-accent" />
                    info@digitechhealthcare.com
                  </a>

                  <a className="z-20 flex items-center gap-3 text-muted-foreground transition-all hover:translate-x-1 hover:text-accent" href="tel:+919220708874" aria-label="+91 9220708874" >
                    <Phone className="h-5 w-5 text-accent" />
                    +91 9220708874
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground" aria-label="The First Business Brick, B-74, C Block, <br /> Sector 2, Noida, Uttar Pradesh - 201301">
                    <MapPin className="h-5 w-5 text-accent" />
                    The First Business Brick, B-74, C Block, <br /> Sector 2, Noida, Uttar Pradesh - 201301
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-xs">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      href={href}
                      key={label}
                      className="z-20 flex h-10 w-10 items-center justify-center  rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:bg-accent shadow-lg shadow-orange-200/40 border-3xl border-orange-200/40 hover:text-orange-500 hover:shadow-lg hover:shadow-orange-500/40 cursor-pointer"
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
                        <Link href={link.href} className="z-20 inline-block text-sm text-muted-foreground transition-all hover:translate-x-1 hover:text-accent">
                          {link.name}
                        </Link>
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
        <ScrollToTop />
      </div>
    </footer>
  )
}
