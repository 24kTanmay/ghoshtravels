'use client'

import { motion } from 'framer-motion'

export default function NewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Our <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Curated</span> Fleet
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Well-maintained, sanitized, and ready for your next journey.
          </p>
          
          {/* Four-column car grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Car Card 1 */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden flex-grow">
                <img 
                  src="/cars/Swift Dzire.avif" 
                  alt="Swift Dzire" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-3 text-center">Swift Dzire</h3>
            </div>

            {/* Car Card 2 */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden flex-grow">
                <img 
                  src="/cars/Innova Crysta.avif" 
                  alt="Innova Crysta" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-3 text-center">Innova Crysta</h3>
            </div>

            {/* Car Card 3 */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden flex-grow">
                <img 
                  src="/cars/Tempo Traveller.jpg" 
                  alt="Tempo Traveller" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-3 text-center">Tempo Traveller</h3>
            </div>

            {/* Car Card 4 */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden flex-grow">
                <img 
                  src="/cars/BMW X5.jpeg" 
                  alt="BMW X5" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-3 text-center">BMW X5</h3>
            </div>
          </div>
          
          {/* Single outline button */}
          <div className="flex justify-center mb-16">
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:border-purple-600 transition-all duration-300">
              View All Cars & Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}