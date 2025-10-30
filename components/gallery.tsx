"use client"

import { useState } from "react"
import { X } from "lucide-react"

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

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-secondary mb-4">Gallery</h2>
          <p className="text-foreground/70 font-poppins text-lg max-w-2xl mx-auto">
            Explore the beauty and elegance of our completed projects
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
