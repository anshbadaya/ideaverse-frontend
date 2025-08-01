"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Zap, TrendingUp, Shield, Clock, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServicesPage() {
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

  const services = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "AI-Powered Automation",
      description: "Transform manual processes into intelligent workflows that scale with your business.",
      features: [
        "Custom workflow automation",
        "Intelligent document processing",
        "Predictive task routing",
        "Real-time performance monitoring",
      ],
      useCases: ["Customer service automation", "Invoice processing", "Lead qualification", "Content moderation"],
      color: "from-yellow-400 to-orange-500",
      pricing: "Starting at $2,500/month",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Growth Analytics Platform",
      description: "Turn your data into actionable insights with AI-driven analytics and forecasting.",
      features: ["Real-time dashboard creation", "Predictive analytics", "Custom KPI tracking", "Automated reporting"],
      useCases: [
        "Revenue forecasting",
        "Customer behavior analysis",
        "Marketing ROI optimization",
        "Operational efficiency tracking",
      ],
      color: "from-green-400 to-blue-500",
      pricing: "Starting at $1,800/month",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Enterprise Security Suite",
      description: "Protect your business with AI-enhanced security that adapts to emerging threats.",
      features: [
        "Threat detection & response",
        "Compliance automation",
        "Access management",
        "Security training programs",
      ],
      useCases: ["Data breach prevention", "Regulatory compliance", "Identity management", "Security auditing"],
      color: "from-purple-400 to-pink-500",
      pricing: "Starting at $3,200/month",
    },
  ]

  const howItWorks = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your current processes and identify the biggest opportunities for improvement.",
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description: "Our team designs a tailored solution that fits your specific business needs and goals.",
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "We build, test, and deploy your solution with minimal disruption to your operations.",
      duration: "4-8 weeks",
    },
    {
      step: "04",
      title: "Training & Optimization",
      description: "We train your team and continuously optimize the solution based on real-world performance.",
      duration: "Ongoing",
    },
  ]

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
              <Link href="/services" className="text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
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
                Our Services
              </Badge>
            </motion.div>

            <motion.h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight" variants={fadeInUp}>
              Solutions that{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                scale with you
              </span>
            </motion.h1>

            <motion.p className="text-xl text-slate-600 leading-relaxed" variants={fadeInUp}>
              From automation to analytics, we provide the tools and expertise to transform your business operations and
              accelerate growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-2">{service.title}</CardTitle>
                    <p className="text-slate-600">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Perfect For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-slate-900">{service.pricing}</span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How we work with you</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our proven process ensures successful implementation and measurable results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {howItWorks.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <div className="flex items-center justify-center text-sm text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Perfect for growing businesses</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our solutions are designed for companies ready to scale their operations and embrace innovation.
            </p>
          </motion.div>

          <Tabs defaultValue="startups" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="startups">Startups</TabsTrigger>
              <TabsTrigger value="smb">SMBs</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>

            <TabsContent value="startups" className="mt-8">
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">For Fast-Growing Startups</h3>
                      <p className="text-slate-600 mb-6">
                        Scale your operations without scaling your headcount. Our automation solutions help startups
                        punch above their weight.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Rapid implementation (2-4 weeks)
                        </li>
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Startup-friendly pricing
                        </li>
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Scales with your growth
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Startup team"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="smb" className="mt-8">
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">For Small & Medium Businesses</h3>
                      <p className="text-slate-600 mb-6">
                        Compete with larger companies by leveraging enterprise-grade technology at SMB-friendly prices.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          No technical team required
                        </li>
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Comprehensive training included
                        </li>
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          24/7 support available
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="SMB team"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="enterprise" className="mt-8">
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">For Enterprise Organizations</h3>
                      <p className="text-slate-600 mb-6">
                        Transform complex operations with custom solutions that integrate seamlessly with your existing
                        systems.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Custom integrations & APIs
                        </li>
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Enterprise security & compliance
                        </li>
                        <li className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Dedicated success manager
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Enterprise team"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to see what's possible?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and show you exactly how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  See Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
