"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Brain, Layout, Database, Shield } from "lucide-react"

export default function ServicesPage() {
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

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your unique business needs and challenges.",
      details: [
        "Web Application Development",
        "Mobile App Development (iOS/Android)",
        "Desktop Application Development",
        "Enterprise Software Solutions",
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design & Prototyping",
      description: "Crafting intuitive, engaging, and visually stunning user interfaces that enhance user experience.",
      details: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "User Interface (UI) Design",
        "User Experience (UX) Design",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description: "Leveraging cloud technologies for scalable, secure, and efficient infrastructure and operations.",
      details: [
        "Cloud Migration & Management (AWS, Azure, GCP)",
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code (IaC)",
        "Containerization (Docker, Kubernetes)",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Integrating intelligent algorithms to automate processes, analyze data, and provide predictive insights.",
      details: [
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Predictive Analytics",
        "Custom AI Model Development",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description:
        "Building robust data pipelines and analytical solutions to transform raw data into actionable insights.",
      details: [
        "Data Warehousing & ETL",
        "Big Data Solutions",
        "Business Intelligence Dashboards",
        "Data Visualization",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Protecting your digital assets with comprehensive security strategies and implementation.",
      details: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Compliance & Governance",
        "Incident Response Planning",
      ],
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
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At IdeaVerse, we offer a comprehensive suite of development services designed to bring your most ambitious
            digital visions to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full flex flex-col border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center text-center p-6 sm:p-8 pb-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-4 sm:mb-6">
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 sm:p-8 pt-4">
                  <p className="text-slate-600 text-base sm:text-lg mb-6 text-center">{service.description}</p>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm sm:text-base">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
