import FeacherSection from "@/components/FeacherSection"
import PaymentMethod from "@/components/PaymentMethod"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { PlayCircle } from "lucide-react"
import React from "react"

const about = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          {/* ab-company-area  */}
          <div className="pt-[105px]">
            <div className="mx-auto max-w-[1200px] px-[15px]">
              {/* Top Section  */}
              <div className="grid grid-cols-12 gap-x-[30px] max-md:mb-[35px] md:mb-[45px] lg:mb-[45px] xl:mb-[95px]">
                <div className="col-span-12 xl:col-span-6">
                  <h4 className="text-orange-500 mb-[8px] inline-block rounded-[30px] bg-[rgba(89,86,233,0.05)] px-[17px] py-[10px] text-[13px] leading-[14px] font-semibold uppercase">
                    ABOUT THE COMPANY
                  </h4>
                  <h3 className="mb-3 leading-[1.2] font-bold sm:text-[33px] md:text-[40px] xl:text-[50px]">
                    Softuch is Made <br /> For the Creator.
                  </h3>
                </div>
                <div
                  className="wow fadeInRight col-span-12 xl:col-span-6"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div>
                    <p className="pb-[25px] leading-[26px] font-normal text-[#5F6168] lg:text-[16px] xl:text-[17px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu
                      tellus mattis quis. Eu, tempus donec nam mauris egestas.
                      Id aliquet ultricies ligula tellus arcu dolor. Massa arcu
                      pulvinar in mattis
                    </p>
                    <p className="pb-[25px] leading-[26px] font-normal text-[#5F6168] lg:text-[16px] xl:text-[17px]">
                      Feugiat purus congue risus, blandit a sed. In aenean quam
                      aenean purus dictum pellentesque consequat.!
                    </p>
                    <p className="leading-[26px] font-normal text-[#5F6168] lg:text-[16px] xl:text-[17px]">
                      <span className="xs:text-[18px] text-[20px] leading-[28px] font-normal text-[#202124]">
                        Our clean and simple APIs and transparent SaaS model
                        will give you complete peace of mind.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ab-company-area end  */}

          {/* tp-about-area-start */}
          <div className="relative z-10 sm:pb-[100px] md:pb-[160px]">
            <div className="mx-auto max-w-[1200px] px-[15px]">
              <div className="grid items-center gap-[30px] lg:grid-cols-2">
                {/* Left Images */}
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
                    <DotLottieReact
                      src="https://lottie.host/0a77c6bc-32c0-4daa-950c-d420bd617b7e/yBjLsaB0S2.lottie"
                      className="rounded-[20px]"
                      loop
                      autoplay
                    />
                  </div>

                  {/* Sub Image 1 */}
                  <div className="absolute bottom-[-37%] left-[42%] z-[2] hidden animate-[tptranslateY_4s_forwards_infinite_alternate] sm:block">
                    <DotLottieReact
                      src="https://lottie.host/9dd144d4-b4d5-4234-b140-b03bdcc54129/GGfEzAO9ff.lottie"
                      className="rounded-[20px] bg-transparent"
                      loop
                      autoplay
                    />
                  </div>

                  {/* Sub Image 2 */}
                  <div className="animate-tptranslate_X absolute hidden max-lg:top-[-24%] max-lg:left-[5%] max-md:pt-[80px] sm:block lg:top-[-35%] lg:left-0 xl:top-[-24%] xl:left-[5%]">
                    {/* <img
                      src="assets/img/about/about-3.webp"
                      alt=""
                      className="rounded-[20px] shadow-[10px_40px_40px_rgba(1,16,61,0.06),_-20px_-20px_120px_rgba(1,16,61,0.12)]"
                    /> */}
                    <DotLottieReact
                      src="https://lottie.host/62970deb-02a0-4a8f-b290-c56d90b533b3/eR6gzBSmt8.lottie"
                      className="rounded-[20px] shadow-[10px_40px_40px_rgba(1,16,61,0.06),_-20px_-20px_120px_rgba(1,16,61,0.12)]"
                      loop
                      autoplay
                    />
                  </div>

                  {/* Sub Image 3 */}
                  <div className="absolute bottom-[-27%] left-[4%] z-[3] hidden sm:block">
                    <img
                      src="assets/img/about/about-5.webp"
                      alt=""
                      className="h-[170px] w-[150px]"
                    />
                  </div>
                </div>
                {/* Right Content */}
                <div
                  className="xxl:pl-[100px] wow fadeInRight w-full sm:pl-0 md:pl-0 lg:pl-[60px] xl:pl-[70px]"
                  data-wow-duration=".9s"
                  data-wow-delay=".2s"
                >
                  <div className="pb-[20px]">
                    <h4 className="text-blue mb-[8px] inline-block rounded-[30px] bg-[rgba(89,86,233,0.05)] px-[17px] py-[10px] text-[13px] leading-[14px] font-semibold uppercase">
                      OVER 150K+ CLIENT
                    </h4>
                    <h2 className="mb-4 leading-[1.2] font-bold sm:text-[33px] md:text-[40px] xl:text-[50px]">
                      We Offer Real Time Data Solutions
                    </h2>
                    <p className="mb-[15px] text-[18px] leading-[28px]">
                      Excepteur sint occaecat cupidatat officia non proident{" "}
                      <br className="max-xl:hidden xl:block" />
                      sunt in culpa qui deserunt.!
                    </p>
                  </div>
                  {/* List */}
                  <div className="pb-[45px]">
                    <ul>
                      <li className="relative mb-[30px] pl-[30px] text-[16px] leading-[1.1] font-medium text-black last:mb-0">
                        <i className="fal fa-check bg-red absolute top-0 left-0 h-[20px] w-[20px] rounded-full text-center text-[8px] leading-[20px!important] text-white"></i>
                        Various analysis options.
                      </li>
                      <li className="relative mb-[30px] pl-[30px] text-[16px] leading-[1.1] font-medium text-black last:mb-0">
                        <i className="fal fa-check bg-red absolute top-0 left-0 h-[20px] w-[20px] rounded-full text-center text-[8px] leading-[20px!important] text-white"></i>
                        Page Load (time, size, number of requests).
                      </li>
                      <li className="relative pl-[30px] text-[16px] leading-[1.1] font-medium text-black">
                        <i className="fal fa-check bg-red absolute top-0 left-0 h-[20px] w-[20px] rounded-full text-center text-[8px] leading-[20px!important] text-white"></i>
                        Big data analysis.
                      </li>
                    </ul>
                  </div>

                  {/* Button */}
                  <div>
                    <a
                      href="about.html"
                      className="tp-btn-hover group bg-blue relative z-[2] hidden h-[45px] overflow-hidden rounded-[30px] px-[35px] text-center text-[15px] leading-[45px] font-semibold text-white capitalize transition-colors duration-500 ease-in-out md:inline-block"
                    >
                      <span className="relative z-[5] transition-all delay-100 duration-500 group-hover:text-white">
                        About Us
                      </span>
                      <b className="absolute top-1/2 left-1/2 z-[1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black transition-all duration-[700ms] ease-[ease] group-hover:h-[400px] group-hover:w-[400px]"></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-about-area-end */}
          {/* tp-counter-area-start  */}
          <FeacherSection />
          {/* tp-counter-area-end  */}
          <PaymentMethod />
          {/* Service Area Start */}
          <div className="relative pt-[70px] pb-[160px]">
            {/* Background Shape */}
            <div className="absolute left-0 sm:-top-[53px] md:-top-[75px] lg:-top-[145px]">
              <img src="assets/img/service/sv-bg-2-1.webp" alt="" />
            </div>

            <div className="relative z-[1] mx-auto max-w-[1200px] px-[15px]">
              {/* Section Header */}
              <div className="mb-[60px] grid grid-cols-12 items-center">
                <div className="col-span-12 max-md:pb-[40px] lg:col-span-6">
                  <h3 className="xxl:text-[60px] font-mont leading-[1.1] font-semibold tracking-[-0.04em] max-md:text-[32px] md:text-[40px] xl:text-[55px]">
                    We provide the
                    <br className="max-md:hidden" /> best service for you
                  </h3>
                  <p className="mt-[27px] text-gray-100 md:text-[16px] lg:text-[18px]">
                    {" "}
                    We've got all your payments covered
                  </p>
                </div>
                {/* Stats */}
                <div className="col-span-12 lg:col-span-6">
                  <div
                    className="wow fadeInRight relative flex flex-wrap items-center lg:justify-end"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <div className="absolute top-[65px] right-[18px] hidden lg:block">
                      <svg
                        width="470"
                        height="18"
                        viewBox="0 0 470 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M199.614 1.72387C177.533 2.31462 155.712 3.04101 134.432 3.83514C104.309 4.95854 74.1969 6.12068 44.2665 7.96073C34.8451 8.5418 25.2775 8.90979 15.915 9.63613C10.0378 10.0913 2.24477 10.7401 1.22204 10.8757C0.687102 10.9531 0.453729 11.0695 0.37832 11.1082C-0.151901 11.3794 -0.0551557 11.6407 0.244125 11.8441C0.364308 11.9313 0.668216 12.1444 1.51186 12.1735C57.9321 14.1588 115.625 10.285 172.113 9.87824C270.075 9.18096 371.005 11.9507 468.189 17.9938C469.037 18.0423 469.862 17.8001 469.98 17.4418C470.121 17.0931 469.508 16.7542 468.66 16.7057C371.312 10.6529 270.216 7.87347 172.066 8.58044C119.421 8.95813 65.7369 12.3575 13.0188 11.1953C14.2301 11.0985 15.4178 11.0016 16.5018 10.9144C25.8267 10.1881 35.3541 9.8298 44.7379 9.24873C74.6046 7.40868 104.655 6.24654 134.739 5.13282C172.066 3.73826 211.02 2.53737 250.28 1.97567C264.325 2.06283 278.322 2.15003 292.32 2.25656C322.602 2.48899 353.025 3.16691 383.236 4.07725C392.332 4.3581 401.428 4.64861 410.524 4.9004C413.541 4.98757 421.317 5.23932 422.401 5.21995C423.745 5.20058 424.004 4.73577 424.027 4.65829C424.098 4.48397 424.051 4.24185 423.391 4.03847C423.32 4.00942 422.896 3.91251 421.953 3.8544C367.023 0.426098 308.368 -0.145196 250.327 0.677985C189.104 0.319659 127.646 0.164636 66.5783 0C65.704 0 64.99 0.290577 64.9829 0.648903C64.9782 1.00723 65.6827 1.29782 66.557 1.3075C110.775 1.42371 155.217 1.53986 199.614 1.72387Z"
                          fill="url(#paint0_linear_552_4801)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_552_4801"
                            x1="0"
                            y1="9"
                            x2="470"
                            y2="9"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              stopColor="#491EB8"
                              stopOpacity="0"
                              offset="1"
                            ></stop>
                            <stop offset="1" stopColor="#DA2A51"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="max-md:pr-[20px] md:mt-[50px] md:pr-[65px] md:pl-0 lg:mt-0 lg:pr-0 lg:pl-[40px] xl:pl-[65px]">
                      <span className="font-mont inline-block pb-1 text-[40px] leading-none font-semibold text-black">
                        3.5<i className="not-italic">m</i>
                      </span>
                      <p className="font-medium max-sm:text-[10px] sm:text-[14px]">
                        Active Users
                      </p>
                    </div>
                    <div className="max-md:pr-[20px] md:mt-[50px] md:pr-[65px] md:pl-0 lg:mt-0 lg:pr-0 lg:pl-[40px] xl:pl-[65px]">
                      <span className="font-mont inline-block pb-1 text-[40px] leading-none font-semibold text-black">
                        240<i className="not-italic">+</i>
                      </span>
                      <p className="font-medium max-sm:text-[10px] sm:text-[14px]">
                        Trusted Companies
                      </p>
                    </div>
                    <div className="max-md:pr-[20px] md:mt-[50px] md:pr-[65px] md:pl-0 lg:mt-0 lg:pr-0 lg:pl-[40px] xl:pl-[65px]">
                      <span className="font-mont inline-block pb-1 text-[40px] leading-none font-semibold text-black">
                        78<i className="not-italic">k</i>
                      </span>
                      <p className="font-medium max-sm:text-[10px] sm:text-[14px]">
                        Customer care
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-12 gap-[60px] max-md:gap-[30px]">
                {/* Card */}
                <div
                  className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-br from-[#B2D6F8] to-[#81E0F5] transition-all duration-700 group-hover:rotate-0"></div>
                  <div className="relative flex h-[280px] flex-col justify-between rounded-[20px] border border-white/20 bg-white/30 p-[50px_30px] shadow-[0_30px_30px_rgba(1,10,10,0.1)] backdrop-blur-[20px] transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)]">
                    <div>
                      <img
                        src="assets/img/service/sv-icon-2-1.webp"
                        alt=""
                        className="max-w-full"
                      />
                    </div>
                    <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                      <h4 className="font-mont mb-1 text-[22px] font-semibold">
                        Online
                      </h4>
                      <a
                        href="service-details.webp"
                        className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                      >
                        {" "}
                        Explore{" "}
                        <i className="far fa-arrow-right relative top-[2px]"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Repeat card with different gradient */}
                <div
                  className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                  data-wow-duration=".9s"
                  data-wow-delay=".6s"
                >
                  <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-b from-[#B0F248] to-[#6DD18A] transition-all duration-700 group-hover:rotate-0"></div>
                  <div className="relative flex h-[280px] flex-col justify-between rounded-[20px] border border-white/20 bg-white/30 p-[50px_30px] shadow-[0_30px_30px_rgba(1,10,10,0.1)] backdrop-blur-[20px] transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)]">
                    <div>
                      <img src="assets/img/service/sv-icon-2-2.webp" alt="" />
                    </div>
                    <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                      <h4 className="font-mont mb-1 text-[22px] font-semibold">
                        Bank Transfers
                      </h4>
                      <a
                        href="service-details.webp"
                        className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                      >
                        {" "}
                        Explore <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Repeat card with different gradient */}
                <div
                  className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                  data-wow-duration=".9s"
                  data-wow-delay=".8s"
                >
                  <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-b from-[#FFDBBA] to-[#FF94C7] transition-all duration-700 group-hover:rotate-0"></div>
                  <div className="relative flex h-[280px] flex-col justify-between rounded-[20px] border border-white/20 bg-white/30 p-[50px_30px] shadow-[0_30px_30px_rgba(1,10,10,0.1)] backdrop-blur-[20px] transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)]">
                    <div>
                      <img src="assets/img/service/sv-icon-2-3.webp" alt="" />
                    </div>
                    <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                      <h4 className="font-mont mb-1 text-[22px] font-semibold">
                        Keyed
                      </h4>
                      <a
                        href="service-details.webp"
                        className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                      >
                        {" "}
                        Explore <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Repeat card with different gradient */}
                <div
                  className="group wow fadeInUp relative col-span-12 mb-[40px] md:col-span-6 lg:col-span-3"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div className="absolute inset-0 right-[20px] h-[99%] w-full -rotate-[10deg] rounded-[20px] bg-gradient-to-b from-[#ADBFFF] to-[#B67DFF] transition-all duration-700 group-hover:rotate-0"></div>
                  <div className="relative flex h-[280px] flex-col justify-between rounded-[20px] border border-white/20 bg-white/30 p-[50px_30px] shadow-[0_30px_30px_rgba(1,10,10,0.1)] backdrop-blur-[20px] transition group-hover:shadow-[0_100px_100px_rgba(10,10,10,0.1)]">
                    <div>
                      <img src="assets/img/service/sv-icon-2-4.webp" alt="" />
                    </div>
                    <div className="translate-y-[41px] transition-all duration-300 group-hover:translate-y-[12px]">
                      <h4 className="font-mont mb-1 text-[22px] font-semibold">
                        In-Person
                      </h4>
                      <a
                        href="service-details.webp"
                        className="font-mont invisible inline-flex items-center gap-2 text-[16px] font-semibold text-black opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:text-primary"
                      >
                        {" "}
                        Explore <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Box */}
              <div
                className="wow fadeInUp mt-[30px] grid grid-cols-12 gap-[60px] max-md:gap-[30px]"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                  <div className="rounded-[30px] bg-gradient-to-br from-[#FFF7F1] to-[#FAE9EF] max-lg:p-[20px] lg:p-[50px_60px]">
                    <h4 className="font-mont pb-[28px] text-[24px] font-semibold">
                      {" "}
                      More free tools than you can handle
                    </h4>
                    <ul className="flex flex-wrap">
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Invoicing
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Online Checkout
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Point-of-Sale
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Online Food Ordering
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        ICard Vault
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Customer Portal
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Inventory
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Virtual Terminal
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Recurring Plans
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        Payment Links
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        SMS Payments
                      </li>
                      <li className="relative pl-3 text-[15px] leading-[30px] font-medium text-black before:absolute before:top-[14px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-black max-md:w-1/2 max-sm:w-full md:w-1/4">
                        {" "}
                        QR Codes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service Area End */}

          {/* tp-account-area-strat */}
          <div className="pb-[120px]">
            <div className="mx-auto max-w-[1200px] px-[15px]">
              <div className="grid grid-cols-12 items-center gap-[30px]">
                <div className="col-span-12 lg:col-span-6">
                  <div
                    className="wow fadeInLeft relative text-center"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <img src="assets/img/account/account-bg.webp" alt="" />
                    <div className="absolute max-sm:top-[-8px] max-sm:left-[9px] sm:top-[-66px] sm:left-[23px] md:left-[124px] lg:top-[-2px] lg:left-[19px] xl:top-[-70px] xl:left-[61px]">
                      <img src="assets/img/account/acc-main.webp" alt="" />
                    </div>
                    <div className="absolute max-sm:right-[14%] max-sm:bottom-[-3px] sm:right-[31%] sm:bottom-[-3px] md:right-[32%] md:bottom-[-6px]">
                      <img src="assets/img/account/ac-author.webp" alt="" />
                    </div>
                    <div className="animate-tpupdown absolute top-[-14px] left-[-2%]">
                      <img src="assets/img/account/ac-shape-1.webp" alt="" />
                    </div>
                    <div className="animate-moving absolute right-[2%] bottom-[-6px]">
                      <img src="assets/img/account/ac-shape-2.webp" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="max-xl:pr-0 max-lg:mt-[40px] max-lg:pl-0 lg:pl-[40px] xl:pr-[60px]">
                    <div className="mb-[40px]">
                      <h4 className="font-mont mb-2 inline-block border-b-2 border-[#aee87c] text-[16px] leading-5 font-medium text-black">
                        Open An Account
                      </h4>
                      <h3 className="xxl:text-[60px] font-mont leading-[1.1] font-semibold tracking-[-0.04em] max-md:text-[32px] md:text-[40px] xl:text-[55px]">
                        Let’s get started
                      </h3>
                    </div>
                    <div className="mb-[50px]">
                      <div className="mb-[27px] flex items-center border-b border-border pb-[29px]">
                        <span className="max-sm:mr-20px mr-[35px] min-w-[40px] text-3xl font-medium text-black">
                          01
                        </span>
                        <p className="xxl:text-[20px] font-mont font-medium text-black max-xl:text-[18px] max-sm:text-[17px] max-sm:leading-[23px] sm:leading-7 xl:text-[19px]">
                          Sign up in a few minutes
                        </p>
                      </div>
                      <div className="mb-[27px] flex items-center border-b border-border pb-[29px]">
                        <span className="max-sm:mr-20px mr-[35px] min-w-[40px] text-3xl font-medium text-black">
                          02
                        </span>
                        <p className="xxl:text-[20px] font-mont font-medium text-black max-xl:text-[18px] max-sm:text-[17px] max-sm:leading-[23px] sm:leading-7 xl:text-[19px]">
                          Let us verify your identity
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="max-sm:mr-20px mr-[35px] min-w-[40px] text-3xl font-medium text-black">
                          03
                        </span>
                        <p className="xxl:text-[20px] font-mont font-medium text-black max-xl:text-[18px] max-sm:text-[17px] max-sm:leading-[23px] sm:leading-7 xl:text-[19px]">
                          Your account is open; you can send{" "}
                          <br className="max-xl:hidden" /> your first payment
                        </p>
                      </div>
                    </div>
                    <div className="tp-account-btn-box">
                      <a
                        className="font-mont relative z-[1] mb-[15px] inline-block h-[52px] overflow-hidden rounded-[10px] bg-[linear-gradient(180deg,#B1FF36_-23%,#1D863C_100%)] px-[30px] text-center text-[16px] leading-[52px] font-semibold tracking-[-0.02em] text-white shadow-[0px_2px_3px_rgba(3,22,3,0.2)] transition-all duration-500 hover:transform-[translateY(-2px)] hover:shadow-[0px_8px_24px_0px_rgba(25,118,41,0.3)]"
                        href="register.webp"
                      >
                        Open An Account in Minutes
                      </a>
                      <p className="text-[13px] leading-3 font-medium text-gray-500">
                        Try it for 30 days. For free. No obligations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-account-area-end  */}
        </main>
      </div>
    </div>
  )
}

export default about
