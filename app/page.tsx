import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import QualitySection from '@/components/QualitySection'
import MarketplaceSection from '@/components/MarketplaceSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <QualitySection />
      <MarketplaceSection />
      <Footer />
    </main>
  )
}
