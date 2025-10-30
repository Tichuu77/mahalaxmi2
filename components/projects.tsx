"use client";

import { useState } from "react";
import ProjectCard from "./project-card";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  location: string;
};

const projects: {
  completed: Project[];
  ongoing: Project[];
  upcoming: Project[];
} = {
  completed: [
    {
      id: 1,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
    },
    {
      id: 2,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - BAHADURA`,
    },
  ],
  ongoing: [
    {
      id: 19,
      title: "Mahalaxmi Nagar - 31",
      image: "/ongoingProject8.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 31. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - PIPLA`,
    },
    {
      id: 17,
      title: "Mahalaxmi Nagar - 39",
      image: "/ongoingProject5.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 39. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - CHICHOLI`,
    },
    {
      id: 15,
      title: "Mahalaxmi Nagar - 41",
      image: "/ongoingProject3.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 41. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - GOMGAON`,
    },
    {
      id: 14,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 42. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - JAMTHA`,
    },
    {
      id: 21,
      title: "Mahalaxmi Nagar - 43",
      image: "/ongoingProject10.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 43. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - SHANKARPUR`,
    },
    {
      id: 22,
      title: "Mahalaxmi Nagar - 45",
      image: "/ongoingProject11.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 45. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - SHANKARPUR`,
    },
  ],
  upcoming: [],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all");

  // Flatten and filter logic
  const allProjects = [
    ...projects.completed.map((p) => ({ ...p, status: "completed" })),
    ...projects.ongoing.map((p) => ({ ...p, status: "ongoing" })),
    ...projects.upcoming.map((p) => ({ ...p, status: "upcoming" })),
  ];

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab);

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-secondary mb-4">
            Our Projects
          </h2>
          <p className="text-foreground/70 font-poppins text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed, ongoing, and upcoming developments by Mahalaxmi Developers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: "All Projects", value: "all" },
            { label: "Completed", value: "completed" },
            { label: "Ongoing", value: "ongoing" },
            { label: "Upcoming", value: "upcoming" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-6 py-2 rounded-full font-poppins font-medium transition-all hover: cursor-pointer ${
                activeTab === tab.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground border border-border hover:border-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={`${project.status}-${project.id}`} // ✅ ensures uniqueness across categories
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-foreground/70 font-poppins text-lg mt-12">
            No projects available under this category.
          </div>
        )}
      </div>
    </section>
  );
}
