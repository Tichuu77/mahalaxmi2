"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"

const amenitiesData = [
  {
    icon: Wifi,
    title: "Smart Home Technology",
    description: "Advanced IoT integration for modern living with smart controls and automation.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym facilities with professional trainers and equipment.",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping and parks for a healthy, sustainable lifestyle.",
  },
  {
    icon: Zap,
    title: "24/7 Power Backup",
    description: "Uninterrupted power supply with advanced backup systems.",
  },
  {
    icon: Shield,
    title: "Security System",
    description: "Multi-layer security with CCTV surveillance and trained personnel.",
  },
  {
    icon: Users,
    title: "Community Center",
    description: "Spaces for social gatherings, events, and community activities.",
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-12 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">Premium Amenities</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary mb-6">
            World-Class Amenities
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of amenities designed for your comfort and
            convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {amenitiesData.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="group p-6 md:p-8 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-secondary mb-2">{amenity.title}</h3>
                <p className="text-foreground/70 text-sm md:text-base">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
