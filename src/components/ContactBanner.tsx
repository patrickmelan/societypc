import { Mail, Phone, Clock } from "lucide-react"

export default function ContactBanner() {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-y border-white/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-center items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-medium text-white"><a href="tel:+16109470943">(610) 947-0943</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span className="font-medium"><a href="mailto:contact@societypc.com">contact@societypc.com</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Mon-Fri: 11AM-3PM</span>
          </div>
        </div>
      </div>
    </div>
  )
} 