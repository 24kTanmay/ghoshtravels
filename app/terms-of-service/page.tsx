'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="relative h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed"
        >
          <p>By using the services of Ghosh Travels, you agree to the following terms and conditions:</p>
          
          <h2 className="text-xl font-bold text-gray-900">1. Service Scope</h2>
          <p>Ghosh Travels provides car rental and tour package services in Siliguri and the Northeast Indian region.</p>

          <h2 className="text-xl font-bold text-gray-900">2. User Responsibilities</h2>
          <p>Users must provide accurate information for bookings and comply with local laws and regulations during their travel.</p>

          <h2 className="text-xl font-bold text-gray-900">3. Liability</h2>
          <p>While we strive for excellence, Ghosh Travels is not liable for delays or cancellations caused by factors beyond our control, such as weather, traffic, or political situations.</p>

          <p className="pt-8 text-sm text-gray-500">Last updated: December 31, 2025.</p>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
