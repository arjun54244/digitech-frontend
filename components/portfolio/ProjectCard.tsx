"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { PortfolioProject } from "@/lib/data/portfolio"
import { useRef } from "react"
import { useTiltEffect } from "@/hooks/useTiltEffect"

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTiltEffect(cardRef, 12)

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
            <Link href={`/portfolio/${project.id}`} className="block h-full outline-none">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="group relative h-full flex flex-col rounded-[2.5rem] border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 p-5 backdrop-blur-2xl shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)] overflow-hidden transition-all duration-300 hover:border-orange-500/40 dark:hover:border-orange-500/30"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Glowing orb behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-400/10 dark:bg-orange-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div
                        className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-200 dark:bg-zinc-800 mb-6 shadow-inner"
                        style={{ transform: "translateZ(30px)" }} // Image pops out in 3D
                    >
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                        />

                        {/* Hover overlay button */}
                        <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 scale-75 group-hover:scale-100">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-orange-50 hover:text-orange-600 transition-colors">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 px-3 pb-2" style={{ transform: "translateZ(25px)" }}>
                        <div className="mb-3 inline-flex">
                            <span className="text-xs font-black tracking-[0.2em] text-orange-600 dark:text-orange-400 uppercase">
                                {project.category}
                            </span>
                        </div>
                        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-zinc-400 line-clamp-2 mt-auto text-base font-medium">
                            {project.description}
                        </p>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}
