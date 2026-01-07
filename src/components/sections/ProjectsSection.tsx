"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ParallaxItem } from "@/components/ParallaxItem"

gsap.registerPlugin(ScrollTrigger)

interface ProjectFeature {
  text: string
}

interface ProjectTag {
  label: string
}

interface ProjectCard {
  year: string
  title: string
  features: ProjectFeature[]
  tags: ProjectTag[]
  image: {
    src: string
    alt: string
  }
}

const PROJECTS: ProjectCard[] = [
  {
    year: "2025",
    title: "TurnKey Meets Stacks",
    features: [
      { text: "Hackathon Winner" },
      { text: "Passkey-Friendly" },
      { text: "Friction-less Onboarding" },
      { text: "BTCU Integration" },
    ],
    tags: [{ label: "Business" }, { label: "Agency" }],
    image: {
      src: "/projects/turnkey.jpg",
      alt: "Turnkey Meets Stacks - Touch ID interface",
    },
  },
  {
    year: "2025",
    title: "VendoPay",
    features: [
      { text: "sBTC" },
      { text: "Shopify" },
      { text: "eCommerce" },
      { text: "Fast Loading" },
    ],
    tags: [{ label: "E-Commerce" }, { label: "Portfolio" }],
    image: {
      src: "/projects/vendopay.jpg",
      alt: "VendoPay payment interface",
    },
  },
  {
    year: "2025",
    title: "Meet Sticky",
    features: [
      { text: "Grant Maximizer" },
      { text: "Trained on Mitchell Cuevas" },
      { text: "ElevenLabs Integration" },
      { text: "LunarCrush Integration" },
    ],
    tags: [{ label: "AI" }, { label: "Tooling" }],
    image: {
      src: "/projects/sticky.jpg",
      alt: "Meet Sticky AI assistant",
    },
  },
  {
    year: "2025",
    title: "Design-Driven Development",
    features: [
      { text: "Grant Winner" },
      { text: "eCommerce-driven interfaces" },
      { text: "Design Systems" },
      { text: "Stacks Bitcoin Layer Two" },
    ],
    tags: [{ label: "Portfolio" }, { label: "Agency" }],
    image: {
      src: "/projects/design-driven-development.jpg",
      alt: "Design-Driven Development showcase",
    },
  },
  {
    year: "2025",
    title: "Delmi Training Institute",
    features: [
      { text: "Electronic Security Training Institute" },
      { text: "Over 150 students graduated and employed" },
      { text: "Strong Ecosystem" },
      { text: "Stacks Bitcoin Layer Two" },
    ],
    tags: [{ label: "Portfolio" }, { label: "Agency" }],
    image: {
      src: "/projects/delmi-training.jpg",
      alt: "Delmi Training Institute",
    },
  },
]

function CheckIcon() {
  return (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#7c3aed]">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

interface ProjectCardComponentProps {
  project: ProjectCard
  imagePosition: "left" | "right"
  index: number
}

function ProjectCardComponent({
  project,
  imagePosition,
  index,
}: ProjectCardComponentProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const direction = index % 2 === 0 ? -1 : 1
    const xOffset = 120 * direction

    gsap.set(cardRef.current, {
      opacity: 0,
      x: xOffset,
    })

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(cardRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
        })
      },
    })

    return () => trigger.kill()
  }, [index])

  const contentSection = (
    <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {project.title}
          </h3>
          <span className="rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
            {project.year}
          </span>
        </div>

        <div className="space-y-4">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-sm text-white/70 md:text-base">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 transition-colors hover:bg-white/15"
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )

  const imageSection = (
    <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-auto md:w-2/5">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
    </div>
  )

  return (
    <div ref={cardRef} className="w-full">
      <ParallaxItem
        disable="mobileLandscape"
        start={30 + index * 15}
        end={-10}
        className="w-full"
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:border-white/15 hover:bg-black/35">
          {/* Subtle edge highlight - only visible at top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div
            className={`relative flex flex-col ${
              imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {imageSection}
            {contentSection}
          </div>
        </div>
      </ParallaxItem>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 overflow-hidden bg-[#0c0c10] px-6 pb-40 pt-24 text-white md:px-8 md:pb-48"
    >
      {/* Purple background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-violet-500/12 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[100px]" />
      </div>

      <ParallaxItem start={40} end={-10} className="relative z-10 text-center">
        <h2 className="text-4xl font-semibold md:text-5xl">Featured Projects</h2>
        <p className="mt-6 text-lg text-white/50">
          They didn&apos;t speak; they changed reality such that they had spoken.
          <br />- Pratchett
        </p>
      </ParallaxItem>

      <div className="relative z-10 flex w-full max-w-5xl flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCardComponent
            key={index}
            project={project}
            imagePosition={index % 2 === 0 ? "left" : "right"}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
