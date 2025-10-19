'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

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
      } rounded-full border border-gray-200 shadow-lg transition-all duration-300`}
      style={{ 
        position: 'fixed', 
        top: '16px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 9999 
      }}
    >
      <div className="px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-center relative">
          {/* Logo */}
          <div className="absolute left-0 flex items-center">
            <Logo 
              className="cursor-pointer transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(139,92,246,0.4)] hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              size={40}
            />
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('car-rental')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              Car Rental
            </button>
            <button
              onClick={() => scrollToSection('corporate-rental')}
              className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              Corporate Rental
            </button>
            <div className="relative group">
              <button className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300">
                Destinations
              </button>
              {/* Dropdown overlay */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-3 space-y-1">
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Darjeeling
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Sikkim
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Bhutan
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Dooars
                  </button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300">
                Packages
              </button>
              {/* Dropdown overlay */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-3 space-y-1">
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Darjeeling
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Sikkim
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Bhutan
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Dooars
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    Assam Meghalaya
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push('/contact')}
              className="px-3 lg:px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden absolute right-0">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 p-1.5 rounded-full hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('car-rental')}
              className="block w-full text-left px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Car Rental
            </button>
            <button
              onClick={() => scrollToSection('corporate-rental')}
              className="block w-full text-left px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Corporate Rental
            </button>
            <button
              onClick={() => scrollToSection('destinations')}
              className="block w-full text-left px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="block w-full text-left px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Packages
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="block w-full text-left px-3 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 rounded-lg transition-all duration-300 shadow-md"
            >
              Contact
            </button>
          </div>
        </div>
    </nav>
  )
}
