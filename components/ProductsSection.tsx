'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Casino-Weight Chips',
    description: 'Feel the difference with our 14-gram, clay composite chips. Engineered for the perfect stack and that satisfying casino sound.',
    image: '/chips.png',
    features: ['Premium cardstock', 'Linen finish', 'Standard size']
  },
  {
    id: 2,
    name: 'Premium Playing Cards',
    description: 'Two decks of smooth-gliding, durable cards that are built to last. Designed for the perfect shuffle and deal, every time.',
    image: '/card.jpeg',
    features: ['Casino quality', 'Plastic coating', 'Jumbo index']
  },
  {
    id: 3,
    name: 'Durable Aluminum Case',
    description: 'Protect your investment in a sleek, lockable aluminum case. Lined with soft felt to keep every piece secure and ready for action.',
    image: '/case.png',
    features: ['Diamond cut', 'Gold foiling', 'Limited edition']
  }
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What&apos;s Inside <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">the Case?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From the satisfying weight of the chips to the smooth glide of the cards, every detail is designed to elevate your game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-6 relative overflow-hidden">
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/40 flex items-center justify-center">
                    <div className="text-6xl opacity-30 text-purple-400">♠</div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {product.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
