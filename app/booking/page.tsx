'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, MapPin, Package, ArrowRight, AlertTriangle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

import PremiumDatePicker from '@/components/DatePicker'

type TabType = 'daily-rental' | 'drop-pickup' | 'packages'

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<TabType>('daily-rental')

  const tabs = [
    { id: 'daily-rental', label: 'DAILY RENTAL', icon: Car },
    { id: 'drop-pickup', label: 'DROP PICKUP', icon: MapPin },
    { id: 'packages', label: 'PACKAGES', icon: Package },
  ]

  return (
    <main className="min-h-screen bg-[#F9F8F4]">
      <Navigation />
      
      {/* Hero Image Section */}
      <div className="relative h-[250px] md:h-[350px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-newsreader font-bold text-white text-center px-4"
          >
            Your Journey, <span className="italic text-brand-accent">Perfectly</span> Planned
          </motion.h1>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] p-8 md:p-12 mb-10"
        >
          {/* Tabs - Segmented Control Style */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1.5 rounded-full flex gap-1 w-full max-w-lg shadow-inner">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`relative flex-1 py-3 px-4 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${
                      isActive ? 'text-brand-forest' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBubble"
                        className="absolute inset-0 bg-white rounded-full shadow-md"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <tab.icon size={16} className="relative z-10" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'daily-rental' && <DailyRentalForm />}
              {activeTab === 'drop-pickup' && <DropPickupForm />}
              {activeTab === 'packages' && <PackagesForm />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

function FloatingLabelInput({ label, type = 'text', ...props }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-black text-gray-400 tracking-[0.1em] uppercase ml-1">
        {label}
      </label>
      <input
        type={type}
        className="h-14 w-full px-5 bg-stone-50 rounded-xl border-2 border-transparent focus:border-brand-forest focus:bg-white transition-all outline-none text-gray-900 font-medium shadow-sm"
        {...props}
      />
    </div>
  )
}

function FloatingLabelSelect({ label, options, ...props }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-black text-gray-400 tracking-[0.1em] uppercase ml-1">
        {label}
      </label>
      <select
        className="h-14 w-full px-5 bg-stone-50 rounded-xl border-2 border-transparent focus:border-brand-forest focus:bg-white transition-all outline-none text-gray-900 font-medium shadow-sm appearance-none cursor-pointer"
        {...props}
      >
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

function DailyRentalForm() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [pickupDate, setPickupDate] = useState<Date>()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showContactInfo) setShowContactInfo(true)
    else {
      const message = `*Daily Rental Inquiry*%0A%0A*Date:* ${pickupDate?.toDateString()}%0A*Type:* Daily Rental%0A%0A_Sent via ghoshtravels.com_`
      window.open(`https://wa.me/919733111234?text=${message}`, '_blank')
    }
  }

  return (
    <form className="space-y-10" onSubmit={handleSearch}>
      {/* Minimalist Warning */}
      <div className="flex items-center justify-center gap-2 text-amber-700 font-medium px-1">
        <AlertTriangle size={16} />
        <span className="text-sm tracking-tight italic">Daily rental only applicable for plain areas (excludes hills).</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <FloatingLabelSelect 
          label="Rent Type" 
          options={[
            { value: '', label: 'Select Rent Type' },
            { value: '4', label: 'Half Day (4 hours)' },
            { value: '8', label: 'Full Day (8 hours)' },
            { value: '12', label: '12 Hours' },
          ]}
        />
        <PremiumDatePicker 
          label="Pickup Date" 
          selected={pickupDate} 
          onChange={setPickupDate} 
          required 
        />
        <FloatingLabelInput label="Pickup Location" placeholder="Enter pickup location" />
        <FloatingLabelInput label="Destination" placeholder="Enter destination" />
        <FloatingLabelSelect 
          label="Vehicle Type" 
          options={[
            { value: '', label: 'Select Car Type' },
            { value: 'sedan', label: 'Swift Dzire (Sedan)' },
            { value: 'suv', label: 'Innova Crysta (SUV)' },
            { value: 'compact', label: 'Wagon R' },
          ]}
        />
        <FloatingLabelSelect 
          label="Guests" 
          options={[
            { value: '', label: 'Number of Guests' },
            { value: '1-2', label: '1-2 Guests' },
            { value: '3-4', label: '3-4 Guests' },
            { value: '5-7', label: '5-7 Guests' },
            { value: '8+', label: '8+ Guests' },
          ]}
        />
      </div>

      <AnimatePresence>
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 pt-6 border-t border-gray-100"
          >
            <div className="bg-brand-forest/5 p-8 rounded-2xl flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-brand-forest/60 tracking-widest uppercase">Estimated Price</span>
              <span className="text-4xl font-newsreader font-bold text-brand-forest italic">₹2,500</span>
              <span className="text-[10px] text-gray-400 mt-2 italic">Excludes tolls & state taxes</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingLabelInput label="Full Name" placeholder="Your name" required />
              <FloatingLabelInput label="Phone Number" placeholder="+91 XXXXX XXXXX" type="tel" required />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="w-full h-16 bg-brand-forest text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
      >
        <span>{showContactInfo ? 'Confirm Booking' : 'Check Availability'}</span>
        <ArrowRight size={20} />
      </button>
    </form>
  )
}

function DropPickupForm() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [pickupDate, setPickupDate] = useState<Date>()

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showContactInfo) setShowContactInfo(true)
    else {
      const message = `*Drop/Pickup Inquiry*%0A%0A*Date:* ${pickupDate?.toDateString()}%0A*Type:* Drop-Pickup%0A%0A_Sent via ghoshtravels.com_`
      window.open(`https://wa.me/919733111234?text=${message}`, '_blank')
    }
  }

  return (
    <form className="space-y-10" onSubmit={handleQuote}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <FloatingLabelInput label="Pickup Location" placeholder="Enter pickup point" required />
        <FloatingLabelInput label="Drop Location" placeholder="Enter drop point" required />
        <PremiumDatePicker 
          label="Pickup Date" 
          selected={pickupDate} 
          onChange={setPickupDate} 
          required 
        />
        <FloatingLabelInput label="Pickup Time" type="time" required />
        <FloatingLabelSelect 
          label="Vehicle Type" 
          options={[
            { value: '', label: 'Select Car Type' },
            { value: 'sedan', label: 'Swift Dzire (Sedan)' },
            { value: 'suv', label: 'Innova Crysta (SUV)' },
            { value: 'compact', label: 'Wagon R' },
          ]}
        />
        <FloatingLabelSelect 
          label="Guests" 
          options={[
            { value: '', label: 'Number of Guests' },
            { value: '1-2', label: '1-2 Guests' },
            { value: '3-4', label: '3-4 Guests' },
            { value: '5-7', label: '5-7 Guests' },
            { value: '8+', label: '8+ Guests' },
          ]}
        />
      </div>

      <AnimatePresence>
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 pt-6 border-t border-gray-100"
          >
            <div className="bg-brand-forest/5 p-8 rounded-2xl flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-brand-forest/60 tracking-widest uppercase">Fixed Quote</span>
              <span className="text-4xl font-newsreader font-bold text-brand-forest italic">₹1,800</span>
              <span className="text-[10px] text-gray-400 mt-2 italic">All inclusive of tolls & taxes</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingLabelInput label="Full Name" placeholder="Your name" required />
              <FloatingLabelInput label="Phone Number" placeholder="+91 XXXXX XXXXX" type="tel" required />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="w-full h-16 bg-brand-forest text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
      >
        <span>{showContactInfo ? 'Confirm Booking' : 'Get Instant Quote'}</span>
        <ArrowRight size={20} />
      </button>
    </form>
  )
}

function PackagesForm() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [startDate, setStartDate] = useState<Date>()

  const handlePackageBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showContactInfo) setShowContactInfo(true)
    else {
      const message = `*Package Inquiry*%0A%0A*Start:* ${startDate?.toDateString()}%0A*Type:* Tour Package%0A%0A_Sent via ghoshtravels.com_`
      window.open(`https://wa.me/919733111234?text=${message}`, '_blank')
    }
  }

  return (
    <form className="space-y-10" onSubmit={handlePackageBooking}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <div className="md:col-span-2">
          <FloatingLabelSelect 
            label="Tour Package" 
            options={[
              { value: '', label: 'Choose a package' },
              { value: 'darjeeling', label: '🏔️ Darjeeling Heritage Tour (3D/2N)' },
              { value: 'sikkim', label: '⛰️ Sikkim Adventure Package (4D/3N)' },
              { value: 'dooars', label: '🦌 Dooars Wildlife Safari (2D/1N)' },
              { value: 'circuit', label: '🌄 Complete Northeast Circuit (7D/6N)' },
            ]}
          />
        </div>
        <PremiumDatePicker 
          label="Journey Start Date" 
          selected={startDate} 
          onChange={setStartDate} 
          required 
        />
        <FloatingLabelSelect 
          label="Guests" 
          options={[
            { value: '', label: 'Number of Guests' },
            { value: '1-2', label: '1-2 Guests' },
            { value: '3-4', label: '3-4 Guests' },
            { value: '5-7', label: '5-7 Guests' },
            { value: '8+', label: '8+ Guests' },
          ]}
        />
      </div>

      <AnimatePresence>
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 pt-6 border-t border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FloatingLabelInput label="Full Name" placeholder="Your name" required />
              <FloatingLabelInput label="Email Address" placeholder="your@email.com" type="email" required />
              <FloatingLabelInput label="Phone Number" placeholder="+91 XXXXX XXXXX" type="tel" required />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-gray-400 tracking-[0.1em] uppercase ml-1">
                Special Requirements (Optional)
              </label>
              <textarea
                placeholder="Let us know any preferences..."
                rows={4}
                className="w-full p-5 bg-stone-50 rounded-xl border-2 border-transparent focus:border-brand-forest focus:bg-white transition-all outline-none text-gray-900 font-medium shadow-sm resize-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="w-full h-16 bg-brand-forest text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
      >
        <span>{showContactInfo ? 'Book Package' : 'Check Availability'}</span>
        <ArrowRight size={20} />
      </button>
    </form>
  )
}
