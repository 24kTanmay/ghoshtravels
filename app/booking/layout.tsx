import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Journey',
  description: 'Book car rentals and tour packages with Ghosh Travels. Daily rentals, drop pickup services, and complete tour packages for Darjeeling, Sikkim, Dooars, and North East India.',
  keywords: 'book car rental, book tour package, cab booking Siliguri, online booking, car rental booking, tour booking',
  openGraph: {
    title: 'Book Your Journey | Ghosh Travels',
    description: 'Book car rentals and tour packages with Ghosh Travels',
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
