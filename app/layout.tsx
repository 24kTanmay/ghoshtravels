import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ldorado - Premium Poker Cards',
  description: 'Discover premium quality poker cards from Ldorado. Available on Amazon and Flipkart with worldwide shipping.',
  keywords: 'poker cards, premium cards, playing cards, Ldorado, Amazon, Flipkart',
  authors: [{ name: 'Ldorado' }],
  icons: {
    icon: [
      { url: '/icon-32x32.svg', type: 'image/svg+xml' },
      { url: '/icon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/icon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/icon-32x32.svg',
  },
  openGraph: {
    title: 'Ldorado - Premium Poker Cards',
    description: 'Discover premium quality poker cards from Ldorado.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-dark-text antialiased`}>
        {children}
      </body>
    </html>
  )
}
