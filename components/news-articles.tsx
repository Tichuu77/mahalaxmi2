"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, User, ChevronDown, ChevronUp } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Mahalaxmi Launches New Luxury Residential Complex",
    excerpt:
      "Introducing our latest project featuring smart homes and sustainable living spaces in the heart of the city.",
    fullContent:
      "The Mahalaxmi Luxury Residential Complex marks a new milestone in sustainable architecture. Each unit is designed with eco-conscious materials, smart home integration, and green terraces for a natural lifestyle. Residents can enjoy modern amenities, lush gardens, and easy access to urban hotspots. This launch redefines urban luxury with purpose and sustainability at its core.",
    date: "March 15, 2025",
    author: "Mahalaxmi Team",
    category: "Project Launch",
    image: "/luxury-residential-complex.png",
  },
  {
    id: 2,
    title: "Sustainable Development: Our Commitment to Green Living",
    excerpt:
      "Learn how Mahalaxmi Developers is pioneering eco-friendly construction practices and green spaces.",
    fullContent:
      "At Mahalaxmi Developers, sustainability isn’t just a trend — it’s a commitment. From solar energy integration to rainwater harvesting, every project embraces green building standards. Our mission is to create living spaces that harmonize with nature while minimizing carbon footprint, offering a healthier and cleaner future for generations to come.",
    date: "March 10, 2025",
    author: "Sustainability Team",
    category: "Sustainability",
    image: "/green-sustainable-building.jpg",
  },
  {
    id: 3,
    title: "Customer Success Story: From Dream to Reality",
    excerpt:
      "Meet the families who found their perfect home with Mahalaxmi. Read their inspiring stories.",
    fullContent:
      "For many families, Mahalaxmi projects have turned their dream homes into reality. Our customer-first approach ensures personalized experiences — from choosing the right floor plan to post-possession support. Their heartfelt testimonials remind us why we build not just homes, but lifelong happiness.",
    date: "March 5, 2025",
    author: "Marketing Team",
    category: "Success Stories",
    image: "/happy-family-new-home.jpg",
  },
]

export default function NewsArticles() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number, event: React.MouseEvent) => {
    event.stopPropagation() // Prevent any bubbling to parent elements
    setExpandedId((prev) => (prev === id ? null : id))
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedId(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="news" className="relative py-12 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">
              Latest Updates
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary mb-6">
            News & Articles
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-3xl mx-auto">
            Stay updated with the latest news, project launches, and insights from Mahalaxmi Developers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsArticles.map((article) => {
            return (
              <motion.article
                key={article.id}
                // Removed 'layout' prop to prevent global grid reflow animations
                // transition={{ layout: { duration: 0.4, type: "spring" } }} // No longer needed
                whileHover={{ scale: 1.02 }} // Keep hover for individual cards
                className={`group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  (article.id === expandedId) ? "border-primary/70 shadow-lg" : ""
                }`}
              >
                {/* Image - Optional: Removed onClick to limit toggles to button only */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Text Section - Optional: Removed onClick here too */}
                <div className="p-6 flex flex-col justify-between overflow-hidden"> {/* Added overflow-hidden for smooth clip */}
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">{article.excerpt}</p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-border text-xs text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  {/* Read More Button - Only toggle here */}
                  <button
                    onClick={(e) => toggleExpand(article.id, e)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors hover:cursor-pointer"
                  >
                    {(article.id === expandedId) ? (
                      <>
                        Show Less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={16} />
                      </>
                    )}
                  </button>

                  {/* Animated Full Content */}
                  <AnimatePresence>
                    { article.id === expandedId && (
                      <motion.div
                        key={`content-${article.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-4 text-sm text-foreground/80 leading-relaxed"
                      >
                        {article.fullContent}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}