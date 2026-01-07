"use client"

import { useEffect, useRef } from "react"

interface ParallaxItemProps {
  children: React.ReactNode
  direction?: "vertical" | "horizontal"
  start?: number
  end?: number
  scrollStart?: string
  scrollEnd?: string
  scrub?: number | boolean
  disable?: "mobile" | "mobileLandscape" | "tablet"
  className?: string
  isTarget?: boolean
}

export function ParallaxItem({
  children,
  direction = "vertical",
  start = 20,
  end = -20,
  scrollStart = "top bottom",
  scrollEnd = "bottom top",
  scrub = true,
  disable,
  className = "",
  isTarget = false,
}: ParallaxItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGsap = async () => {
      const gsapModule = await import("gsap")
      const gsap = gsapModule.default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      const mm = gsap.matchMedia()

      mm.add(
        {
          isMobile: "(max-width:479px)",
          isMobileLandscape: "(max-width:767px)",
          isTablet: "(max-width:991px)",
          isDesktop: "(min-width:992px)",
        },
        (context) => {
          const conditions = context.conditions as {
            isMobile: boolean
            isMobileLandscape: boolean
            isTablet: boolean
          }

          if (
            (disable === "mobile" && conditions.isMobile) ||
            (disable === "mobileLandscape" && conditions.isMobileLandscape) ||
            (disable === "tablet" && conditions.isTablet)
          ) {
            return
          }

          const trigger = ref.current
          if (!trigger) return

          const target = isTarget
            ? trigger.querySelector("[data-parallax-target]") ?? trigger
            : trigger

          const prop = direction === "horizontal" ? "xPercent" : "yPercent"
          const scrubValue = typeof scrub === "number" ? scrub : true

          gsap.fromTo(
            target,
            { [prop]: start },
            {
              [prop]: end,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: `clamp(${scrollStart})`,
                end: `clamp(${scrollEnd})`,
                scrub: scrubValue,
              },
            }
          )
        }
      )

      return () => mm.revert()
    }

    void loadGsap()
  }, [direction, start, end, scrollStart, scrollEnd, scrub, disable, isTarget])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

