"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  {
    id: 1,
    src: "/luxury-apartment-interior-modern.jpg",
    alt: "Modern apartment interior",
  },
  {
    id: 2,
    src: "/luxury-kitchen-design-contemporary.jpg",
    alt: "Contemporary kitchen",
  },
  {
    id: 3,
    src: "/luxury-bedroom-design-elegant.jpg",
    alt: "Elegant bedroom",
  },
  {
    id: 4,
    src: "/luxury-bathroom-spa-design.jpg",
    alt: "Spa-like bathroom",
  },
  {
    id: 5,
    src: "/luxury-living-room-modern-architecture.jpg",
    alt: "Modern living room",
  },
  {
    id: 6,
    src: "/luxury-building-exterior-architecture.jpg",
    alt: "Building exterior",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-12 md:py-20 px-3 sm:px-6 bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
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
              Our Work
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-secondary mb-3 md:mb-4"
          >
            Gallery
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Explore the beauty and elegance of our completed projects
          </motion.p>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative">
            {/* Slider Container */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-100">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={galleryImages[currentSlide].src || "/placeholder.svg"}
                    alt={galleryImages[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium drop-shadow-lg">
                      {galleryImages[currentSlide].alt}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-yellow-500' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentSlide 
                      ? 'border-yellow-500 scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">+</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative max-w-4xl w-full" 
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
                alt="Gallery"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm">
                  {galleryImages.find((img) => img.id === selectedImage)?.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}