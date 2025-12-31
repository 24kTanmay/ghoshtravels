'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (pathname !== '/') {
      router.push('/')
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    // Map human-friendly names to actual IDs if necessary
    const idMap: { [key: string]: string } = {
      'home': 'home',
      'fleet': 'fleet',
      'tour-packages': 'packages',
      'destinations': 'destinations',
    }
    handleNavigation(idMap[sectionId] || sectionId)
  }

  return (
    <footer className="bg-brand-forest text-stone-100 min-h-[400px] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="space-y-8 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <span className="text-4xl font-newsreader font-bold text-white tracking-tight">
                Ghosh <span className="italic font-normal text-brand-accent">Travels</span>
              </span>
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs opacity-90">
                Crafting premium Himalayan journeys with luxury, safety, and local heart. Siliguri&apos;s most trusted travel partner since 2012.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              <a href="https://facebook.com/ghoshtravels" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-accent transition-colors duration-300">
                <Facebook size={20} strokeWidth={1.5} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/ghoshtravels" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-accent transition-colors duration-300">
                <Instagram size={20} strokeWidth={1.5} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://wa.me/919733111234" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-accent transition-colors duration-300">
                <MessageCircle size={20} strokeWidth={1.5} />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black text-brand-accent tracking-[0.2em] uppercase mb-8">
              Services
            </h3>
            <ul className="space-y-4">
              {['Home', 'Fleet', 'Tour Packages', 'Destinations'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-stone-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-black text-brand-accent tracking-[0.2em] uppercase mb-8">
              Contact
            </h3>
            <div className="space-y-6 text-sm text-stone-400">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-accent shrink-0" />
                <span className="leading-relaxed">
                  3rd Floor, Vyom Sachitra, 3C,<br />
                  Pranami Mandir Rd, Siliguri,<br />
                  West Bengal 734001
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <a href="mailto:info@ghoshtravels.com" className="hover:text-white transition-all">
                  info@ghoshtravels.com
                </a>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919733111234" className="hover:text-white transition-all block">
                    +91 97331 11234
                  </a>
                  <a href="tel:+919733222567" className="hover:text-white transition-all block">
                    +91 97332 22567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Column */}
          <div>
            <h3 className="text-xs font-black text-brand-accent tracking-[0.2em] uppercase mb-8">
              Concierge
            </h3>
            <div className="space-y-6 text-sm text-stone-400">
              <div className="space-y-1">
                <p className="text-white font-medium">Standard Hours</p>
                <p>Mon - Sat: 9 AM - 8 PM</p>
                <p>Sunday: 10 AM - 6 PM</p>
              </div>
              <p className="italic text-xs leading-relaxed opacity-60">
                Emergency 24/7 roadside assistance available for all active bookings.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-white/10 w-full py-8 text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wide">
            © 2024 Ghosh Travels. All rights reserved. Registered under WB Tourism Board.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms</a>
            <a href="/refund-policy" className="hover:text-white transition-colors duration-300">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
