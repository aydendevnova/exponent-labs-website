"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScalingHamburgerNavigation } from "./ScalingHamburgerNavigation"
import Image from "next/image"

interface NavSection {
  id: string
  label: string
}

interface OnepageProgressNavigationProps {
  sections: NavSection[]
  logoHref?: string
  contactHref?: string
  contactLabel?: string
  className?: string
}

function ExponentLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.jpg" alt="Exponent Logo" width={64} height={64} />
      <span className="text-white text-xl">Exponent Labs</span>
    </div>
  )
}

export function OnepageProgressNavigation({
  sections,
  logoHref = "#top",
  contactHref = "mailto:private@exponentlabs.ai",
  contactLabel = "Get in touch",
  className = "",
}: OnepageProgressNavigationProps) {
  const navListRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const navList = navListRef.current
    const indicator = indicatorRef.current
    if (!navList || !indicator) return

    const updateIndicator = (activeLink: HTMLElement) => {
      const parentWidth = navList.offsetWidth
      const parentHeight = navList.offsetHeight
      const parentRect = navList.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      const linkPos = {
        left: linkRect.left - parentRect.left,
        top: linkRect.top - parentRect.top,
      }

      const linkWidth = activeLink.offsetWidth
      const linkHeight = activeLink.offsetHeight

      const leftPercent = (linkPos.left / parentWidth) * 100
      const topPercent = (linkPos.top / parentHeight) * 100
      const widthPercent = (linkWidth / parentWidth) * 100
      const heightPercent = (linkHeight / parentHeight) * 100

      indicator.style.left = leftPercent + "%"
      indicator.style.top = topPercent + "%"
      indicator.style.width = widthPercent + "%"
      indicator.style.height = heightPercent + "%"
    }

    const triggers: ScrollTrigger[] = []

    sections.forEach((section) => {
      const anchor = document.getElementById(section.id)
      if (!anchor) return

      const trigger = ScrollTrigger.create({
        trigger: anchor,
        start: "0% 50%",
        end: "100% 50%",
        onEnter: () => {
          const activeLink = navList.querySelector(`[data-target="#${section.id}"]`)
          if (!!activeLink) {
            navList.querySelectorAll("[data-target]").forEach((el) => el.classList.remove("is-active"))
            activeLink.classList.add("is-active")
            updateIndicator(activeLink as HTMLElement)
          }
        },
        onEnterBack: () => {
          const activeLink = navList.querySelector(`[data-target="#${section.id}"]`)
          if (!!activeLink) {
            navList.querySelectorAll("[data-target]").forEach((el) => el.classList.remove("is-active"))
            activeLink.classList.add("is-active")
            updateIndicator(activeLink as HTMLElement)
          }
        },
      })
      triggers.push(trigger)
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [sections])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Convert sections to links format for mobile hamburger menu
  const mobileLinks = [
    { label: "Top", href: "#top" },
    ...sections.map((s) => ({ label: s.label, href: `#${s.id}` })),
    { label: contactLabel, href: contactHref },
  ]

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header Blur Background */}
        <div className="fixed top-0 left-0 right-0 h-24 z-[498] bg-black/40 backdrop-blur-md border-b border-white/5" />
        {/* Mobile Logo */}
        <a
          href={logoHref}
          className="fixed top-8 left-8 z-[499] text-inherit no-underline"
        >
          <ExponentLogo />
        </a>
        <ScalingHamburgerNavigation links={mobileLinks} />
      </div>

      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 z-50 hidden w-full p-8 lg:block ${className}`}>
        <div className="relative flex items-center justify-between">
          <a href={logoHref} className="text-inherit no-underline">
            <ExponentLogo />
          </a>

          <div className="rounded-full bg-[#1a1a1f] p-2">
            <div
              ref={navListRef}
              className="relative flex items-center justify-start overflow-hidden rounded-full"
            >
              <div
                ref={indicatorRef}
                className="absolute z-[2] h-10 w-10 -left-10 rounded-full bg-[#7c3aed] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />

              <div
                className="absolute right-full z-[1] h-10 w-10"
                data-target="#top"
              />

              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  data-target={`#${section.id}`}
                  className="nav-btn group relative z-[3] flex h-10 cursor-pointer items-center justify-center overflow-hidden bg-transparent px-4 no-underline text-white/80"
                  onClick={(e) => handleNavClick(e, section.id)}
                >
                  <span className="nav-btn-text flex h-full items-center justify-center whitespace-nowrap text-lg font-medium transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {index + 1}. {section.label}
                  </span>
                  <span className="nav-btn-text nav-btn-text-duplicate absolute top-full flex h-full items-center justify-center whitespace-nowrap text-lg font-medium transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {index + 1}. {section.label}
                  </span>
                </a>
              ))}

              <div
                className="absolute left-full z-[1] h-10 w-10"
                data-target="#bottom"
              />
            </div>
          </div>

          <a
            href={contactHref}
            className="contact-btn group relative flex h-14 cursor-pointer items-center overflow-hidden rounded-full bg-[#7c3aed] px-6 text-white no-underline"
            onClick={(e) => handleNavClick(e, contactHref.replace("#", ""))}
          >
            <span className="nav-btn-text flex h-full items-center justify-center whitespace-nowrap text-lg font-medium transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
              {contactLabel}
            </span>
            <span className="nav-btn-text nav-btn-text-duplicate absolute top-full flex h-full items-center justify-center whitespace-nowrap text-lg font-medium transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
              {contactLabel}
            </span>
          </a>
        </div>
      </nav>
    </>
  )
}
