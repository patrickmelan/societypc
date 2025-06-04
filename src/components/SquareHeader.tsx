import Link from 'next/link'
import Image from 'next/image'

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
            <li><Link 
              href="/services" 
              className={"text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium"}
            >
              Services
            </Link></li>
            {/*<li><Link href="/#why-choose-us" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Why Choose Us</Link></li>*/}
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

