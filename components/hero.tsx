"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=luxury%20real%20estate%20development%20modern%20architecture)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-secondary mb-6 text-balance">
          Building Excellence. Creating Legacies.
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-poppins text-balance">
          Mahalaxmi Developers brings you premium real estate projects with a tradition of trust and excellence in every
          development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-poppins font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group"
          >
            Explore Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-secondary hover:text-background transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
