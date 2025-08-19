'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Available on Leading <span className="text-gold-500">Marketplaces</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Get your premium Ldorado poker cards delivered fast through trusted e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Amazon Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-surface border border-dark-border rounded-xl p-8 text-center hover:border-gold-500/50 transition-all duration-300 group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-orange-500/10 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-orange-500">A</span>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Amazon</h3>
            <p className="text-dark-text-secondary mb-6">
              Fast delivery, secure payment, and easy returns with Amazon Prime benefits.
            </p>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Buy on Amazon</span>
              <ExternalLink size={18} />
            </button>
          </motion.div>

          {/* Flipkart Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-surface border border-dark-border rounded-xl p-8 text-center hover:border-gold-500/50 transition-all duration-300 group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-500">F</span>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Flipkart</h3>
            <p className="text-dark-text-secondary mb-6">
              Reliable delivery across India with secure payment options and quality assurance.
            </p>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Buy on Flipkart</span>
              <ExternalLink size={18} />
            </button>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🚚</div>
              <h4 className="font-semibold mb-2">Free Shipping</h4>
              <p className="text-dark-text-secondary text-sm">On orders above ₹499</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2">Secure Payment</h4>
              <p className="text-dark-text-secondary text-sm">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">↩️</div>
              <h4 className="font-semibold mb-2">Easy Returns</h4>
              <p className="text-dark-text-secondary text-sm">7-day return policy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
