"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  CheckCircle,
  ArrowLeft,
  Brain,
  Code,
  Cloud,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.span
                  className="relative z-10"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  IV
                </motion.span>
              </motion.div>
              <span className="text-xl sm:text-2xl font-bold text-slate-900">IdeaVerse</span>
            </Link>

            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button variant="ghost" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-200 text-lg px-4 py-2">
              <Award className="h-5 w-5 mr-2" />
              Comprehensive Technical Solutions
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              End-to-end development solutions tailored to your business needs. From concept to deployment, we handle
              every aspect of your digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Code,
                title: "Backend Development",
                description: "Robust, scalable backend systems built with modern frameworks and best practices.",
                features: [
                  "RESTful & GraphQL APIs",
                  "Database design & optimization",
                  "Microservices architecture",
                  "Performance monitoring",
                  "Security implementation",
                  "Third-party integrations",
                ],
                technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"],
                color: "from-green-400 to-green-600",
                pricing: "Starting from $5,000",
              },
              {
                icon: Zap,
                title: "Frontend Development",
                description: "Beautiful, responsive user interfaces that deliver exceptional user experiences.",
                features: [
                  "React/Next.js applications",
                  "Mobile-responsive design",
                  "Progressive Web Apps",
                  "Performance optimization",
                  "Accessibility compliance",
                  "Cross-browser compatibility",
                ],
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
                color: "from-blue-400 to-blue-600",
                pricing: "Starting from $4,000",
              },
              {
                icon: Brain,
                title: "AI Development",
                description: "Intelligent solutions powered by machine learning and artificial intelligence.",
                features: [
                  "Custom AI model development",
                  "Natural language processing",
                  "Computer vision solutions",
                  "Predictive analytics",
                  "Chatbot development",
                  "AI API integrations",
                ],
                technologies: ["Python", "TensorFlow", "OpenAI", "Hugging Face", "LangChain", "Vector DBs"],
                color: "from-purple-400 to-purple-600",
                pricing: "Starting from $8,000",
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "Secure, scalable cloud solutions with automated deployment and monitoring.",
                features: [
                  "AWS/Azure deployment",
                  "CI/CD pipeline setup",
                  "Infrastructure as Code",
                  "Auto-scaling configuration",
                  "Security & compliance",
                  "Monitoring & logging",
                ],
                technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "GitHub Actions", "CloudWatch"],
                color: "from-orange-400 to-orange-600",
                pricing: "Starting from $3,000",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <CardHeader className="pb-4 relative">
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center text-white mb-6 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-12 w-12" />
                    </motion.div>
                    <CardTitle className="text-2xl text-slate-900 mb-3">{service.title}</CardTitle>
                    <p className="text-slate-600 text-lg">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-600 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-slate-900">{service.pricing}</span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <motion.div {...scaleOnHover}>
                        <Link href="/contact">
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements, goals, and technical constraints to create a comprehensive project roadmap.",
                icon: Users,
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed project planning with timelines, milestones, and resource allocation for optimal execution.",
                icon: Clock,
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Agile development process with regular updates, testing, and quality assurance at every stage.",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment",
                description: "Seamless deployment to production with monitoring, optimization, and ongoing support.",
                icon: TrendingUp,
              },
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="h-full text-center border-0 bg-white hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-blue-600 mb-4">{process.step}</div>
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <process.icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.div {...scaleOnHover}>
                  <Button size="lg" variant="secondary" className="text-xl px-10 py-6 rounded-2xl">
                    Get Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/portfolio">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xl px-10 py-6 rounded-2xl border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
