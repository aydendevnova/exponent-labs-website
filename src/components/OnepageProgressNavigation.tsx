"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScalingHamburgerNavigation } from "./ScalingHamburgerNavigation"

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="178"
      height="40"
      viewBox="0 0 178 40"
      fill="none"
      className="w-32"
    >
      <path
        d="M161.77 13.4645C161.142 14.0944 160.069 13.6483 160.069 12.7574V0H156.084V15C156.084 16.6569 154.746 18 153.096 18H138.154V22H150.862C151.749 22 152.194 23.0771 151.566 23.7071L142.722 32.5858L145.539 35.4142L154.384 26.5356C155.01 25.9075 156.078 26.3491 156.084 27.2347V40L160.069 40L160.069 25C160.069 23.3431 161.407 22 163.058 22H178V18H165.284C164.404 17.9936 163.964 16.9273 164.582 16.2985L164.587 16.2929L173.432 7.41421L170.614 4.58582L161.77 13.4645Z"
        fill="currentColor"
      />
      <path
        d="M16.084 37.178C6.27782 37.178 0 29.956 0 20.066C0 10.176 6.27782 3 16.084 3C25.8903 3 32.1681 10.176 32.1681 20.066C32.1681 29.956 25.8903 37.178 16.084 37.178ZM5.2697 20.066C5.2697 26.828 8.33987 32.808 16.084 32.808C23.8282 32.808 26.8984 26.828 26.8984 20.066C26.8984 13.304 23.8282 7.37 16.084 7.37C8.33987 7.37 5.2697 13.304 5.2697 20.066Z"
        fill="currentColor"
      />
      <path
        d="M45.478 37.178C38.3754 37.178 34.847 33.498 34.7095 28.714H39.246C39.4293 31.428 41.0789 33.544 45.4322 33.544C49.373 33.544 50.4269 31.796 50.4269 30.094C50.4269 27.15 47.3109 26.828 44.2866 26.184C40.2083 25.218 35.5343 24.022 35.5343 19.146C35.5343 15.098 38.7878 12.384 44.4241 12.384C50.8393 12.384 53.9095 15.834 54.2303 19.882H49.6938C49.373 18.088 48.4107 16.018 44.5157 16.018C41.4914 16.018 40.2083 17.214 40.2083 18.962C40.2083 21.4 42.8202 21.63 46.1195 22.366C50.4269 23.378 55.1009 24.62 55.1009 29.864C55.1009 34.418 51.6183 37.178 45.478 37.178Z"
        fill="currentColor"
      />
      <path
        d="M72.6642 21.492C72.6642 18.364 72.0227 16.248 68.5859 16.248C65.2408 16.248 63.1329 18.594 63.1329 22.136V36.534H58.6422V13.074H63.1329V16.018H63.2246C64.4618 14.224 66.6155 12.384 70.1439 12.384C73.3974 12.384 75.4136 13.856 76.3301 16.478H76.4217C78.1172 14.224 80.5 12.384 84.0742 12.384C88.7941 12.384 91.1769 15.236 91.1769 20.25V36.534H86.6862V21.492C86.6862 18.364 86.0447 16.248 82.6079 16.248C79.2628 16.248 77.1549 18.594 77.1549 22.136V36.534H72.6642V21.492Z"
        fill="currentColor"
      />
      <path
        d="M106.545 37.224C99.2594 37.224 94.8603 32.164 94.8603 24.804C94.8603 17.49 99.2594 12.338 106.591 12.338C113.831 12.338 118.23 17.444 118.23 24.758C118.23 32.118 113.831 37.224 106.545 37.224ZM99.5343 24.804C99.5343 29.68 101.734 33.498 106.591 33.498C111.357 33.498 113.556 29.68 113.556 24.804C113.556 19.882 111.357 16.11 106.591 16.11C101.734 16.11 99.5343 19.882 99.5343 24.804Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function OnepageProgressNavigation({
  sections,
  logoHref = "#top",
  contactHref = "#bottom",
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
          const activeLink = navList.querySelector(`[data-target="#${section.id}"]`) as HTMLElement
          if (activeLink) {
            navList.querySelectorAll("[data-target]").forEach((el) => el.classList.remove("is-active"))
            activeLink.classList.add("is-active")
            updateIndicator(activeLink)
          }
        },
        onEnterBack: () => {
          const activeLink = navList.querySelector(`[data-target="#${section.id}"]`) as HTMLElement
          if (activeLink) {
            navList.querySelectorAll("[data-target]").forEach((el) => el.classList.remove("is-active"))
            activeLink.classList.add("is-active")
            updateIndicator(activeLink)
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
        {/* Mobile Logo */}
        <a
          href={logoHref}
          className="fixed top-8 left-8 z-[501] text-inherit no-underline"
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

          <div className="rounded-full bg-[#c9cce0] p-2">
            <div
              ref={navListRef}
              className="relative flex items-center justify-start overflow-hidden rounded-full"
            >
              <div
                ref={indicatorRef}
                className="absolute z-[2] h-10 w-10 -left-10 rounded-full bg-white transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                  className="nav-btn group relative z-[3] flex h-10 cursor-pointer items-center justify-center overflow-hidden bg-transparent px-4 no-underline"
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
            className="contact-btn group relative flex h-14 cursor-pointer items-center overflow-hidden rounded-full bg-[#2d336b] px-6 text-white no-underline"
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
