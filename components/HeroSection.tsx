"use client"

import dynamic from "next/dynamic"

export const LazyThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false, // disable server-side rendering
  loading: () => (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Loading 3D scene…
    </div>
  ),
})

export default function HeroSection({ compnent }: { compnent?: React.ReactNode }) {
  return (
    <div className="w-full h-[550px] rounded-xl">
      {compnent ? compnent : <LazyThreeScene />}
    </div>
  )
}