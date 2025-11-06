"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Amenities", href: "#amenities" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Testimonials", href: "#testimonials" },
    {label : "Gallery", href : "#gallery"},
    { label: "User Guide", href: "#user-guide" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },

  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-scale">
          <Image
            src="/Mahalaxmi Infra new Logo.png"
            alt="Mahalaxmi Developers"
            width={50}
            height={50}
            className="h-14 w-auto transition-all duration-300 ease-out hover:drop-shadow-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-all duration-300 ease-out font-poppins text-sm font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-poppins font-medium hover-lift shadow-md hover:shadow-lg transition-all duration-300 ease-out"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-all duration-300 ease-out hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-fade-in-down">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-all duration-300 ease-out font-poppins"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-poppins font-medium text-center hover-lift transition-all duration-300 ease-out"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
