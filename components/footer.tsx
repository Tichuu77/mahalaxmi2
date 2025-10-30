import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/mahalaxmi-logo.png"
                alt="Mahalaxmi Developers"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <div className="text-lg font-playfair font-bold">MAHALAXMI</div>
                <div className="text-xs opacity-80">A tradition of trust</div>
              </div>
            </div>
            <p className="font-poppins text-sm opacity-80">
              Building excellence and creating legacies through premium real estate development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="hover:text-primary transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-primary transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Services</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mixed-Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center font-poppins text-sm opacity-80">
            <p>&copy; 2025 Mahalaxmi Developers. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
