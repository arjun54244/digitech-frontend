import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfoList } from "@/components/contact/ContactInfoList"
import { siteMetadata } from "@/lib/data/metadata"

export const metadata = siteMetadata.contact

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white selection:bg-fuchsia-500/30 overflow-hidden">
            <ContactHero />

            <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                {/* Immersive Background Glow for the Section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/5 dark:bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Form Section (Takes up more space) */}
                    <div className="col-span-1 lg:col-span-7">
                        <ContactForm />
                    </div>

                    {/* Info List & Map Section */}
                    <div className="col-span-1 lg:col-span-5 flex flex-col gap-12 h-full">
                        <ContactInfoList />

                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                Global Headquarters
                            </h3>
                            <div className="group relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.3)] border border-gray-200 dark:border-white/10">
                                {/* Map component (using standard iframe wrapper or the user's component if exported) */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.069458920194!2d77.30602047805175!3d28.584766399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56408add5c9%3A0x81694818142d8dd3!2sDigitech%20Healthcare!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    className="w-full h-[300px] sm:h-[400px] filter grayscale hover:grayscale-0 transition-all duration-700"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                {/* Glass overlay pointer blocker on initial to look premium */}
                                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
