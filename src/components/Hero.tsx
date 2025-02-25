import Image from "next/image"
import { Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gray-200 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 leading-tight">
              Expert Computer Repair in Easton, PA
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Fast, reliable, and professional tech solutions for all your needs. We&apos;re here to keep your digital world
              running smoothly.
            </p>
            <div className="md:space-x-2 space-y-2">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
                <Link href="/book" className="text-lg">Book an Appointment</Link>
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
              <Link href="/contact" className="text-lg">Contact Us</Link>
              <Mail className="ml-2 h-5 w-5" />
            </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/hero-img.jpg"
                alt="Computer Repair Illustration"
                fill
                className="rounded-lg shadow-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}







