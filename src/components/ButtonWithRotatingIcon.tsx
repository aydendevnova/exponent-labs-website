"use client"

import styles from "./ButtonWithRotatingIcon.module.css"

interface ButtonWithRotatingIconProps {
  text?: string
  variant?: "solid" | "link"
  className?: string
  href?: string
}

export function ButtonWithRotatingIcon({
  text = "Button with Icon",
  variant = "solid",
  className = "",
  href = "#",
}: ButtonWithRotatingIconProps) {
  const ArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 10 8"
      fill="none"
      className={`shrink-0 h-full w-[1.5em] p-1 ${styles.btnIconIconArrow}`}
    >
      <path
        d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
        fill="currentColor"
      />
    </svg>
  )

  const IconComponent = (
    <div className="z-1 shrink-0 flex justify-center items-center w-[1.25em] h-[1.25em] relative">
      {variant === "link" && (
        <div
          className={`rounded-sm w-full h-full absolute bg-purple-400/90 ${styles.btnIconIconBg}`}
        />
      )}
      <div
        className={`flex justify-end items-center w-full h-full relative overflow-hidden ${
          variant === "solid" ? "text-[#08080a]" : "text-white"
        }`}
      >
        <div className="shrink-0 flex justify-start items-center h-full">
          {ArrowIcon}
          {ArrowIcon}
          {ArrowIcon}
        </div>
      </div>
    </div>
  )

  if (variant === "solid") {
    return (
      <a
        href={href}
        className={`flex items-center gap-2 text-white/90 text-base leading-tight no-underline cursor-pointer ${styles.btnIconLink} ${className}`}
      >
        <div
          className={`flex items-center gap-2 text-[#08080a] bg-white rounded-md px-3 py-2.5 relative overflow-hidden ${styles.btnIconContent}`}
        >
          <div className="z-1 shrink-0 flex justify-start items-center relative overflow-hidden">
            <span className={`px-4 py-1 font-medium tracking-tight inline-block ${styles.btnIconContentText}`}>
              {text}
            </span>
          </div>
          {IconComponent}
          <div className={`z-0 bg-purple-400/90 w-[120%] h-full absolute bottom-0 -left-[10%] ${styles.btnIconContentBg}`} />
        </div>
      </a>
    )
  }

  return (
    <a
      href={href}
      className={`flex items-center gap-2 text-white/90 text-base leading-tight no-underline cursor-pointer ${styles.btnIconLink} ${className}`}
    >
      <div className="z-1 shrink-0 flex justify-start items-center relative overflow-hidden">
        <span className={`text-sm font-medium tracking-tight inline-block ${styles.btnIconLinkText}`}>
          {text}
        </span>
      </div>
      {IconComponent}
    </a>
  )
}
