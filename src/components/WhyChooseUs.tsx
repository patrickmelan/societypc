import { DollarSign, PersonStanding, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const reasons = [
  { Icon: DollarSign, title: 'Competitive Pricing', description: 'Competitive & reasonable pricing for all of your tech needs!' },
  { Icon: PersonStanding, title: 'Family Owned', description: 'When you come to the shop, you will be treated like family!' },
  { Icon: Wrench, title: 'Quality Parts', description: 'We use only genuine, high-quality replacement parts for all repairs!' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <reason.Icon className="h-16 w-16 text-blue-500 mb-6 mx-auto transform transition-transform hover:scale-110 duration-300" />
                <CardTitle className="text-center text-xl font-bold">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

