"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

  const testimonials = [
    {
      id: 1,
      content:
        "Investing in a by Maha Laxmi Developers transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
      name: "Rajkumar Gharjale",
      role: "CEO",
      location: "Nagpur",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations. Highly recommended!",
      name: "Priya Shah",
      role: "CEO",
      location: "Mumbai",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
      name: "Karan Akojwar",
      role: "CEO",
      location: "Pune",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
      rating: 5,
    },
  ]


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-secondary mb-4">Client Testimonials</h2>
          <p className="text-foreground/70 font-poppins text-lg">What our satisfied clients have to say</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-muted p-8 sm:p-12 rounded-lg mb-8">
          <div className="flex gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>

          <p className="text-lg text-foreground/80 font-poppins mb-8 leading-relaxed italic">"{current.content}"</p>

          <div className="flex items-center gap-4">
            <img
              src={current.image || "/placeholder.svg"}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-playfair font-bold text-secondary">{current.name}</h3>
              <p className="text-foreground/60 font-poppins text-sm">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
