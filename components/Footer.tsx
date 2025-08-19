'use client'

import Logo from './Logo'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/with_font.svg"
                alt="Ldorado"
                className="h-12 text-gold-400"
                style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(29%) saturate(1352%) hue-rotate(7deg) brightness(98%) contrast(93%)' }}
              />
            </div>
            <p className="text-dark-text-secondary leading-relaxed mb-6">
              Premium quality poker cards designed for enthusiasts, professionals, and tournaments. 
              Experience the difference with Ldorado.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-dark-card rounded-full flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 cursor-pointer">
                <span className="text-gold-400">📧</span>
              </div>
              <div className="w-10 h-10 bg-dark-card rounded-full flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 cursor-pointer">
                <span className="text-gold-400">📱</span>
              </div>
              <div className="w-10 h-10 bg-dark-card rounded-full flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 cursor-pointer">
                <span className="text-gold-400">🌐</span>
              </div>
            </div>
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
                  onClick={() => scrollToSection('products')}
                  className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300"
                >
                  Our Collections
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

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Collections</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Classic Collection
                </span>
              </li>
              <li>
                <span className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Royal Collection
                </span>
              </li>
              <li>
                <span className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Diamond Collection
                </span>
              </li>
              <li>
                <span className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Tournament Series
                </span>
              </li>
            </ul>
          </div>

          {/* Marketplace & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Buy Now</h3>
            <div className="space-y-4 mb-8">
              <a
                href="#"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-orange-400 transition-colors duration-300 group"
              >
                <span className="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center text-xs font-bold text-orange-400">A</span>
                <span>Amazon</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-blue-400 transition-colors duration-300 group"
              >
                <span className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center text-xs font-bold text-blue-400">F</span>
                <span>Flipkart</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-dark-text-secondary">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm">support@ldorado.com</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-text-secondary">
                <Phone size={16} className="text-gold-400" />
                <span className="text-sm">+91 12345 67890</span>
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
              © {currentYear} Ldorado. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Shipping Policy
              </a>
              <a href="#" className="text-dark-text-secondary hover:text-gold-400 transition-colors duration-300">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-dark-bg border-t border-dark-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-dark-text-secondary text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
