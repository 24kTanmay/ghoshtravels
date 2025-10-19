import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import QualitySection from '@/components/QualitySection'
import NewSection from '@/components/NewSection'
import CustomerReviews from '@/components/CustomerReviews'
import TourDestinations from '@/components/TourDestinations'
import CustomTourPackages from '@/components/CustomTourPackages'
import Accreditations from '@/components/Accreditations'
import MarketplaceSection from '@/components/MarketplaceSection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Ghosh Travels offers premium car rental services and customized tour packages for Darjeeling, Sikkim, Dooars, and North East India. Professional drivers, clean vehicles, and 24/7 support.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <HeroSection />
      {/* <ProductsSection /> */}
      <QualitySection />
      <NewSection />
      <TourDestinations />
      <CustomTourPackages />
      <CustomerReviews />
      {/* <Accreditations /> */}
      {/* <MarketplaceSection /> */}
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
