import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Ghosh Travels. Call us at +91 8900058536 or visit our office in Siliguri. 24/7 customer support for all your travel needs.',
  keywords: 'contact Ghosh Travels, Siliguri travel agency contact, car rental contact, tour booking contact, travel agency phone number',
  openGraph: {
    title: 'Contact Us | Ghosh Travels',
    description: 'Get in touch with Ghosh Travels - 24/7 customer support',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
