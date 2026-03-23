"use client"
import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import MirrorScroll3D from "@/components/MirrorScroll3D"

const Scroll3DSection = dynamic(() => import("@/components/Scroll3DSection"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
  ),
})

const Scroll3DSectionClinet = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.intersectionRatio > 0.6) // trigger when visible
      },
      {
        threshold: [0.2, 0.6, 1],
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">
      <div
        ref={sectionRef}
        className="flex h-screen w-screen items-center justify-center overflow-hidden"
      >
        <Scroll3DSection active={active} Component={MirrorScroll3D} />
      </div>
    </div>
  )
}

export default Scroll3DSectionClinet