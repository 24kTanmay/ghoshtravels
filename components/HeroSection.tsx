'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToMarketplace = () => {
    const element = document.getElementById('marketplace')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium
            <span className="block text-gold-500 mt-2">Poker Cards</span>
          </h1>
          
          <p className="text-lg md:text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate in card quality with Ldorado&apos;s premium poker cards. 
            Professional grade materials, perfect for tournaments and casual games.
          </p>
          
          <motion.button
            onClick={scrollToMarketplace}
            className="px-6 py-3 text-lg font-medium bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 hover:text-gold-300 rounded-full transition-all duration-300 border border-gold-500/30 hover:border-gold-500/50 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Buy Now
          </motion.button>
        </motion.div>

        {/* Floating card animation */}
        <motion.div
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
        />
      </div>
    </section>
  )
}
