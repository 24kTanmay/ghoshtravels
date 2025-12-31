'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  
  const scrollToMarketplace = () => {
    const element = document.getElementById('marketplace')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookingClick = () => {
    router.push('/booking')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero.jpg)'
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-newsreader text-7xl md:text-8xl font-normal text-[#F9F8F4] mb-8 leading-tight">
            Your <span className="italic text-brand-accent">Himalayan</span> Adventure Awaits
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm opacity-90">
            Ghosh Travels helps you discover the majestic beauty
            of the Himalayas with our premium travel experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleBookingClick}
              className="px-8 py-4 text-lg font-bold bg-brand-forest text-white rounded-xl transition-all duration-300 shadow-xl hover:bg-brand-sage hover:shadow-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Tour Package
            </motion.button>
            
            <motion.button
              onClick={handleBookingClick}
              className="px-8 py-4 text-lg font-bold bg-white text-brand-forest hover:bg-stone-50 rounded-xl transition-all duration-300 border-2 border-brand-forest shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Rent a Car
            </motion.button>
          </div>
        </motion.div>

        {/* Floating card animation */}
        {/* <motion.div
          className="absolute top-1/4 left-10 w-16 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-xl opacity-20"
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-24 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-xl opacity-20"
          animate={{
            y: [10, -10, 10],
            rotate: [5, -5, 5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> */}
      </div>
    </section>
  )
}
