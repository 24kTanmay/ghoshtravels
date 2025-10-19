'use client'

import LogoText from './Logotext'
import Image from 'next/image'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4 lg:mb-6">
              <LogoText 
                size={40}
                className="cursor-pointer transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(139,92,246,0.4)] hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-base sm:text-base">
              Premium car rental services in Siliguri and Northeast India. Your trusted travel partner.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-lg font-semibold text-gray-900 mb-4 lg:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-base sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quality')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-base sm:text-base"
                >
                  Car Rental
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-base sm:text-base"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('destinations')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-base sm:text-base"
                >
                  Destinations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-lg font-semibold text-gray-900 mb-4 lg:mb-6">Contact Us</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start justify-center sm:justify-start space-x-3 text-gray-600">
                <MapPin size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base leading-relaxed">
                  3rd Floor, Vyom Sachitra, 3C,<br />
                  Pranami Mandir Rd, Siliguri,<br />
                  West Bengal 734001
                </span>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-600">
                <Mail size={16} className="text-purple-500 flex-shrink-0" />
                <a 
                  href="mailto:info@carrentalsiliguri.com"
                  className="text-sm sm:text-base hover:text-purple-600 transition-colors duration-300"
                >
                  info@ghoshtravels.com
                </a>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-600">
                <Phone size={16} className="text-purple-500 flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <a 
                    href="tel:+919733111234"
                    className="hover:text-purple-600 transition-colors duration-300 block"
                  >
                    +91 97331 11234
                  </a>
                  <a 
                    href="tel:+919733222567"
                    className="hover:text-purple-600 transition-colors duration-300 block"
                  >
                    +91 97332 22567
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">Business Hours</h4>
              <div className="text-gray-600 text-sm sm:text-base">
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-gray-600 text-sm sm:text-base">
              © 2024 Ghosh Travels. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm sm:text-base">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
