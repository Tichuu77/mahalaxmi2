import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Malaxmi-Final-Logo.-2png.png"
                alt="Mahalaxmi Developers"
                className="h-20 w-20"
              />
              <div>
                <div className="text-lg font-playfair font-bold text-white">MAHALAXMI</div>
                <div className="text-xs text-white/70">A tradition of trust</div>
              </div>
            </div>
            <p className="font-poppins text-sm text-white/80 leading-relaxed">
              Building excellence and creating legacies through premium real estate development.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 font-poppins text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-primary transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-white/80 hover:text-primary transition-colors inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#amenities" 
                  className="text-white/80 hover:text-primary transition-colors inline-block"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-white/80 hover:text-primary transition-colors inline-block"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  className="text-white/80 hover:text-primary transition-colors inline-block"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 font-poppins text-sm">

              <li>
                Vinod Patil
              </li>
              <li>
                <a 
                  href="tel:+919373117899" 
                  className="flex items-start gap-3 text-white/80 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+91 9373117899</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto: patilvinod970@gmail.com" 
                  className="flex items-start gap-3 text-white/80 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="break-all">patilvinod970@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Nagpur, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-4">Connect With Us</h4>
            <p className="font-poppins text-sm text-white/80 mb-4">
              Get in touch for inquiries and site visits
            </p>
            <div className="flex gap-4">
              {/* Email */}
              <a 
                href="mailto: patilvinod970@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110" 
                aria-label="Email Mahalaxmi Developers"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              {/* Phone */}
              <a 
                href="tel:+919373117899" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110" 
                aria-label="Call Mahalaxmi Developers"
              >
                <Phone className="w-5 h-5" />
              </a>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/919373117899?text=Enquiry for more details"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp Mahalaxmi Developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
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

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-poppins text-sm text-white/70 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Mahalaxmi Developers. All rights reserved.
            </p>
            <div className="flex gap-6 font-poppins text-sm text-white/70">
              <a href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}