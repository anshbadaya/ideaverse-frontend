import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IdeaVerse - Transforming Ideas Into Reality",
  description:
    "A boutique development studio specializing in end-to-end solutions. From backend architecture to frontend experiences, AI development to cloud infrastructure - we deliver excellence.",
  keywords:
    "development studio, backend development, frontend development, AI development, cloud infrastructure, web development, software development",
  authors: [{ name: "IdeaVerse" }],
  creator: "IdeaVerse",
  publisher: "IdeaVerse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ideaverse.com",
    title: "IdeaVerse - Transforming Ideas Into Reality",
    description:
      "A boutique development studio specializing in end-to-end solutions. From backend architecture to frontend experiences, AI development to cloud infrastructure - we deliver excellence.",
    siteName: "IdeaVerse",
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeaVerse - Transforming Ideas Into Reality",
    description:
      "A boutique development studio specializing in end-to-end solutions. From backend architecture to frontend experiences, AI development to cloud infrastructure - we deliver excellence.",
    creator: "@ideaverse",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
