"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const infoItems = [
    { icon: Mail, label: "Email", value: "hello@yourcompany.com", href: "mailto:hello@yourcompany.com" },
    { icon: Phone, label: "Phone", value: "+91 9876543210", href: "tel:+919876543210" },
    { icon: MapPin, label: "Studio", value: "Noida, Delhi NCR" },
]

export function ContactForm() {
    const [focusedInput, setFocusedInput] = useState<string | null>(null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
        >
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/40 dark:border-white/10 bg-white/60 dark:bg-[#09090b]/60 p-8 sm:p-12 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
                {/* Decorative Internal Glow */}
                <div className="absolute top-0 right-0 -m-32 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-purple-500/20 blur-[80px] pointer-events-none dark:from-fuchsia-500/20 dark:to-cyan-500/20" />

                <div className="relative z-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                        Send a Message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                        We'll get back to you faster than light speed.
                    </p>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {["name", "email", "message"].map((field) => (
                            <div className="space-y-3" key={field}>
                                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider pl-1">
                                    {field}
                                </label>
                                <div
                                    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden
                                    ${focusedInput === field
                                            ? "border-fuchsia-500 bg-white dark:bg-black shadow-[0_0_30px_-5px_rgba(217,70,239,0.3)]"
                                            : "border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5"}
                                    `}
                                >
                                    {field !== "message" ? (
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            onFocus={() => setFocusedInput(field)}
                                            onBlur={() => setFocusedInput(null)}
                                            className="w-full bg-transparent px-5 py-5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none font-medium transition-colors"
                                            placeholder={field === "name" ? "E.g. Elon Musk" : "elon@spacex.com"}
                                        />
                                    ) : (
                                        <textarea
                                            rows={5}
                                            onFocus={() => setFocusedInput(field)}
                                            onBlur={() => setFocusedInput(null)}
                                            className="w-full bg-transparent px-5 py-5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none resize-none font-medium"
                                            placeholder="Tell us about your next big idea..."
                                        />
                                    )}

                                    {/* Focus Outline Glow Line */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 transform origin-left transition-transform duration-500 ease-out flex ${focusedInput === field ? "scale-x-100" : "scale-x-0"}`}
                                    />
                                </div>
                            </div>
                        ))}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-900 dark:bg-white px-8 py-5 font-bold text-white dark:text-black shadow-xl overflow-hidden mt-4"
                        >
                            <span className="relative z-10 flex items-center gap-3 tracking-wide text-lg">
                                Send Transmission <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-fuchsia-600 via-pink-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            {/* Dark mode text flip on hover handled by making text white over the gradient */}
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-fuchsia-600 via-pink-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-color-burn" />
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    )
}
