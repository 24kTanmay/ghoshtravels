'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    handleNavigation(sectionId)
  }

  return (
    <nav 
      className={`w-[95%] max-w-6xl ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      } rounded-3xl border border-gray-200 shadow-lg transition-all duration-300`}
      style={{ 
        position: 'fixed', 
        top: '16px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 9999 
      }}
    >
      <div className="px-4 sm:px-6 py-3 sm:py-3">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-newsreader font-bold text-brand-forest">
              Ghosh <span className="italic font-normal text-brand-accent">Travels</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            <button
              onClick={() => scrollToSection('home')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-full transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-full transition-all duration-300"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection('destinations')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-full transition-all duration-300"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-full transition-all duration-300"
            >
              Packages
            </button>
          </div>

          {/* Contact Button - Absolute Right */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => router.push('/contact')}
              className="px-5 py-2 text-sm font-bold bg-brand-forest text-white hover:bg-brand-sage rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-forest transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 space-y-2 rounded-b-3xl">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-lg transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-lg transition-all duration-300"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection('destinations')}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-lg transition-all duration-300"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand-forest hover:bg-stone-50 rounded-lg transition-all duration-300"
            >
              Packages
            </button>
            <button
              onClick={() => {
                router.push('/contact')
                setIsMenuOpen(false)
              }}
              className="block w-full text-center px-4 py-3 text-sm font-bold bg-brand-forest text-white rounded-lg transition-all duration-300 shadow-md"
            >
              Contact
            </button>
          </div>
        </div>
    </nav>
  )
}