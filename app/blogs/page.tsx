import { siteMetadata } from "@/lib/data/metadata"
import { BlogHero } from "@/components/blogs/BlogHero"
import { BlogGrid } from "@/components/blogs/BlogGrid"
import { Suspense } from "react"

export const metadata = siteMetadata.blogs

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#030308] text-slate-900 dark:text-white selection:bg-pink-500/30">
            <BlogHero />
            <Suspense fallback={
                <div className="h-[500px] flex items-center justify-center">
                    <div className="h-12 w-12 border-4 border-t-pink-500 animate-spin rounded-full" />
                </div>
            }>
                <BlogGrid />
            </Suspense>
        </main>
    )
}
