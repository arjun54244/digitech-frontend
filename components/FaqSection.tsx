// "use client"

// import { motion } from "framer-motion"
// import { HelpCircle } from "lucide-react"
// import { useRef, useEffect } from "react"
// import gsap from "gsap"

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import dynamic from "next/dynamic"

// const ThreeModelViewer = dynamic(() => import("@/components/ThreeModelViewer"), {
//   ssr: false,
//    loading: () => (
//     <div className="h-[420px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
//   ),
// })
// const faqs = [
//   {
//     q: "How long does it take to build a website?",
//     a: "Typically 2–6 weeks depending on the project complexity and features required.",
//   },
//   {
//     q: "Do you provide SEO services?",
//     a: "Yes. Our SEO services include technical SEO, keyword research, on-page optimization, and link building.",
//   },
//   {
//     q: "Can you manage our social media accounts?",
//     a: "Absolutely. We create content strategies, manage posts, and run targeted campaigns.",
//   },
//   {
//     q: "Do you work with e-commerce brands?",
//     a: "Yes. We build and optimize e-commerce stores and manage marketplace platforms.",
//   },
//   {
//     q: "What industries do you work with?",
//     a: "We work with healthcare, technology, startups, local businesses, and global brands.",
//   },
// ]

// export default function FaqSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       }
//     )
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-gradient-to-b from-[#326072]/10 via-transparent to-[#326072]/10 py-32 dark:from-[#326072]/20 dark:to-[#326072]/20"
//     >
//       <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
//         {/* LEFT SIDE FAQ */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-6 flex items-center gap-3"
//           >
//             <HelpCircle className="text-[#326072]" />
//             <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mb-10 max-w-lg text-muted-foreground"
//           >
//             Have questions about our digital marketing services? Here are
//             answers to the most common questions our clients ask.
//           </motion.p>

//           <Accordion defaultValue={["faqs-1"]} className="space-y-4">
//             {faqs.map((faq, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <AccordionItem
//                   value={`item-${i}`}
//                   className="rounded-xl border bg-white/60 px-4 backdrop-blur-md dark:bg-white/5"
//                 >
//                   <AccordionTrigger className="text-left">
//                     {faq.q}
//                   </AccordionTrigger>

//                   <AccordionContent className="text-muted-foreground">
//                     {faq.a}
//                   </AccordionContent>
//                 </AccordionItem>
//               </motion.div>
//             ))}
//           </Accordion>
//         </div>

//         {/* RIGHT SIDE 3D MODEL */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <div className="rounded-3xl border border-white/20 bg-white/40 p-4 shadow-xl backdrop-blur-xl dark:bg-white/5">
//             <ThreeModelViewer
//               modelPath="/models/social-media.glb"
//               scale={2.9}
//               position={[0, 0, 0]}
//               className="h-[420px] w-full"
//               autoRotate={false}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import dynamic from "next/dynamic"

const ThreeModelViewer = dynamic(() => import("@/components/ThreeModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-3xl bg-gradient-to-br from-green-200 via-sky-200 to-orange-200 dark:from-gray-800 dark:to-gray-700" />
  ),
})

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Typically 2–6 weeks depending on the project complexity and features required.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. Our SEO services include technical SEO, keyword research, on-page optimization, and link building.",
  },
  {
    q: "Can you manage our social media accounts?",
    a: "Absolutely. We create content strategies, manage posts, and run targeted campaigns.",
  },
  {
    q: "Do you work with e-commerce brands?",
    a: "Yes. We build and optimize e-commerce stores and manage marketplace platforms.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with healthcare, technology, startups, local businesses, and global brands.",
  },
]

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32"
    >
      {/* 🌈 Premium Gradient Background */}
      <div className="absolute inset-0 dark:from-[#0f172a] dark:via-[#020617] dark:to-[#1e293b]" />

      {/* ✨ Glow Effects */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="rounded-full bg-gradient-to-tr from-green-400 to-sky-400 p-2 shadow-lg">
              <HelpCircle className="text-white" />
            </div>

            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-10 max-w-lg text-gray-600 dark:text-gray-400"
          >
            Have questions about our digital marketing services? Here are
            answers to the most common questions our clients ask.
          </motion.p>

          <Accordion className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="group rounded-2xl border border-gray-200/10 dark:border-white bg-white/60 p-1 shadow-md backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:bg-white/5"
                >
                  <div className="rounded-xl bg-white/70 dark:bg-transparent px-4">
                    <AccordionTrigger className="text-left text-lg font-medium border text-orange-500 group-hover:text-green-600 transition">
                      {faq.q}
                    </AccordionTrigger>

                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {faq.a}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-white/20 bg-white/40 p-5 shadow-2xl backdrop-blur-2xl dark:bg-white/5">

            {/* ✨ Gradient Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400/30 via-sky-400/30 to-orange-400/30 opacity-20 blur-xl" />

            <ThreeModelViewer
              modelPath="/models/social-media.glb"
              scale={3}
              position={[0, 0, 0]}
              className="relative h-[420px] w-full"
              autoRotate
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}