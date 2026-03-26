"use client"

import * as React from "react"
import type LenisType from "lenis"

import Lenis from "lenis"

export function SmoothScrolling() {
  React.useEffect(() => {
    const lenis: LenisType = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }

    rafId = window.requestAnimationFrame(raf)

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const link = target.closest("a") as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute("href") ?? ""
      if (!href.startsWith("#")) return

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return

      event.preventDefault()
      lenis.scrollTo(el, { offset: 12 })
    }

    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("click", onClick)
      window.cancelAnimationFrame(rafId)
      // Lenis exposes destroy in modern builds; guarded for safety.
      ;(lenis as unknown as { destroy?: () => void }).destroy?.()
    }
  }, [])

  return null
}

