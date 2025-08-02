import './globals.css'

export const metadata = {
  title: 'IdeaVerse - Creative Digital Solutions',
  description: 'Transform your ideas into reality with our innovative digital solutions and creative expertise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
