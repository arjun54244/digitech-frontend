import Link from "next/link"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="flex min-h-screen mt-24 items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      
      <div className="relative w-full max-w-3xl">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 opacity-20 blur-3xl"></div>

        <Card className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <CardContent className="px-6 py-12 text-center md:px-12 md:py-16">

            {/* Animation */}
            <div className="mb-6 flex justify-center">
              <DotLottieReact
                src="https://lottie.host/deb29d5d-06c8-4460-b02d-80beda8e5c57/LkYlVsYi0H.lottie"
                className="w-64 md:w-96 object-contain"
                loop
                autoplay
              />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-300">
              Oops! You're lost in space 🚀
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md mx-auto text-gray-400">
              The page you're looking for doesn’t exist or has been moved.
              Let’s get you back on track.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Button className="rounded-full px-8 py-3 text-black bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-105 transition-all">
                <Link href="/">Go Back Home</Link>
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  )
}