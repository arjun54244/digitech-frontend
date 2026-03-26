import type { LucideIcon } from "lucide-react"
import {
  LayoutGrid,
  LineChart,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Workflow,
} from "lucide-react"

export type Service = {
  key: string
  icon: LucideIcon
  title: string
  description: string
  accentColor: string
  iconGradientClass: string
}

export const services: readonly Service[] = [
  {
    key: "website-development",
    icon: LayoutGrid,
    title: "Website Development",
    description: "Custom, responsive websites built for performance and scalability.",
    accentColor: "rgb(255 159 64)", // brighter orange
    iconGradientClass: "from-orange-400/70 via-orange-500/60 to-yellow-300/50",
  },
  {
    key: "branding",
    icon: Sparkles,
    title: "Branding",
    description: "Build a strong identity with impactful brand strategies and visuals.",
    accentColor: "rgb(255 95 109)", // hot pink
    iconGradientClass: "from-pink-400/70 via-fuchsia-500/60 to-purple-400/50",
  },
  {
    key: "social-media-marketing",
    icon: LineChart,
    title: "Social Media Marketing",
    description: "Engage and grow your audience across all major social platforms.",
    accentColor: "rgb(52 211 248)", // bright cyan
    iconGradientClass: "from-cyan-400/70 via-sky-400/60 to-blue-400/50",
  },
  {
    key: "seo",
    icon: Workflow,
    title: "Search Engine Optimization",
    description: "Improve rankings and drive organic traffic with proven SEO strategies.",
    accentColor: "rgb(255 200 0)", // vivid yellow
    iconGradientClass: "from-amber-400/70 via-orange-400/60 to-rose-400/50",
  },
  {
    key: "graphic-design",
    icon: ShieldCheck,
    title: "Graphic Design",
    description: "Creative designs that communicate your brand message effectively.",
    accentColor: "rgb(120 92 255)", // brighter indigo
    iconGradientClass: "from-indigo-400/70 via-violet-400/60 to-teal-400/50",
  },
  {
    key: "marketplace-management",
    icon: Smartphone,
    title: "Marketplace Management",
    description: "Manage and optimize your presence on e-commerce marketplaces.",
    accentColor: "rgb(255 85 174)", // vivid fuchsia
    iconGradientClass: "from-fuchsia-400/70 via-purple-400/60 to-pink-400/50",
  },
  {
    key: "online-reputation-management",
    icon: LayoutGrid,
    title: "Online Reputation Management",
    description: "Monitor and enhance your brand's online reputation effectively.",
    accentColor: "rgb(52 211 153)", // bright emerald
    iconGradientClass: "from-emerald-400/70 via-green-400/60 to-lime-400/50",
  },
  {
    key: "video-marketing",
    icon: Sparkles,
    title: "Video Marketing",
    description: "Create compelling video content to boost engagement and conversions.",
    accentColor: "rgb(255 111 0)", // bright orange-red
    iconGradientClass: "from-orange-400/70 via-red-400/60 to-pink-400/50",
  },
  {
    key: "content-creation",
    icon: LineChart,
    title: "Content Creation",
    description: "High-quality content tailored to attract and retain your audience.",
    accentColor: "rgb(66 165 245)", // vivid blue
    iconGradientClass: "from-blue-400/70 via-sky-400/60 to-cyan-400/50",
  },
  {
    key: "performance-marketing",
    icon: Workflow,
    title: "Performance Marketing",
    description: "Data-driven campaigns that maximize ROI and conversions.",
    accentColor: "rgb(191 90 242)", // bright purple
    iconGradientClass: "from-purple-400/70 via-violet-400/60 to-fuchsia-400/50",
  },
  {
    key: "ecommerce-services",
    icon: ShieldCheck,
    title: "E-commerce Services",
    description: "End-to-end solutions for building and scaling online stores.",
    accentColor: "rgb(56 178 255)", // bright sky blue
    iconGradientClass: "from-sky-400/70 via-blue-400/60 to-indigo-400/50",
  },
  {
    key: "whatsapp-email-marketing",
    icon: Smartphone,
    title: "WhatsApp & Email Marketing",
    description: "Reach customers directly with targeted messaging and automation.",
    accentColor: "rgb(52 211 129)", // bright green
    iconGradientClass: "from-green-400/70 via-emerald-400/60 to-teal-400/50",
  },
] as const

export type ProcessStep = {
  key: string
  title: string
  description: string
  detail: string
}

export const processSteps: readonly ProcessStep[] = [
  {
    key: "discover",
    title: "Discover",
    description: "Align on goals, users, and outcomes.",
    detail: "We map your needs into a clear plan: KPIs, audience, and delivery milestones.",
  },
  {
    key: "design",
    title: "Design",
    description: "Create a system that converts.",
    detail: "We craft UX flows, UI components, and high-fidelity screens with brand consistency.",
  },
  {
    key: "build",
    title: "Build",
    description: "Ship a production-ready product.",
    detail: "We develop with performance, accessibility, and maintainability at the core.",
  },
  {
    key: "optimize",
    title: "Optimize",
    description: "Improve and iterate with data.",
    detail: "We refine experiences based on analytics, user feedback, and experiment results.",
  },
] as const

export type Testimonial = {
  key: string
  name: string
  role: string
  avatar: string
  quote: string
  rating: number
}

export const testimonials: readonly Testimonial[] = [
  {
    key: "t1",
    name: "Aarav Mehta",
    role: "Head of Growth",
    avatar: "/images/avatar.avif",
    quote:
      "Their team delivered a modern experience that loads instantly. Our leads increased within weeks.",
    rating: 5,
  },
  {
    key: "t2",
    name: "Priya Sharma",
    role: "Product Manager",
    avatar: "/images/avatar.avif",
    quote:
      "The UI/UX process was extremely organized. The design system reduced our build time dramatically.",
    rating: 5,
  },
  {
    key: "t3",
    name: "Rohan Verma",
    role: "Founder",
    avatar: "/images/avatar.avif",
    quote:
      "We now have a secure, scalable setup with automation. The improvements are measurable and consistent.",
    rating: 5,
  },
] as const

