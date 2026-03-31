"use client"
import ThreeModelViewer from "@/components/ThreeModelViewer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WorkProfessional() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">

      {/* Background gradient with colorful soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-200/10 via-orange-200/5 to-sky-200/10 dark:from-green-200/20 dark:via-orange-200/10 dark:to-sky-200/20" />

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT : 3D MODEL */}
          <div className="relative border rounded-3xl shadow-2xl h-full shadow-blue-200">
            <div className="rounded-3xl bg-white/40 p-2 backdrop-blur-2xl dark:bg-white/5 h-full flex items-center justify-center">
              <ThreeModelViewer
                modelPath="/models/team.glb"
                scale={3.5}
                position={[0, 0, 0]}
                className="h-[420px] w-full rounded-3xl"
              />
            </div>
          </div>

          {/* RIGHT : CONTENT */}
          <div className="space-y-8 relative z-10">

            {/* Tagline */}
            <span className="inline-block text-sm font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 tracking-widest uppercase">
              Digital Marketing Agency
            </span>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Grow Your Business With
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-400 to-orange-400">
                Smart Digital Strategies
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              At Digitech, we combine data-driven marketing, creative branding,
              and cutting-edge technology to help businesses grow faster online.
              From SEO to performance marketing, we deliver results that matter.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "SEO Optimization", desc: "Rank higher and reach more customers organically.", gradient: "from-green-400 via-green-300 to-green-200" },
                { title: "Performance Ads", desc: "High ROI campaigns on Google & Meta platforms.", gradient: "from-orange-400 via-orange-300 to-orange-200" },
                { title: "Branding", desc: "Build a powerful and memorable digital identity.", gradient: "from-yellow-400 via-yellow-300 to-yellow-200" },
                { title: "Social Growth", desc: "Grow engagement and audience across social platforms.", gradient: "from-sky-400 via-sky-300 to-sky-200" },
              ].map((feature, idx) => (
                <div key={idx} className={`p-4 rounded-xl border border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}>

                  {/* Glow background circle */}
                  <div className={`absolute -top-6 -right-6 h-24 w-24 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${feature.gradient} -z-10`} />
                  <div className={`absolute -bottom-6 -left-6 h-24 w-24 rounded-full blur-3xl opacity-20 bg-gradient-to-tr ${feature.gradient} -z-10`} />

                  <h4 className={`font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient}`}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white mt-1">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gradient border-2 from-sky-400 via-green-400 to-orange-400 text-gray-800 dark:text-white bg-clip-text hover:scale-105 transform transition-all duration-300"
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