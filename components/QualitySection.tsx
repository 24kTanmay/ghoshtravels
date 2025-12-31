'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, MapPin, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Verified Drivers',
    description: 'Every driver is background-checked and professionally trained for mountain terrains.'
  },
  {
    icon: Clock,
    title: 'Punctual Service',
    description: 'We value your time. Our vehicles arrive 15 minutes before your scheduled departure.'
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Our team knows every hidden gem and shortcut in the North East region.'
  }
]

export default function QualitySection() {
  return (
    <section id="quality" className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Bento Style 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-newsreader font-bold text-gray-900 leading-tight">
              Premium Car Rental <br />
              <span className="text-brand-forest italic">in Siliguri</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Travel with peace of mind. ghost Travels provides more than just a ride; we offer a premium travel experience tailored to the unique landscape of the Himalayas.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                'Well-Maintained & Sanitized Fleet',
                'Transparent & Fixed Pricing',
                '24/7 Roadside Assistance',
                'Flexible Booking & Cancellation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-forest" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual (Cutout Image) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 scale-110 md:scale-125 lg:translate-x-12 translate-y-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <img 
                src="/cars/innova crysta.jpeg" 
                alt="Toyota Innova Crysta"
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Subtle background glow/shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cream/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Bottom Section: Feature Icon Row (Apple Style) */}
        <div className="pt-20 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-12 h-12 mb-6 text-brand-forest flex items-center justify-center">
                  <feature.icon size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
