"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const amenitiesData = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration for modern living.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym facilities.",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping and parks.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply 24/7.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance and personnel.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Spaces for social gatherings.",
  },
]

const additionalAmenities = [
  {
    icon: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool with children's area.",
  },
  {
    icon: "🎮",
    title: "Gaming Zone",
    description: "Indoor games and entertainment facilities.",
  },
  {
    icon: "🧘",
    title: "Yoga & Meditation",
    description: "Dedicated spaces for wellness activities.",
  },
  {
    icon: "🚗",
    title: "Covered Parking",
    description: "Secure multi-level parking facilities.",
  },
  {
    icon: "🎪",
    title: "Banquet Hall",
    description: "Event spaces for celebrations.",
  },
  {
    icon: "👶",
    title: "Kids Play Area",
    description: "Safe and fun playground for children.",
  },
]

export default function Amenities() {
  const [showAll, setShowAll] = useState(false)
  const displayedAmenities = showAll ? [...amenitiesData, ...additionalAmenities] : amenitiesData

  return (
    <section
      id="amenities"
      className="relative py-12 md:py-24 lg:py-32 px-3 sm:px-6 overflow-hidden bg-white"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Enhanced Animation */}
        <div className="text-center mb-8 md:mb-14">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200"
          >
            <motion.div 
              className="w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-yellow-600 font-semibold text-xs uppercase tracking-wider">
              Premium Amenities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-3 md:mb-4"
          >
            World-Class Amenities
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4"
          >
            Experience luxury living with our comprehensive range of amenities designed for your comfort and
            convenience.
          </motion.p>
        </div>

        {/* Amenities Grid with Staggered Animations */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedAmenities.map((amenity, index) => {
              const Icon = amenity.icon
              const isEmoji = typeof Icon === 'string'
              
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
                  >
                    {/* Animated gradient background */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent skew-x-12" />
                    </motion.div>

                    {/* Icon with advanced animations */}
                    <motion.div
                      className="relative mb-3 md:mb-5 inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-300"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1.1, 1.1, 1]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {!isEmoji && (
                        <motion.div
                          animate={{ 
                            rotate: 360 
                          }}
                          transition={{ 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className="absolute inset-0 rounded-lg md:rounded-xl border-2 border-dashed border-yellow-400 opacity-20"
                        />
                      )}
                      {isEmoji ? (
                        <span className="text-2xl md:text-4xl relative z-10">{Icon}</span>
                      ) : (
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-yellow-600 relative z-10" />
                      )}
                    </motion.div>

                    {/* Text Content with stagger animation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-sm md:text-xl font-bold text-secondary mb-1 md:mb-2 relative z-10">
                        {amenity.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-base leading-relaxed relative z-10">
                        {amenity.description}
                      </p>
                    </motion.div>

                    {/* Corner accent */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-400/0 to-yellow-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Floating CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base cursor-pointer"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              {showAll ? '← Show Less' : 'Explore All Amenities →'}
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}