'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Calendar, Phone, Mail, Clock} from "lucide-react"
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

export default function Header({ changeColor, showContact }: { changeColor?: boolean, showContact?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${!changeColor ? 'bg-white' : 'bg-transparent'} ${
      scrolled && changeColor ? 'bg-white backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/SocietyPC_Logo_Jan2025.png"
              width={160}
              height={35}
              alt="Society PC Logo"
              className="h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
          <Link 
              href="/services" 
              className={`transition-colors duration-200 font-medium ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Services
            </Link>
            
            <Link 
              href="/contact" 
              className={`transition-colors duration-200 font-medium ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </Link>
            
            <Button
                asChild
                size="lg"
                className={`${!scrolled ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'} text-lg font-semibold px-4 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <Link href="/book" className="flex items-center">
                  Book
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="flex flex-col space-y-4 pt-4">
            <Link 
              href="/services" 
              className={`transition-colors duration-200 font-medium py-2 text-gray-700 hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >Services
            </Link>
            
            <Link 
              href="/contact" 
              className={`transition-colors duration-200 font-medium py-2 text-gray-700 hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button 
              asChild
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <Link href="/book" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            </Button>
          </nav>
        </div>
      </div>
      {showContact && (
      <div className="bg-white/10 backdrop-blur-sm border-y border-white/20">
        <div className="container mx-auto px-4 py-2">
          <div className={`flex flex-wrap justify-center items-center gap-6 font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span><a href="tel:+16109470943">(610) 947-0943</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span><a href="mailto:contact@societypc.com">contact@societypc.com</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Mon-Fri: 11AM-3PM</span>
          </div>
        </div>
        </div>
      </div>
      )}
    </header>
  )
}

