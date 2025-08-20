'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'From the 14-gram clay composite chips to the smooth-finish playing cards, every component is crafted for durability and a satisfying, authentic feel.'
  },
  {
    icon: Award,
    title: 'Designed for Players',
    description: 'Our sets are curated to deliver a true casino experience. The design, weight, and details are all optimized for players who take the game seriously.'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Sold through trusted platforms like Amazon and Flipkart, you get fast, secure shipping and the reliable customer service you already know and trust.'
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
            The <span className="text-gold-500">Ldorado</span> Difference
          </h2>
          <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto">
            We believe a legendary game night starts with professional-grade equipment. Here&apos;s our promise to you.
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
      </div>
    </section>
  )
}
