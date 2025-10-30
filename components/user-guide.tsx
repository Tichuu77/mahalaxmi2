"use client"

import { ChevronDown, Building2, CheckCircle2, MapPin, FileText, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const guideSteps = [
  {
    step: 1,
    icon: Building2,
    title: "Browse Projects",
    description:
      "Explore our portfolio of completed, ongoing, and upcoming projects. View detailed information about each development.",
  },
  {
    step: 2,
    icon: CheckCircle2,
    title: "Check Amenities",
    description:
      "Discover the world-class amenities available in each project — from fitness centers to smart home technology.",
  },
  {
    step: 3,
    icon: MapPin,
    title: "Schedule a Visit",
    description:
      "Book a site visit or virtual tour to experience the projects firsthand. Our team will guide you through every step.",
  },
  {
    step: 4,
    icon: Users,
    title: "Connect with Sales",
    description:
      "Get in touch with our sales team to discuss pricing, payment plans, and investment opportunities.",
  },
  {
    step: 5,
    icon: FileText,
    title: "Investment & Ownership",
    description:
      "Complete the documentation process and become a proud owner of a Mahalaxmi property.",
  },
]

export default function UserGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="user-guide" className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Decorative floating gradient circles */}
      <motion.div
        className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-secondary/10 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary font-semibold text-xs uppercase tracking-wider">How It Works</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary mb-4"
          >
            Your Journey with Mahalaxmi
          </motion.h2>
          <p className="text-foreground/70 text-base md:text-lg font-poppins max-w-2xl mx-auto">
            Follow these simple steps to find your dream property and become part of the Mahalaxmi family.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-5">
          {guideSteps.map((item) => {
            const Icon = item.icon
            const isActive = expandedStep === item.step

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item.step * 0.1 }}
                viewport={{ once: true }}
                className={`border border-border rounded-2xl overflow-hidden backdrop-blur-sm bg-card/80 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isActive ? "border-primary/50" : ""
                }`}
              >
                <button
                  onClick={() => setExpandedStep(isActive ? null : item.step)}
                  className="w-full p-6 flex items-center justify-between hover:cursor-pointer"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-playfair font-bold text-secondary">{item.title}</h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-6 pb-6 bg-muted/40 border-t border-border"
                    >
                      <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-poppins">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
