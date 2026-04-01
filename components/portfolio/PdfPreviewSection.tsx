"use client"

import { useEffect, useState } from "react"
import { FileText, ChevronRight, Download, Search } from "lucide-react"
import { usePortfolios } from "@/hooks/use-portfolio"
import { motion, AnimatePresence } from "framer-motion"

export default function PdfPreviewSection() {
    const { data: allItems, isLoading } = usePortfolios()
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState("")

    // Filter only PDF type items
    const portfolios = allItems?.filter(item => item.type === "pdf")

    useEffect(() => {
        if (!selectedPdf && portfolios && portfolios.length > 0) {
            setSelectedPdf(portfolios[0].link)
        }
    }, [portfolios, selectedPdf])

    const filteredPortfolios = portfolios?.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#030308] overflow-hidden">
            {/* Background elements to match anti-gravity theme */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
                    >
                        Portfolio <span className="text-orange-500">Documents</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Browse and preview our specialized service portfolios and case studies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Portfolio Selection Side */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search documents..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                            />
                        </div>

                        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            {isLoading ? (
                                Array(3).fill(0).map((_, i) => (
                                    <div key={i} className="h-24 bg-slate-200 dark:bg-zinc-800 animate-pulse rounded-2xl" />
                                ))
                            ) : filteredPortfolios && filteredPortfolios.length > 0 ? (
                                filteredPortfolios.map((portfolio) => (
                                    <motion.button
                                        key={portfolio.id}
                                        onClick={() => setSelectedPdf(portfolio.link)}
                                        whileHover={{ x: 4 }}
                                        className={`w-full flex items-center p-4 rounded-2xl border transition-all text-left group ${selectedPdf === portfolio.link
                                            ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                                            : "bg-white dark:bg-zinc-900/50 border-slate-200 dark:border-white/10 hover:border-orange-500/50"
                                            }`}
                                    >
                                        <div className={`w-12 h-12 flex items-center justify-center rounded-xl mr-4 ${selectedPdf === portfolio.link ? "bg-white/20" : "bg-orange-500/10"
                                            }`}>
                                            <FileText className={`w-6 h-6 ${selectedPdf === portfolio.link ? "text-white" : "text-orange-500"}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-bold truncate ${selectedPdf === portfolio.link ? "text-white" : "text-slate-900 dark:text-white"}`}>
                                                {portfolio.title}
                                            </p>
                                            <p className={`text-xs ${selectedPdf === portfolio.link ? "text-white/80" : "text-slate-500 dark:text-zinc-500"}`}>
                                                PDF Document
                                            </p>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${selectedPdf === portfolio.link ? "text-white" : "text-slate-300 dark:text-zinc-700"
                                            }`} />
                                    </motion.button>
                                ))
                            ) : (
                                <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl">
                                    <FileText className="w-12 h-12 mx-auto text-slate-300 dark:text-zinc-700 mb-4 opacity-20" />
                                    <p className="text-slate-500 dark:text-zinc-500 font-medium">No documents found</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Preview Side */}
                    <div className="lg:col-span-8">
                        <CardWrapper>
                            <div className="w-full h-[600px] md:h-[750px] relative">
                                <AnimatePresence mode="wait">
                                    {selectedPdf ? (
                                        <motion.div
                                            key={selectedPdf}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            className="w-full h-full"
                                        >
                                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                                                <a
                                                    href={selectedPdf}
                                                    download
                                                    className="p-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:text-orange-500 transition-colors"
                                                    title="Download PDF"
                                                >
                                                    <Download className="w-5 h-5" />
                                                </a>
                                            </div>
                                            <iframe
                                                src={`${selectedPdf}#toolbar=0&navpanes=0`}
                                                className="w-full h-full rounded-3xl border-none shadow-2xl bg-white"
                                                title="Portfolio Preview"
                                            />
                                        </motion.div>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-zinc-900/30 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10 p-12 text-center overflow-hidden">
                                            {/* Decorative circles */}
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                                                <div className="absolute -top-24 -left-24 w-64 h-64 border border-orange-500/20 rounded-full" />
                                                <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-orange-500/10 rounded-full" />
                                            </div>

                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-3xl bg-orange-500/10 flex items-center justify-center mb-6 transform -rotate-12">
                                                    <FileText className="w-12 h-12 text-orange-500" />
                                                </div>
                                                <motion.div
                                                    animate={{ y: [0, -10, 0] }}
                                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                                    className="w-16 h-16 rounded-2xl bg-rose-500/20 absolute -top-4 -right-4 flex items-center justify-center border border-rose-500/30"
                                                >
                                                    <ChevronRight className="w-8 h-8 text-rose-500 rotate-90" />
                                                </motion.div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Select a Document</h3>
                                            <p className="text-slate-500 dark:text-zinc-500 max-w-sm">
                                                Choose a portfolio from the left panel to preview the document instantly.
                                            </p>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </CardWrapper>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CardWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent shadow-2xl">
            <div className="rounded-[2.25rem] overflow-hidden bg-white dark:bg-zinc-950">
                {children}
            </div>
        </div>
    )
}