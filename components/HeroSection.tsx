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

      {/* White gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/90 to-white/0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 leading-relaxed">
            <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-700 block mb-3 leading-relaxed">Your</span>
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent block leading-relaxed py-2">Himalayan Adventure Awaits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ghosh Travels helps you discover the majestic beauty<br />
            of the Himalayas with our premium travel experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleBookingClick}
              className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Tour Package
            </motion.button>
            
            <motion.button
              onClick={handleBookingClick}
              className="px-6 py-3 text-lg font-medium bg-white text-purple-600 hover:bg-gray-50 hover:text-purple-700 rounded-lg transition-all duration-300 border-2 border-purple-500 hover:border-purple-600 shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] hover:shadow-lg"
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
