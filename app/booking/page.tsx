'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, MapPin, Package } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

type TabType = 'daily-rental' | 'drop-pickup' | 'packages'

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<TabType>('daily-rental')

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Image Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            Book Your Journey
          </motion.h1>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('daily-rental')}
              className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'daily-rental'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Car size={20} />
              CAB DAILY RENTAL
            </button>
            <button
              onClick={() => setActiveTab('drop-pickup')}
              className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'drop-pickup'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MapPin size={20} />
              DROP PICKUP
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'packages'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Package size={20} />
              CAB PACKAGES
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            {activeTab === 'daily-rental' && <DailyRentalForm />}
            {activeTab === 'drop-pickup' && <DropPickupForm />}
            {activeTab === 'packages' && <PackagesForm />}
          </div>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

function DailyRentalForm() {
  const [showContactInfo, setShowContactInfo] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showContactInfo) {
      setShowContactInfo(true)
    } else {
      console.log('Booking submitted')
    }
  }

  return (
    <div>
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg shadow-sm">
        <p className="text-orange-800 text-sm font-semibold flex items-center gap-2">
          <span className="text-lg">⚠️</span>
          CAB DAILY RENTAL IS NOT APPLICABLE FOR HILL AREAS
        </p>
      </div>
      
      <form className="space-y-8" onSubmit={handleSearch}>
        {/* Main Booking Details */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Car size={20} className="text-purple-600" />
            Rental Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rent Type</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Select Rent Type</option>
                <option>Half Day (4 hours)</option>
                <option>Full Day (8 hours)</option>
                <option>12 Hours</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
              <input
                type="text"
                placeholder="Enter pickup location"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Package size={20} className="text-purple-600" />
            Vehicle Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Select Car Type</option>
                <option>Swift Dzire (Sedan)</option>
                <option>Innova Crysta (SUV)</option>
                <option>Tempo Traveller (12 seater)</option>
                <option>BMW (Luxury)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Number of Passengers</option>
                <option>1-2 Passengers</option>
                <option>3-4 Passengers</option>
                <option>5-7 Passengers</option>
                <option>8+ Passengers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Price/Contact Info Animation */}
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-6 overflow-hidden"
          >
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center shadow-inner">
              <p className="text-purple-600 text-sm font-medium mb-1">Estimated Price</p>
              <p className="text-3xl font-bold text-purple-700">₹2,500.00</p>
              <p className="text-xs text-purple-500 mt-2">Final pricing may vary based on actual distance and fuel</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-left shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Complete Your Booking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 md:px-16 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
          >
            {showContactInfo ? 'Book Now →' : 'Check Pricing & Availability'}
          </button>
          <p className="text-sm text-gray-500 hidden sm:block">
            {showContactInfo ? '🔒 Secure SSL Encryption' : '💚 No-obligation quote'}
          </p>
        </div>
      </form>
    </div>
  )
}

function DropPickupForm() {
  const [showContactInfo, setShowContactInfo] = useState(false)

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showContactInfo) {
      setShowContactInfo(true)
    } else {
      console.log('Quote requested')
    }
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={handleQuote}>
        {/* Journey Details */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-purple-600" />
            Journey Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
              <input
                type="text"
                placeholder="Enter pickup point"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Drop Location</label>
              <input
                type="text"
                placeholder="Enter drop point"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Time</label>
              <input
                type="time"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Package size={20} className="text-purple-600" />
            Vehicle Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Select Car Type</option>
                <option>Swift Dzire (Sedan)</option>
                <option>Innova Crysta (SUV)</option>
                <option>Tempo Traveller (12 seater)</option>
                <option>BMW (Luxury)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Number of Passengers</option>
                <option>1-2 Passengers</option>
                <option>3-4 Passengers</option>
                <option>5-7 Passengers</option>
                <option>8+ Passengers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quote/Contact Info Animation */}
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-6 overflow-hidden"
          >
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center shadow-inner">
              <p className="text-green-600 text-sm font-medium mb-1">Fixed Quote</p>
              <p className="text-3xl font-bold text-green-700">₹1,800.00</p>
              <p className="text-xs text-green-500 mt-2">Includes all taxes and tolls</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-left shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Confirm Your Booking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 md:px-16 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
          >
            {showContactInfo ? 'Confirm Booking →' : 'Get Instant Quote'}
          </button>
          <p className="text-sm text-gray-500 hidden sm:block">
            {showContactInfo ? '🛡️ Safe & Secure' : '⚡ Instant confirmation'}
          </p>
        </div>
      </form>
    </div>
  )
}

function PackagesForm() {
  const [showContactInfo, setShowContactInfo] = useState(false)

  const handlePackageBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showContactInfo) {
      setShowContactInfo(true)
    } else {
      console.log('Package booking submitted')
    }
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={handlePackageBooking}>
        {/* Package Selection */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Package size={20} className="text-purple-600" />
            Select Your Package
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tour Package</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Choose a package</option>
                <option>🏔️ Darjeeling Heritage Tour (3D/2N)</option>
                <option>⛰️ Sikkim Adventure Package (4D/3N)</option>
                <option>🦌 Dooars Wildlife Safari (2D/1N)</option>
                <option>🌄 Complete Northeast Circuit (7D/6N)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Journey Start Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Travelers</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700">
                <option>Number of Travelers</option>
                <option>1-2 Travelers</option>
                <option>3-4 Travelers</option>
                <option>5-7 Travelers</option>
                <option>8+ Travelers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Info Animation */}
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-6 overflow-hidden"
          >
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-left shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-purple-600" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Special Requirements (Optional)</h3>
              <textarea
                placeholder="Let us know if you have any special requests, dietary requirements, or preferences..."
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
              />
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 md:px-16 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
          >
            {showContactInfo ? 'Book Package →' : 'Check Availability'}
          </button>
          <p className="text-sm text-gray-500 hidden sm:block">
            🎯 Best price guarantee • 📞 24/7 support
          </p>
        </div>
      </form>
    </div>
  )
}
