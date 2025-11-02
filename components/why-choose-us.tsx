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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 px-3 sm:px-6 overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-40 -right-20 w-80 h-80 md:w-96 md:h-96 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 md:w-96 md:h-96 rounded-full bg-yellow-500/10 blur-3xl"
        animate={{ 
          x: [0, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200"
          >
            <motion.div 
              className="w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-yellow-600 font-semibold text-xs uppercase tracking-wider">
              Our Promise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-3 md:mb-4"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4"
          >
            Excellence built on trust, quality, and timeless craftsmanship
          </motion.p>
        </motion.div>

        {/* Feature Cards - 2 columns on mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                {/* Glow Background on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl md:rounded-3xl -z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Card */}
                <div className="relative bg-white border border-gray-200 p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent skew-x-12" />
                  </motion.div>

                  {/* Icon with Yellow Gradient */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-5 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 md:p-3"
                  >
                    <Icon size={24} className="md:w-8 md:h-8 text-white drop-shadow-md" />
                    
                    {/* Rotating ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-dashed border-yellow-300 opacity-30"
                    />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-secondary mb-2 md:mb-3 group-hover:text-yellow-700 transition-colors relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-base leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl md:rounded-b-3xl"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Corner glow */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { value: "500+", label: "Happy Families" },
            { value: "50+", label: "Projects Completed" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 md:p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-1 md:mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}