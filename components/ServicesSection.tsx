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
  { title: "Website Development", icon: Globe },
  { title: "Branding", icon: Palette },
  { title: "Social Media Marketing", icon: Megaphone },
  { title: "Search Engine Optimization", icon: Search },
  { title: "Graphic Design", icon: PenTool },
  { title: "Marketplace Management", icon: Store },
  { title: "Online Reputation Management", icon: ShieldCheck },
  { title: "Video Marketing", icon: Video },
  { title: "Content Creation", icon: FileText },
  { title: "Performance Marketing", icon: TrendingUp },
  { title: "E-commerce Services", icon: ShoppingCart },
  { title: "WhatsApp & Email Marketing", icon: Mail },
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
          className="text-4xl md:text-5xl font-bold text-[#dfa21f]"
        >
          Our Digital Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto"
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#326072]/20 via-transparent to-[#326072]/20" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#326072]/10 mb-5">
                  <Icon className="w-6 h-6 text-[#dfa21f]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold">
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {service.title}
                    </Link>
                </h3>

                {/* Hover Line */}
                <div className="mt-4 w-0 group-hover:w-10 transition-all h-[2px] bg-[#326072]" />

              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}