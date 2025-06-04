'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import Promo from '@/components/Promo'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      
      {isMobile ? <MobileNav /> : <Header changeColor={true} showContact={true}/>}
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Promo />
      </main>
      <Footer />
    </div>
  )
}

