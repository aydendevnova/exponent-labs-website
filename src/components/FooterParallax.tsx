"use client"

import { useRef, useEffect } from "react"

interface FooterLink {
  href: string
  text: string
}

interface FooterParallaxProps {
  pageLinks?: FooterLink[]
  socialLinks?: FooterLink[]
  contactLinks?: FooterLink[]
  parallaxAmount?: number
}

const defaultPageLinks: FooterLink[] = [
  { href: "#top", text: "Home" },
  { href: "#projects", text: "Projects" },
  { href: "#team", text: "Team" },
  { href: "#product", text: "Product" },
  { href: "#result", text: "Result" },
]

const defaultSocialLinks: FooterLink[] = [
  // { href: "https://linkedin.com", text: "LinkedIn" },
  { href: "https://x.com/exponentlabshq", text: "X/Twitter" },
  { href: "https://github.com/exponentlabshq", text: "GitHub" },
]

const defaultContactLinks: FooterLink[] = [
  { href: "mailto:private@exponentlabs.ai", text: "private@exponentlabs.ai" },
]

export function FooterParallax({
  pageLinks = defaultPageLinks,
  socialLinks = defaultSocialLinks,
  contactLinks = defaultContactLinks,
  parallaxAmount = 25,
}: FooterParallaxProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLElement>(null)
  const darkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGsap = async () => {
      const gsapModule = await import("gsap")
      const gsap = gsapModule.default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      const wrap = wrapRef.current
      const inner = innerRef.current
      const dark = darkRef.current
      if (!wrap) return

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "clamp(top bottom)",
            end: "clamp(top top)",
            scrub: true,
          },
        })

        if (inner) {
          tl.from(inner, {
            yPercent: -parallaxAmount,
            ease: "linear",
          })
        }

        if (dark) {
          tl.from(
            dark,
            {
              opacity: 0.6,
              ease: "linear",
            },
            "<"
          )
        }
      }, wrap)

      return () => ctx.revert()
    }

    void loadGsap()
  }, [parallaxAmount])

  return (
    <div ref={wrapRef} className="relative overflow-hidden">
      <footer
        ref={innerRef}
        className="relative flex min-h-screen flex-col justify-between gap-20 bg-[#08080a] p-6 font-semibold tracking-tight text-white md:gap-32 md:p-10"
      >
        {/* Footer Links Row */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-10 pt-32">
          {/* Pages Column */}
          <div className="flex w-full flex-col gap-8 md:w-1/3 md:gap-12">
            <p className="text-base font-semibold text-white/50 md:text-lg">
              ( Pages )
            </p>
            <div className="flex flex-col items-start gap-3">
              {pageLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative text-3xl leading-none text-white transition-colors duration-300 hover:text-[#a78bfa] md:text-5xl"
                >
                  {link.text}
                  <span className="absolute -bottom-0.5 left-0 h-[0.08em] w-full origin-right scale-x-0 bg-current transition-transform duration-700 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex w-full flex-col gap-8 md:w-1/3 md:gap-12">
            <p className="text-base font-semibold text-white/50 md:text-lg">
              ( Socials )
            </p>
            <div className="flex flex-col items-start gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-3xl leading-none text-white transition-colors duration-300 hover:text-[#a78bfa] md:text-5xl"
                >
                  {link.text}
                  <span className="absolute -bottom-0.5 left-0 h-[0.08em] w-full origin-right scale-x-0 bg-current transition-transform duration-700 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex w-full flex-col gap-8 md:w-1/3 md:gap-12">
            <p className="text-base font-semibold text-white/50 md:text-lg">
              ( Contact )
            </p>
            <div className="flex flex-col items-start gap-3">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative text-3xl leading-none text-white transition-colors duration-300 hover:text-[#a78bfa] md:text-5xl"
                >
                  {link.text}
                  <span className="absolute -bottom-0.5 left-0 h-[0.08em] w-full origin-right scale-x-0 bg-current transition-transform duration-700 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Logo Row */}
        <div className="flex flex-col gap-4">
          <p className="text-base font-semibold text-white/50 md:text-lg">
            Touch the heart before you touch the hand.
          </p>
          <h2 className="text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-[12rem]">
            Exponent Labs
          </h2>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/40 md:flex-row md:gap-6">
            <span>© {new Date().getFullYear()} Exponent Labs</span>
            <span className="hidden md:inline">•</span>
            <span>A Wyoming LLC</span>
            <span className="hidden md:inline">•</span>
            <span>All rights reserved</span>
          </div>
        </div>

        {/* Purple accent glow at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#7c3aed]/10 via-transparent to-transparent" />
      </footer>

      {/* Dark overlay for parallax effect */}
      <div
        ref={darkRef}
        className="pointer-events-none absolute inset-0 bg-[#08080a] opacity-0"
      />
    </div>
  )
}

