"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const guideSteps = [
  {
    step: 1,
    title: "Browse Projects",
    description:
      "Explore our portfolio of completed, ongoing, and upcoming projects. View detailed information about each development.",
  },
  {
    step: 2,
    title: "Check Amenities",
    description:
      "Discover the world-class amenities available in each project. From fitness centers to smart home technology.",
  },
  {
    step: 3,
    title: "Schedule a Visit",
    description:
      "Book a site visit or virtual tour to experience the projects firsthand. Our team will guide you through.",
  },
  {
    step: 4,
    title: "Connect with Sales",
    description: "Get in touch with our sales team to discuss pricing, payment plans, and investment opportunities.",
  },
  {
    step: 5,
    title: "Investment & Ownership",
    description: "Complete the documentation process and become a proud owner of a Mahalaxmi property.",
  },
]

export default function UserGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="user-guide" className="relative py-12 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-secondary/10 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary font-semibold text-xs uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary mb-6">
            Your Journey with Mahalaxmi
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Follow these simple steps to find your dream property and become part of the Mahalaxmi family.
          </p>
        </div>

        <div className="space-y-4">
          {guideSteps.map((item) => (
            <div
              key={item.step}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setExpandedStep(expandedStep === item.step ? null : item.step)}
                className="w-full p-6 flex items-center justify-between bg-card hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-playfair font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-bold text-secondary">{item.title}</h3>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform ${expandedStep === item.step ? "rotate-180" : ""}`}
                />
              </button>

              {expandedStep === item.step && (
                <div className="px-6 py-4 bg-muted border-t border-border">
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
