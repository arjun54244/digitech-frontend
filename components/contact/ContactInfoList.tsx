"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Mail, Phone, MapPin } from "lucide-react"

const infoItems = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@yourcompany.com",
        href: "mailto:hello@yourcompany.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9876543210",
        href: "tel:+919876543210",
    },
    {
        icon: MapPin,
        label: "Studio",
        value: "Noida, Delhi NCR",
    },
]

export function ContactInfoList() {
    const elementsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        elementsRef.current.forEach((el, i) => {
            if (!el) return
            gsap.to(el, {
                y: i % 2 === 0 ? 10 : -10,
                x: i % 2 === 0 ? 6 : -6,
                duration: 10 + i * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })
        })
    }, [])

    return (
        <div className="relative flex flex-col gap-10 lg:pl-10 h-full justify-center">
            {/* Ambient background glow for Info List */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent dark:via-cyan-500/10 pointer-events-none rounded-full blur-[100px] -z-10 opacity-50" />

            <div>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                >
                    Connect Directly.
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-medium max-w-sm"
                >
                    Reach out anytime — our comm-links are always open for new transmissions.
                </motion.p>
            </div>

            <div className="space-y-6 relative z-10">
                {infoItems.map((item, index) => {
                    const Icon = item.icon
                    const content = (
                        <div className="flex items-center gap-6 rounded-3xl p-6 border border-white/60 dark:border-white/5 bg-white/70 dark:bg-[#09090b]/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.3)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] dark:hover:border-fuchsia-500/50 dark:hover:bg-black backdrop-blur-xl transition-all duration-500 group">

                            {/* Icon Container with Gradient Border Effect */}
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-100 to-cyan-100 dark:from-gray-800 dark:to-gray-900 group-hover:rotate-6 transition-transform duration-500 overflow-hidden">
                                {/* Glow behind icon inside */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Icon className="w-7 h-7 text-gray-800 dark:text-gray-200 group-hover:text-white relative z-10 transition-colors duration-500" />
                            </div>

                            <div className="flex-1">
                                <p className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-1">
                                    {item.label}
                                </p>
                                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors duration-300">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    )

                    return (
                        <motion.div
                            key={index}
                            ref={(el) => { elementsRef.current[index] = el }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.15,
                                type: "spring", stiffness: 100, damping: 20
                            }}
                        >
                            {item.href ? <a href={item.href} className="block outline-none">{content}</a> : <div className="block">{content}</div>}
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}