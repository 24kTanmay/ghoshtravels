'use client'

import { motion } from 'framer-motion'

const cars = [
  {
    name: "Swift Dzire",
    image: "/cars/Swift Dzire.jpeg",
    alt: "Swift Dzire"
  },
  {
    name: "Innova Crysta",
    image: "/cars/innova crysta.jpeg",
    alt: "Innova Crysta"
  },
  {
    name: "Wagon R",
    image: "/cars/wagonr.jpeg",
    alt: "Wagon R"
  }
]

export default function NewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-cream">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Car Rental Options in <span className="bg-gradient-to-r from-brand-forest to-brand-sage bg-clip-text text-transparent">Siliguri & Bagdogra</span>
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Well-maintained, sanitized, and ready for your next journey.
          </p>
          
          {/* Car grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(cars.length, 3)} gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto`}>
            {cars.map((car, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full bg-white">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden flex-grow">
                  <img 
                    src={car.image} 
                    alt={car.alt} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-3 text-center">{car.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Conditional button: Only show if more than 4 cars */}
          {cars.length > 4 && (
            <div className="flex justify-center mb-16">
              <button className="px-8 py-3 border-2 border-brand-forest text-brand-forest font-semibold rounded-lg hover:bg-brand-forest hover:text-white transition-all duration-300">
                View All Cars & Pricing
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}