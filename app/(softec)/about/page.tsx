import AboutCompany from "@/components/about/AboutCompany"
import AboutService from "@/components/about/AboutService"
import AboutUs from "@/components/about/AboutUs"
import AboutUs2 from "@/components/about/AboutUs2"
import FeacherSection from "@/components/FeacherSection"
import PaymentMethod from "@/components/PaymentMethod"
import { siteMetadata } from "@/lib/data/metadata"
import Image from "next/image"



export const metadata = siteMetadata.about

const about = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          {/* ab-company-area  */}
          <AboutCompany />
          {/* ab-company-area end  */}

          {/* tp-about-area-start */}
          <AboutUs />
          <AboutUs2 />
          {/* tp-about-area-end */}
          {/* tp-counter-area-start  */}
          <FeacherSection />
          {/* tp-counter-area-end  */}
          <PaymentMethod />
          {/* Service Area Start */}
          <AboutService />
          {/* Service Area End */}

          {/* tp-account-area-strat */}
          <div className="pb-24 md:pb-32">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
              <div className="grid grid-cols-12 items-center gap-6 md:gap-8">
                {/* Image Section */}
                <div className="col-span-12 lg:col-span-6">
                  <div
                    className="wow fadeInLeft relative text-center"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets/img/account/account-bg.webp"
                      alt=""
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute max-sm:top-[-8px] max-sm:left-[9px] sm:top-[-66px] sm:left-[23px] md:left-[124px] lg:top-0 lg:left-[20px]">
                      <Image
                        width={500}
                        height={520}
                        src="/assets/img/account/acc-main.webp"
                        alt=""
                        className="rounded-xl"
                      />
                    </div>
                    <div className="absolute max-sm:right-[14%] max-sm:bottom-[-3px] sm:right-[31%] sm:bottom-[-3px] md:right-[32%] md:bottom-[-6px]">
                      <img
                        src="assets/img/account/ac-author.webp"
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                    <div className="animate-tpupdown absolute top-[-14px] left-[-2%]">
                      <img src="assets/img/account/ac-shape-1.webp" alt="" />
                    </div>
                    <div className="animate-moving absolute right-[2%] bottom-[-6px]">
                      <img src="assets/img/account/ac-shape-2.webp" alt="" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="col-span-12 lg:col-span-6">
                  <div className="max-xl:pr-0 max-lg:mt-10 max-lg:pl-0 lg:pl-10 xl:pr-16">
                    {/* Heading */}
                    <div className="mb-8">
                      <h4 className="font-mont mb-2 inline-block border-b-2 border-[#aee87c] text-sm font-medium text-gray-800 dark:text-gray-300">
                        GET STARTED WITH DIGITECH
                      </h4>
                      <h3 className="xxl:text-[60px] md:text-[40px] max-md:text-[32px] xl:text-[55px] font-mont font-semibold leading-[1.1] tracking-[-0.04em] text-gray-900 dark:text-white">
                        Let’s grow your business online
                      </h3>
                    </div>

                    {/* Steps */}
                    <div className="mb-10 space-y-6">
                      {[
                        "Share your business goals and requirements",
                        "Get a custom digital marketing strategy",
                        "Launch, scale, and grow your brand with DigiTech",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-start border-b border-gray-200 dark:border-gray-700 pb-4"
                        >
                          <span className="mr-5 min-w-[40px] text-2xl font-semibold text-green-600 dark:text-green-400">
                            {`0${index + 1}`}
                          </span>
                          <p className="font-mont font-medium text-gray-800 dark:text-gray-300 xl:text-base">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="tp-account-btn-box">
                      <a
                        href="/contact"
                        className="relative inline-block mb-3 h-[52px] px-8 rounded-lg bg-gradient-to-br from-[#B1FF36] to-[#1D863C] text-white font-semibold text-base leading-[52px] tracking-[-0.02em] shadow-md hover:shadow-xl hover:translate-y-[-2px] transform transition-all duration-300"
                      >
                        Start Your Growth Journey
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Free consultation • No commitment • Results-driven approach
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
