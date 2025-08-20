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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <LogoText 
                size={48}
                className="cursor-pointer transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              />
            </div>
            <p className="text-dark-text-secondary leading-relaxed mb-6">
              The premium, casino-grade poker set for players who demand the finest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quality')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300"
                >
                  Quality & Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('marketplace')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300"
                >
                  Buy Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Purchase */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Buy Now</h3>
            <div className="space-y-4 mb-8">
              <a
                href="#"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 group"
              >
                <span className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold">
                  <Image src="/amazon_logo.png" alt="Amazon" width={16} height={16} className="object-contain" />
                </span>
                <span>Amazon</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 group"
              >
                <span className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#ffe70b' }}>
                  <Image src="/flipkart_logo.png" alt="Flipkart" width={16} height={16} className="object-contain" />
                </span>
                <span>Flipkart</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <div className="flex items-center space-x-2 text-dark-text-secondary">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm">support@ldorado.in</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-text-secondary">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-dark-text-secondary text-sm">
              © 2024 Ldorado. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
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
