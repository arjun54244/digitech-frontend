"use client"
import { motion } from "framer-motion"
import { BlogCard } from "./BlogCard"
import type { Blog } from "@/lib/types/blog"
import { memo } from "react"
import { useQuery } from "@tanstack/react-query"

async function fetchBlogs(): Promise<Blog[]> {
    const res = await fetch("/api/blogs")
    if (!res.ok) throw new Error("Failed to fetch blogs")
    return res.json()
}

const RanderBlog = memo(() => {
    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
        //staleTime: 1000 * 60 * 5, // ✅ 5 min cache
        refetchOnWindowFocus: false,
    })

    // Loading state with premium anti-gravity styling
    if (isLoading) {
        return (
            <section className="py-24 bg-slate-50 dark:bg-[#030308] flex justify-center min-h-[500px] items-center">
                <div className="h-12 w-12 rounded-full border-4 border-slate-200 dark:border-zinc-800 border-t-pink-500 dark:border-t-pink-500 animate-spin" />
            </section>
        )
    }

    // Error state
    if (error || !blogs) {
        return (
            <section className="py-24 bg-slate-50 dark:bg-[#030308] flex justify-center text-red-500 dark:text-red-400 min-h-[500px] items-center">
                <p className="font-medium text-lg">Failed to load blogs. Please try again.</p>
            </section>
        )
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16 gap-8 mx-auto max-w-5xl"
        >
            {blogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
        </motion.div>
    )
})

export default RanderBlog