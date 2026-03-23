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

export default function HeroSection({compnent}: {compnent?: React.ReactNode}) {
  return (
    <section className="w-full min-h-screen flex items-center bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            India's #1 Healthcare Digital Marketing Company
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Grow Your <span className="text-yellow-600">Healthcare Brand</span> Online
          </h1>

          <p className="text-lg text-white max-w-xl">
            DigiTech Healthcare helps hospitals, clinics, and doctors attract more
            patients with powerful digital marketing strategies. Trusted by
            <strong> 1500+ healthcare professionals </strong> across India.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition">
              Free Consultation
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              View Services
            </button>
          </div>

          <div className="pt-6 text-sm text-gray-500">
            📞 +91-9220708874  
            <br />
            📧 info@digitechhealthcare.com
          </div>

        </div>

        {/* RIGHT 3D SECTION */}
        <div className="w-full h-[550px] rounded-xl">
          {compnent ? compnent : <LazyThreeScene />}
        </div>

      </div>

    </section>
  )
}