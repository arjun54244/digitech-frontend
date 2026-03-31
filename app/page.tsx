import About from "@/components/About"
import CardScroll3D from "@/components/CardScroll3D"
import ContactSection from "@/components/ContactSection"
import FaqSection from "@/components/FaqSection"
import HeroSection from "@/components/HeroSection"

import Scroll3DSectionClinet from "@/components/Scroll3DSectionClinet"
import ServicesSection from "@/components/ServicesSection"
import WorkProfessional from "@/components/WorkProfessional"
import { siteMetadata } from "@/lib/data/metadata"

export const metadata = siteMetadata.home
export default function Page() {
  return (
    <>
      {/* top spacing from the navbar */}
      <div className="h-20 w-screen"></div>
      {/* hero section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background">

        {/* Gradient Glow Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/40 px-4 py-1 text-xs font-semibold tracking-widest text-yellow-600 dark:text-yellow-400 backdrop-blur">
              🚀 India's #1 Healthcare Marketing
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Grow Your{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Healthcare Brand
              </span>{" "}
              Online
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl leading-relaxed">
              DigiTech Healthcare helps hospitals, clinics, and doctors attract more
              patients with <span className="text-foreground font-medium">powerful digital marketing strategies</span>. Trusted by
              <strong className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-semibold">
                {" "}1500+ healthcare professionals
              </strong>{" "}
              across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <button className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/40">
                Free Consultation
              </button>

              <button className="px-6 py-3 rounded-xl border border-border bg-background/50 backdrop-blur text-foreground font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-muted">
                View Services
              </button>

            </div>

            {/* Contact Info */}
            <div className="flex gap-5 pt-6 text-sm text-muted-foreground space-y-1">
              <p>📞 <span className="text-foreground font-medium">+91-9220708874</span></p>
              <p>📧 <span className="text-foreground font-medium">info@digitechhealthcare.com</span></p>
            </div>

          </div>

          {/* RIGHT SIDE (3D / VISUAL) */}
          <div className="relative h-[500px] sm:h-[550px] overflow-hidden rounded-3xl border-none bg-background/40 backdrop-blur-xl shadow-2xl">
            <HeroSection
              compnent={
                <div className="h-full w-full">
                  <CardScroll3D />
                </div>
              }
            />
          </div>

        </div>
      </section>
      {/* About section  */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="container">
          <About />
        </div>
      </section>
      {/* Services  */}
      <ServicesSection />
      {/* animation section */}
      <Scroll3DSectionClinet />
      {/* WorkProfessional */}
      <WorkProfessional />
      {/* FAQ Section */}
      <div className="">
        <FaqSection />
      </div>

      {/* Contact section */}
      <ContactSection />
    </>
  )
}
