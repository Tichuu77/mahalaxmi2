"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 3}s`,
      }))
    )
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const galleryImages = [
    { id: 1, src: "/gallery1.jpg", alt: "Morning View" },
    { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square" },
    { id: 3, src: "/gallery3.jpg", alt: "Good Entrance" },
    { id: 4, src: "/gallery4.jpg", alt: "Tree covered" },
    { id: 5, src: "/gallery5.jpg", alt: "Night View" },
    { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space" },
    { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors" },
    { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities" },
    { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool" },
    { id: 10, src: "/gallery10.jpg", alt: "Evening View" },
    { id: 11, src: "/gallery11.jpg", alt: "Playground" },
    { id: 12, src: "/gallery12.jpg", alt: "Top View" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") nextModalImage()
        if (e.key === "ArrowLeft") prevModalImage()
        if (e.key === "Escape") setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-yellow-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore the beauty and elegance of our completed projects
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="min-w-full relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                      onClick={() => setSelectedImage(index)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="font-bold text-lg">{image.alt}</p>
                        <p className="text-xs text-white/80">Tap to view full size</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-yellow-500" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid - Enhanced Complex Layout */}
        <div className="hidden md:block relative">
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>

          {/* Complex Masonry-style Grid */}
          <div className="grid grid-cols-12 gap-4 auto-rows-[120px]">
            {/* Row 1 - Feature Image */}
            <div
              className={`col-span-7 row-span-4 relative overflow-hidden rounded-3xl cursor-pointer group shadow-xl hover:shadow-yellow-500/50 transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "0ms" }}
              onClick={() => setSelectedImage(0)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <Maximize2 className="w-12 h-12 text-white mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <p className="text-white font-bold text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{galleryImages[0].alt}</p>
                  <p className="text-yellow-300 text-sm mt-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75">Click to expand</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                Featured
              </div>
            </div>

            {/* Row 1 - Side images */}
            <div
              className={`col-span-5 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
              onClick={() => setSelectedImage(1)}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-lg">{galleryImages[1].alt}</p>
                  <Maximize2 className="w-6 h-6 text-yellow-300 mt-1" />
                </div>
              </div>
            </div>

            <div
              className={`col-span-3 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-6"
              }`}
              style={{ transitionDelay: "200ms" }}
              onClick={() => setSelectedImage(2)}
            >
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold drop-shadow-lg">{galleryImages[2].alt}</p>
              </div>
            </div>

            <div
              className={`col-span-2 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-6"
              }`}
              style={{ transitionDelay: "250ms" }}
              onClick={() => setSelectedImage(3)}
            >
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </div>

            {/* Row 2 - Mixed sizes */}
            <div
              className={`col-span-3 row-span-3 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:-translate-x-2 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "300ms" }}
              onClick={() => setSelectedImage(4)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <img
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <Maximize2 className="w-10 h-10 text-yellow-300 mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                <p className="text-white font-bold text-xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">{galleryImages[4].alt}</p>
              </div>
            </div>

            <div
              className={`col-span-4 row-span-3 relative overflow-hidden rounded-3xl cursor-pointer group shadow-xl hover:shadow-yellow-500/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "350ms" }}
              onClick={() => setSelectedImage(5)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-2 mb-3 transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-500">
                    <Maximize2 className="w-10 h-10 text-yellow-300" />
                  </div>
                  <p className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{galleryImages[5].alt}</p>
                  <div className="h-1 w-0 group-hover:w-20 bg-yellow-500 mt-2 transition-all duration-700" />
                </div>
              </div>
            </div>

            <div
              className={`col-span-2 row-span-3 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:translate-x-2 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "400ms" }}
              onClick={() => setSelectedImage(6)}
            >
              <img
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold">{galleryImages[6].alt}</p>
                  <Maximize2 className="w-5 h-5 text-yellow-300 mt-2" />
                </div>
              </div>
            </div>

            {/* Row 3 - Bottom row */}
            <div
              className={`col-span-3 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "450ms" }}
              onClick={() => setSelectedImage(7)}
            >
              <img
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-10 h-10 text-white mx-auto mb-2" />
                  <p className="text-white font-bold">{galleryImages[7].alt}</p>
                </div>
              </div>
            </div>

            <div
              className={`col-span-3 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: "500ms" }}
              onClick={() => setSelectedImage(8)}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <img
                src={galleryImages[8].src}
                alt={galleryImages[8].alt}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-yellow-500/90 backdrop-blur-sm rounded-xl p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-sm">{galleryImages[8].alt}</p>
              </div>
            </div>

            <div
              className={`col-span-3 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "550ms" }}
              onClick={() => setSelectedImage(9)}
            >
              <img
                src={galleryImages[9].src}
                alt={galleryImages[9].alt}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div className="transform translate-x-6 group-hover:translate-x-0 transition-transform duration-500">
                  <p className="text-white font-bold">{galleryImages[9].alt}</p>
                  <Maximize2 className="w-6 h-6 text-white mt-1" />
                </div>
              </div>
            </div>

            <div
              className={`col-span-3 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-12"
              }`}
              style={{ transitionDelay: "600ms" }}
              onClick={() => setSelectedImage(10)}
            >
              <img
                src={galleryImages[10].src}
                alt={galleryImages[10].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Maximize2 className="w-9 h-9 text-yellow-300 mx-auto mb-2" />
                  <p className="text-white font-bold">{galleryImages[10].alt}</p>
                </div>
              </div>
            </div>

            <div
              className={`col-span-3 row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-yellow-400/50 transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "650ms" }}
              onClick={() => setSelectedImage(11)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/30 via-transparent to-yellow-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <img
                src={galleryImages[11].src}
                alt={galleryImages[11].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div className="w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold">{galleryImages[11].alt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Maximize2 className="w-5 h-5 text-yellow-300" />
                    <span className="text-yellow-300 text-xs">View Full Size</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-yellow-500/20 backdrop-blur-md rounded-lg p-4 text-white border border-yellow-400/30">
              <p className="font-bold text-lg">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-white/80">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-yellow-500/80 hover:bg-yellow-600 backdrop-blur-md text-white rounded-full p-3 transition-all hover:scale-110 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-500/80 hover:bg-yellow-600 backdrop-blur-md text-white rounded-full p-3 transition-all hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500/80 hover:bg-yellow-600 backdrop-blur-md text-white rounded-full p-3 transition-all hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}