"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ParallaxItem } from "@/components/ParallaxItem"

gsap.registerPlugin(ScrollTrigger)

interface TeamMember {
  name: string
  role: string
  image: string
  xLink: string
  linkedinLink: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rocky Nguyen",
    role: "CEO",
    image: "/team/rocky.jpg",
    xLink: "https://x.com/rockyblockyabc",
    linkedinLink: "https://www.linkedin.com/in/rockynhatnguyen/",
  },
  {
    name: "Michael Jagdeo",
    role: "CRO",
    image: "/team/michael.jpg",
    xLink: "https://x.com/attractfund1ng",
    linkedinLink: "https://www.linkedin.com/in/jagdeoholdings/",
  },
  {
    name: "Oma Cox",
    role: "CTO",
    image: "/team/oma.jpg",
    xLink: "https://x.com/1PaulFrederick1",
    linkedinLink: "https://www.linkedin.com/in/omacox/",
  },

  {
    name: "Ayden Springer",
    role: "Full Stack Developer",
    image: "/team/ayden.jpg",
    xLink: "https://x.com/aydendevnova",
    linkedinLink: "https://www.linkedin.com/in/ayden-springer/",
  },
]

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface TeamCardProps {
  member: TeamMember
  index: number
}

function TeamCard({ member, index }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const yOffset = 20

    gsap.set(cardRef.current, {
      opacity: 0,
      y: yOffset,
    })

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(cardRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.5,
          ease: "power3.out",
        })
      },
    })

    return () => trigger.kill()
  }, [index])

  return (
    <div ref={cardRef}>
      <ParallaxItem
        disable="mobileLandscape"
        start={20 + index * 8}
        end={-5}
        className="w-full"
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-black/30">
          {/* Subtle edge highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col items-center gap-4">
            {/* Profile Image */}
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/10 transition-all duration-500 group-hover:border-[#7c3aed]/50">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="112px"
              />
            </div>

            {/* Name & Role */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[#ab7ef8]">{member.role}</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {member.xLink && (
                <a
                  href={member.xLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <XIcon />
                </a>
              )}
              {member.linkedinLink && (
                <a
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              )}
              {!member.xLink && !member.linkedinLink && (
                <div className="flex items-center gap-2 opacity-40">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60">
                    <XIcon />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60">
                    <LinkedInIcon />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </ParallaxItem>
    </div>
  )
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 overflow-hidden bg-[#0c0c10] px-6 py-24 text-white md:px-8"
    >
      {/* Purple background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-purple-600/12 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[80px]" />
      </div>

      <ParallaxItem start={40} end={-10} className="relative z-10 text-center">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Meet the{" "}
          <span className="bg-linear-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
            Team
          </span>
        </h2>
        <p className="mt-6 text-lg text-white/50">
          The minds behind the magic.
        </p>
      </ParallaxItem>

      <div className="relative z-10 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  )
}

