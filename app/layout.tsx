import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ldorado - Premium Poker Cards',
  description: 'Discover premium quality poker cards from Ldorado. Available on Amazon and Flipkart with worldwide shipping.',
  keywords: 'poker cards, premium cards, playing cards, Ldorado, Amazon, Flipkart',
  authors: [{ name: 'Ldorado' }],
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
