"use client"

import { useState } from "react"
import ProjectCard from "./project-card"

const projectsData = [
  {
    id: 1,
    name: "Skyline Residences",
    location: "Downtown District",
    description: "Modern luxury apartments with panoramic city views",
    status: "completed",
    image: "/modern-luxury-apartment.png",
  },
  {
    id: 2,
    name: "Green Valley Estates",
    location: "Suburban Area",
    description: "Eco-friendly residential community with premium amenities",
    status: "ongoing",
    image: "/green-sustainable-residential-development.jpg",
  },
  {
    id: 3,
    name: "Waterfront Plaza",
    location: "Coastal Region",
    description: "Mixed-use development with retail and residential spaces",
    status: "upcoming",
    image: "/waterfront-luxury-development-plaza.jpg",
  },
  {
    id: 4,
    name: "Heritage Heights",
    location: "Historic District",
    description: "Contemporary design meets classic architecture",
    status: "completed",
    image: "/heritage-luxury-residential-building.jpg",
  },
  {
    id: 5,
    name: "Tech Park Towers",
    location: "Business District",
    description: "Smart office spaces with cutting-edge facilities",
    status: "ongoing",
    image: "/modern-tech-office.png",
  },
  {
    id: 6,
    name: "Sunset Villas",
    location: "Premium Location",
    description: "Exclusive villa community with private amenities",
    status: "upcoming",
    image: "/luxury-villa-community-sunset.jpg",
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? projectsData : projectsData.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-secondary mb-4">Our Projects</h2>
          <p className="text-foreground/70 font-poppins text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed, ongoing, and upcoming real estate projects
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: "All Projects", value: "all" },
            { label: "Completed", value: "completed" },
            { label: "Ongoing", value: "ongoing" },
            { label: "Upcoming", value: "upcoming" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-poppins font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground border border-border hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
