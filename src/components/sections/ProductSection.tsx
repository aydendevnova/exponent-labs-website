"use client"

import { ParallaxItem } from "@/components/ParallaxItem"

export function ProductSection() {
  return (
    <section
      id="product"
      className="flex min-h-screen flex-col items-center justify-center gap-16 bg-[#7886c7] px-8 py-24 text-white"
    >
      <h2 className="text-center text-5xl font-medium">
        Control the direc
        {"tion".split("").map((char, i) => (
          <ParallaxItem
            key={i}
            direction="horizontal"
            scrollStart="center 60%"
            scrub={2}
            start={0}
            end={(i + 1) * 150}
            className="inline-block"
          >
            {char}
          </ParallaxItem>
        ))}
      </h2>

      <div className="flex w-full max-w-5xl flex-col gap-6 overflow-hidden rounded-xl border border-white/20 bg-white/5 p-6 md:h-80 md:flex-row">
        <ParallaxItem
          direction="horizontal"
          scrollEnd="center center"
          start={60}
          end={0}
          className="flex h-full min-h-48 w-full flex-col justify-end rounded-lg border border-white/20 bg-white/5 p-5 md:w-1/3"
        >
          <p className="font-mono text-sm text-white/80">
            direction: horizontal
            <br />
            start: 60, end: 0
          </p>
        </ParallaxItem>

        <ParallaxItem
          direction="horizontal"
          scrollEnd="center center"
          start={60}
          end={0}
          scrub={0.5}
          className="flex h-full min-h-48 w-full flex-col justify-end rounded-lg border border-white/20 bg-white/5 p-5 md:w-1/3"
        >
          <p className="font-mono text-sm text-white/80">
            direction: horizontal
            <br />
            scrub: 0.5
          </p>
        </ParallaxItem>

        <ParallaxItem
          direction="horizontal"
          scrollEnd="center center"
          start={60}
          end={0}
          scrub={1}
          className="flex h-full min-h-48 w-full flex-col justify-end rounded-lg border border-white/20 bg-white/5 p-5 md:w-1/3"
        >
          <p className="font-mono text-sm text-white/80">
            direction: horizontal
            <br />
            scrub: 1
          </p>
        </ParallaxItem>
      </div>
    </section>
  )
}

