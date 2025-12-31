import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FleetShowcase from '@/components/FleetShowcase'
import CustomerReviews from '@/components/CustomerReviews'
import TourDestinations from '@/components/TourDestinations'
import CustomTourPackages from '@/components/CustomTourPackages'
import Accreditations from '@/components/Accreditations'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Car Rental Siliguri & Tour Packages Darjeeling, Sikkim',
  description: 'Book premium car rentals in Siliguri and customized tour packages for Darjeeling, Gangtok, and Sikkim. Best prices for Innova Crysta, Swift Dzire, and more with expert drivers.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <h1 className="sr-only">Premium Car Rental Siliguri & Himalayan Tour Packages - Ghosh Travels</h1>
      <Navigation />
      <HeroSection />
      <FleetShowcase />
      <TourDestinations />
      <CustomTourPackages />
      <CustomerReviews />
      {/* <Accreditations /> */}
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
