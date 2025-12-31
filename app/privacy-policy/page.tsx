'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="relative h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed"
        >
          <p>Your privacy is important to us. This Privacy Policy explains how Ghosh Travels collects, uses, and protects your personal information when you use our website and services.</p>
          
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>We collect information such as your name, contact details, travel preferences, and payment information when you make a booking or inquiry.</p>

          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
          <p>We use your information to process bookings, provide customer support, and send updates about your travel plans.</p>

          <h2 className="text-xl font-bold text-gray-900">Data Protection</h2>
          <p>We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.</p>

          <p className="pt-8 text-sm text-gray-500">Last updated: December 31, 2025.</p>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
