"use client"

import { motion } from "framer-motion"

export type Category = "All" | "Web App" | "Design" | "3D" | "Marketing"

const categories: Category[] = ["All", "Web App", "Design", "3D", "Marketing"]

export function ProjectFilter({
    activeCategory,
    onCategoryChange,
}: {
    activeCategory: Category
    onCategoryChange: (category: Category) => void
}) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors outline-none ${activeCategory === category
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeFilterBubble"
                            className="absolute inset-0 bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 rounded-full z-0"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    )
}
