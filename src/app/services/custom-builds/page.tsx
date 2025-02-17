import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Gamepad, Briefcase, List, Wrench } from 'lucide-react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Custom PC Builds',
  description: 'Custom-built gaming PCs, workstation computers, and performance desktops. High-end components, expert assembly, and tailored builds for gaming, editing, and business.',
}
const customBuildServices = [
  { icon: Cpu, title: "Custom PC Builds", description: "Tailored to meet specific needs, our custom PC builds provide the perfect balance of performance, efficiency, and budget." },
  { icon: Gamepad, title: "Gaming PCs", description: "Designed for maximum power and performance, gaming PCs deliver an immersive experience with high frame rates and cutting-edge graphics." },
  { icon: Briefcase, title: "Workstation PCs", description: "Optimized for professional tasks like video editing, 3D rendering, and software development, offering unparalleled reliability and productivity." },
  { icon: List, title: "Part Selection Guidance", description: "Helps customers choose the right components for their needs, ensuring compatibility, performance, and cost-effectiveness." },
  { icon: Wrench, title: "Professional Assembly Services", description: "Ensures a professionally built system with proper cable management, thermal efficiency, and attention to detail for long-lasting performance." },
]

export default function CustomBuildsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Custom PC Builds</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Custom PC builds empower users with a system tailored to their unique requirements, maximizing performance, longevity, and satisfaction.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {customBuildServices.map((service, index) => (
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

