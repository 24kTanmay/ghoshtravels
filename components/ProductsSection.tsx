'use client'

import { motion } from 'framer-motion'

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
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's Inside <span className="text-gold-500">the Case?</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto">
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
              className="bg-dark-surface border border-dark-border rounded-xl p-6 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="aspect-[3/4] bg-dark-card rounded-lg mb-6 relative overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black/60 flex items-center justify-center">
                    <div className="text-6xl opacity-20">♠</div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-500 transition-colors duration-300">
                {product.name}
              </h3>
              
              <p className="text-dark-text-secondary mb-4">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-dark-text-secondary">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
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
