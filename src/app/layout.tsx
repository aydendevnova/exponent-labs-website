import "@/styles/globals.css"

import { type Metadata, type Viewport } from "next"
import { Geist } from "next/font/google"

import { LenisProvider } from "@/components/LenisProvider"

const SITE_URL = "https://exponentlabs.vercel.app"
const SITE_NAME = "Exponent Labs"
const SITE_DESCRIPTION =
  "Exponent Labs is an Exponential Organization (ExO) specializing in talent attraction, talent sourcing, and talent funding. Touch the heart before you touch the hand."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Exponential Organization`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Exponent Labs",
    "ExO",
    "Exponential Organization",
    "talent attraction",
    "talent sourcing",
    "talent funding",
    "headhunter",
    "recruitment",
    "tech innovation",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logo.jpg", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Exponential Organization`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Touch the heart before you touch the hand`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Exponential Organization`,
    description: SITE_DESCRIPTION,
    images: ["/logo.jpg"],
    creator: "@exponentlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    description: SITE_DESCRIPTION,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "business inquiries",
    },
    knowsAbout: [
      "Talent Attraction",
      "Talent Sourcing",
      "Talent Funding",
      "Exponential Organizations",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
