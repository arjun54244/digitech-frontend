import NewsLatter from "@/components/NewsLatter"
// import "./main.css";

const page = () => {
  return (
    <>
      <section className="dark:bg-background-7 bg-white py-[50px] md:py-[100px] xl:py-[200px]">
        <div className="mx-5 max-w-full min-[425px]:max-w-[380px] min-[475px]:max-w-[450px] sm:mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
          <div className="relative rounded-[25px] bg-[url('/images/ns-img-242.png')] bg-cover bg-bottom px-3 py-[100px] sm:px-0">
            <div className="mb-[70px] space-y-5 text-center">
              <span
                data-ns-animate
                data-delay="0.1"
                className="text-[#f9eb57]"
                style={{
                  paddingInline: "calc(var(--spacing) * 5)",
                  paddingBlock: "calc(var(--spacing) * 1.5)",
                  fontSize: "var(--text-tagline-2)",
                  lineHeight: "var(--text-tagline-2--line-height)",
                  fontWeight: "var(--font-weight-normal)",
                  whiteSpace: "nowrap",
                  textTransform: "lowercase",
                  backgroundColor: "#fcfcfc1a",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "9999px",
                  display: "inline-block",
                }}
              >
                Social activity
              </span>
              <div className="space-y-3">
                <h2
                  data-ns-animate
                  data-delay="0.2"
                  className="text-5xl text-[#fcfcfc]"
                >
                  Select in{" "}
                  <span className="text-purple-500">social media</span>
                  platform
                </h2>
                <p
                  data-ns-animate
                  data-delay="0.3"
                  className="mx-auto max-w-[300px] px-3 text-accent/60 sm:max-w-[400px] sm:px-0 lg:max-w-[510px]"
                >
                  Until recently, the prevailing view assumed lorem ipsum was
                  born as a nonsense text. It's not Latin though it looks like
                  nothing.
                </p>
              </div>
            </div>
            <div className="mx-auto mb-14 grid grid-cols-12 gap-y-6 px-3 min-[445px]:max-w-[500px] sm:px-0 lg:max-w-[852px] lg:gap-8">
              <div
                data-ns-animate
                data-delay="0.4"
                className="group col-span-12 lg:col-span-6"
              >
                <a href="./social-media-management-integration.html">
                  <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                        <img
                          src="./images/icons/zapier.svg"
                          alt="zapier"
                          className="size-8 sm:size-12"
                        />
                      </figure>
                      <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                          Zapier
                        </h3>
                        <p className="text-accent/60">Communication</p>
                      </div>
                    </div>
                    <div className="group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-accent/10 transition-all duration-[600ms] ease-in-out sm:size-14">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-ns-animate
                data-delay="0.5"
                className="group col-span-12 lg:col-span-6"
              >
                <a href="./social-media-management-integration.html">
                  <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                        <img
                          src="./images/icons/snapchat.svg"
                          alt="snapchat"
                          className="size-8 sm:size-12"
                        />
                      </figure>
                      <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                          Snapchat
                        </h3>
                        <p className="text-accent/60">Messaging app</p>
                      </div>
                    </div>
                    <div className="group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-accent/10 transition-all duration-[600ms] ease-in-out sm:size-14">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-ns-animate
                data-delay="0.6"
                className="group col-span-12 lg:col-span-6"
              >
                <a href="./social-media-management-integration.html">
                  <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                        <img
                          src="./images/icons/shopify.svg"
                          alt="Shopify"
                          className="size-8 sm:size-12"
                        />
                      </figure>
                      <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                          Shopify
                        </h3>
                        <p className="text-accent/60">E-commerce</p>
                      </div>
                    </div>
                    <div className="group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-accent/10 transition-all duration-[600ms] ease-in-out sm:size-14">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-ns-animate
                data-delay="0.7"
                className="group col-span-12 lg:col-span-6"
              >
                <a href="./social-media-management-integration.html">
                  <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                        <img
                          src="./images/icons/figma.svg"
                          alt="figma"
                          className="size-8 sm:size-12"
                        />
                      </figure>
                      <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                          Figma
                        </h3>
                        <p className="text-accent/60">Design tool</p>
                      </div>
                    </div>
                    <div className="group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-accent/10 transition-all duration-[600ms] ease-in-out sm:size-14">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-ns-animate
                data-delay="0.8"
                className="group col-span-12 lg:col-span-6"
              >
                <a href="./social-media-management-integration.html">
                  <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                        <img
                          src="./images/icons/slack.svg"
                          alt="slack"
                          className="size-8 sm:size-12"
                        />
                      </figure>
                      <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                          Slack
                        </h3>
                        <p className="text-accent/60">Communication</p>
                      </div>
                    </div>
                    <div className="group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-accent/10 transition-all duration-[600ms] ease-in-out sm:size-14">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-ns-animate
                data-delay="0.9"
                className="group col-span-12 lg:col-span-6"
              >
                <a href="./social-media-management-integration.html">
                  <div className="group-hover:shadow-1 flex items-center justify-between rounded-xl bg-white/15 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                    <div className="flex items-center gap-4">
                      <figure className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12 sm:size-14">
                        <img
                          src="./images/icons/tiktok.svg"
                          alt="tiktok"
                          className="size-8 sm:size-12"
                        />
                      </figure>
                      <div className="transform space-y-1 transition-transform duration-500 group-hover:translate-x-1.5">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                          TikTok
                        </h3>
                        <p className="text-accent/60">Video feed</p>
                      </div>
                    </div>
                    <div className="group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-accent/10 transition-all duration-[600ms] ease-in-out sm:size-14">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-ns-animate
              data-delay="1"
              className="flex items-center justify-center"
            >
              <a
                href="./social-media-management-refund-policy.html"
                className="btn btn-white btn-xl hover:btn-white-dark dark:btn-transparent dark:hover:btn-accent"
              >
                <span>See It in action</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <NewsLatter/>
    </>
  )
}

export default page
