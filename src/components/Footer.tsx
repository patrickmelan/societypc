import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Society PC Repair</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">Expert computer repair services for all your tech needs</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Phone className="h-5 w-5 mr-2" /> (610) - 349 - 4041</li>
              <li className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@societypc.com</li>
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> 417 Cattell Street, Suite 1<br />Easton, PA 18042</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-blue-500 transition-colors duration-200">Services</a></li>
              {/**<li><a href="#why-choose-us" className="hover:text-blue-500 transition-colors duration-200">Why Choose Us</a></li>**/}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Society PC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

