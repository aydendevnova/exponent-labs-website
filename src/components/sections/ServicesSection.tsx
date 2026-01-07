"use client"

import Image from "next/image"
import { ParallaxItem } from "@/components/ParallaxItem"

interface ServiceFeature {
  icon: React.ReactNode
  badge: string
  title: string
  description: string
  tags: string[]
}

const features: ServiceFeature[] = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    badge: "Unite",
    title: "Talent Attraction",
    description: "Doctors know doctors, lawyers know lawyers.",
    tags: ["AI Design", "Tech Innovation"],
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    badge: "Guide",
    title: "Talent Bubble Sorting",
    description: "Headhunter-Driven Algorithms",
    tags: ["Easy Customization", "Brand Identity"],
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    badge: "Resolve",
    title: "Talent Funding",
    description: "A contract. An offer. A term sheet. It's all the same thing.",
    tags: [],
  },
]

function FeatureCard({ feature, index }: { feature: ServiceFeature; index: number }) {
  return (
    <ParallaxItem
      direction="vertical"
      scrollEnd="center center"
      start={40}
      end={0}
      scrub={0.3 + index * 0.2}
      className="group relative w-full"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#16161a] to-[#0f0f12] p-6 transition-all duration-500 hover:border-white/[0.15] md:p-8">
        {/* Subtle glow effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-[#7c3aed]/10 blur-3xl" />
        </div>

        {/* Header row */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/80">
            {feature.icon}
          </div>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-white/60">
            {feature.badge}
          </span>
        </div>

        {/* Title with underline */}
        <h3 className="mb-2 text-xl font-medium text-white">{feature.title}</h3>
        <div className="mb-4 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

        {/* Description */}
        <p className="mb-6 text-white/50">{feature.description}</p>

        {/* Tags */}
        {feature.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {feature.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </ParallaxItem>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-[#0c0c10] px-6 py-24 text-white md:px-8"
    >
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-6xl">
        <h2 className="text-center text-4xl font-medium md:text-5xl">
          ExO as a serv
          {"ice".split("").map((char, i) => (
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
      </div>

      {/* Sticky scroll layout */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Cards column - scrollable */}
          <div className="flex flex-col gap-6 lg:w-3/5">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Sticky logo column */}
          <div className="hidden lg:block lg:w-2/5">
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-lg border border-white/10 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                <Image
                  src="/logo.jpg"
                  alt="Exponent Labs Logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile logo - shows at bottom on mobile */}
          <div className="lg:hidden">
            <div className="relative aspect-square rounded-lg border border-white/10 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
              <Image
                src="/logo.jpg"
                alt="Exponent Labs Logo"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
