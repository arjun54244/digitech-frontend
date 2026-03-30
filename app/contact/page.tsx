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
                                <iframe
                                    src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                                    className="w-full h-[300px] sm:h-[400px] transition-all duration-700"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
