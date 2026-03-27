"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Calendar, Clock, ChevronDown } from "lucide-react"

export function AppointmentForm() {
    const [focusedInput, setFocusedInput] = useState<string | null>(null)
    const [service, setService] = useState("")

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full max-w-4xl mx-auto"
        >
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/40 dark:border-white/10 bg-white/60 dark:bg-[#09090b]/60 p-8 sm:p-12 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
                {/* Decorative Internal Glow */}
                <div className="absolute top-0 right-0 -m-32 h-64 w-64 rounded-full bg-gradient-to-br from-orange-400/20 to-fuchsia-500/20 blur-[80px] pointer-events-none dark:from-orange-500/20 dark:to-cyan-500/20" />

                <div className="relative z-10 w-full">
                    <div className="text-center mb-10 text-balance">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                            Book an Appointment
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            Fill out the details below and we'll confirm your slot shortly.
                        </p>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name, Email, Phone */}
                            {["name", "email", "phone"].map((field) => (
                                <div className={`space-y-3 ${field === "phone" ? "md:col-span-2" : ""}`} key={field}>
                                    <label className="text-sm font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider pl-1">
                                        {field}
                                    </label>
                                    <div
                                        className={`relative rounded-2xl border transition-all duration-500 overflow-hidden
                                        ${focusedInput === field
                                                ? "border-orange-500 bg-white dark:bg-black shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                                                : "border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5"}
                                        `}
                                    >
                                        <input
                                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                            onFocus={() => setFocusedInput(field)}
                                            onBlur={() => setFocusedInput(null)}
                                            className="w-full bg-transparent px-5 py-5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none font-medium transition-colors"
                                            placeholder={field === "name" ? "E.g. Elon Musk" : field === "email" ? "elon@spacex.com" : "+1 (555) 000-0000"}
                                        />
                                        <div
                                            className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500 to-fuchsia-500 transform origin-left transition-transform duration-500 ease-out flex ${focusedInput === field ? "scale-x-100" : "scale-x-0"}`}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Date */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider pl-1 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Preferred Date
                                </label>
                                <div
                                    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden
                                    ${focusedInput === "date"
                                            ? "border-orange-500 bg-white dark:bg-black shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                                            : "border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5"}
                                    `}
                                >
                                    <input
                                        type="date"
                                        onFocus={() => setFocusedInput("date")}
                                        onBlur={() => setFocusedInput(null)}
                                        className="w-full bg-transparent px-5 py-5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none font-medium transition-colors date-input"
                                    />
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500 to-fuchsia-500 transform origin-left transition-transform duration-500 ease-out flex ${focusedInput === "date" ? "scale-x-100" : "scale-x-0"}`}
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider pl-1 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Preferred Time
                                </label>
                                <div
                                    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden
                                    ${focusedInput === "time"
                                            ? "border-orange-500 bg-white dark:bg-black shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                                            : "border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5"}
                                    `}
                                >
                                    <input
                                        type="time"
                                        onFocus={() => setFocusedInput("time")}
                                        onBlur={() => setFocusedInput(null)}
                                        className="w-full bg-transparent px-5 py-5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none font-medium transition-colors time-input"
                                    />
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500 to-fuchsia-500 transform origin-left transition-transform duration-500 ease-out flex ${focusedInput === "time" ? "scale-x-100" : "scale-x-0"}`}
                                    />
                                </div>
                            </div>

                            {/* Service */}
                            <div className="space-y-3 md:col-span-2">
                                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider pl-1">
                                    Service of Interest
                                </label>
                                <div
                                    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden
                                    ${focusedInput === "service"
                                            ? "border-orange-500 bg-white dark:bg-black shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                                            : "border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5"}
                                    `}
                                >
                                    <div className="relative">
                                        <select
                                            value={service}
                                            onChange={(e) => setService(e.target.value)}
                                            onFocus={() => setFocusedInput("service")}
                                            onBlur={() => setFocusedInput(null)}
                                            className="w-full appearance-none bg-transparent px-5 py-5 text-gray-900 dark:text-white outline-none font-medium cursor-pointer"
                                        >
                                            <option value="" disabled className="text-gray-500 dark:bg-gray-900">Select a service</option>
                                            <option value="web" className="dark:bg-[#09090b]">Web Development</option>
                                            <option value="app" className="dark:bg-[#09090b]">App Development</option>
                                            <option value="design" className="dark:bg-[#09090b]">UI/UX Design</option>
                                            <option value="marketing" className="dark:bg-[#09090b]">Digital Marketing</option>
                                            <option value="other" className="dark:bg-[#09090b]">Other / Consultation</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-500">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500 to-fuchsia-500 transform origin-left transition-transform duration-500 ease-out flex ${focusedInput === "service" ? "scale-x-100" : "scale-x-0"}`}
                                    />
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="space-y-3 md:col-span-2">
                                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider pl-1">
                                    Additional Notes
                                </label>
                                <div
                                    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden
                                    ${focusedInput === "notes"
                                            ? "border-orange-500 bg-white dark:bg-black shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                                            : "border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5"}
                                    `}
                                >
                                    <textarea
                                        rows={4}
                                        onFocus={() => setFocusedInput("notes")}
                                        onBlur={() => setFocusedInput(null)}
                                        className="w-full bg-transparent px-5 py-5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none resize-none font-medium"
                                        placeholder="Any specific details you want to share beforehand..."
                                    />
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500 to-fuchsia-500 transform origin-left transition-transform duration-500 ease-out flex ${focusedInput === "notes" ? "scale-x-100" : "scale-x-0"}`}
                                    />
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-900 dark:bg-white px-8 py-5 font-bold text-white dark:text-black shadow-xl overflow-hidden mt-6"
                        >
                            <span className="relative z-10 flex items-center gap-3 tracking-wide text-lg">
                                Schedule Appointment <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            {/* Dark mode text flip on hover handled by making text white over the gradient */}
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-color-burn" />
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    )
}
