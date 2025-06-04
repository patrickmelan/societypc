import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenToolIcon as Tool, Terminal, Search, Shield } from 'lucide-react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Computer Repairs',
  description: 'Fast and reliable computer repairs. Virus removal, hardware replacements, system optimization, and troubleshooting for desktops and laptops.',
}

const repairServices = [
  { icon: Tool, title: "Hardware Repairs and Component Replacement", description: "Restores functionality by addressing physical damage or worn-out components, extending the life of your device." },
  { icon: Terminal, title: "Software Troubleshooting and Fixes", description: "Resolves glitches, crashes, and errors to ensure smooth operation and an improved user experience." },
  { icon: Search, title: "Comprehensive System Diagnostics", description: "Identifies hidden issues and root causes to provide effective and lasting repair solutions." },
  { icon: Shield, title: "Virus, Malware, and Spyware Removal", description: "Protects your data and improves system performance by eliminating harmful software and securing your device." },
]

export default function RepairsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header changeColor={true} />
      <main className="flex-grow bg-gradient-to-br from-purple-700 via-blue-500 to-blue-500">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Computer Repairs</h1>
            <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
              Computer repairs are vital to maintaining system reliability, protecting valuable data, and ensuring optimal performance and longevity.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {repairServices.map((service, index) => (
                <Card key={index} className="flex flex-col bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl font-bold text-center text-blue-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

