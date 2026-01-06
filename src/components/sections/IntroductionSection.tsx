"use client"

import { ParallaxItem } from "@/components/ParallaxItem"

export function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="flex min-h-screen flex-col items-center justify-center gap-16 bg-[#7886c7] px-8 py-24 text-white"
    >
      <ParallaxItem start={40} end={-10} className="text-center">
        <h2 className="text-5xl font-medium">Introduction</h2>
      </ParallaxItem>

      <div className="flex w-full max-w-6xl flex-wrap justify-center gap-5">
        <ParallaxItem
          disable="mobileLandscape"
          start={50}
          end={-20}
          className="aspect-square w-full md:w-[calc(33.333%-1rem)]"
        >
          <div className="flex h-full w-full items-end rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <p className="font-mono text-sm text-white/80">
              Parallax Card 01
              <br />
              start: 50, end: -20
            </p>
          </div>
        </ParallaxItem>

        <ParallaxItem
          disable="mobileLandscape"
          start={70}
          end={-30}
          className="aspect-square w-full md:w-[calc(33.333%-1rem)]"
        >
          <div className="flex h-full w-full items-end rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <p className="font-mono text-sm text-white/80">
              Parallax Card 02
              <br />
              start: 70, end: -30
            </p>
          </div>
        </ParallaxItem>

        <ParallaxItem
          disable="mobileLandscape"
          start={90}
          end={-40}
          className="aspect-square w-full md:w-[calc(33.333%-1rem)]"
        >
          <div className="flex h-full w-full items-end rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <p className="font-mono text-sm text-white/80">
              Parallax Card 03
              <br />
              start: 90, end: -40
            </p>
          </div>
        </ParallaxItem>
      </div>
    </section>
  )
}

