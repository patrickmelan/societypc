import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"


export default function SquareHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/SocietyPC_Icon_Jan2025.png"
            width={65}
            height={65}
            alt=""
            className="h-auto hover:opacity-90 transition-opacity"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 hover:text-blue-500 flex items-center">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/services/custom-builds" className="w-full">
                      Custom PC Builds
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/data" className="w-full">
                      Data Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/repairs" className="w-full">
                      Computer Repairs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/web-development" className="w-full">
                      Web Development
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/services" className="w-full">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu></li>
            {/*<li><Link href="/#why-choose-us" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Why Choose Us</Link></li>*/}
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

