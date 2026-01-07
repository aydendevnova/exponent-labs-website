"use client"

import { useState, useEffect, useCallback } from "react"

interface NavLink {
  label: string
  href: string
  isCurrent?: boolean
}

interface ScalingHamburgerNavigationProps {
  links: NavLink[]
  className?: string
  onToggle?: (isOpen: boolean) => void
}

export function ScalingHamburgerNavigation({
  links,
  className = "",
  onToggle,
}: ScalingHamburgerNavigationProps) {
  const [isActive, setIsActive] = useState(false)

  const toggle = useCallback(() => {
    setIsActive((prev) => {
      const newState = !prev
      onToggle?.(newState)
      return newState
    })
  }, [onToggle])

  const close = useCallback(() => {
    setIsActive(false)
    onToggle?.(false)
  }, [onToggle])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isActive) {
        close()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isActive, close])

  return (
    <nav
      className={`hamburger-navigation fixed inset-0 z-[500] pointer-events-none ${className}`}
      data-status={isActive ? "active" : "not-active"}
    >
      {/* Dark overlay */}
      <div
        className={`hamburger-dark-bg absolute inset-0 bg-black pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
          isActive ? "opacity-[0.33] visible" : "opacity-0 invisible"
        }`}
        onClick={close}
      />

      {/* Hamburger container */}
      <div className="hamburger-nav absolute top-8 right-8 rounded-3xl">
        {/* Expanding background */}
        <div
          className={`hamburger-nav-bg absolute top-0 right-0 bg-[#1a1a1f] rounded-[1.75em] transition-all duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
            isActive ? "w-full h-full" : "w-14 h-14"
          }`}
        />

        {/* Menu content */}
        <div
          className={`hamburger-nav-group relative flex flex-col gap-4 pointer-events-auto py-9 pl-8 pr-10 origin-top-right transition-all duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
            isActive
              ? "scale-100 opacity-100 visible"
              : "scale-[0.15] opacity-0 invisible"
          }`}
        >
          <p className="opacity-50 tracking-[0.1em] uppercase font-mono text-base font-normal mb-0 text-white">
            Menu
          </p>

          <ul className="flex flex-col gap-1.5 m-0 p-0 list-none relative">
            {links.map((link, index) => (
              <li key={index} className="m-0 p-0 list-none">
                <a
                  href={link.href}
                  className="hamburger-nav-link text-white flex justify-between items-center no-underline group"
                  aria-current={link.isCurrent ? "page" : undefined}
                  onClick={close}
                >
                  <p
                    className={`whitespace-nowrap mb-0 pr-5 text-[2em] ${
                      link.isCurrent ? "opacity-[0.33]" : ""
                    }`}
                  >
                    {link.label}
                  </p>
                  <div
                    className={`hamburger-nav-dot bg-current rounded-full flex-shrink-0 w-2 h-2 transition-all duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
                      link.isCurrent
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-50 group-hover:scale-100 group-hover:opacity-25"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button */}
        <button
          className={`hamburger-toggle absolute top-0 right-0 w-14 h-14 pointer-events-auto cursor-pointer bg-transparent border-none rounded-full flex justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
            isActive ? "translate-x-[-1em] translate-y-[1em]" : ""
          }`}
          onClick={toggle}
          aria-label={isActive ? "Close menu" : "Open menu"}
        >
          <div
            className={`hamburger-bar absolute bg-white w-[40%] h-0.5 transition-transform duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
              isActive ? "rotate-45 translate-y-0" : "-translate-y-[0.15em]"
            }`}
          />
          <div
            className={`hamburger-bar absolute bg-white w-[40%] h-0.5 transition-transform duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] ${
              isActive ? "-rotate-45 translate-y-0" : "translate-y-[0.15em]"
            }`}
          />
        </button>
      </div>
    </nav>
  )
}

