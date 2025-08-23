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
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4 lg:mb-6">
              <LogoText 
                size={40}
                className="cursor-pointer transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              />
            </div>
            <p className="text-dark-text-secondary leading-relaxed mb-4 lg:mb-6 text-base sm:text-base">
              The premium, casino-grade poker set for players who demand the finest.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-lg font-semibold text-white mb-4 lg:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 text-base sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quality')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 text-base sm:text-base"
                >
                  Quality & Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('marketplace')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 text-base sm:text-base"
                >
                  Buy Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Purchase */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-lg font-semibold text-white mb-4 lg:mb-6">Buy Now</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">
              <a
                href="#"
                className="flex items-center justify-center sm:justify-start space-x-2 text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 group text-base sm:text-base"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded flex items-center justify-center text-xs font-bold">
                  <Image src="/amazon_logo.png" alt="Amazon" width={14} height={14} className="object-contain" />
                </span>
                <span>Amazon</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:size-3" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center sm:justify-start space-x-2 text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 group text-base sm:text-base"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#ffe70b' }}>
                  <Image src="/flipkart_logo.png" alt="Flipkart" width={14} height={14} className="object-contain" />
                </span>
                <span>Flipkart</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:size-3" />
              </a>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-lg sm:text-lg font-semibold text-white">Contact Us</h4>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-dark-text-secondary">
                <Mail size={14} className="text-gold-400 sm:size-4" />
                <span className="text-sm sm:text-base">support@ldorado.in</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-dark-text-secondary">
                <MapPin size={14} className="text-gold-400 sm:size-4" />
                <span className="text-sm sm:text-base">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-border mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-dark-text-secondary text-sm sm:text-base">
              © 2024 Ldorado. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm sm:text-base">
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
