'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Clock, MapPin, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const cars = [
  {
    id: 'innova',
    name: "Toyota Innova Crysta",
    description: "The gold standard of long-distance comfort. Perfect for families and groups seeking a premium SUV experience in the hills.",
    image: "/cars/innova crysta.jpeg",
    tagline: "Ultra Premium SUV"
  },
  {
    id: 'dzire',
    name: "Swift Dzire",
    description: "Reliable, fuel-efficient, and surprisingly spacious. The ideal sedan for couples or small families exploring the plains and lower hills.",
    image: "/cars/Swift Dzire.jpeg",
    tagline: "Executive Sedan"
  },
  {
    id: 'wagonr',
    name: "Wagon R",
    description: "Compact yet surprisingly capable. A practical choice for quick city transfers and budget-conscious travelers.",
    image: "/cars/wagonr.jpeg",
    tagline: "Comfort Hatchback"
  }
]

const trustIcons = [
  { icon: Shield, label: 'Verified Drivers' },
  { icon: Clock, label: 'Punctual Service' },
  { icon: MapPin, label: 'Local Expertise' }
]

export default function FleetShowcase() {
  const [selectedCar, setSelectedCar] = useState(cars[0])
  const router = useRouter()

  return (
    <section id="fleet" className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column (40%) */}
          <div className="w-full lg:w-[40%] space-y-10">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-newsreader font-bold text-gray-900 leading-tight"
              >
                Our Premium <span className="text-brand-forest italic font-normal">Fleet</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-500 max-w-md"
              >
                Choose the perfect ride for your Himalayan journey. Every vehicle is meticulously maintained for safety and comfort.
              </motion.p>
            </div>

            {/* Vertical List of Cars */}
            <div className="space-y-3">
              {cars.map((car) => {
                const isActive = selectedCar.id === car.id
                return (
                  <button
                    key={car.id}
                    onClick={() => setSelectedCar(car)}
                    className={`w-full group text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isActive 
                        ? 'bg-brand-forest border-brand-forest shadow-xl scale-[1.02]' 
                        : 'bg-stone-50 border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                        isActive ? 'text-brand-accent/80' : 'text-gray-400'
                      }`}>
                        {car.tagline}
                      </span>
                      <span className={`text-xl font-bold ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}>
                        {car.name}
                      </span>
                    </div>
                    <ChevronRight className={`transition-transform duration-300 ${
                      isActive ? 'text-white translate-x-1' : 'text-gray-300 group-hover:translate-x-1'
                    }`} />
                  </button>
                )
              })}
            </div>

            {/* Trust Icons underneath names */}
            <div className="pt-6 flex flex-wrap gap-8 border-t border-gray-100">
              {trustIcons.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-forest/5 flex items-center justify-center text-brand-forest">
                    <item.icon size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (60%) */}
          <div className="w-full lg:w-[60%] relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-stone-50 rounded-[3rem] -z-10 transform scale-95 lg:scale-100"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-forest/5 rounded-full blur-3xl -z-10"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCar.id}
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative z-10 w-full p-8"
              >
                <div className="relative drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col items-center">
                  <img 
                    src={selectedCar.image} 
                    alt={selectedCar.name}
                    className="w-full max-w-[650px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Car Description Overlay (Mobile/Small Desktop) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center max-w-md"
                  >
                    <p className="text-gray-600 leading-relaxed italic">
                      &quot;{selectedCar.description}&quot;
                    </p>
                    <button 
                      onClick={() => router.push('/booking')}
                      className="mt-6 font-newsreader font-bold text-brand-forest border-b border-brand-forest/30 pb-1 hover:border-brand-forest transition-all"
                    >
                      Check pricing for {selectedCar.name}
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
