import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, ArrowUpCircle, ArrowLeftRight, Cloud, Lock } from 'lucide-react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Data Services',
  description: 'Professional data recovery, secure cloud backup, hard drive restoration, and file transfer services. Protect and restore your important data with Society PC.',
}

const dataServices = [
  { icon: HardDrive, title: "Data Recovery from Damaged Drives", description: "Restores critical files and documents lost due to hardware failure, ensuring minimal disruption." },
  { icon: ArrowUpCircle, title: "Hard Drive and SSD Upgrades", description: "Enhances storage capacity and system speed, improving overall computer performance." },
  { icon: ArrowLeftRight, title: "Data Transfer Between Devices", description: "Facilitates seamless migration of files between devices during upgrades or replacements, preserving user data." },
  { icon: Cloud, title: "Backup Solutions (Local and Cloud-Based)", description: "Safeguards data against accidental loss or system failures by creating secure and reliable backups." },
  { icon: Lock, title: "Secure Transfer to Cloud Storage", description: "Provides a scalable, remote solution for accessing and protecting data while maintaining confidentiality and security." },
]

export default function DataServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Data Services</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Data services are essential for protecting, managing, and optimizing valuable information, ensuring accessibility, security, and continuity in both personal and professional environments.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {dataServices.map((service, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl font-bold text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 text-center">{service.description}</p>
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

