"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"

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
    <section
      id="amenities"
      className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
    >
      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">
              Premium Amenities
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary mb-4"
          >
            World-Class Amenities
          </motion.h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-3xl mx-auto font-poppins">
            Experience luxury living with our comprehensive range of amenities designed for your comfort and
            convenience.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {amenitiesData.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Animated gradient ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Text Content */}
                  <h3 className="text-xl font-playfair font-bold text-secondary mb-2">{amenity.title}</h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-poppins">
                    {amenity.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
