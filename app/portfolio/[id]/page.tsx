import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const project = portfolioData.find((p) => p.id === resolvedParams.id)
    if (!project) return { title: "Project Not Found" }
    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
    }
}

export default async function PortfolioDetailPage({ params }: Props) {
    const resolvedParams = await params
    const project = portfolioData.find((p) => p.id === resolvedParams.id)

    if (!project) notFound()

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#030308] text-slate-900 dark:text-white selection:bg-orange-500/30 overflow-hidden">
            {/* Background gradients */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-400/20 dark:bg-orange-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-400/20 dark:bg-indigo-500/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-slate-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-12 font-medium"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to all works
                </Link>

                <div className="mb-16">
                    <div className="inline-flex mb-6">
                        <span className="px-3 py-1 text-sm font-bold tracking-widest text-orange-600 dark:text-orange-400 uppercase border border-orange-500/20 rounded-full bg-orange-500/10 backdrop-blur">
                            {project.category}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 drop-shadow-sm">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-300 max-w-4xl leading-relaxed mb-12 font-medium">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 shadow-sm rounded-lg text-sm font-bold text-slate-700 dark:text-zinc-300">
                                {tech}
                            </span>
                        ))}

                        {/* Divider */}
                        <div className="h-8 w-px bg-slate-300 dark:bg-white/10 mx-4 hidden sm:block" />

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-8 py-4 font-bold text-white dark:text-black shadow-lg transition-all hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white"
                        >
                            Visit Project <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Gallery */}
                <div className="space-y-12">
                    {project.gallery.map((imgUrl, i) => (
                        <div key={i} className="rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl bg-slate-200 dark:bg-zinc-900 aspect-video relative">
                            <img
                                src={imgUrl}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
