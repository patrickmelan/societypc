import { Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Slideshow from "@/components/Slideshow"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-blue-500 to-blue-500 py-16 md:py-24">
      <div className="container mx-auto px-4 mt-32 md:mt-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Expert Computer Repair in Easton, PA
            </h1>
            <p className="text-xl text-white">
              Fast, reliable, and professional tech solutions for all your needs. We&apos;re here to keep your digital world
              running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/book" className="flex items-center">
                  Book an Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md md:block hidden">
              <Slideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}







