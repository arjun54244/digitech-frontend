import { siteMetadata } from "@/lib/data/metadata"
import { BlogHero } from "@/components/blogs/BlogHero"
import { BlogGrid } from "@/components/blogs/BlogGrid"

export const metadata = siteMetadata.blogs

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#030308] text-slate-900 dark:text-white selection:bg-pink-500/30">
            <BlogHero />
            <BlogGrid />
        </main>
    )
}
