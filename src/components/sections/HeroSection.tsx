"use client"

import { ParallaxItem } from "@/components/ParallaxItem"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-clip bg-[#e2e1df]"
    >
      <ParallaxItem
        scrollStart="top top"
        start={0}
        end={30}
        className="absolute inset-0 z-0 h-[120%] w-full"
      >
        <div className="h-full w-full bg-linear-to-br from-[#d4d3d1] via-[#e2e1df] to-[#c9c8c6]" />
      </ParallaxItem>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-medium">
          {"Exponent".split("").map((char, i) => (
            <ParallaxItem
              key={i}
              disable="mobile"
              start={30 + i * 8}
              end={0}
              scrollEnd="center center"
              className="inline-block"
            >
              {char}
            </ParallaxItem>
          ))}
        </h2>
      </div>
    </section>
  )
}

