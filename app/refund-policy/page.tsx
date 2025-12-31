'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[300px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-600/80" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Transparent policies for your peace of mind
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Booking and Advance Payment</h2>
            <p>
              To confirm your tour package or car rental, a minimum advance payment (usually 25-50% of the total amount) is required. Once the advance is received, we will issue a booking confirmation voucher.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Standard Cancellation Policy</h2>
            <p className="mb-4">Calculated from the date of receiving your cancellation request in writing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>30 days or more before arrival:</strong> 90% refund of the advance amount.</li>
              <li><strong>15-29 days before arrival:</strong> 50% refund of the advance amount.</li>
              <li><strong>7-14 days before arrival:</strong> 25% refund of the advance amount.</li>
              <li><strong>Less than 7 days before arrival:</strong> No refund of the advance amount.</li>
            </ul>
          </section>

          <section className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Landslides, Strikes, and Force Majeure</h2>
            <p className="mb-4 font-medium">
              Travel in Himalayan regions like Darjeeling, Sikkim, and Bhutan can be unpredictable. our specific policy for these situations is as follows:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Landslides & Natural Calamities:</strong> If a tour is cancelled or truncated due to landslides, heavy snow, or other natural disasters, we will attempt to reschedule or provide alternative routes. Refunds will only be provided after deducting non-refundable costs paid to hotels or local transportation partners.
              </li>
              <li>
                <strong>Strikes (Bandhs) & Local Disturbances:</strong> In case of sudden strikes or political unrest that prevent travel, we will provide a credit note for future travel or a partial refund based on the actual costs incurred.
              </li>
              <li>
                <strong>Government Restrictions:</strong> If travel permits are denied or borders are closed by authorities, we will refund the amount after a nominal 10% administrative fee plus any non-refundable expenses already paid out.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No-Show Policy</h2>
            <p>
              If you fail to arrive at the scheduled pickup point or hotel without prior notice, it will be treated as a "No-Show," and no refund will be provided for that segment or the entire tour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Processing</h2>
            <p>
              Approved refunds will be processed via the original payment method within 7-10 working days. Please note that bank charges or gateway fees (approx. 2-3%) are non-refundable.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-100 italic text-sm text-gray-500">
            Last updated: December 31, 2025. Ghosh Travels reserves the right to modify these policies at any time without prior notice.
          </div>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
