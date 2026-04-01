import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import type { Metadata } from "next"
import { format } from "date-fns"
import type { Blog } from "@/lib/types/blog"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const res = await fetch(`${process.env.APP_URL || 'http://localhost:3000'}/api/blogs?slug=${slug}`, { cache: 'no-store' });
    const blog: Blog = await res.json();

    if (!blog) return { title: "Blog Not Found" };

    const imageUrl = blog.image_url
        ? (blog.image_url.startsWith('http') ? blog.image_url : `${process.env.APP_URL || 'http://localhost:3000'}${blog.image_url}`)
        : null;

    return {
        title: `${blog.meta_title || blog.title} | DigiTech`,
        description: blog.meta_description || blog.short_description || "Read more on DigiTech.",
        keywords: blog.meta_keywords || "DigiTech, Technology, Innovation",
        openGraph: {
            title: blog.title || blog.meta_title || "DigiTech",
            description: blog.short_description || blog.meta_description || "Read more on DigiTech.",
            images: imageUrl ? [{ url: imageUrl }] : [],
        }
    }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch blog from internal API
    const res = await fetch(`${process.env.APP_URL || 'http://localhost:3000'}/api/blogs?slug=${slug}`, {
        cache: 'no-store'
    });

    if (!res.ok) notFound();
    const blog: Blog = await res.json();

    // Fallbacks for fields not in current DB schema
    const displayDate = format(new Date(blog.created_at), "MMM dd, yyyy")
    const displayCategory = "Tech & Innovation"
    const displayReadTime = "5 min read"
    const displayAuthor = {
        name: "DigiTech Admin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
        role: "Editor-in-Chief"
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-pink-500/30 overflow-hidden relative">            {/* Immersive Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-400/20 dark:bg-pink-500/10 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-indigo-400/20 dark:bg-indigo-500/10 blur-[150px] rounded-full" />
            </div>

            {/* Hero Header Area */}
            <article className="relative z-10">
                <header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-slate-500 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors mb-10 font-bold tracking-wide"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to transmissions
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 text-xs font-black tracking-widest text-pink-600 dark:text-pink-400 uppercase border border-pink-500/20 rounded-full bg-pink-500/10 backdrop-blur">
                            {displayCategory}
                        </span>
                        <span className="text-slate-500 dark:text-zinc-500 text-sm font-semibold flex items-center gap-2">
                            {displayDate} <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-600" /> {displayReadTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.1] drop-shadow-sm">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                        <img src={displayAuthor.avatar} alt={displayAuthor.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-zinc-800" />
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">{displayAuthor.name}</p>
                            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">{displayAuthor.role}</p>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 lg:mb-24">
                    <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl relative">
                        <img
                            src={blog.image_url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"}
                            alt={blog.image_alt || blog.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24 lg:pb-32 flex flex-col md:flex-row gap-12">

                    {/* Social Share sidebar (Sticky) */}
                    <aside className="md:w-16 flex-shrink-0">
                        <div className="sticky top-32 flex flex-col gap-4">
                            <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                Share String
                            </p>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-colors shadow-sm text-slate-600 dark:text-zinc-400">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-colors shadow-sm text-slate-600 dark:text-zinc-400">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-colors shadow-sm text-slate-600 dark:text-zinc-400">
                                <Linkedin className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-colors shadow-sm text-slate-600 dark:text-zinc-400 mt-4">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </aside>

                    {/* Rich Text Body */}
                    <div className="flex-1 text-lg sm:text-xl text-slate-700 dark:text-zinc-300 font-medium leading-[1.8] space-y-8 tracking-tight">
                        <p className="text-xl sm:text-2xl font-semibold italic text-slate-900 dark:text-white border-l-4 border-pink-500 pl-6 mb-12">
                            {blog.short_description}
                        </p>

                        {/* Render HTML content safely */}
                        <div
                            className="prose-container"
                            dangerouslySetInnerHTML={{ __html: blog.content || "" }}
                        />
                    </div>
                </div>
            </article>

            <style dangerouslySetInnerHTML={{
                __html: `
        .prose-container h2 {
            font-size: 2.25rem;
            line-height: 1.2;
            font-weight: 900;
            color: var(--tw-prose-headings);
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.025em;
        }
        .prose-container h3 {
            font-size: 1.75rem;
            font-weight: 800;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }
        .prose-container p {
            margin-bottom: 1.75rem;
        }
        .prose-container blockquote {
            border-left: 4px solid #ec4899;
            padding-left: 1.5rem;
            font-size: 1.5rem;
            font-style: italic;
            font-weight: 700;
            margin: 3rem 0;
            color: inherit;
        }
        @media (prefers-color-scheme: dark) {
            .prose-container h2, .prose-container h3 { color: #fff; }
        }
        @media (prefers-color-scheme: light) {
            .prose-container h2, .prose-container h3 { color: #0f172a; }
        }
        html.dark .prose-container h2, html.dark .prose-container h3 { color: #fff; }
        html.light .prose-container h2, html.light .prose-container h3 { color: #0f172a; }
      `}} />

        </main>
    )
}

