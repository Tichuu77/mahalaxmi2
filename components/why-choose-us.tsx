"use client"

import { motion } from "framer-motion"
import { Building2, Clock, Users, Leaf, Eye, Zap } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Quality Construction",
    description: "Premium materials and international standards in every project",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Consistent track record of on-time project completion",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Dedicated support and transparent communication throughout",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly practices and green building certifications",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear pricing, ethical practices, and honest dealings",
  },
  {
    icon: Zap,
    title: "Modern Design",
    description: "Contemporary architecture with innovative features",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32   overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-300">
            <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
            <span className="text-yellow-800 font-semibold text-sm uppercase tracking-wider">
              Our Promise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-amber-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-amber-700 text-base md:text-lg max-w-3xl mx-auto font-light">
            Excellence built on trust, quality, and timeless craftsmanship
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                {/* Glow Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-3xl -z-10" />

                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-amber-200 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon with Yellow Gradient */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg bg-gradient-to-br from-yellow-400 to-amber-600 p-3"
                  >
                    <Icon size={32} className="text-white drop-shadow-md" />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-playfair font-bold text-amber-900 mb-3 group-hover:text-amber-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-amber-700 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}