import React from 'react'
import DotLottieReactAbout from './DotLottieReactAbout'

const AboutUs = () => {
    return (
        <>
            <div className="relative z-10 py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        {/* LEFT (Animation/Image) */}
                        <div className="w-full flex justify-center">
                            <DotLottieReactAbout />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-full lg:pl-10 xl:pl-16">

                            {/* Badge */}
                            <span className="inline-block mb-4 rounded-full bg-sky-100 dark:bg-sky-900/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
                                Trusted by 1500+ Healthcare Clients
                            </span>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
                                We Deliver{" "}
                                <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                                    High-Converting
                                </span>{" "}
                                Digital Marketing Solutions
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                                DigiTech helps hospitals, clinics, and brands grow faster online
                                with data-driven strategies and performance marketing.
                            </p>

                            {/* Feature List */}
                            <div className="space-y-5 mb-8">

                                {/* Item */}
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white text-xs font-bold">
                                        ✓
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                                        SEO & Google ranking strategies for healthcare growth
                                    </p>
                                </div>

                                {/* Item */}
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-bold">
                                        ✓
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                                        High-performance ads (Google & Meta) to generate quality leads
                                    </p>
                                </div>

                                {/* Item */}
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-400 text-white text-xs font-bold">
                                        ✓
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                                        Website & funnel optimization to maximize conversions
                                    </p>
                                </div>
                            </div>

                            {/* CTA BUTTON */}
                            <div>
                                <a
                                    href="/about"
                                    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <span className="relative z-10">About Digitech</span>
                                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs