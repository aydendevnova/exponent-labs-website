"use client"

import { ParallaxItem } from "@/components/ParallaxItem"

const randomStarts = [30, -80, 150, 60, -50, -200, 300, -80]

export function ResultSection() {
  return (
    <section
      id="result"
      className="flex min-h-screen flex-col items-center justify-center gap-16 bg-[#e2e1df] px-8"
    >
      <h2 className="text-center text-5xl font-medium">
        {"Results!".split("").map((char, i) => (
          <ParallaxItem
            key={i}
            start={randomStarts[i] ?? 30}
            end={0}
            scrollEnd="center center"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </ParallaxItem>
        ))}
      </h2>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
        <ParallaxItem
          start={60}
          end={-15}
          disable="tablet"
          className="flex aspect-video w-full items-end rounded-xl border border-black/10 bg-black/5 p-6"
        >
          <p className="font-mono text-sm text-black/60">
            Vertical parallax
            <br />
            start: 60, end: -15
          </p>
        </ParallaxItem>

        <ParallaxItem
          direction="horizontal"
          start={40}
          end={-10}
          disable="tablet"
          className="flex aspect-video w-full items-end rounded-xl border border-black/10 bg-black/5 p-6"
        >
          <p className="font-mono text-sm text-black/60">
            Horizontal parallax
            <br />
            start: 40, end: -10
          </p>
        </ParallaxItem>
      </div>
    </section>
  )
}

