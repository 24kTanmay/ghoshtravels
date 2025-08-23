'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
            Ready to <span className="text-gold-500">Deal?</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Get your premium Ldorado poker set delivered fast through trusted e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Amazon Card */}
          <div className="bg-dark-surface border border-dark-border rounded-xl p-8 text-center hover:border-gold-500/50 transition-all duration-300 group">
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center p-3">
              <Image 
                src="/amazon_logo.png" 
                alt="Amazon" 
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Amazon</h3>
            <p className="text-dark-text-secondary mb-6">
              Fast delivery, secure payment, and easy returns with Amazon Prime benefits.
            </p>
            
            <button className="w-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 hover:text-gold-300 border border-gold-500/30 hover:border-gold-500/50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Buy on Amazon</span>
              <ExternalLink size={18} />
            </button>
          </div>

          {/* Flipkart Card */}
          <div className="bg-dark-surface border border-dark-border rounded-xl p-8 text-center hover:border-gold-500/50 transition-all duration-300 group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center p-3" style={{ backgroundColor: '#ffe70b' }}>
              <Image 
                src="/flipkart_logo.png" 
                alt="Flipkart" 
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Flipkart</h3>
            <p className="text-dark-text-secondary mb-6">
              Reliable delivery across India with secure payment options and quality assurance.
            </p>
            
            <button className="w-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 hover:text-gold-300 border border-gold-500/30 hover:border-gold-500/50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
              <span>Buy on Flipkart</span>
              <ExternalLink size={18} />
            </button>
          </div>
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
              <h4 className="font-semibold mb-2">Fast & Reliable Shipping</h4>
              <p className="text-dark-text-secondary text-sm">Quick delivery you can count on</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2">Secure Payment</h4>
              <p className="text-dark-text-secondary text-sm">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">↩️</div>
              <h4 className="font-semibold mb-2">Hassle-Free Returns</h4>
              <p className="text-dark-text-secondary text-sm">Easy returns when you need them</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
