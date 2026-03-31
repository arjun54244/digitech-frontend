"use client"
import { motion } from "framer-motion"
import {
  Globe,
  Palette,
  Megaphone,
  Search,
  PenTool,
  Store,
  ShieldCheck,
  Video,
  FileText,
  TrendingUp,
  ShoppingCart,
  Mail,
} from "lucide-react"
import Link from "next/link"

const services = [
  { title: "Website Development", icon: Globe, gradient: "from-green-400 via-green-300 to-green-200" },
  { title: "Branding", icon: Palette, gradient: "from-orange-400 via-orange-300 to-orange-200" },
  { title: "Social Media Marketing", icon: Megaphone, gradient: "from-yellow-400 via-yellow-300 to-yellow-200" },
  { title: "Search Engine Optimization", icon: Search, gradient: "from-sky-400 via-sky-300 to-sky-200" },
  { title: "Graphic Design", icon: PenTool, gradient: "from-green-400 via-green-300 to-green-200" },
  { title: "Marketplace Management", icon: Store, gradient: "from-orange-400 via-orange-300 to-orange-200" },
  { title: "Online Reputation Management", icon: ShieldCheck, gradient: "from-yellow-400 via-yellow-300 to-yellow-200" },
  { title: "Video Marketing", icon: Video, gradient: "from-sky-400 via-sky-300 to-sky-200" },
  { title: "Content Creation", icon: FileText, gradient: "from-green-400 via-green-300 to-green-200" },
  { title: "Performance Marketing", icon: TrendingUp, gradient: "from-orange-400 via-orange-300 to-orange-200" },
  { title: "E-commerce Services", icon: ShoppingCart, gradient: "from-yellow-400 via-yellow-300 to-yellow-200" },
  { title: "WhatsApp & Email Marketing", icon: Mail, gradient: "from-sky-400 via-sky-300 to-sky-200" },
]

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#326072]/10 via-transparent to-[#326072]/10 dark:from-[#326072]/20 dark:to-[#326072]/20">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-l from-orange-400 via-yellow-400 to-green-400"
        >
          Our Digital Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg"
        >
          We craft powerful digital experiences that help brands grow,
          connect with audiences, and dominate the digital landscape.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl border border-gray-200/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Glow background circle */}
              <div className={`absolute -top-6 -right-6 h-32 w-32 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${service.gradient} -z-10`}></div>
              <div className={`absolute -bottom-6 -left-6 h-32 w-32 rounded-full blur-3xl opacity-30 bg-gradient-to-tr ${service.gradient} -z-10`}></div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-5 bg-gradient-to-br ${service.gradient} shadow-inner`}>
                  <Icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold">
                  <Link href="/">
                    {service.title}
                  </Link>
                </h3>

                {/* Hover line */}
                <div className={`mt-4 w-0 group-hover:w-12 transition-all h-1 rounded bg-gradient-to-r ${service.gradient} mx-auto`} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}