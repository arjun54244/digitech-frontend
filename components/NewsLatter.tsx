import React from "react"

function NewsLatter() {
  return (
    <>
      <section className="py-16 lg:py-22 xl:py-28">
        <div className="main-container">
          <div
            data-ns-animate
            data-delay="0.1"
            className="bg-[#eaeceb] relative z-0 mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden rounded-4xl px-5 py-28 text-center"
          >
            <figure
              className="pointer-events-none absolute -bottom-10 -left-[10%] select-none md:-left-[5%] lg:left-0"
              data-ns-animate
              data-delay="0.3"
              data-direction="left"
              data-offset="90"
              data-spring="true"
              data-duration="2.4"
            >
              <img
                src="./images/ns-img-336.svg"
                alt="cta image"
                className="max-sm:scale-75"
              />
            </figure>
            <figure
              className="pointer-events-none absolute top-0 -right-[16%] select-none md:-right-[10%] lg:right-0"
              data-ns-animate
              data-delay="0.3"
              data-direction="right"
              data-offset="90"
              data-spring="true"
              data-duration="2.4"
            >
              <img
                src="./images/ns-img-337.svg"
                alt="cta image"
                className="max-sm:scale-75"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="text-5xl" data-ns-animate data-delay="0.1">
                Ready to experience <br className="hidden lg:block" />
                smarter living?
              </h2>
              <p style={{opacity: 1}} data-ns-animate data-delay="0.2">
                Join thousands of users already enjoying{" "}
                <br className="hidden lg:block" />
                effortless AI-powered control.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-3 md:w-auto md:flex-row md:gap-y-0">
              <div
                data-ns-animate
                data-delay="0.4"
                data-direction="left"
                data-offset="50"
                data-instant
                className="w-[90%] md:w-auto"
              >
                <div className="group/btn-v2 {=$class} mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto">
                  <a
                    href="./ai-gadgets-login.html"
                    className="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto"
                  >
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Get started now
                    </span>

                    <div className="relative size-6 overflow-hidden">
                      <span className="btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11 5H13V7H11V5Z" />
                          <path d="M5 5H7V7H5V5Z" />
                          <path d="M14 8H16V10H14V8Z" />
                          <path d="M8 8H10V10H8V8Z" />
                          <path d="M17 11H19V13H17V11Z" />
                          <path d="M11 11H13V13H11V11Z" />
                          <path d="M14 14H16V16H14V14Z" />
                          <path d="M8 14H10V16H8V14Z" />
                          <path d="M11 17H13V19H11V17Z" />
                          <path d="M5 17H7V19H5V17Z" />
                        </svg>
                      </span>

                      <span className="btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11 5H13V7H11V5Z" />
                          <path d="M5 5H7V7H5V5Z" />
                          <path d="M14 8H16V10H14V8Z" />
                          <path d="M8 8H10V10H8V8Z" />
                          <path d="M17 11H19V13H17V11Z" />
                          <path d="M11 11H13V13H11V11Z" />
                          <path d="M14 14H16V16H14V14Z" />
                          <path d="M8 14H10V16H8V14Z" />
                          <path d="M11 17H13V19H11V17Z" />
                          <path d="M5 17H7V19H5V17Z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div
                data-ns-animate
                data-delay="0.5"
                data-direction="left"
                data-offset="50"
                data-instant
                className="w-[90%] md:w-auto"
              >
                <div className="group/btn-v2 {=$class} mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto">
                  <a
                    href="./ai-gadgets-services.html"
                    className="btn-xl-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2 mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full !border-0 text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto"
                  >
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Explore products
                    </span>

                    <div className="relative size-6 overflow-hidden">
                      <span className="btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11 5H13V7H11V5Z" />
                          <path d="M5 5H7V7H5V5Z" />
                          <path d="M14 8H16V10H14V8Z" />
                          <path d="M8 8H10V10H8V8Z" />
                          <path d="M17 11H19V13H17V11Z" />
                          <path d="M11 11H13V13H11V11Z" />
                          <path d="M14 14H16V16H14V14Z" />
                          <path d="M8 14H10V16H8V14Z" />
                          <path d="M11 17H13V19H11V17Z" />
                          <path d="M5 17H7V19H5V17Z" />
                        </svg>
                      </span>

                      <span className="btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11 5H13V7H11V5Z" />
                          <path d="M5 5H7V7H5V5Z" />
                          <path d="M14 8H16V10H14V8Z" />
                          <path d="M8 8H10V10H8V8Z" />
                          <path d="M17 11H19V13H17V11Z" />
                          <path d="M11 11H13V13H11V11Z" />
                          <path d="M14 14H16V16H14V14Z" />
                          <path d="M8 14H10V16H8V14Z" />
                          <path d="M11 17H13V19H11V17Z" />
                          <path d="M5 17H7V19H5V17Z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsLatter
