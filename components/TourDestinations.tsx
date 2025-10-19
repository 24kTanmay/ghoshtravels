'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: "Darjeeling",
    description: "Queen of the Hills with stunning tea gardens and mountain views",
    image: "/destination/Darjeeling.webp",
    duration: "2-3 Days",
    bestFor: "Couples & Families",
    highlights: ["Tiger Hill Sunrise", "Tea Gardens", "Toy Train"]
  },
  {
    id: 2,
    name: "Gangtok",
    description: "Capital city of Sikkim with monasteries and alpine beauty",
    image: "/destination/gangtok.jpeg",
    duration: "3-4 Days",
    bestFor: "Adventure Seekers",
    highlights: ["MG Marg", "Tsomgo Lake", "Rumtek Monastery"]
  },
  {
    id: 3,
    name: "Kalimpong",
    description: "Peaceful hill station with colonial charm and flower nurseries",
    image: "/destination/kalimpong.jpeg",
    duration: "1-2 Days",
    bestFor: "Nature Lovers",
    highlights: ["Deolo Hill", "Durpin Monastery", "Flower Markets"]
  },
  {
    id: 4,
    name: "Dooars",
    description: "Gateway to Bhutan with wildlife sanctuaries and river valleys",
    image: "/destination/dooars.jpeg",
    duration: "2-3 Days",
    bestFor: "Wildlife Enthusiasts",
    highlights: ["Jaldapara National Park", "Buxa Tiger Reserve", "River Rafting"]
  }
]

export default function TourDestinations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Tour of Astonishing <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the breathtaking beauty of Northeast India with our curated tour packages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Destination Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                {/* Trip Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={14} />
                    <span>{destination.bestFor}</span>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
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
          <button className="px-8 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:border-purple-600 transition-all duration-300">
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  )
}