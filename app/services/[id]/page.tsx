import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { servicesData } from "@/lib/data/services"
import { HeroSection } from "@/components/services/HeroSection"
import { CheckCircle2 } from "lucide-react"

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const service = servicesData.find((s) => s.id === resolvedParams.id)

    if (!service) {
        return {
            title: "Service Not Found",
        }
    }

    return {
        title: `${service.title} | Our Services`,
        description: service.description,
    }
}

export default async function ServiceDetailPage({ params }: Props) {
    const resolvedParams = await params
    const service = servicesData.find((s) => s.id === resolvedParams.id)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <HeroSection
                eyebrow="Modern digital services for growth"
                title={
                    <>
                        Build, design, and scale with
                        <span className="block bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                            {service.title}
                        </span>
                    </>
                }
                description="We help teams launch fast, convert better, and grow smarter with modern web development and digital strategy."
                primaryCta={
                    <Link
                        href="/contact"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_20px_60px_-20px_rgba(245,158,11,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        Get a free consultation
                    </Link>
                }
                secondaryCta={
                    <Link
                        href="#process"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        See our process
                    </Link>
                }
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-indigo-400">Core Features</h2>
                    <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-lg text-zinc-300">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-6 text-white">Our Approach</h2>
                    <div className="space-y-6">
                        {service.process.map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{step.title}</h3>
                                    <p className="text-sm text-zinc-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
