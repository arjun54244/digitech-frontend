import Image from "next/image"

const AboutService = () => {
    return (
        <div className="relative pt-[0px] pb-[120px]">

            {/* Background Shape */}
            {/* <div className="absolute left-0 sm:-top-[53px] md:-top-[75px] lg:-top-[145px]">
                <Image
                    width={669}
                    height={189}
                    src="/assets/img/service/sv-bg-2-1.webp"
                    alt=""
                    className="w-full h-auto"
                />
            </div> */}

            <div className="relative z-[1] mx-auto max-w-[1200px] px-[15px]">

                {/* ── Section Header ──────────────────────────────────── */}
                <SectionHeader />

                {/* ── Service Cards ────────────────────────────────────── */}
                <div className="grid grid-cols-12 gap-[60px] max-md:gap-[30px]">

                    {/* Card 1 — SEO Optimization (blue gradient) */}
                    <div
                        className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                        data-wow-duration=".9s"
                        data-wow-delay=".4s"
                    >
                        <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-br from-[#B2D6F8] to-[#81E0F5] transition-all duration-700 group-hover:rotate-0" />
                        <div className="
              relative flex h-[280px] flex-col justify-between rounded-[20px] p-[50px_30px]
              border border-white/20 dark:border-white/10
              bg-white/30 dark:bg-white/5
              shadow-[0_30px_30px_rgba(1,10,10,0.1)] dark:shadow-[0_30px_30px_rgba(0,0,0,0.3)]
              backdrop-blur-[20px]
              transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)] dark:group-hover:shadow-[0_100px_100px_rgba(0,0,0,0.35)]
            ">
                            <div>
                                <img src="assets/img/service/sv-icon-2-1.webp" alt="" className="max-w-full" />
                            </div>
                            <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                                <h4 className="font-mont mb-1 text-[22px] font-semibold text-[#070D20] dark:text-white">
                                    SEO Optimization
                                </h4>
                                <a
                                    href="service-details.html"
                                    className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black dark:text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                                >
                                    Rank your clinic on Google{" "}
                                    <i className="far fa-arrow-right relative top-[2px]" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 — Social Media Marketing (green gradient) */}
                    <div
                        className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                        data-wow-duration=".9s"
                        data-wow-delay=".6s"
                    >
                        <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-b from-[#B0F248] to-[#6DD18A] transition-all duration-700 group-hover:rotate-0" />
                        <div className="
              relative flex h-[280px] flex-col justify-between rounded-[20px] p-[50px_30px]
              border border-white/20 dark:border-white/10
              bg-white/30 dark:bg-white/5
              shadow-[0_30px_30px_rgba(1,10,10,0.1)] dark:shadow-[0_30px_30px_rgba(0,0,0,0.3)]
              backdrop-blur-[20px]
              transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)] dark:group-hover:shadow-[0_100px_100px_rgba(0,0,0,0.35)]
            ">
                            <div>
                                <img src="assets/img/service/sv-icon-2-2.webp" alt="" />
                            </div>
                            <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                                <h4 className="font-mont mb-1 text-[22px] font-semibold text-[#070D20] dark:text-white">
                                    Social Media Marketing
                                </h4>
                                <a
                                    href="service-details.html"
                                    className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black dark:text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                                >
                                    Build trust & engagement
                                    <i className="far fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 — Performance Ads (pink gradient) */}
                    <div
                        className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                        data-wow-duration=".9s"
                        data-wow-delay=".8s"
                    >
                        <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-b from-[#FFDBBA] to-[#FF94C7] transition-all duration-700 group-hover:rotate-0" />
                        <div className="
              relative flex h-[280px] flex-col justify-between rounded-[20px] p-[50px_30px]
              border border-white/20 dark:border-white/10
              bg-white/30 dark:bg-white/5
              shadow-[0_30px_30px_rgba(1,10,10,0.1)] dark:shadow-[0_30px_30px_rgba(0,0,0,0.3)]
              backdrop-blur-[20px]
              transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)] dark:group-hover:shadow-[0_100px_100px_rgba(0,0,0,0.35)]
            ">
                            <div>
                                <img src="assets/img/service/sv-icon-2-3.webp" alt="" />
                            </div>
                            <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                                <h4 className="font-mont mb-1 text-[22px] font-semibold text-[#070D20] dark:text-white">
                                    Performance Ads
                                </h4>
                                <a
                                    href="service-details.html"
                                    className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black dark:text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                                >
                                    Get more patient leads{" "}
                                    <i className="far fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 — Website Development (purple gradient) */}
                    <div
                        className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                        data-wow-duration=".9s"
                        data-wow-delay=".9s"
                    >
                        <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-b from-[#ADBFFF] to-[#B67DFF] transition-all duration-700 group-hover:rotate-0" />
                        <div className="
              relative flex h-[280px] flex-col justify-between rounded-[20px] p-[50px_30px]
              border border-white/20 dark:border-white/10
              bg-white/30 dark:bg-white/5
              shadow-[0_30px_30px_rgba(1,10,10,0.1)] dark:shadow-[0_30px_30px_rgba(0,0,0,0.3)]
              backdrop-blur-[20px]
              transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)] dark:group-hover:shadow-[0_100px_100px_rgba(0,0,0,0.35)]
            ">
                            <div>
                                <img src="assets/img/service/sv-icon-2-4.webp" alt="" />
                            </div>
                            <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                                <h4 className="font-mont mb-1 text-[22px] font-semibold text-[#070D20] dark:text-white">
                                    Website Development
                                </h4>
                                <a
                                    href="service-details.html"
                                    className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black dark:text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                                >
                                    Modern & conversion focused{" "}
                                    <i className="far fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Feature Box ───────────────────────────────── */}
                <div
                    className="wow fadeInUp mt-6 grid grid-cols-12 gap-6 max-md:gap-3"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                >
                    <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                        <div
                            className="
        rounded-2xl p-6 lg:p-12
        bg-gradient-to-br from-[#FFF7F1] to-[#FAE9EF]
        dark:from-[#1e1510] dark:to-[#1e1018]
        border border-transparent dark:border-white/10
        shadow-lg dark:shadow-black/30
        transition-all duration-300
      "
                        >
                            <h4 className="font-mont text-2xl lg:text-3xl font-semibold text-[#070D20] dark:text-white mb-4">
                                Complete Digital Growth Toolkit
                            </h4>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                {[
                                    "Google Ads Campaigns",
                                    "SEO for All Businesses",
                                    "Social Media Management",
                                    "Website Design",
                                    "ORM (Reputation Management)",
                                    "Content Marketing",
                                    "WhatsApp Marketing",
                                    "Video Marketing",
                                    "Lead Generation",
                                    "Branding Strategy",
                                    "Analytics & Reporting",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="
              text-sm lg:text-base font-medium
              text-[#070D20] dark:text-gray-300
              hover:text-[#FF4D6D] dark:hover:text-[#FF4D6D]
              transition-colors duration-200 cursor-pointer
              py-1
            "
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutService


const SectionHeader = () => {
    const stats = [
        { value: "500", suffix: "K", label: "Monthly Audience Reach", color: "orange" },
        { value: "1500", suffix: "+", label: "Businesses Served", color: "sky" },
        { value: "4", suffix: "X", label: "Average ROI Growth", color: "green" },
    ]

    const colorMap = {
        orange: {
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            pill: "bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800",
            value: "text-orange-600 dark:text-orange-400",
            iconBg: "bg-orange-100 dark:bg-orange-950/60",
            iconColor: "text-orange-500 dark:text-orange-400",
        },
        sky: {
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
            pill: "bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800",
            value: "text-sky-600 dark:text-sky-400",
            iconBg: "bg-sky-100 dark:bg-sky-950/60",
            iconColor: "text-sky-500 dark:text-sky-400",
        },
        green: {
            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            pill: "bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800",
            value: "text-green-600 dark:text-green-400",
            iconBg: "bg-green-100 dark:bg-green-950/60",
            iconColor: "text-green-500 dark:text-green-400",
        },
    }

    return (
        <div className="mb-[60px] grid grid-cols-12 items-center gap-y-10">

            {/* ── Left: Heading ─────────────────────────── */}
            <div className="col-span-12 lg:col-span-6">

                {/* Eyebrow badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/50 px-4 py-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-orange-700 dark:text-orange-300">
                        Healthcare Marketing
                    </span>
                </div>

                <h3 className="
          font-mont leading-[1.12] font-bold tracking-[-0.04em]
          max-md:text-[30px] md:text-[38px] xl:text-[52px] xxl:text-[60px]
          text-[#070D20] dark:text-white
        ">
                    We deliver{" "}
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-500">
                            powerful
                        </span>
                        {/* wavy underline */}
                        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" fill="none" height="6">
                            <path d="M2 6 Q45 1 90 6 Q135 11 178 6" stroke="url(#wg)" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <defs>
                                <linearGradient id="wg" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#f97316" /><stop offset="0.5" stopColor="#eab308" /><stop offset="1" stopColor="#f97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <br className="max-md:hidden" />
                    {" "}healthcare marketing
                </h3>

                <p className="mt-6 text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7] text-gray-500 dark:text-gray-400 max-w-[440px]">
                    Helping hospitals, clinics & doctors grow faster with digital strategies built for results.
                </p>

                {/* Trust strip */}
                <div className="mt-8 flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {["#f97316", "#0ea5e9", "#22c55e"].map((c, i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0d1117] flex items-center justify-center text-white text-[10px] font-bold"
                                style={{ background: c }}
                            >
                                {["HC", "DR", "CL"][i]}
                            </div>
                        ))}
                    </div>
                    <p className="text-[13px] text-gray-500 dark:text-gray-400 font-medium">
                        Trusted by <span className="text-[#070D20] dark:text-white font-semibold">1500+ healthcare clients</span>
                    </p>
                </div>
            </div>

            {/* ── Right: Stat Cards ─────────────────────── */}
            <div className="col-span-12 lg:col-span-6">
                <div className="
          wow fadeInRight
          grid grid-cols-3 gap-3 sm:gap-5
          lg:pl-10 xl:pl-16
        "
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                >
                    {stats.map(({ value, suffix, label, color }) => {
                        const c = colorMap[color as keyof typeof colorMap]
                        return (
                            <div
                                key={label}
                                className={`
                  group relative rounded-2xl border p-4 sm:p-5
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  bg-white dark:bg-white/[0.03]
                  ${c.pill}
                `}
                            >
                                {/* Icon */}
                                <div className={`mb-3 inline-flex items-center justify-center w-9 h-9 rounded-xl ${c.iconBg} ${c.iconColor}`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d={c.icon} />
                                    </svg>
                                </div>

                                {/* Number */}
                                <div className={`font-mont flex items-baseline gap-0.5 text-[28px] sm:text-[36px] leading-none font-bold tracking-tight ${c.value}`}>
                                    <span>{value}</span>
                                    <span className="text-[20px] sm:text-[26px]">{suffix}</span>
                                </div>

                                {/* Label */}
                                <p className="mt-2 text-[11px] sm:text-[13px] leading-[1.4] font-medium text-gray-500 dark:text-gray-400">
                                    {label}
                                </p>

                                {/* Bottom accent bar */}
                                <div className={`
                  absolute bottom-0 left-4 right-4 h-[3px] rounded-full opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  ${color === "orange" ? "bg-gradient-to-r from-orange-400 to-yellow-400" : ""}
                  ${color === "sky" ? "bg-gradient-to-r from-sky-400 to-blue-400" : ""}
                  ${color === "green" ? "bg-gradient-to-r from-green-400 to-teal-400" : ""}
                `} />
                            </div>
                        )
                    })}
                </div>

                {/* Decorative wavy line (original SVG, preserved) */}
                <div className="hidden lg:block mt-4 lg:pl-10 xl:pl-16 opacity-40 dark:opacity-20">
                    <svg width="100%" height="18" viewBox="0 0 470 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M199.614 1.72387C177.533 2.31462 155.712 3.04101 134.432 3.83514C104.309 4.95854 74.1969 6.12068 44.2665 7.96073C34.8451 8.5418 25.2775 8.90979 15.915 9.63613C10.0378 10.0913 2.24477 10.7401 1.22204 10.8757C0.687102 10.9531 0.453729 11.0695 0.37832 11.1082C-0.151901 11.3794 -0.0551557 11.6407 0.244125 11.8441C0.364308 11.9313 0.668216 12.1444 1.51186 12.1735C57.9321 14.1588 115.625 10.285 172.113 9.87824C270.075 9.18096 371.005 11.9507 468.189 17.9938C469.037 18.0423 469.862 17.8001 469.98 17.4418C470.121 17.0931 469.508 16.7542 468.66 16.7057C371.312 10.6529 270.216 7.87347 172.066 8.58044C119.421 8.95813 65.7369 12.3575 13.0188 11.1953C14.2301 11.0985 15.4178 11.0016 16.5018 10.9144C25.8267 10.1881 35.3541 9.8298 44.7379 9.24873C74.6046 7.40868 104.655 6.24654 134.739 5.13282C172.066 3.73826 211.02 2.53737 250.28 1.97567C264.325 2.06283 278.322 2.15003 292.32 2.25656C322.602 2.48899 353.025 3.16691 383.236 4.07725C392.332 4.3581 401.428 4.64861 410.524 4.9004C413.541 4.98757 421.317 5.23932 422.401 5.21995C423.745 5.20058 424.004 4.73577 424.027 4.65829C424.098 4.48397 424.051 4.24185 423.391 4.03847C423.32 4.00942 422.896 3.91251 421.953 3.8544C367.023 0.426098 308.368 -0.145196 250.327 0.677985C189.104 0.319659 127.646 0.164636 66.5783 0C65.704 0 64.99 0.290577 64.9829 0.648903C64.9782 1.00723 65.6827 1.29782 66.557 1.3075C110.775 1.42371 155.217 1.53986 199.614 1.72387Z"
                            fill="url(#wv2)"
                        />
                        <defs>
                            <linearGradient id="wv2" x1="0" y1="9" x2="470" y2="9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#491EB8" stopOpacity="0" offset="1" />
                                <stop offset="1" stopColor="#DA2A51" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
