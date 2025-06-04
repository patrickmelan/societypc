import { Cpu, HardDrive, Globe, WrenchIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from './ui/button'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-500 to-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <Cpu className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <CardTitle className="text-center">Custom PC Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Custom builds for gaming and workstation PCs</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <HardDrive className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <CardTitle className="text-center">Data Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Data recovery and backup solutions</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <WrenchIcon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <CardTitle className="text-center">Computer Repair</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Hardware repairs and software fixes</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <CardTitle className="text-center">Web Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Custom website design and development</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

