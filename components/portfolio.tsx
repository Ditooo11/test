"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Brand Streetwear Collection",
    category: "3D Brand Clothing",
    description: "3D visualization untuk koleksi streetwear dengan aesthetic modern dan edgy",
    image:
      "https://placehold.co/800x600?text=3D+rendered+streetwear+hoodie+and+joggers+on+mannequin+with+dramatic+studio+lighting+and+urban+graffiti+background",
  },
  {
    id: 2,
    title: "Motion Brand Identity",
    category: "3D Animation",
    description: "Animated logo dan brand elements untuk fashion startup",
    image:
      "https://placehold.co/800x600?text=Dynamic+3D+animated+fashion+brand+logo+with+flowing+fabric+elements+and+metallic+textures+in+cinematic+lighting",
  },
  {
    id: 3,
    title: "Product Launch Campaign",
    category: "Motion Graphics",
    description: "Series motion graphics untuk campaign launch produk clothing premium",
    image:
      "https://placehold.co/800x600?text=Sleek+motion+graphics+design+with+premium+clothing+products+floating+in+geometric+space+with+neon+accents",
  },
  {
    id: 4,
    title: "Fashion Show Opener",
    category: "3D Animation",
    description: "Opening sequence untuk fashion show dengan visual yang memukau",
    image:
      "https://placehold.co/800x600?text=Dramatic+3D+runway+animation+with+holographic+projections+and+futuristic+lighting+effects+in+dark+atmosphere",
  },
  {
    id: 5,
    title: "Luxury Brand Visualization",
    category: "3D Brand Clothing",
    description: "High-end 3D visualization untuk luxury clothing brand",
    image:
      "https://placehold.co/800x600?text=Luxury+fashion+garments+in+3D+with+silk+fabric+simulation+golden+details+and+elegant+studio+setup",
  },
  {
    id: 6,
    title: "Social Media Content",
    category: "Motion Graphics",
    description: "Dynamic content untuk social media dengan style yang unik",
    image:
      "https://placehold.co/800x600?text=Vibrant+motion+graphics+for+social+media+with+bold+typography+trendy+colors+and+dynamic+transitions",
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "3D Animation", "3D Brand Clothing", "Motion Graphics"]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
            FEATURED <span className="text-cyan-400">WORK</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-balance">
            Eksplorasi proyek-proyek terbaru kami yang menggabungkan kreativitas dan teknologi
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-cyan-400 text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.description}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2 text-balance">{project.title}</h3>
                <p className="text-sm text-white/60 mb-4 text-pretty">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
