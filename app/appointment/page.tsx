import type { Metadata } from "next"
import { AppointmentHero } from "@/components/appointment/AppointmentHero"
import { AppointmentForm } from "@/components/appointment/AppointmentForm"

export const metadata: Metadata = {
    title: "Book an Appointment | DigiTech Healthcare",
    description: "Schedule a consultation with our experts to discuss your digital needs and explore how we can help your business grow.",
    alternates: {
        canonical: "/appointment",
    },
}

export default function AppointmentPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white selection:bg-orange-500/30 overflow-hidden">
            <AppointmentHero />

            <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                {/* Immersive Background Glow for the Section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 dark:bg-orange-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="w-full">
                    <AppointmentForm />
                </div>
            </section>
        </main>
    )
}
