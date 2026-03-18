import About from "@/components/About"
import CardScroll3D from "@/components/CardScroll3D"
import ContactSection from "@/components/ContactSection"
import FaqSection from "@/components/FaqSection"
import HeroSection from "@/components/HeroSection"
import MirrorScroll3D from "@/components/MirrorScroll3D"
import Scroll3DSection from "@/components/Scroll3DSection"
import ServicesSection from "@/components/ServicesSection"
import ThreeScene from "@/components/ThreeScene"
import WorkProfessional from "@/components/WorkProfessional"

export default function Page() {
  return (
    <>
      {/* top spacing from the navbar */}
      <div className="h-20 w-screen"></div>
      {/* hero section */}
      <HeroSection compnent={<ThreeScene />} />
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
      <div className="container">
        <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
          <Scroll3DSection Component={MirrorScroll3D} />
        </div>
      </div>
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
