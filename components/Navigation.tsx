'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-surface/95 backdrop-blur-md' : 'bg-dark-surface/80 backdrop-blur-sm'
    } rounded-full border border-dark-border/50 shadow-lg`}>
      <div className="px-6 py-3">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center">
            <Logo 
              className="cursor-pointer transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              size={50}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 text-sm font-medium text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-full transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="px-4 py-2 text-sm font-medium text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-full transition-all duration-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('quality')}
              className="px-4 py-2 text-sm font-medium text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-full transition-all duration-300"
            >
              Quality
            </button>
            <button
              onClick={() => scrollToSection('marketplace')}
              className="px-4 py-2 text-sm font-medium bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 hover:text-gold-300 rounded-full transition-all duration-300 border border-gold-500/30"
            >
              Buy Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gold-400 transition-colors duration-300 p-2 rounded-full hover:bg-dark-card/50"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-dark-surface/95 backdrop-blur-md rounded-2xl border border-dark-border/50 shadow-lg mx-4 p-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-xl transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-3 text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-xl transition-all duration-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('quality')}
              className="block w-full text-left px-4 py-3 text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-xl transition-all duration-300"
            >
              Quality
            </button>
            <button
              onClick={() => scrollToSection('marketplace')}
              className="block w-full text-left px-4 py-3 bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 hover:text-gold-300 rounded-xl transition-all duration-300 border border-gold-500/30"
            >
              Buy Now
            </button>
          </div>
        </div>
    </nav>
  )
}
