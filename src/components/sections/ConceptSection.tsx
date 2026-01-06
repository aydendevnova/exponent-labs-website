"use client"

import { ParallaxItem } from "@/components/ParallaxItem"

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="flex min-h-screen flex-col items-center justify-center gap-12 bg-[#e2e1df] px-8"
    >
      <h2 className="max-w-[15ch] text-center text-5xl font-medium leading-tight">
        Building the{" "}
        {"future.".split("").map((char, i) => (
          <ParallaxItem
            key={i}
            disable="mobile"
            start={25 + i * 25}
            end={0}
            scrollEnd="center center"
            className="inline-block"
          >
            {char}
          </ParallaxItem>
        ))}
      </h2>

      <div className="flex w-full max-w-4xl gap-5">
        <ParallaxItem
          scrub={2}
          start={-25}
          end={0}
          className="relative aspect-square w-1/2 overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 h-[120%] w-full bg-linear-to-tr from-[#7886c7] to-[#a5b1e0]" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-mono text-sm text-white/80">
              scrub: 2
              <br />
              start: -25, end: 0
            </p>
          </div>
        </ParallaxItem>

        <ParallaxItem
          scrub={2}
          start={-40}
          end={0}
          className="relative aspect-square w-1/2 overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 h-[120%] w-full bg-linear-to-bl from-[#7886c7] to-[#5a6ba8]" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-mono text-sm text-white/80">
              scrub: 2
              <br />
              start: -40, end: 0
            </p>
          </div>
        </ParallaxItem>
      </div>
    </section>
  )
}

