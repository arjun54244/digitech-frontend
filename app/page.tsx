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
      <section className="w-full min-h-screen flex items-center bg-transparent relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <span className="text-yellow-600 font-semibold uppercase tracking-widest">
              India's #1 Healthcare Digital Marketing Company
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Grow Your <span className="text-yellow-600">Healthcare Brand</span> Online
            </h1>

            <p className="text-lg text-white max-w-xl">
              DigiTech Healthcare helps hospitals, clinics, and doctors attract more
              patients with powerful digital marketing strategies. Trusted by
              <strong> 1500+ healthcare professionals </strong> across India.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition">
                Free Consultation
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                View Services
              </button>
            </div>

            <div className="pt-6 text-sm text-gray-500">
              📞 +91-9220708874
              <br />
              📧 info@digitechhealthcare.com
            </div>

          </div>
          <HeroSection
            compnent={
              <div className="h-screen overflow-hidden">
                <CardScroll3D />
              </div>
            }
          />
        </div>

      </section>
      {/* About section  */}
      <div className="container">
        <div className="my-50 flex h-screen w-screen items-center justify-center">
          <About />
        </div>
      </div>
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
