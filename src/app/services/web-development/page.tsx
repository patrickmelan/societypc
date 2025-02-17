import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Search } from 'lucide-react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Web Development',
  description: 'Professional website design, development and SEO services. Build your online presence with custom, responsive websites from Society PC.',
}

const webDevServices = [
  { icon: Globe, title: "Custom Website Design and Development", description: "Creates unique, user-friendly websites that reflect your brand and engage your target audience effectively." },
  { icon: Search, title: "SEO Solutions", description: "Allow your website to flourish on Google through a variety of SEO enhancements that happen right inside of your website." }
]

//{ icon: Users, title: "Tailored Solutions for Small Businesses and Individuals", description: "Delivers personalized functionality and scalability to meet specific needs and goals for you, or your business." },

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Web Development</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Web development is essential for building a strong online presence, connecting with audiences, and achieving business or personal objectives in the digital world.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {webDevServices.map((service, index) => (
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

