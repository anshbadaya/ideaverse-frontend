import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

export const metadata: Metadata = {
  title: 'IdeaVerse - Creative Digital Solutions',
  description:
    'Transform your ideas into reality with our innovative digital solutions and creative expertise.',
}

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.variable} font-sans antialiased text-balance bg-background text-foreground`}>{children}</body>
    </html>
  )
}
