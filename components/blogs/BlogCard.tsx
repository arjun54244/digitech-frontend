"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/data/blogs"
import { useRef } from "react"
import { useTiltEffect } from "@/hooks/useTiltEffect"

export function BlogCard({ blog, index }: { blog: BlogPost; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTiltEffect(cardRef, 10)

    // Calculate distinct Z-depth illusions for "anti-gravity" stagger
    const yOffset = index % 2 === 0 ? 0 : 50

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: yOffset }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: "easeOut" }}
            className="relative z-10 perspective-[1200px] h-full"
            style={{ marginTop: index > 1 && index % 2 !== 0 ? "-50px" : "0px" }}
        >
            <Link href={`/blogs/${blog.id}`} className="block h-full outline-none">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="group relative h-full flex flex-col rounded-[2.5rem] border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 p-5 backdrop-blur-2xl shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.2)] dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.2)] overflow-hidden transition-all duration-300 hover:border-pink-500/40 dark:hover:border-pink-500/30"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Glowing orb behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-400/10 dark:bg-pink-500/15 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div
                        className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-gray-200 dark:bg-zinc-800 mb-6 shadow-inner"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                        />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1.5 text-xs font-black tracking-wider text-pink-600 dark:text-pink-400 uppercase bg-white/90 dark:bg-black/80 backdrop-blur rounded-full shadow-sm">
                                {blog.category}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 px-3 pb-2" style={{ transform: "translateZ(25px)" }}>
                        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 line-clamp-2">
                            {blog.title}
                        </h3>
                        <p className="text-slate-600 dark:text-zinc-400 line-clamp-2 mt-auto text-base font-medium mb-6">
                            {blog.excerpt}
                        </p>

                        <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                            <div className="flex items-center gap-3">
                                <img src={blog.author.avatar} alt={blog.author.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-800" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">{blog.author.name}</span>
                                    <span className="text-xs text-slate-500 dark:text-zinc-500 flex items-center gap-1">
                                        {blog.date} <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-600 mx-1" /> {blog.readTime}
                                    </span>
                                </div>
                            </div>

                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-400 group-hover:bg-pink-500 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}
