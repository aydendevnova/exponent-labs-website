"use client"

import { ParallaxItem } from "@/components/ParallaxItem"

export function BottomSection() {
  return (
    <section
      id="bottom"
      className="relative flex min-h-screen items-center justify-center overflow-clip bg-[#7886c7] text-white"
    >
      <ParallaxItem
        scrollStart="top bottom"
        start={-20}
        end={20}
        className="absolute inset-0 z-0 h-[120%] w-full"
      >
        <div className="h-full w-full bg-linear-to-t from-[#5a6ba8] via-[#7886c7] to-[#9aa5d4]" />
      </ParallaxItem>
      <div className="relative z-10">
        <h2 className="text-5xl font-medium">
          {"The End".split("").map((char, i) => (
            <ParallaxItem
              key={i}
              start={i % 2 === 0 ? 40 : -40}
              end={0}
              scrollEnd="center center"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </ParallaxItem>
          ))}
        </h2>
      </div>
    </section>
  )
}

