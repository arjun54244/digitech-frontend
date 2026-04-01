import DotLottieReactAbout from "./DotLottieReactAbout";

export default function AboutUs2() {
    const features = [
        {
            icon: (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
            ),
            color: "orange",
            text: "SEO & Google ranking strategies for healthcare growth.",
        },
        {
            icon: (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "sky",
            text: "High-performance ads (Google & Meta) to generate quality leads.",
        },
        {
            icon: (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "green",
            text: "Website & funnel optimization to maximize conversions.",
        },
    ];

    const colorMap = {
        orange: {
            bg: "bg-orange-100 dark:bg-orange-950/60",
            text: "text-orange-600 dark:text-orange-400",
            border: "border-orange-200 dark:border-orange-800",
            bar: "bg-gradient-to-r from-orange-400 to-yellow-400",
        },
        sky: {
            bg: "bg-sky-100 dark:bg-sky-950/60",
            text: "text-sky-600 dark:text-sky-400",
            border: "border-sky-200 dark:border-sky-800",
            bar: "bg-gradient-to-r from-sky-400 to-blue-400",
        },
        green: {
            bg: "bg-green-100 dark:bg-green-950/60",
            text: "text-green-600 dark:text-green-400",
            border: "border-green-200 dark:border-green-800",
            bar: "bg-gradient-to-r from-green-400 to-teal-400",
        },
    };

    return (
        <section className="relative bg-white dark:bg-[#0d1117] transition-colors duration-500 overflow-hidden pb-20 md:pb-32 pt-16">
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-200/30 dark:bg-orange-900/15 blur-[110px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-200/25 dark:bg-sky-900/15 blur-[90px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-200/20 dark:bg-green-900/10 blur-[80px]" />
            </div>

            <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:gap-8 lg:grid-cols-2">

                    {/* LEFT — Lottie / Illustration placeholder */}
                    <div className="flex items-center flex-col justify-center">
                        <DotLottieReactAbout />
                        {/* Progress bars — visual credibility */}
                        <div className="hidden md:block w-full mt-30 space-y-3">
                            {[
                                { label: "Patient Lead Generation", val: 94, color: "orange" },
                                { label: "SEO Performance", val: 88, color: "sky" },
                                { label: "Conversion Optimization", val: 91, color: "green" },
                            ].map(({ label, val, color }) => (
                                <div key={label}>
                                    <div className="flex justify-between mb-1.5">
                                        <span className="text-[13px] font-semibold text-gray-600 dark:text-gray-300">{label}</span>
                                        <span className={`text-[13px] font-bold ${colorMap[color].text}`}>{val}%</span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${colorMap[color].bar}`}
                                            style={{ width: `${val}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Content */}
                    <div className="lg:pl-10 xl:pl-16">
                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.13em] text-blue-700 dark:text-blue-300">
                            <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Trusted by 1500+ Healthcare Clients
                        </div>

                        {/* Headline */}
                        <h2 className="mb-5 text-[28px] sm:text-[34px] md:text-[40px] xl:text-[48px] font-extrabold leading-[1.15] tracking-tight text-[#111827] dark:text-white">
                            We Deliver{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-500">
                                    High-Converting
                                </span>
                            </span>
                            <br className="hidden sm:block" />
                            Digital Marketing Solutions
                        </h2>

                        {/* Sub-copy */}
                        <p className="mb-8 text-[16px] sm:text-[17px] leading-[1.75] text-gray-500 dark:text-gray-400">
                            DigiTech helps hospitals, clinics, and brands grow faster online with data-driven strategies and performance marketing.
                        </p>

                        {/* Feature list */}
                        <ul className="mb-10 space-y-4">
                            {features.map(({ icon, color, text }) => {
                                const c = colorMap[color];
                                return (
                                    <li key={text} className={`flex items-start gap-4 rounded-2xl border ${c.border} ${c.bg} px-4 py-3.5 transition-all duration-200 hover:shadow-sm`}>
                                        <span className={`mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-xl ${c.bg} ${c.text} border ${c.border}`}>
                                            {icon}
                                        </span>
                                        <p className="text-[14.5px] font-medium leading-[1.6] text-gray-700 dark:text-gray-200">{text}</p>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Progress bars — visual credibility */}
                        <div className="block md:hidden w-full mb-10 space-y-3">
                            {[
                                { label: "Patient Lead Generation", val: 94, color: "orange" },
                                { label: "SEO Performance", val: 88, color: "sky" },
                                { label: "Conversion Optimization", val: 91, color: "green" },
                            ].map(({ label, val, color }) => (
                                <div key={label}>
                                    <div className="flex justify-between mb-1.5">
                                        <span className="text-[13px] font-semibold text-gray-600 dark:text-gray-300">{label}</span>
                                        <span className={`text-[13px] font-bold ${colorMap[color].text}`}>{val}%</span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${colorMap[color].bar}`}
                                            style={{ width: `${val}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/about"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-orange-300/40 dark:shadow-orange-900/40 transition-all duration-200 hover:scale-105 hover:shadow-orange-400/50"
                            >
                                <span className="relative z-10">About DigiTech</span>
                                <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-full" />
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 px-7 py-3.5 text-[14px] font-semibold text-gray-700 dark:text-gray-200 transition-all duration-200 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
                            >
                                Our Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}