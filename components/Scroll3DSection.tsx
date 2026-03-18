"use client"

import { useEffect, useRef, useState } from "react"

type Scroll3DSectionProps = {
  Component: React.ComponentType<{ active: boolean }>
  height?: string
}

export default function Scroll3DSection({
  Component,
  height = "300vh",
}: Scroll3DSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()

      // activate only when section touches top of viewport
      if (rect.top <= -580.00) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className="relative" style={{ height }}>
      <div className="sticky top-0 h-screen w-screen">
        <Component active={active} />
      </div>
    </div>
  )
}