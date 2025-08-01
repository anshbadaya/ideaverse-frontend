"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const caseStudies = [
    {
      id: 1,
      title: "Breethr: Comprehensive Technical Solutions",
      client: "Breethr",
      industry: "HR Technology",
      challenge: "Required end-to-end development expertise for their HR technology platform",
      solution: "Delivered comprehensive backend development, frontend interfaces, and cloud infrastructure solutions",
      impact: {
        delivery: "On-time",
        quality: "Exceptional",
        satisfaction: "100%",
      },
      timeline: "Ongoing partnership",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Backend Development", "Frontend", "Cloud Infrastructure"],
      testimonial:
        "IdeaVerse has been instrumental in bringing our vision to life. Their comprehensive approach and technical expertise exceeded our expectations.",
      author: "Breethr Team",
      status: "Completed",
    },
    {
      id: 2,
      title: "ActiveBuildings: Strategic Partnership",
      client: "ActiveBuildings",
      industry: "PropTech",
      challenge: "Needed a reliable technical partner for ongoing development and infrastructure management",
      solution: "Providing continuous full-stack development support and project management expertise",
      impact: {
        partnership: "Active",
        scope: "Full-stack",
        approach: "Collaborative",
      },
      timeline: "Ongoing partnership",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Full-Stack Development", "Project Management", "PropTech"],
      testimonial:
        "Working with IdeaVerse feels like having an extended technical team. Their expertise spans every aspect of our development needs.",
      author: "ActiveBuildings Team",
      status: "Active",
    },
  ]

  const industries = ["All", "HR Technology", "PropTech"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                IV
              </div>
              <span className="text-2xl font-bold text-slate-900">IdeaVerse</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
                Client Partnerships
              </Badge>
            </motion.div>

            <motion.h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight" variants={fadeInUp}>
              Proven results with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                trusted partners
              </span>
            </motion.h1>

            <motion.p className="text-xl text-slate-600 leading-relaxed" variants={fadeInUp}>
              See how we've helped our select clients achieve their technical goals through comprehensive development
              solutions and strategic partnerships.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {[
              { number: "2", label: "Active Partnerships" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24hrs", label: "Response Time" },
              { number: "2024", label: "Founded" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                {industries.map((industry) => (
                  <TabsTrigger key={industry} value={industry} className="text-sm">
                    {industry}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {industries.map((industry) => (
              <TabsContent key={industry} value={industry}>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  initial="initial"
                  whileInView="animate"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                >
                  {caseStudies
                    .filter((study) => industry === "All" || study.industry === industry)
                    .map((study, index) => (
                      <motion.div key={study.id} variants={fadeInUp}>
                        <Card className="h-full border-0 bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={study.image || "/placeholder.svg"}
                              alt={study.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary">{study.industry}</Badge>
                              <Badge
                                variant={study.status === "Active" ? "default" : "outline"}
                                className={study.status === "Active" ? "bg-green-100 text-green-700" : ""}
                              >
                                {study.status}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl text-slate-900 mb-2">{study.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {study.tags.map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                              <p className="text-sm text-slate-600">{study.challenge}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                              <p className="text-sm text-slate-600">{study.solution}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 py-4 bg-slate-50 rounded-lg px-4">
                              {Object.entries(study.impact).map(([key, value], idx) => (
                                <div key={key} className="text-center">
                                  <div className="text-lg font-bold text-green-600">{value}</div>
                                  <div className="text-xs text-slate-600 capitalize">{key}</div>
                                </div>
                              ))}
                            </div>

                            <blockquote className="border-l-4 border-blue-200 pl-4 italic text-sm text-slate-600">
                              "{study.testimonial}"
                              <footer className="mt-2 text-xs font-medium text-slate-900">— {study.author}</footer>
                            </blockquote>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                              <div className="flex items-center text-sm text-slate-600">
                                <Clock className="h-4 w-4 mr-1" />
                                {study.timeline}
                              </div>
                              <Button variant="outline" size="sm" disabled>
                                Confidential Project
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to become our next success story?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We're selective about our partnerships to ensure we can deliver exceptional results. Let's discuss how we
              can help achieve your technical goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Start a Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
