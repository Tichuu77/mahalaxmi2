import Link from "next/link"
import {  Mail, Phone } from "lucide-react"
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
            <h4 className="font-playfair font-bold mb-4">Contact Us</h4>
            <div className="flex gap-4">
             {/*email*/}
              <a href="mailto:GdK0M@example.com" className="hover:text-primary transition-colors" aria-label="Email Mahalaxmi Developers">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+918766887828" className="hover:text-primary transition-colors" aria-label="Call Mahalaxmi Developers">
                <Phone className="w-6 h-6" />
              </a>
              {/*whatsapp*/}
                <a
                href="https://wa.me/918766887828"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp Mahalaxmi Developers"
                target="_blank"
                rel="noopener noreferrer"
                >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .5C6.21.5 1.5 5.21 1.5 11c0 1.92.5 3.81 1.47 5.47L1 23l6.73-1.77A11.88 11.88 0 0 0 12 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.81-1.1-5.44-3-7.65zM12 20.1c-1.6 0-3.16-.42-4.5-1.2l-.32-.18-4.01 1.06 1.03-3.96-.21-.33A8.5 8.5 0 0 1 3.5 11c0-4.69 3.81-8.5 8.5-8.5S20.5 6.31 20.5 11 16.69 20.1 12 20.1zM16.66 14.13c-.26-.13-1.54-.76-1.77-.85-.23-.09-.39-.13-.55.13s-.63.85-.77 1.02c-.14.17-.28.19-.52.07-.24-.13-1.01-.37-1.92-1.18-.71-.63-1.19-1.4-1.33-1.63-.14-.23-.02-.35.1-.48.1-.11.24-.27.36-.4.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.4-.06-.12-.56-1.36-.77-1.86-.2-.49-.4-.42-.55-.42-.14 0-.31-.01-.48-.01-.16 0-.41.06-.62.31-.21.25-.8.78-.8 1.9 0 1.12.82 2.21.93 2.36.12.15 1.6 2.43 3.88 3.41 2.28.98 2.28.65 2.69.61.41-.05 1.33-.54 1.52-1.06.19-.52.19-.97.13-1.06-.06-.09-.21-.15-.47-.28z" />
                </svg>
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
