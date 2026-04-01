export default function AboutCompany() {
    return (
        <section className="relative pt-[105px] overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">

            {/* Ambient background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-orange-200/40 dark:bg-orange-900/20 blur-[90px]" />
                <div className="absolute top-10 right-0 w-[320px] h-[320px] rounded-full bg-sky-200/40 dark:bg-sky-900/20 blur-[80px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-green-200/30 dark:bg-green-900/15 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 xl:gap-16 mb-12 md:mb-16 xl:mb-24">

                    {/* LEFT — Headline */}
                    <div className="flex flex-col justify-center">
                        {/* Badge */}
                        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/60 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-orange-600 dark:text-orange-400 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                            </span>
                            About DigiTech
                        </span>

                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[54px] font-extrabold leading-[1.15] tracking-tight text-[#111827] dark:text-white">
                            We Grow{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-500">
                                    Healthcare Brands
                                </span>
                                {/* Underline accent */}
                                <svg
                                    className="absolute -bottom-1 left-0 w-full"
                                    viewBox="0 0 300 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 7 Q75 2 150 7 Q225 12 298 7"
                                        stroke="url(#uGrad)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                    <defs>
                                        <linearGradient id="uGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#f97316" />
                                            <stop offset="0.5" stopColor="#eab308" />
                                            <stop offset="1" stopColor="#f97316" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>{" "}
                            <br className="hidden sm:block" />
                            <span className="text-[#111827] dark:text-white">With Digital Excellence</span>
                        </h2>

                        {/* Decorative stat pills */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                { value: "1500+", label: "Professionals", color: "green" },
                                { value: "10+", label: "Years Exp.", color: "sky" },
                                { value: "98%", label: "Satisfaction", color: "yellow" },
                            ].map(({ value, label, color }) => (
                                <div
                                    key={label}
                                    className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm border
                    ${color === "green" ? "bg-green-50  dark:bg-green-950/50  border-green-200  dark:border-green-800  text-green-700  dark:text-green-300" : ""}
                    ${color === "sky" ? "bg-sky-50    dark:bg-sky-950/50    border-sky-200    dark:border-sky-800    text-sky-700    dark:text-sky-300" : ""}
                    ${color === "yellow" ? "bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300" : ""}
                  `}
                                >
                                    <span className="text-base font-black">{value}</span>
                                    <span className="opacity-70 font-normal">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Body copy */}
                    <div className="flex flex-col justify-center gap-6">
                        <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] text-gray-600 dark:text-gray-300">
                            At{" "}
                            <strong className="text-orange-600 dark:text-orange-400 font-semibold">DigiTech Healthcare</strong>
                            , we specialize in helping hospitals, clinics, and doctors build a strong digital presence and attract high-quality patients. Our data-driven strategies ensure measurable growth and consistent lead generation.
                        </p>

                        <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] text-gray-600 dark:text-gray-300">
                            From{" "}
                            <strong className="text-sky-600 dark:text-sky-400 font-semibold">SEO and Social Media Marketing</strong>{" "}
                            to{" "}
                            <strong className="text-green-600 dark:text-green-400 font-semibold">Performance Ads and Reputation Management</strong>
                            , we create customized solutions tailored to the healthcare industry.
                        </p>

                        {/* Highlighted trust line */}
                        <div className="rounded-2xl border border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/40 dark:to-yellow-950/30 px-5 py-4">
                            <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-[#1a1a2e] dark:text-white">
                                Trusted by{" "}
                                <strong className="text-orange-600 dark:text-orange-400">1500+ healthcare professionals</strong>{" "}
                                across India — more visibility, more trust, and more patients.
                            </p>
                        </div>

                        {/* CTA buttons */}
                        <div className="mt-2 flex flex-wrap gap-3">
                            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-500 dark:to-yellow-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-300/40 dark:shadow-orange-900/40 hover:scale-105 hover:shadow-orange-400/50 transition-all duration-200">
                                Get Started
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200">
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Feature Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
                    {[
                        {
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            ),
                            title: "SEO & Growth",
                            desc: "Rank higher, attract more patients organically.",
                            accent: "orange",
                        },
                        {
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            ),
                            title: "Performance Ads",
                            desc: "Targeted campaigns with measurable ROI.",
                            accent: "sky",
                        },
                        {
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                                </svg>
                            ),
                            title: "Reputation Mgmt",
                            desc: "Build & protect your brand's trust online.",
                            accent: "green",
                        },
                        {
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            ),
                            title: "Social Media",
                            desc: "Engage patients across all platforms.",
                            accent: "yellow",
                        },
                    ].map(({ icon, title, desc, accent }) => (
                        <div
                            key={title}
                            className={`group relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer
                bg-white dark:bg-white/[0.03] backdrop-blur-sm
                ${accent === "orange" ? "border-orange-100 dark:border-orange-900/50 hover:border-orange-300 dark:hover:border-orange-700" : ""}
                ${accent === "sky" ? "border-sky-100    dark:border-sky-900/50    hover:border-sky-300    dark:hover:border-sky-700" : ""}
                ${accent === "green" ? "border-green-100  dark:border-green-900/50  hover:border-green-300  dark:hover:border-green-700" : ""}
                ${accent === "yellow" ? "border-yellow-100 dark:border-yellow-900/50 hover:border-yellow-300 dark:hover:border-yellow-700" : ""}
              `}
                        >
                            {/* Icon */}
                            <div className={`mb-3 inline-flex rounded-xl p-2.5
                ${accent === "orange" ? "bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400" : ""}
                ${accent === "sky" ? "bg-sky-100    dark:bg-sky-950/60    text-sky-600    dark:text-sky-400" : ""}
                ${accent === "green" ? "bg-green-100  dark:bg-green-950/60  text-green-600  dark:text-green-400" : ""}
                ${accent === "yellow" ? "bg-yellow-100 dark:bg-yellow-950/60 text-yellow-600 dark:text-yellow-400" : ""}
              `}>
                                {icon}
                            </div>
                            <h4 className="mb-1 text-[14px] font-bold text-[#111827] dark:text-white">{title}</h4>
                            <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">{desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}