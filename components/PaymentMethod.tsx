
const PaymentMethod = () => {
   return (
      <>
         <div className="md:pb-[250px] max-md:pb-[100px]">
            <div className="mx-auto max-w-full px-[15px]">
               <div className="grid grid-cols-12">

                  {/* Heading */}
                  <div className="col-span-12">
                     <div className="text-center mb-[55px]">
                        <h3 className="
                  xxl:text-[60px] xl:text-[55px] md:text-[40px] max-md:text-[32px]
                  font-mont leading-[1.1] tracking-[-0.04em] font-semibold mb-[20px]
                  text-[#070D20] dark:text-white
                ">
                           All major<br className="max-sm:hidden" /> payment methods
                        </h3>
                        <p className="
                  text-[16px]
                  text-gray-500 dark:text-gray-400
                ">
                           We've got all your payments covered
                        </p>
                     </div>
                  </div>

                  {/* Radial diagram */}
                  <div className="col-span-12">
                     <div className="relative text-center sm:pt-[170px] pb-[150px] max-sm:pt-[130px]">
                        <div className="relative inline-block z-[1]">

                           {/* Center logo */}
                           <div className="relative z-[3] inline-block">
                              <img
                                 src="assets/img/payment-logo/logo-main.webp"
                                 alt=""
                                 className="rounded-full shadow-[0px_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0px_20px_60px_rgba(0,0,0,0.5)]"
                              />
                           </div>

                           {/* ── Spoke lines & logos ─────────────────────────────────────────
                      Only change: bg-secondary → bg-gray-300 dark:bg-gray-600
                      after: dots follow the same token.
                      All positioning, rotation, width, responsive classes are UNCHANGED.
                  ────────────────────────────────────────────────────────────────── */}

                           {/* logo-3 */}
                           <div className="absolute top-1/2 xl:left-[-150%] transform translate-[-50%] h-px xxl:w-[610px] bg-gray-300 dark:bg-gray-600 origin-right lg:-rotate-[14deg] xl:w-[510px] lg:w-[380px] lg:left-[-68%] md:w-[250px] md:left-[-35%] md:-rotate-[18deg] max-md:w-[140px] max-md:left-[6%]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:rotate-[14deg] md:rotate-[18deg]">
                                 <img src="assets/img/payment-logo/logo-3.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-1 */}
                           <div className="absolute top-1/2 lg:left-[-9%] transform translate-[-50%] h-px lg:w-[190px] bg-gray-300 dark:bg-gray-600 origin-right lg:-rotate-[44deg] md:w-[250px] md:left-[-35%] md:-rotate-[72deg] max-md:w-[140px] max-md:left-[6%] hidden lg:block">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:rotate-[44deg] md:rotate-[72deg]">
                                 <img src="assets/img/payment-logo/logo-1.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-2 */}
                           <div className="absolute top-1/2 lg:left-[-74%] transform translate-[-50%] h-px lg:w-[380px] bg-gray-300 dark:bg-gray-600 origin-right lg:-rotate-[24deg] md:w-[250px] md:left-[-35%] md:-rotate-[51deg] max-md:w-[140px] max-md:left-[6%] max-md:-rotate-[43deg]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:rotate-[24deg] md:rotate-[51deg] max-md:rotate-[43deg]">
                                 <img src="assets/img/payment-logo/logo-2.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-4 */}
                           <div className="absolute top-1/2 lg:left-[-90%] transform translate-[-50%] h-px lg:w-[430px] bg-gray-300 dark:bg-gray-600 origin-right lg:-rotate-[2deg] md:w-[250px] md:left-[-35%] md:-rotate-[9deg] max-md:w-[140px] max-md:left-[6%] hidden lg:block">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[20s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:rotate-[2deg] md:rotate-[9deg]">
                                 <img src="assets/img/payment-logo/logo-4.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-5 */}
                           <div className="absolute top-1/2 xl:left-[-137%] transform translate-[-50%] h-px xl:w-[570px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[10deg] lg:w-[380px] lg:left-[-68%] md:w-[250px] md:left-[-35%] md:rotate-[14deg] max-md:w-[140px] max-md:left-[6%]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[10deg] md:-rotate-[14deg]">
                                 <img src="assets/img/payment-logo/logo-5.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-6 */}
                           <div className="absolute top-1/2 lg:left-[-63%] transform translate-[-50%] h-px lg:w-[350px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[26deg] md:w-[250px] md:left-[-35%] md:rotate-[41deg] max-md:w-[140px] max-md:left-[6%] hidden lg:block">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[26deg] md:-rotate-[41deg]">
                                 <img src="assets/img/payment-logo/logo-6.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-7 */}
                           <div className="absolute top-1/2 lg:left-[6%] transform translate-[-50%] h-px lg:w-[140px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[51deg] md:w-[250px] max-md:w-[140px] md:left-[-35%] max-md:left-[-6%] max-lg:rotate-[63deg]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[20s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[51deg] md:-rotate-[63deg]">
                                 <img src="assets/img/payment-logo/logo-7.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-16 */}
                           <div className="absolute top-1/2 lg:left-[1%] transform translate-[-50%] h-px lg:w-[160px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[130deg] md:w-[250px] md:left-[-35%] md:rotate-[90deg] hidden lg:block">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[130deg] md:-rotate-[90deg]">
                                 <img src="assets/img/payment-logo/logo-16.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-15 */}
                           <div className="absolute top-1/2 lg:left-[-73%] transform translate-[-50%] h-px lg:w-[380px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[150deg] md:w-[250px] md:left-[-35%] md:rotate-[116deg] max-md:w-[140px] max-md:left-[6%] max-md:rotate-[99deg]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[20s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[150deg] md:-rotate-[116deg] max-md:-rotate-[99deg]">
                                 <img src="assets/img/payment-logo/logo-15.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-14 */}
                           <div className="absolute top-1/2 xl:left-[-146%] transform translate-[-50%] h-px xl:w-[600px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[160deg] lg:w-[380px] lg:left-[-68%] md:w-[250px] md:left-[-35%] md:rotate-[142deg] hidden lg:block max-md:w-[140px] max-md:left-[6%]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[160deg] md:-rotate-[142deg]">
                                 <img src="assets/img/payment-logo/logo-14.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-13 */}
                           <div className="absolute top-1/2 lg:left-[-89%] transform translate-[-50%] h-px lg:w-[430px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[170deg] md:w-[250px] md:left-[-35%] md:rotate-[160deg] max-md:w-[140px] max-md:left-[6%] max-md:rotate-[148deg]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[20s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[170deg] md:-rotate-[160deg] max-md:-rotate-[148deg]">
                                 <img src="assets/img/payment-logo/logo-13.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-12 */}
                           <div className="absolute top-1/2 xl:left-[-146%] transform translate-[-50%] h-px xxl:w-[600px] bg-gray-300 dark:bg-gray-600 origin-right rotate-[180deg] xl:w-[560px] lg:w-[380px] lg:left-[-68%] md:w-[250px] md:left-[-35%] hidden lg:block max-md:w-[140px] max-md:left-[6%]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-[180deg]">
                                 <img src="assets/img/payment-logo/logo-12.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-11 */}
                           <div className="absolute top-1/2 lg:left-[-45%] transform translate-[-50%] h-px lg:w-[300px] bg-gray-300 dark:bg-gray-600 origin-right rotate-[190deg] md:w-[250px] md:left-[-35%] max-md:w-[140px] max-md:left-[6%]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-[190deg]">
                                 <img src="assets/img/payment-logo/logo-11.webp" alt="" className="rounded-full shadow-[0px_10px_50px_rgba(32,33,36,0.1)] dark:shadow-[0px_10px_50px_rgba(0,0,0,0.4)] transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-10 */}
                           <div className="absolute top-1/2 xl:left-[-129%] transform translate-[-50%] h-px xl:w-[550px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[199deg] lg:w-[380px] lg:left-[-68%] md:w-[250px] md:left-[-35%] md:rotate-[215deg] hidden lg:block max-md:w-[140px] max-md:left-[6%]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[199deg] md:-rotate-[215deg]">
                                 <img src="assets/img/payment-logo/logo-10.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-9 */}
                           <div className="absolute top-1/2 lg:left-[-70%] transform translate-[-50%] h-px lg:w-[370px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[211deg] md:w-[250px] md:left-[-35%] md:rotate-[236deg] max-md:w-[140px] max-md:left-[6%] max-md:rotate-[236deg]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:right-0 after:animate-[circle-animation_30s_linear_infinite] after:delay-[30s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[211deg] md:-rotate-[236deg]">
                                 <img src="assets/img/payment-logo/logo-9.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                           {/* logo-8 */}
                           <div className="absolute top-1/2 lg:left-[-3%] transform translate-[-50%] h-px lg:w-[170px] bg-gray-300 dark:bg-gray-600 origin-right lg:rotate-[228deg] md:w-[250px] md:left-[-35%] md:rotate-[273deg] max-md:w-[140px] max-md:left-[6%] max-md:rotate-[276deg]">
                              <span className="relative block after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-gray-300 dark:after:bg-gray-600 after:rounded-full after:-top-[3px] after:left-0 after:animate-[circle-animation-2_30s_linear_infinite] after:delay-[10s]"></span>
                              <span className="absolute -left-10 top-1/2 -translate-y-1/2 lg:-rotate-[228deg] md:-rotate-[273deg]">
                                 <img src="assets/img/payment-logo/logo-8.webp" alt="" className="transition hover:scale-110" />
                              </span>
                           </div>

                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default PaymentMethod