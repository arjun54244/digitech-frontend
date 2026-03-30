"use client"
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { Suspense } from 'react'
const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then(mod => mod.DotLottieReact),
    { ssr: false }
)
const DotLottieReactAbout = () => {
    return (
        <div
            className="xs:mb-[70px] wow fadeInLeft relative w-full max-lg:text-center sm:mb-[140px] md:mb-[150px] lg:mb-0 lg:text-right"
            data-wow-duration=".9s"
            data-wow-delay=".2s"
        >
            {/* Background Shape */}
            <div className="absolute top-[-41%] md:right-[-4px] lg:right-0 xl:right-[-4px]">
                <img src="assets/img/about/about-bg-shape.webp" alt="" />
            </div>
            {/* Main Image */}
            <div className="animate-scale-up-down relative z-[1] lg:pr-0 xl:pr-[40px]">
                <Suspense fallback={<div>Loading...</div>}>
                    <DotLottieReact
                        src="https://lottie.host/0a77c6bc-32c0-4daa-950c-d420bd617b7e/yBjLsaB0S2.lottie"
                        className="rounded-[20px]"
                        loop
                        autoplay
                    />
                </Suspense>
            </div>

            {/* Sub Image 1 */}
            <div className="absolute bottom-[-37%] left-[42%] z-[2] hidden animate-[tptranslateY_4s_forwards_infinite_alternate] sm:block">
                <Suspense fallback={<div>Loading...</div>}>
                    <DotLottieReact
                        src="https://lottie.host/9dd144d4-b4d5-4234-b140-b03bdcc54129/GGfEzAO9ff.lottie"
                        className="rounded-[20px] bg-transparent"
                        loop
                        autoplay
                    />
                </Suspense>
            </div>

            {/* Sub Image 2 */}
            <div className="animate-tptranslate_X absolute hidden max-lg:top-[-24%] max-lg:left-[5%] max-md:pt-[80px] sm:block lg:top-[-35%] lg:left-0 xl:top-[-24%] xl:left-[5%]">
                <Suspense fallback={<div>Loading...</div>}>
                    <DotLottieReact
                        src="https://lottie.host/62970deb-02a0-4a8f-b290-c56d90b533b3/eR6gzBSmt8.lottie"
                        className="rounded-[20px] shadow-[10px_40px_40px_rgba(1,16,61,0.06),_-20px_-20px_120px_rgba(1,16,61,0.12)]"
                        loop
                        autoplay
                    />
                </Suspense>
            </div>

            {/* Sub Image 3 */}
            <div className="absolute bottom-[-27%] left-[4%] z-[3] hidden sm:block">
                <Image
                    width={256}
                    height={298}
                    src="/assets/img/about/about-5.webp"
                    alt=""
                // className="h-[170px] w-[150px]"
                />
            </div>
        </div>
    )
}

export default DotLottieReactAbout