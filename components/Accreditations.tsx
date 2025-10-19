'use client'

import { motion } from 'framer-motion'

const accreditations = [
  {
    id: 1,
    name: "EHTTOA",
    description: "Eastern Himalayan Travel & Tour Operators Association",
    logo: "/accreditations/Ehttoa.jpeg"
  },
  {
    id: 2,
    name: "ATAB",
    description: "Association of Travel Agents Bangladesh",
    logo: "/accreditations/Atab.jpeg"
  },
  {
    id: 3,
    name: "NATTA",
    description: "Nepal Association of Travel Agents",
    logo: "/accreditations/Natta.jpeg"
  },
  {
    id: 4,
    name: "TOAB",
    description: "Tour Operators Association of Bangladesh",
    logo: "/accreditations/Toab.jpeg"
  },
  {
    id: 5,
    name: "BNI Member",
    description: "Business Network International",
    logo: "/accreditations/Bni.jpeg"
  },
  {
    id: 6,
    name: "EIHTAA",
    description: "Eastern India Himalayan Travel Agents Association",
    logo: "/accreditations/Eihtaa.jpeg"
  }
]

export default function Accreditations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-700">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            OUR ACCREDITATIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-4 hover:bg-white transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div className="flex flex-col items-center justify-center flex-grow">
                <div className="h-24 w-full flex items-center justify-center mb-3">
                  <img 
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center mt-auto">
                  <h3 className="text-sm font-semibold text-gray-900">{accreditation.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{accreditation.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-300 text-sm max-w-3xl mx-auto">
            We are proud members of leading travel and tourism associations, ensuring the highest standards of service and professionalism in all our operations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}