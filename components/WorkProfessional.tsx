
import ThreeModelViewer from "@/components/ThreeModelViewer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WorkProfessional() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#326072]/10 via-transparent to-[#326072]/10 dark:from-[#326072]/20 dark:to-[#326072]/20" />

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT : 3D MODEL */}
          <div className="relative">

            <div className="rounded-3xl border border-white/20 bg-white/40 p-2 shadow-xl backdrop-blur-xl dark:bg-white/5">

              <ThreeModelViewer
                modelPath="/models/team.glb"
                scale={3.5}
                position={[0, 0, 0]}
                className="h-[420px] w-full"
              />

            </div>

          </div>


          {/* RIGHT : CONTENT */}
          <div className="space-y-8">

            <span className="inline-block text-sm font-semibold text-[#f69d33] tracking-widest uppercase">
              Digital Marketing Agency
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Grow Your Business With  
              <span className="text-[#4f89a0]"> Smart Digital Strategies</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              At Digitech, we combine data-driven marketing, creative branding,
              and powerful technology to help businesses grow faster online.
              From SEO to performance marketing, we deliver results that matter.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4">

              <div className="p-4 rounded-xl border bg-white/60 dark:bg-white/5 backdrop-blur">
                <h4 className="font-semibold text-[#4f89a0]">
                  SEO Optimization
                </h4>
                <p className="text-sm text-gray-100">
                  Rank higher and reach more customers organically.
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-white/60 dark:bg-white/5 backdrop-blur">
                <h4 className="font-semibold text-[#4f89a0]">
                  Performance Ads
                </h4>
                <p className="text-sm text-gray-100">
                  High ROI campaigns on Google & Meta platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-white/60 dark:bg-white/5 backdrop-blur">
                <h4 className="font-semibold text-[#4f89a0]">
                  Branding
                </h4>
                <p className="text-sm text-gray-100">
                  Build a powerful and memorable digital identity.
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-white/60 dark:bg-white/5 backdrop-blur">
                <h4 className="font-semibold text-[#4f89a0]">
                  Social Growth
                </h4>
                <p className="text-sm text-gray-100">
                  Grow engagement and audience across social platforms.
                </p>
              </div>

            </div>


            {/* CTA */}
            <div className="flex gap-4 pt-4">

              <Button
                size="lg"
                className="bg-[#f69d33] hover:bg-[#e78d20] text-white"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#326072] text-[#326072]"
              >
                Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}