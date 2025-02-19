import { DollarSign, PersonStanding, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const reasons = [
  { Icon: DollarSign, title: 'Competitive Pricing', description: 'Competitive & reasonable pricing for all of your tech needs!' },
  { Icon: PersonStanding, title: 'Family Owned', description: 'When you come to the shop, you will be treated like family!' },
  { Icon: Wrench, title: 'Quality Parts', description: 'We use only genuine, high-quality replacement parts for all repairs!' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index}>
              <CardHeader>
                <reason.Icon className="h-16 w-16 text-blue-500 mb-4 mx-auto" />
                <CardTitle className="text-center">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

