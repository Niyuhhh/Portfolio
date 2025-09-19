import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Sora } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"], // Including Black weight for headings
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const sora = Sora({ subsets: ["latin"], weight: ["400"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "COFFRE Eliott - Portfolio 2025",
  description:
    "Interactive digital magazine portfolio showcasing branding, packaging, illustration, and web & motion design work.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "https://res.cloudinary.com/dakxjcdyp/image/upload/c_fill,w_16,h_16/v1757965880/Image_Favicon_sphid5.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "https://res.cloudinary.com/dakxjcdyp/image/upload/c_fill,w_32,h_32/v1757965880/Image_Favicon_sphid5.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "180x180",
        url: "https://res.cloudinary.com/dakxjcdyp/image/upload/c_fill,w_180,h_180/v1757965880/Image_Favicon_sphid5.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "https://res.cloudinary.com/dakxjcdyp/image/upload/c_fill,w_512,h_512/v1757965880/Image_Favicon_sphid5.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        url: "https://res.cloudinary.com/dakxjcdyp/image/upload/c_fill,w_180,h_180/v1757965880/Image_Favicon_sphid5.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${sora.variable} antialiased`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230026/PORTFOLIO_PAGE_10_fzdgem.png"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230030/PORTFOLIO_PAGE_11_hrn5b0.png"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
