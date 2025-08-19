'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Made with the finest materials and precision manufacturing for durability that lasts.'
  },
  {
    icon: Award,
    title: 'Tournament Grade',
    description: 'Professional quality cards used in casinos and tournaments worldwide.'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Quick delivery through Amazon and Flipkart with reliable tracking.'
  }
]

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gold-500">Ldorado</span>?
          </h2>
          <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto">
            We&apos;re committed to delivering the highest quality poker cards that meet 
            professional standards and exceed your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-dark-bg border border-dark-border rounded-xl hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/10 text-gold-500 rounded-full mb-6">
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-dark-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">1000+</div>
            <div className="text-dark-text-secondary">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">50+</div>
            <div className="text-dark-text-secondary">Tournaments</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">5★</div>
            <div className="text-dark-text-secondary">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">24/7</div>
            <div className="text-dark-text-secondary">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
