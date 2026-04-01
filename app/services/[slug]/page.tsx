import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { HeroSection } from "@/components/services/HeroSection"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import type { Service } from "@/lib/types/service"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const res = await fetch(`${process.env.APP_URL || 'http://localhost:3000'}/api/services?slug=${slug}`, { cache: 'no-store' });
    const service: Service = await res.json();

    const imageUrl = service.image_url 
        ? (service.image_url.startsWith('http') ? service.image_url : `${process.env.APP_URL || 'http://localhost:3000'}${service.image_url}`)
        : null;

    return {
        title: `${service.meta_title || service.title} | Our Services`,
        description: service.meta_description || service.short_description || "Explore our professional digital services.",
        openGraph: {
            images: imageUrl ? [{ url: imageUrl }] : [],
        }
    }
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;

    // Fetch service from internal API
    const res = await fetch(`${process.env.APP_URL || 'http://localhost:3000'}/api/services?slug=${slug}`, {
        cache: 'no-store'
    });

    if (!res.ok) notFound();
    const service: Service = await res.json();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-pink-500/30">
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
                description={service.short_description || "We help teams launch fast, convert better, and grow smarter with modern web development and digital strategy."}
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
                        href="/services"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        Back to services
                    </Link>
                }
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="flex flex-col gap-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-zinc-400 hover:text-pink-400 transition-colors font-bold tracking-wide mb-4"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to services
                    </Link>

                    {/* Content Area */}
                    <div className="prose-container text-lg sm:text-xl text-zinc-300 font-medium leading-[1.8] space-y-8 tracking-tight">
                        {service.image_url && (
                            <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-12">
                                <img
                                    src={service.image_url}
                                    alt={service.image_alt || service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div
                            dangerouslySetInnerHTML={{ __html: service.content || "" }}
                        />
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .prose-container h2 {
            font-size: 2.25rem;
            line-height: 1.2;
            font-weight: 900;
            color: #fff;
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.025em;
        }
        .prose-container h3 {
            font-size: 1.75rem;
            font-weight: 800;
            color: #fff;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }
        .prose-container p {
            margin-bottom: 1.75rem;
        }
        .prose-container ul {
            list-style-type: none;
            padding: 0;
            margin: 2rem 0;
        }
        .prose-container li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1rem;
            color: #d4d4d8;
        }
        .prose-container li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
      `}} />
        </main>
    )
}

