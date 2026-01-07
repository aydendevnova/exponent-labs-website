"use client"

import { ButtonWithRotatingIcon } from "@/components/ButtonWithRotatingIcon"
import { ParallaxItem } from "@/components/ParallaxItem"

function SparkleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-purple-300"
    >
      <path
        d="M12 2L13.09 8.26L18 6L15.74 10.91L22 12L15.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L8.26 13.09L2 12L8.26 10.91L6 6L10.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-clip bg-[#08080a]"
    >
      <ParallaxItem
        scrollStart="top top"
        start={0}
        end={30}
        className="absolute inset-0 z-0 h-[120%] w-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </ParallaxItem>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm animate-fade-in">
          <SparkleIcon />
          <span className="text-sm font-medium text-white/90 tracking-wide">
            ExO • Exponential Organization
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-in-up">
          Exponent Labs
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg text-white/70 md:text-xl animate-fade-in-up-delay">
          Touch the heart before you touch the hand.
        </p>

        {/* CTA */}
        <div className="mt-10 animate-fade-in-up-delay-2">
          <ButtonWithRotatingIcon
            text="Learn more"
            variant="solid"
            href="#projects"
          />
        </div>
      </div>
    </section>
  )
}

