"use client"
import React, { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
]

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Initial animation
    const nav = navRef.current
    if (nav) {
      gsap.from(nav, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border/30 bg-background/80 py-4 backdrop-blur-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex h-10 items-center justify-center rounded-lg bg-white px-2"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={110}
                height={28}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/appointment" className="hidden md:block">
                <MagneticButton variant="primary" size="sm">
                  Get Started
                </MagneticButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-display text-3xl font-bold text-foreground transition-colors hover:text-accent"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.name}
            </a>
          ))}
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={() => setIsMobileOpen(false)}
          >
            Get Started
          </MagneticButton>
        </div>
      </div>
    </>
  )
}
