


import AboutAnimations from "./homeAbout/AboutAnimations"
import Counter from "./homeAbout/Counter"
import DigitalMarkingWrapper from "./homeAbout/DigitalMarkingWrapper"

import { Activity, HeartPulse, Stethoscope, Users } from "lucide-react"


export default function AboutSection() {
  return (
    <div className="overflow-hidden py-8">

      {/* CLIENT ANIMATION */}
      <AboutAnimations />

      {/* Floating Icons (soft + adaptive) */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Activity className="absolute top-20 left-10 h-14 w-14 text-[#326072]" />
        <HeartPulse className="absolute right-20 bottom-20 h-16 w-16 text-[#f69d33]" />
      </div>

      {/* MAIN GRID */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold tracking-[0.25em] border-2 border-orange-400 px-3 rounded-full shadow-lg shadow-orange-400/20 uppercase bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            About DigiTech Healthcare
          </span>

          <h2 className="about-title mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
            Transforming Healthcare
            <span className="relative block mt-2 bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              Through Digital Innovation
              <span className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-orange-400/40 via-amber-400/40 to-cyan-400/20 -z-10"></span>
            </span>
          </h2>

          <p className="about-text mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
            DigiTech Healthcare helps doctors, hospitals, and clinics grow
            digitally and attract more patients.
          </p>

          <p className="about-text mt-4 text-muted-foreground/80 max-w-xl">
            We combine marketing, technology, and healthcare expertise to build
            powerful online brands that deliver real results.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="rounded-2xl p-4">
            <DigitalMarkingWrapper />
          </div>
        </div>
      </div>

      {/* STATS */}
      <Counter />
    </div>
  )
}