import { Cpu, HardDrive, Wifi, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from './ui/button'

const services = [
  { icon: Cpu, title: 'Hardware Repair', description: 'Fix and upgrade computer components' },
  { icon: HardDrive, title: 'Data Recovery', description: 'Retrieve lost or corrupted data' },
  { icon: Wifi, title: 'Network Setup', description: 'Configure and optimize your network' },
  { icon: Shield, title: 'Virus Removal', description: 'Protect your system from malware' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-blue-500">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <Cpu className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center">Hardware Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Fix and upgrade computer components</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <HardDrive className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center">Data Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Retrieve lost or corrupted data</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Wifi className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center">Network Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Configure and optimize your network</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center">Virus Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Protect your system from malware</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
  )
}

