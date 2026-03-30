import type { Metadata } from "next"
import Link from "next/link"

import { HeroSection } from "@/components/services/HeroSection"
import { SmoothScrolling } from "@/components/services/SmoothScrolling"
import { ServicesGrid } from "@/components/services/ServicesGrid"
import { ProcessSection } from "@/components/services/ProcessSection"
import { FeatureHighlight } from "@/components/services/FeatureHighlight"
import { TestimonialsSlot } from "@/components/services/TestimonialsSlot"

export async function generateMetadata(): Promise<Metadata> {
  const brandName = "DigiTech Healthcare"

  return {
    title: `Our Services | ${brandName}`,
    description: "We offer modern web development, design, and digital solutions.",
    keywords: ["web development", "design", "digital solutions", "DigiTech Healthcare"],
    alternates: {
      canonical: "/services",
    },
    openGraph: {
      title: `Our Services | ${brandName}`,
      description: "We offer modern web development, design, and digital solutions.",
      type: "website",
    },
  }
}

export default function ServicesPage() {
  return (
    <>
      <SmoothScrolling />
      <main>
        <HeroSection
          eyebrow="Modern digital services for growth"
          title={
            <>
              Build, design, and scale with
              <span className="block bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                DigiTech
              </span>
            </>
          }
          description="We help teams launch fast, convert better, and grow smarter with modern web development and digital strategy."
          primaryCta={
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_20px_60px_-20px_rgba(245,158,11,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get a free consultation
            </Link>
          }
          secondaryCta={
            <Link
              href="#process"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See our process
            </Link>
          }
        />

        <ServicesGrid />

        <ProcessSection />

        <FeatureHighlight />

        <TestimonialsSlot />

      </main>
    </>
  )
}

