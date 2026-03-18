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

import ThreeModelViewer from "@/components/ThreeModelViewer"

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
      className="relative overflow-hidden bg-gradient-to-b from-[#326072]/10 via-transparent to-[#326072]/10 py-32 dark:from-[#326072]/20 dark:to-[#326072]/20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT SIDE FAQ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <HelpCircle className="text-[#326072]" />
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10 max-w-lg text-muted-foreground"
          >
            Have questions about our digital marketing services? Here are
            answers to the most common questions our clients ask.
          </motion.p>

          <Accordion defaultValue={["faqs-1"]} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="rounded-xl border bg-white/60 px-4 backdrop-blur-md dark:bg-white/5"
                >
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* RIGHT SIDE 3D MODEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/20 bg-white/40 p-4 shadow-xl backdrop-blur-xl dark:bg-white/5">
            <ThreeModelViewer
              modelPath="/models/social-media.glb"
              scale={2.9}
              position={[0, 0, 0]}
              className="h-[420px] w-full"
              autoRotate={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
