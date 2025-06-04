'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Calendar } from "lucide-react"
import { Button } from './ui/button'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={'fixed w-full top-0 z-50 transition-all duration-300 bg-white'}>
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

          {/* Mobile Menu Button */}
            <Button
            variant="ghost"
            size="icon"
            className={'md:hidden text-gray-700'}
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
                className={`w-full bg-blue-600 text-white text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg`}
            >
                <Link href="/book" onClick={() => setIsMenuOpen(false)}>Book An Appointment <Calendar /> </Link>
            </Button>
            </nav>
        </div>
        </div>
    </header>
    )
}

