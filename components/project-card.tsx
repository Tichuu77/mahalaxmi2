"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  name: string
  location: string
  description: string
  status: "completed" | "ongoing" | "upcoming"
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    ongoing: "bg-blue-100 text-blue-800",
    upcoming: "bg-amber-100 text-amber-800",
  }

  const statusLabels = {
    completed: "Completed",
    ongoing: "Ongoing",
    upcoming: "Upcoming",
  }

  return (
    <div
      className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-poppins font-semibold ${statusColors[project.status]}`}>
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold text-secondary mb-2">{project.name}</h3>

        <p className="text-sm text-muted-foreground font-poppins mb-3">📍 {project.location}</p>

        <p className="text-foreground/70 font-poppins text-sm mb-6 leading-relaxed">{project.description}</p>

        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-poppins font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
          Know More
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
