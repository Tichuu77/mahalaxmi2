"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status?: string
}

const projects: {
  completed: Project[]
  ongoing: Project[]
  upcoming: Project[]
} = {
  ongoing: [
      {
        id: 2,
        title: "Mahalaxmi Nagar-31",
        image: "/ongoingProject8.webp",
        description : `This Project Ready to Move and Fully Residential Layout Are Located Besa-Pipla Road Opposite Zudio, Croma on Prime Location and upto 90% Bank Finance Available.`,
        location: `MOUZA -   PIPLA`
      },
        {
        id: 3,
        title: "Mahalaxmi Nagar-39",
        image: "/ongoingProject5.webp",
        description : `Katol Road Mahalaxmi Developers Launched Project Mahalaxmi Nagar-39 This Project Located Fetri (Chicholi) New Outer Ring Road Touch Layout.`,
        location: `MOUZA -   CHICHOLI`
      },
      {
        id: 4,
        title: "Mahalaxmi Nagar-41",
        image: "/ongoingProject3.webp",
        description : `Located Near Samruddhi Mahamarg on South Nagpur Premium Layout Mahalaxmi Nagar-41 This Premium Luxury Club House & Swimming Pool NMRDA & RL  Project Aminities and Easy Bank Finance Available upto 90% 
A Prime Location in Nagpur for Smart Investment .`,
        location: `MOUZA -  GOMGAON`
      },
      {
        id: 5,
        title: "Mahalaxmi Nagar - 42",
        image: "/ongoingProject2.webp",
        description : `Mahalaxmi Nagar – 42, near Jamtha on Wardha Road, offers well-connected plots perfect for homes or businesses. Approved by NMRDA and equipped with RL, this project comes with excellent amenities and easy bank finance options.
Best for investment to buy plots in Nagpur.`,
        location: `MOUZA -  JAMTHA`
      },
       {
        id: 6,
        title: "Mahalaxmi Nagar - 43",
        image: "/ongoingProject10.webp",
        description : `Ready to Move Project by Mahalaxmi Nagar-43 offering Residential Plot With Aminities Behind Royal Gondwana School & Singapure City Shankarpur, Nagpur 
An Affordable Price & Fully Developed NMRDA & RL upto 90% Bank Finance Available .`,
        location: `MOUZA -  SHANKARPUR`
      },
       {
        id: 7,
        title: "Mahalaxmi Nagar - 45",
        image: "/ongoingProject11.webp",
        description : `Mahalaxmi Nagar-45 is a Premium Residential Plotted Development Project Located South Nagpur Near Samruddhi Mahamarg
Location - The Project is Situated in Mouza - Sumthana Behind Godrej Properties Close to D- Mart  Connectivity - The Location Offers Excellent Connectivity to Major City Hubs, Including Nagpur Airport, AIIMS, IIM, TCS, INFOSYS,TECH MAHINDRA, Patanjali as soon as Mihan.`,
        location: `MOUZA -  SHANKARPUR`
      },
       {
        id: 11,
        title: "Mahalaxmi Nagar - 47",
        image: "/ongoingProject12.jpg",
         description: `Mahalaxmi Developers New Project Launch In Koradi Road,(Nanda) This Project Located are Behind Haldiram,AM Cinema,Rokde Jwellers & Naivedyam Hotel
This Project Fully NMRDA & RL Residential Plotted Project With upto 90% Bank Finance Available.`,
        location: `MOUZA - KORADI ROAD HALDIRAM & AM CINEMA BACKSIDE `
      },
    ],
    completed: [
      {
        id: 12,
        title: "Mahalaxmi Nagar - 37",
        image: "/completedProject1.webp",
        description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
       
      },
      {
        id: 13,
        title: "Mahalaxmi Nagar - 35",
        image: "/completedProject2.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
      },
      {
        id: 14,
        title: "Mahalaxmi Nagar - 34",
        image: "/completedProject3.webp",
         description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - BAHADURA`
      },
    ],
  upcoming: [],
}

function ProjectCard({ project }: { project: Project & { status: string } }) {
  const statusColors = {
    completed: "bg-green-100 text-green-700 border-green-200",
    ongoing: "bg-blue-100 text-blue-700 border-blue-200",
    upcoming: "bg-yellow-100 text-yellow-700 border-yellow-200",
  }

  const statusLabels = {
    completed: "✓ Completed",
    ongoing: "⚡ Ongoing",
    upcoming: "🚀 Upcoming",
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the project "${project.title}" located at ${project.location}. Could you share more details?`
    const url = `https://wa.me/919373117899?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Status Badge */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-3 right-3"
        >
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
            {statusLabels[project.status as keyof typeof statusLabels]}
          </span>
        </motion.div>

        {/* Title Overlay on Mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
          <h3 className="text-white font-bold text-lg drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Title - Desktop only */}
        <h3 className="hidden md:block text-xl font-bold text-secondary mb-2">
          {project.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          <p className="text-sm font-medium">{project.location}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.button
            onClick={handleWhatsApp}
            whileTap={{ scale: 0.95 }}
            className="flex-1 hover:cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2.5 md:py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm md:text-base">Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Quick Info Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full border border-yellow-200">
            NMRDA Approved
          </span>
          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">
            Bank Finance
          </span>
        </div>
      </div>

      {/* Hover Effect Line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [
    ...projects.completed.map((p) => ({ ...p, status: "completed" })),
    ...projects.ongoing.map((p) => ({ ...p, status: "ongoing" })),
    ...projects.upcoming.map((p) => ({ ...p, status: "upcoming" })),
  ]

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab)

  return (
    <section id="projects" className="relative py-12 md:py-20 px-3 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
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
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-secondary mb-3 md:mb-4"
          >
            Our Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Explore our portfolio of completed, ongoing, and upcoming developments by Mahalaxmi Developers.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2"
        >
          {[
            { label: "All", value: "all", icon: "🏢" },
            { label: "Completed", value: "completed", icon: "✓" },
            { label: "Ongoing", value: "ongoing", icon: "⚡" },
            { label: "Upcoming", value: "upcoming", icon: "🚀" },
          ].map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold transition-all text-sm md:text-base ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-400"
              }`}
            >
              <span className="mr-1">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.status}-${project.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏗️</div>
              <p className="text-secondary text-lg">
                No projects available under this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}