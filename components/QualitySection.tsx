'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '24/7 Customer Support'
  },
  {
    icon: Award,
    title: 'Easy Pickup & Drop-off'
  },
  {
    icon: Truck,
    title: 'Best Deals for Tours'
  }
]

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20"
        >
          {/* Left column - Text content (60% width) */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-left">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Car Rental</span> in Siliguri
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-left">
              Fulfilling demands with services beyond your expectations
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-left">
              Whether you're a solo traveler, a family on vacation, or a professional on a business trip, we provide the perfect vehicle for your journey in and around Siliguri. Travel with confidence and comfort.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-left">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-gray-400 mt-2 mr-4 flex-shrink-0">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Well-Maintained & Sanitized Fleet:</span>
                  <span className="text-gray-600 ml-1">Our cars are regularly serviced and cleaned for your safety and comfort.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mt-2 mr-4 flex-shrink-0">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Transparent Pricing:</span>
                  <span className="text-gray-600 ml-1">No hidden fees. The price you see is the price you pay.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mt-2 mr-4 flex-shrink-0">•</span>
                <div>
                  <span className="font-semibold text-gray-900">24/7 Roadside Assistance:</span>
                  <span className="text-gray-600 ml-1">We're here for you anytime, day or night.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mt-2 mr-4 flex-shrink-0">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Flexible Booking & Cancellation:</span>
                  <span className="text-gray-600 ml-1">Your travel plans can change, and we understand that.</span>
                </div>
              </li>
            </ul>

            {/* Our Promise section moved here */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Our Promise</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Premium quality materials</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Expert craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Exceptional customer service</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Fast and secure delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Image (40% width) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-xl h-full min-h-[500px] flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl text-gray-400 mb-4">🚗</div>
                <p className="text-gray-500 text-lg">Car Rental Image</p>
                <p className="text-gray-400 text-sm mt-2">Placeholder for car rental service image</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Separator line */}
        <div className="border-t border-gray-200 mb-16"></div>

        {/* Feature icons grid - separated at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
