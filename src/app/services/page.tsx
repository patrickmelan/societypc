import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCategory from '@/components/ServiceCategory'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Society PC | Services',
  description: 'Professional computer repair and tech services in Easton, PA.',
}

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Custom PC Solutions",
      services: [
        "Custom PC Builds",
        "Gaming PCs",
        "Workstation PCs",
        "Part Selection Guidance",
        "Professional Assembly Services"
      ],
      url: "custom-builds"
    },
    {
      title: "Data Services",
      services: [
        "Data Recovery from Damaged Drives",
        "Hard Drive and SSD Upgrades",
        "Data Transfer Between Devices",
        "Backup Solutions (Local and Cloud-Based)",
        "Secure Transfer to Cloud Storage",
      ],
      url: "data"
    },
    {
      title: "Computer Repair",
      services: [
        "Hardware Repairs and Component Replacement",
        "Software Troubleshooting and Fixes",
        "Comprehensive System Diagnostics",
        "Virus, Malware, and Spyware Removal"
      ],
      url: "repairs"
    },
    {
      title: "Web Design",
      services: [
        "Custom Website Design and Development",
        "Tailored Solutions for Small Businesses and Individuals"
      ],
      url: "web-development"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header changeColor={true} />
      <main className="flex-grow bg-gradient-to-br from-purple-700 via-blue-500 to-blue-500">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Our Services</h1>
            <p className="text-xl text-white/90 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive tech solutions tailored to your needs.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {serviceCategories.map((category, index) => (
                <ServiceCategory key={index} title={category.title} services={category.services} url={category.url} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

