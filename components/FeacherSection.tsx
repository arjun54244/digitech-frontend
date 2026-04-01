"use client"

import React, { useEffect, useRef, useState } from "react"

// 🔢 Counter Hook
const useCounter = (end: number, duration = 1500, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [start, end, duration])

  return count
}

const FeacherSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [start, setStart] = useState(false)

  // 👀 Trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const team = useCounter(350, 1500, start)
  const funding = useCounter(10, 1500, start)
  const users = useCounter(500, 1500, start)

  return (
    <>
      <div ref={ref} className="relative mt-20 max-md:pb-[100px] md:pb-[140px]">

        {/* Decorative shapes */}
        <div className="animate-rotate2 absolute right-[36%] bottom-[37%] -z-10 max-lg:top-[-5%] max-lg:left-[22%]">
          <img src="assets/img/counter/counter-shape-2.webp" alt="" />
        </div>
        <div className="absolute top-[-19%] right-[21%] -z-10">
          <img src="assets/img/counter/counter-shape-1.webp" alt="" />
        </div>
        <div className="absolute left-[18.5%] -z-10 max-xl:top-[-12%] max-xl:right-[0.5%] xl:top-[27%] xl:right-[11.5%] 2xl:right-[12.5%]">
          <img src="assets/img/counter/counter-shape-4.webp" alt="" />
        </div>

        <div className="mx-auto max-w-[1200px] px-[15px]">
          <div
            className="
              relative rounded-[100px]
              border border-white/60 dark:border-white/10
              bg-white/60 dark:bg-white/5
              shadow-[0px_20px_80px_rgba(7,13,32,0.08)] dark:shadow-[0px_20px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-[5px]
            "
          >
            <div className="grid grid-cols-12 gap-0">

              {/* Experts / Team */}
              <div className="col-span-12 md:col-span-4">
                <div
                  className="
                    flex justify-center py-[40px]
                    border-r border-[#EDEFF5] dark:border-white/10
                    max-md:border-none max-md:border-b max-md:border-[#EDEFF5] max-md:dark:border-white/10
                  "
                >
                  <div>
                    <h2 className="font-dm mb-0 flex items-end text-[40px] leading-[50px] font-normal text-[#070D20] dark:text-white">
                      <span className="font-dm leading-[50px] tracking-[-0.02em] italic max-sm:text-[45px] sm:text-[60px]">
                        {team}
                      </span>
                      +
                    </h2>
                    <p className="font-urban mt-0 leading-[20px] font-medium tracking-[0.04em] max-sm:text-[16px] sm:text-[18px] text-gray-600 dark:text-gray-300">
                      Digital Growth Experts
                    </p>
                  </div>
                </div>
              </div>

              {/* Clients Served */}
              <div className="col-span-12 md:col-span-4">
                <div
                  className="
                    flex justify-center py-[40px]
                    border-r border-[#EDEFF5] dark:border-white/10
                    max-md:border-none max-md:border-b max-md:border-[#EDEFF5] max-md:dark:border-white/10
                  "
                >
                  <div>
                    <h2 className="font-dm mb-0 flex items-end text-[40px] leading-[50px] font-normal text-[#070D20] dark:text-white">
                      <span className="font-dm leading-[50px] tracking-[-0.02em] italic max-sm:text-[45px] sm:text-[60px]">
                        {funding}
                      </span>
                      <em className="font-dm text-[60px] leading-[50px] font-normal italic">
                        +
                      </em>
                    </h2>
                    <p className="font-urban mt-0 leading-[20px] font-medium tracking-[0.04em] max-sm:text-[16px] sm:text-[18px] text-gray-600 dark:text-gray-300">
                      Businesses Served
                    </p>
                  </div>
                </div>
              </div>

              {/* Reach / Growth */}
              <div className="col-span-12 md:col-span-4">
                <div className="flex justify-center py-[40px]">
                  <div>
                    <h2 className="font-dm mb-0 flex items-end text-[40px] leading-[50px] font-normal text-[#070D20] dark:text-white">
                      <span className="font-dm leading-[50px] tracking-[-0.02em] italic max-sm:text-[45px] sm:text-[60px]">
                        {users}
                      </span>
                      <em className="font-dm text-[60px] leading-[50px] font-normal italic">
                        k+
                      </em>
                    </h2>
                    <p className="font-urban mt-0 leading-[20px] font-medium tracking-[0.04em] max-sm:text-[16px] sm:text-[18px] text-gray-600 dark:text-gray-300">
                      Monthly Audience Reach
                    </p>
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

export default FeacherSection