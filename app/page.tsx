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
      <HeroSection
        compnent={
          <div className="h-screen overflow-hidden">
            <CardScroll3D />
          </div>
        }
      />
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
