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
            className="xs:mb-[70px] relative w-full max-lg:text-center sm:mb-[140px] md:mb-[150px] lg:mb-0 lg:text-right"
            data-wow-duration=".9s"
            data-wow-delay=".2s"
        >

            {/* Background Shape */}
            <div className="absolute top-[-41%] md:right-[-4px] lg:right-0 xl:right-[-4px] opacity-80 dark:opacity-30 transition-opacity duration-300">
                <img
                    src="assets/img/about/about-bg-shape.webp"
                    alt=""
                    className="dark:invert dark:brightness-75"
                />
            </div>

            {/* Main Image */}
            <div className="animate-scale-up-down relative z-[1] lg:pr-0 xl:pr-[40px]">
                <div className="rounded-[20px] bg-transparent duration-300 ">
                    <Suspense fallback={<div className="text-gray-500 dark:text-gray-400">Loading...</div>}>
                        <DotLottieReact
                            src="https://lottie.host/0a77c6bc-32c0-4daa-950c-d420bd617b7e/yBjLsaB0S2.lottie"
                            className="rounded-[20px]"
                            loop
                            autoplay
                        />
                    </Suspense>
                </div>
            </div>

            {/* Sub Image 1 */}
            <div className="absolute bottom-[-37%] left-[42%] z-[2] hidden sm:block animate-[tptranslateY_4s_forwards_infinite_alternate]">
                <div className="rounded-[20px] bg-transparent duration-300">
                    <Suspense fallback={<div />}>
                        <DotLottieReact
                            src="https://lottie.host/9dd144d4-b4d5-4234-b140-b03bdcc54129/GGfEzAO9ff.lottie"
                            className="rounded-[20px]"
                            loop
                            autoplay
                        />
                    </Suspense>
                </div>
            </div>

            {/* Sub Image 2 */}
            <div className="animate-tptranslate_X absolute hidden sm:block 
                      max-lg:top-[-24%] max-lg:left-[5%] max-md:pt-[80px] 
                      lg:top-[-35%] lg:left-0 xl:top-[-24%] xl:left-[5%]">
                <div className="rounded-[20px] bg-transparent duration-300">
                    <Suspense fallback={<div />}>
                        <DotLottieReact
                            src="https://lottie.host/62970deb-02a0-4a8f-b290-c56d90b533b3/eR6gzBSmt8.lottie"
                            className="rounded-[20px]"
                            loop
                            autoplay
                        />
                    </Suspense>
                </div>
            </div>

            {/* Sub Image 3 */}
            <div className="absolute bottom-[-27%] left-[4%] z-[3] hidden sm:block">
                <div className="rounded-[20px] overflow-hidden bg-transparent 
                        transition-colors duration-300
                        shadow-md">
                    <Image
                        width={156}
                        height={156}
                        src="/assets/img/about/about-5.webp"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default DotLottieReactAbout