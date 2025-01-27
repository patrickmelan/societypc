import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ServiceCategoryProps {
  title: string
  services: string[]
  url: string
}

export default function ServiceCategory({ title, services, url }: ServiceCategoryProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full hover:bg-blue-500 transition-colors duration-300 ">
          <Link href={`/services/${url}`} className="flex items-center justify-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}





