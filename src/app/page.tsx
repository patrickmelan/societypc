import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Cpu, HardDrive, Wifi, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

