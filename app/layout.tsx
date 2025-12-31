import './globals.css'
import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const newsreader = Newsreader({ 
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ghoshtravels.vercel.app'),
  title: {
    default: 'Ghosh Travels - Premium Car Rental & Tour Packages in Siliguri',
    template: '%s | Ghosh Travels'
  },
  description: 'Experience the best car rental services and tour packages in Siliguri, Darjeeling, Sikkim, and North East India. Professional drivers, well-maintained vehicles, and 24/7 support.',
  keywords: 'car rental Siliguri, Darjeeling tour packages, Sikkim tours, North East India travel, cab rental, tour operator Siliguri, Dooars packages, Himalayan tours, corporate car rental',
  authors: [{ name: 'Ghosh Travels' }],
  creator: 'Ghosh Travels',
  publisher: 'Ghosh Travels',
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
    title: 'Ghosh Travels - Premium Car Rental & Tour Packages',
    description: 'Experience the best car rental services and tour packages in Siliguri, Darjeeling, Sikkim, and North East India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ghosh Travels',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghosh Travels - Premium Car Rental & Tour Packages',
    description: 'Experience the best car rental services and tour packages in North East India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${newsreader.variable} bg-dark-bg text-dark-text antialiased`}>
        {children}
      </body>
    </html>
  )
}
