'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Deal?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get your premium Ldorado poker set delivered fast through trusted e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Amazon Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
              <Image 
                src="/amazon_logo.png" 
                alt="Amazon" 
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Amazon</h3>
            <p className="text-gray-600 mb-6">
              Fast delivery, secure payment, and easy returns with Amazon Prime benefits.
            </p>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 shadow-md hover:shadow-lg">
              <span>Buy on Amazon</span>
              <ExternalLink size={18} />
            </button>
          </div>

          {/* Flipkart Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center p-3 shadow-sm" style={{ backgroundColor: '#ffe70b' }}>
              <Image 
                src="/flipkart_logo.png" 
                alt="Flipkart" 
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Flipkart</h3>
            <p className="text-gray-600 mb-6">
              Reliable delivery across India with secure payment options and quality assurance.
            </p>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 shadow-md hover:shadow-lg">
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
              <h4 className="font-semibold mb-2 text-gray-900">Fast & Reliable Shipping</h4>
              <p className="text-gray-600 text-sm">Quick delivery you can count on</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2 text-gray-900">Secure Payment</h4>
              <p className="text-gray-600 text-sm">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">↩️</div>
              <h4 className="font-semibold mb-2 text-gray-900">Hassle-Free Returns</h4>
              <p className="text-gray-600 text-sm">Easy returns when you need them</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
