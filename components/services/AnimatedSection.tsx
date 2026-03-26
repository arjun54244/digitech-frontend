"use client"

import * as React from "react"
import { motion, type MotionProps } from "framer-motion"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  delayMs?: number
} & Pick<MotionProps, "style">

export function AnimatedSection({
  children,
  className,
  id,
  delayMs = 0,
  style,
}: AnimatedSectionProps) {
  const delay = delayMs / 1000

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay },
        },
      }}
      style={style}
    >
      {children}
    </motion.section>
  )
}

