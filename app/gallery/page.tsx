"use client"

import { useState } from "react"
import { useGallery } from "@/hooks/use-gallery"
import { motion, AnimatePresence } from "framer-motion"
import { X, Maximize2, ImageIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
    const { data: images, isLoading } = useGallery()
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#030308] text-slate-900 dark:text-white pt-32 pb-24 overflow-hidden selection:bg-orange-500/30">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute top-3/4 -right-48 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        <ImageIcon className="w-4 h-4" /> Visual Showcase
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                    >
                        Our <span className="text-orange-500">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-xl font-medium"
                    >
                        A curated collection of our creative process, team culture, and masterpiece projects.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array(6).fill(0).map((_, i) => (
                            <div key={i} className="aspect-[4/3] bg-white dark:bg-zinc-900 rounded-[2.5rem] animate-pulse border border-slate-200 dark:border-white/5" />
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    >
                        {images?.map((image, index) => (
                            <motion.div
                                key={image.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1 }
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
                                className="group relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 shadow-xl cursor-pointer"
                                onClick={() => setSelectedImage(image.image_url)}
                            >
                                <img
                                    src={image.image_url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {image.title || "Project Excellence"}
                                    </h3>
                                    <div className="flex items-center gap-2 text-white/60 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        <Maximize2 className="w-4 h-4" /> Click to expand
                                    </div>
                                </div>
                                
                                {/* Static Badge */}
                                <div className="absolute top-6 left-6 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                                    <ImageIcon className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Empty State */}
                {!isLoading && images?.length === 0 && (
                    <div className="text-center py-24 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[3rem]">
                        <ImageIcon className="w-20 h-20 mx-auto text-slate-300 dark:text-zinc-800 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">No visuals yet</h2>
                        <p className="text-slate-500 dark:text-zinc-500 mb-8">Our gallery is currently being curated. Check back soon!</p>
                        <Link href="/">
                            <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all">
                                Return Home
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Lightbox / Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute top-8 right-8 z-[110] p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>
                        
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            src={selectedImage}
                            className="max-w-full max-h-[90vh] rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
