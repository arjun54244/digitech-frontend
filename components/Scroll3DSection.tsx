"use client"

import { useEffect, useRef, useState } from "react"

type Scroll3DSectionProps = {
  Component: React.ComponentType<{ active: boolean }>
  active: boolean
  height?: string
}

export default function Scroll3DSection({
  Component,
  active,
  height = "300vh",
}: Scroll3DSectionProps) {
  return (
    <div className="relative" style={{ height }}>
      <div className="sticky top-0 h-screen w-screen">
        <Component active={active} />
      </div>
    </div>
  )
}