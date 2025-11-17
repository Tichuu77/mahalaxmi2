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
    color: "from-yellow-400 to-yellow-500",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    step: 2,
    icon: CheckCircle2,
    title: "Check Amenities",
    description:
      "Discover the world-class amenities available in each project — from fitness centers to smart home technology.",
    color: "from-yellow-400 to-yellow-500",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    step: 3,
    icon: MapPin,
    title: "Schedule a Visit",
    description:
      "Book a site visit or virtual tour to experience the projects firsthand. Our team will guide you through every step.",
    color: "from-yellow-400 to-yellow-500",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    step: 4,
    icon: Users,
    title: "Connect with Sales",
    description:
      "Get in touch with our sales team to discuss pricing, payment plans, and investment opportunities.",
    color: "from-yellow-400 to-yellow-500",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    step: 5,
    icon: FileText,
    title: "Investment & Ownership",
    description:
      "Complete the documentation process and become a proud owner of a Mahalaxmi property.",
    color: "from-yellow-400 to-yellow-500",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
]

export default function UserGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="user-guide" className="relative py-12 md:py-24 px-3 sm:px-6 overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-32 -left-20 w-80 h-80 md:w-96 md:h-96 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 md:w-96 md:h-96 rounded-full bg-yellow-500/10 blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
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
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-yellow-600 font-semibold text-xs uppercase tracking-wider">
              How It Works
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3 md:mb-4 px-2"
          >
            Your Journey with Mahalaxmi
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4"
          >
            Follow these simple steps to find your dream property and become part of the Mahalaxmi family.
          </motion.p>
        </div>

        {/* Steps - Mobile Optimized */}
        <div className="space-y-3 md:space-y-5">
          {guideSteps.map((item, index) => {
            const Icon = item.icon
            const isActive = expandedStep === item.step

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  layout
                  className={`relative border rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 ${
                    isActive ? "border-yellow-400 shadow-yellow-100" : "border-gray-200"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background gradient on active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white pointer-events-none"
                      />
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpandedStep(isActive ? null : item.step)}
                    className="relative w-full p-4 md:p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 md:gap-4 text-left flex-1">
                      {/* Animated Step Number Badge */}
                      <motion.div
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          animate={isActive ? { rotate: 360 } : {}}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.bgColor} flex items-center justify-center relative overflow-hidden`}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0"
                            animate={isActive ? { x: ["-100%", "100%"] } : {}}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                          </motion.div>
                          <Icon className={`w-6 h-6 md:w-7 md:h-7 ${item.iconColor} relative z-10`} />
                        </motion.div>
                        
                        {/* Pulsing ring on active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1.3, opacity: 0 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="absolute inset-0 rounded-2xl border-2 border-yellow-400"
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <motion.span 
                            className="text-yellow-500 font-bold text-sm md:text-base"
                            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            Step {item.step}
                          </motion.span>
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ type: "spring", stiffness: 200 }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-secondary truncate">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Animated Chevron */}
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="flex-shrink-0 ml-2"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-yellow-100" : "bg-gray-100"
                      }`}>
                        <ChevronDown className={`w-5 h-5 transition-colors ${
                          isActive ? "text-yellow-600" : "text-gray-600"
                        }`} />
                      </div>
                    </motion.div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          className="px-4 pb-4 md:px-6 md:pb-6 pt-0"
                        >
                          <div className="pl-14 md:pl-[4.5rem]">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="relative"
                            >
                              {/* Decorative line */}
                              <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-transparent" />
                              
                              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {item.description}
                              </p>


                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.a
            href="https://wa.me/919373117899"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base cursor-pointer"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              Get Started Today →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}