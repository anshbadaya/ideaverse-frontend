"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      name: "Breethr - AI-Powered Wellness App",
      description:
        "A revolutionary mobile application that uses AI to provide personalized breathing exercises and mindfulness techniques.",
      image: "/placeholder.png?height=400&width=600",
      tags: ["Mobile App", "AI/ML", "HealthTech", "UI/UX"],
      link: "#",
    },
    {
      name: "ActiveBuildings - Smart Building Management",
      description:
        "A comprehensive web platform for managing smart building systems, optimizing energy consumption and operational efficiency.",
      image: "/placeholder.png?height=400&width=600",
      tags: ["Web Platform", "IoT", "SaaS", "Data Analytics"],
      link: "#",
    },
    {
      name: "QuantumFlow - Secure Data Exchange",
      description:
        "A blockchain-powered solution for secure and transparent data exchange between enterprises, ensuring data integrity and privacy.",
      image: "/placeholder.png?height=400&width=600",
      tags: ["Blockchain", "Security", "Enterprise", "Backend"],
      link: "#",
    },
    {
      name: "EcoHarvest - Sustainable Agriculture Platform",
      description:
        "An intelligent platform assisting farmers with crop management, yield prediction, and sustainable farming practices using satellite imagery.",
      image: "/placeholder.png?height=400&width=600",
      tags: ["AI/ML", "Agriculture", "Web App", "GIS"],
      link: "#",
    },
    {
      name: "Synapse Connect - Real-time Collaboration Tool",
      description:
        "A high-performance web-based collaboration suite with real-time document editing, video conferencing, and project management features.",
      image: "/placeholder.png?height=400&width=600",
      tags: ["Web App", "Real-time", "Productivity", "Frontend"],
      link: "#",
    },
    {
      name: "MediTrack - Patient Management System",
      description:
        "A secure and intuitive system for healthcare providers to manage patient records, appointments, and billing, enhancing clinic efficiency.",
      image: "/placeholder.png?height=400&width=600",
      tags: ["Healthcare", "SaaS", "Database", "Security"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Explore a selection of our recent projects that showcase our expertise and commitment to delivering
            impactful digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full flex flex-col border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img
                    src={project.image || "/placeholder.png"}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="text-xl font-bold text-slate-900 mb-3">{project.name}</CardTitle>
                  <p className="text-slate-600 text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 group">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
