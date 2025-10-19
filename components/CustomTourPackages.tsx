'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Star, Users } from 'lucide-react'

const packages = [
  {
    id: 1,
    name: "Darjeeling Heritage Tour",
    description: "Experience the colonial charm with tea gardens, toy train, and sunrise views",
    image: "/packages/darjeeling.jpeg",
    duration: "3 Days / 2 Nights",
    groupSize: "2-6 People",
    price: "₹12,999",
    rating: 4.8,
    includes: ["Luxury Car", "Hotel Stay", "Meals", "Guide"]
  },
  {
    id: 2,
    name: "Sikkim Adventure Package",
    description: "Explore Gangtok, Tsomgo Lake, and Nathula Pass with comfortable transport",
    image: "/packages/sikkim.jpeg",
    duration: "4 Days / 3 Nights",
    groupSize: "4-8 People",
    price: "₹18,999",
    rating: 4.9,
    includes: ["SUV Transport", "Permits", "Accommodation", "Breakfast"]
  },
  {
    id: 3,
    name: "Dooars Wildlife Safari",
    description: "Wildlife sanctuaries, elephant rides, and river valley exploration",
    image: "/packages/dooars.jpeg",
    duration: "2 Days / 1 Night",
    groupSize: "2-4 People",
    price: "₹8,999",
    rating: 4.7,
    includes: ["Safari Vehicle", "Forest Permits", "Jungle Stay", "All Meals"]
  },
  {
    id: 4,
    name: "Complete Northeast Circuit",
    description: "Grand tour covering Darjeeling, Gangtok, Kalimpong, and Dooars",
    image: "/packages/northeast.jpeg",
    duration: "7 Days / 6 Nights",
    groupSize: "4-10 People",
    price: "₹35,999",
    rating: 4.9,
    includes: ["Tempo Traveller", "All Hotels", "All Meals", "Sightseeing"]
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      <Star size={14} className="text-yellow-400 fill-yellow-400" />
      <span className="text-sm font-medium text-gray-700">{rating}</span>
    </div>
  )
}

export default function CustomTourPackages() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Special Customized Tour <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Carefully crafted tour experiences with comfortable transport and premium accommodations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Package Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <StarRating rating={pkg.rating} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                
                {/* Package Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={14} />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>
                
                {/* Includes */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Package Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.includes.map((item, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Price - Fixed at bottom */}
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <div className="text-2xl font-bold text-purple-600">{pkg.price}</div>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:border-purple-600 transition-all duration-300 mr-4">
            View All Packages
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Customize Your Tour
          </button>
        </motion.div>
      </div>
    </section>
  )
}