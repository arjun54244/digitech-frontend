"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { ProjectFilter, type Category } from "./ProjectFilter"
import type { PortfolioProject } from "@/lib/data/portfolio"

export function ProjectGrid() {
    const [activeCategory, setActiveCategory] = useState<Category>("All")

    const { data: projects, isLoading, error } = useQuery<PortfolioProject[]>({
        queryKey: ["portfolio"],
        queryFn: async () => {
            const res = await fetch("/api/portfolio")
            if (!res.ok) throw new Error("Failed to fetch")
            return res.json()
        },
    })

    if (isLoading) {
        return (
            <section className="py-24 bg-slate-50 dark:bg-[#030308] flex justify-center min-h-[500px] items-center">
                <div className="h-12 w-12 rounded-full border-4 border-slate-200 dark:border-zinc-800 border-t-orange-500 dark:border-t-orange-500 animate-spin" />
            </section>
        )
    }

    if (error || !projects) {
        return (
            <section className="py-24 bg-slate-50 dark:bg-[#030308] flex justify-center text-red-500 dark:text-red-400">
                <p>Failed to load portfolio. Please try again.</p>
            </section>
        )
    }

    const filteredProjects = projects.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
    )

    return (
        <section className="relative bg-slate-50 dark:bg-[#030308] py-24 px-4 sm:px-6 lg:px-8 min-h-screen z-10">
            <div className="mx-auto max-w-7xl">
                <ProjectFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 gap-y-16 lg:gap-y-24">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                key={project.id}
                                className="h-full"
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-slate-500 dark:text-zinc-500 mt-20"
                    >
                        No projects found in this category.
                    </motion.p>
                )}
            </div>
        </section>
    )
}
