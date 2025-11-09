import type { Metadata } from 'next'
import { Special_Elite } from 'next/font/google'
import './globals.css'

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-typewriter'
})

export const metadata: Metadata = {
  title: 'The Raven - A Deep Analysis',
  description: 'An intimate exploration of Edgar Allan Poe\'s masterpiece',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={specialElite.variable}>{children}</body>
    </html>
  )
}
