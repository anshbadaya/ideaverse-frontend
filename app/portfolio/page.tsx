"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, ExternalLink, Star } from "lucide-react"
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
      title: "TechScale Solutions: 300% Revenue Growth",
      client: "TechScale Solutions",
      industry: "SaaS",
      challenge: "Manual customer onboarding was taking 2 weeks and causing 40% churn rate",
      solution: "AI-powered onboarding automation with personalized workflows",
      impact: {
        revenue: "+300%",
        efficiency: "+85%",
        satisfaction: "4.9/5",
      },
      timeline: "6 weeks",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI Automation", "Customer Success", "SaaS"],
      testimonial:
        "InnovateCorp transformed our entire business model. We went from struggling with churn to becoming the fastest-growing company in our space.",
      author: "Sarah Chen, CEO",
    },
    {
      id: 2,
      title: "RetailMax: Smart Inventory Optimization",
      client: "RetailMax",
      industry: "E-commerce",
      challenge: "Overstocking and stockouts were costing $2M annually in lost revenue",
      solution: "Predictive analytics platform for demand forecasting and inventory optimization",
      impact: {
        revenue: "+150%",
        efficiency: "+70%",
        satisfaction: "4.8/5",
      },
      timeline: "8 weeks",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Predictive Analytics", "E-commerce", "Optimization"],
      testimonial:
        "Our inventory costs dropped by 60% while sales increased 150%. The ROI was immediate and continues to compound.",
      author: "Mike Rodriguez, COO",
    },
    {
      id: 3,
      title: "FinanceFirst: Automated Compliance Reporting",
      client: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual compliance reporting took 200 hours monthly and was error-prone",
      solution: "Automated compliance suite with real-time monitoring and reporting",
      impact: {
        revenue: "+200%",
        efficiency: "+95%",
        satisfaction: "5.0/5",
      },
      timeline: "12 weeks",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Compliance", "Automation", "Financial Services"],
      testimonial:
        "We reduced compliance work from 200 hours to 10 hours per month. Our auditors were amazed by the accuracy and completeness.",
      author: "Jennifer Park, Chief Compliance Officer",
    },
    {
      id: 4,
      title: "HealthTech Pro: Patient Data Analytics",
      client: "HealthTech Pro",
      industry: "Healthcare",
      challenge: "Fragmented patient data across systems made care coordination difficult",
      solution: "Unified patient analytics platform with AI-powered insights",
      impact: {
        revenue: "+180%",
        efficiency: "+80%",
        satisfaction: "4.9/5",
      },
      timeline: "10 weeks",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Healthcare", "Data Integration", "AI Analytics"],
      testimonial:
        "Patient outcomes improved dramatically when we could see the complete picture. This platform saved lives and our business.",
      author: "Dr. Amanda Foster, Chief Medical Officer",
    },
    {
      id: 5,
      title: "LogiFlow: Supply Chain Optimization",
      client: "LogiFlow",
      industry: "Logistics",
      challenge: "Complex supply chain inefficiencies were causing delays and cost overruns",
      solution: "AI-powered supply chain optimization with real-time tracking",
      impact: {
        revenue: "+220%",
        efficiency: "+75%",
        satisfaction: "4.8/5",
      },
      timeline: "14 weeks",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Supply Chain", "Logistics", "Real-time Tracking"],
      testimonial:
        "Delivery times improved by 60% and costs dropped by 40%. Our customers noticed the difference immediately.",
      author: "Carlos Martinez, VP Operations",
    },
    {
      id: 6,
      title: "EduTech Academy: Personalized Learning",
      client: "EduTech Academy",
      industry: "Education",
      challenge: "One-size-fits-all approach led to poor student engagement and outcomes",
      solution: "AI-driven personalized learning platform with adaptive content",
      impact: {
        revenue: "+250%",
        efficiency: "+90%",
        satisfaction: "4.9/5",
      },
      timeline: "16 weeks",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Education", "Personalization", "AI Learning"],
      testimonial:
        "Student completion rates increased 300% and satisfaction scores hit all-time highs. This transformed how we deliver education.",
      author: "Dr. Lisa Thompson, Academic Director",
    },
  ]

  const industries = ["All", "SaaS", "E-commerce", "Financial Services", "Healthcare", "Logistics", "Education"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900">InnovateCorp</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-blue-600 font-medium">
                Portfolio
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                Blog
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
                Success Stories
              </Badge>
            </motion.div>

            <motion.h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight" variants={fadeInUp}>
              Real results from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                real businesses
              </span>
            </motion.h1>

            <motion.p className="text-xl text-slate-600 leading-relaxed" variants={fadeInUp}>
              See how we've helped companies across industries transform their operations and achieve extraordinary
              growth.
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
              { number: "500+", label: "Projects Completed" },
              { number: "300%", label: "Average ROI" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "48hrs", label: "Average Response Time" },
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
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full max-w-4xl">
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
                              <div className="flex items-center text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                              </div>
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
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-600">{study.impact.revenue}</div>
                                <div className="text-xs text-slate-600">Revenue</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-blue-600">{study.impact.efficiency}</div>
                                <div className="text-xs text-slate-600">Efficiency</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-purple-600">{study.impact.satisfaction}</div>
                                <div className="text-xs text-slate-600">Satisfaction</div>
                              </div>
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
                              <Button variant="outline" size="sm">
                                View Details
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to write your success story?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join the companies that chose transformation over status quo. Let's discuss how we can help you achieve
              similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Start Your Transformation
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
