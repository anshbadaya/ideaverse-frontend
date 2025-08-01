"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  TrendingUp,
  Heart,
  Target,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  Menu,
  X,
  ArrowUp,
  Brain,
  Code,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 1000)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
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

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0.2)",
                    "0 0 15px rgba(59, 130, 246, 0.4)",
                    "0 0 0px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
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
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-slate-600 hover:text-slate-900 transition-colors relative text-sm lg:text-base ${
                    activeSection === item.id ? "text-blue-600 font-medium" : ""
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm lg:text-base px-4 lg:px-6"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-slate-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg z-40 flex items-center justify-center"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-200 rounded-full opacity-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          {...floatingAnimation}
        />
        <motion.div
          className="absolute top-32 sm:top-40 right-4 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100 rounded-full opacity-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          animate={{
            y: [20, -20, 20],
            transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            transition: { duration: 6, repeat: Number.POSITIVE_INFINITY },
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div
              variants={fadeInUp}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-200 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="inline-block mr-2"
                >
                  🚀
                </motion.span>
                Boutique development studio founded in 2024
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight px-2"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
              We turn your{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                boldest ideas
              </motion.span>{" "}
              into digital reality
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              A focused development studio specializing in end-to-end solutions. From backend architecture to frontend
              experiences, AI development to cloud infrastructure - we deliver excellence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <motion.div
                {...scaleOnHover}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-8 rounded-2xl shadow-2xl w-full sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                  >
                    Start Your Project
                  </motion.span>
                  <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </motion.div>
              <motion.div
                {...scaleOnHover}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-8 rounded-2xl border-2 border-slate-300 hover:bg-slate-50 bg-transparent w-full sm:w-auto"
                  onClick={() => scrollToSection("portfolio")}
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Visual with Enhanced Animation */}
          <motion.div
            className="mt-16 sm:mt-20 relative px-4"
            initial={{ opacity: 0, y: 150, scale: 0.8, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          >
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative z-10">
                {[
                  { icon: TrendingUp, value: "2", label: "Active Clients", color: "green" },
                  { icon: Users, value: "100%", label: "Client Satisfaction", color: "blue" },
                  { icon: Zap, value: "48hrs", label: "Response Time", color: "orange" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 + index * 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, y: -10 }}
                  >
                    <motion.div
                      className={`w-12 sm:w-16 h-12 sm:h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: index * 2,
                      }}
                    >
                      <stat.icon className={`h-6 sm:h-8 w-6 sm:w-8 text-${stat.color}-600`} />
                    </motion.div>
                    <motion.div
                      className="text-2xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 3 + index * 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <motion.div
          className="absolute top-10 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full opacity-10"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              We believe in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                quality over quantity
              </span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Founded in 2024 as a boutique development studio, we focus on delivering exceptional results for select
              clients. Currently partnering with Breethr and ActiveBuildings, providing comprehensive technical
              solutions that drive real business impact.
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Heart,
                title: "Client-Focused",
                description: "Every solution is tailored to your specific business needs and goals.",
                color: "from-red-400 to-pink-500",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "We measure success by the tangible impact we create for your business.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Lightbulb,
                title: "Innovation-First",
                description: "Leveraging cutting-edge technologies to solve complex challenges.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Users,
                title: "Partnership Approach",
                description: "We work as an extension of your team, not just another vendor.",
                color: "from-green-400 to-teal-500",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -20, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full text-center border-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-6 sm:p-8 relative">
                    <motion.div
                      className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${value.color} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="h-8 sm:h-10 w-8 sm:w-10" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{value.description}</p>

                    {/* Hover effect background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA to About Page */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                >
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              End-to-end{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                technical expertise
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-4">
              From concept to deployment, we handle every aspect of your digital transformation with precision and care.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
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
                features: ["API design & development", "Database architecture", "Performance optimization"],
                color: "from-green-400 to-green-600",
                pricing: "Custom pricing",
              },
              {
                icon: Zap,
                title: "Frontend Interfaces",
                description: "Beautiful, responsive user interfaces that deliver exceptional user experiences.",
                features: ["React/Next.js development", "Mobile-responsive design", "Performance optimization"],
                color: "from-blue-400 to-blue-600",
                pricing: "Custom pricing",
              },
              {
                icon: Brain,
                title: "AI Development",
                description: "Intelligent solutions powered by machine learning and artificial intelligence.",
                features: ["AI model integration", "Natural language processing", "Predictive analytics"],
                color: "from-purple-400 to-purple-600",
                pricing: "Custom pricing",
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "Secure, scalable cloud solutions with automated deployment and monitoring.",
                features: ["AWS/Azure deployment", "CI/CD pipelines", "Infrastructure monitoring"],
                color: "from-orange-400 to-orange-600",
                pricing: "Custom pricing",
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
                      className={`w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r ${service.color} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-4 sm:mb-6 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-10 sm:h-12 w-10 sm:w-12" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3">{service.title}</CardTitle>
                    <p className="text-slate-600 text-base sm:text-lg">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
                        Key Capabilities:
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center text-slate-600 text-sm sm:text-base"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <span className="text-lg sm:text-xl font-bold text-slate-900">{service.pricing}</span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <motion.div {...scaleOnHover}>
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm sm:text-base"
                          onClick={() => scrollToSection("contact")}
                        >
                          Discuss Your Project
                          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA to Services Page */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                >
                  Explore Our Full Service Offering
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Proven results with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                trusted partners
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-4">
              See how we've helped our clients achieve their technical goals through comprehensive development
              solutions.
            </p>
          </motion.div>

          {/* Featured Case Studies */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Breethr: Complete Technical Solutions",
                client: "Breethr",
                industry: "HR Technology",
                impact: { delivery: "On-time", quality: "Exceptional", satisfaction: "100%" },
                image: "/placeholder.svg?height=400&width=600",
                testimonial:
                  "IdeaVerse delivered comprehensive solutions that exceeded our expectations. Their end-to-end expertise made all the difference.",
                author: "Breethr Team",
              },
              {
                title: "ActiveBuildings: Ongoing Partnership",
                client: "ActiveBuildings",
                industry: "PropTech",
                impact: { partnership: "Active", scope: "Full-stack", approach: "Collaborative" },
                image: "/placeholder.svg?height=400&width=600",
                testimonial:
                  "Working with IdeaVerse feels like having an extended technical team. Their expertise spans every aspect of our development needs.",
                author: "ActiveBuildings Team",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-slate-900">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-4 bg-slate-50 rounded-xl px-3 sm:px-4">
                      {Object.entries(study.impact).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          className="text-center"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-sm sm:text-lg font-bold text-green-600">{value}</div>
                          <div className="text-xs text-slate-600 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>

                    <blockquote className="border-l-4 border-blue-200 pl-3 sm:pl-4 italic text-slate-600 text-sm sm:text-base">
                      "{study.testimonial}"
                      <footer className="mt-2 text-xs sm:text-sm font-medium text-slate-900">— {study.author}</footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA to Portfolio Page */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio">
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                >
                  Learn More About Our Work
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-500 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex justify-center mb-6 sm:mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                >
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 fill-current mx-1" />
                </motion.div>
              ))}
            </motion.div>

            <motion.blockquote
              className="text-xl sm:text-3xl md:text-4xl font-medium text-white mb-8 sm:mb-10 leading-relaxed px-4"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 0px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              "IdeaVerse brings a level of technical expertise and attention to detail that's rare to find. They don't
              just deliver code - they deliver solutions that work."
            </motion.blockquote>

            <motion.div
              className="flex items-center justify-center space-x-4 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/placeholder.svg?height=80&width=80"
                alt="Client testimonial"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-left">
                <div className="text-white font-semibold text-lg sm:text-xl">Satisfied Client</div>
                <div className="text-blue-100 text-base sm:text-lg">Technology Partner</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA to Testimonials Page */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/testimonials">
              <motion.div {...scaleOnHover}>
                <Button variant="secondary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  Read Client Testimonials
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-200 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              We respond within 24 hours
            </Badge>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Ready to start your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                next project?
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-4">
              Let's discuss how we can help bring your technical vision to life. We're selective about our partnerships
              to ensure we can deliver exceptional results.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Get in touch via email",
                contact: "hello@ideaverse.com",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Phone,
                title: "Schedule a Call",
                description: "Book a consultation",
                contact: "Available by appointment",
                color: "from-green-400 to-green-600",
              },
              {
                icon: MessageCircle,
                title: "Project Discussion",
                description: "Discuss your requirements",
                contact: "Free initial consultation",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: MapPin,
                title: "Remote First",
                description: "Global collaboration",
                contact: "Working worldwide",
                color: "from-orange-400 to-orange-600",
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full text-center border-0 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-6 sm:p-8">
                    <motion.div
                      className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${method.color} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="h-6 sm:h-8 w-6 sm:w-8" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{method.title}</h3>
                    <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">{method.description}</p>
                    <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm sm:text-base">
                      {method.contact}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-white shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl text-slate-900">Start a conversation</CardTitle>
                <p className="text-slate-600 text-base sm:text-lg">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <Input type="text" placeholder="John Doe" className="h-10 sm:h-12" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <Input type="email" placeholder="john@company.com" className="h-10 sm:h-12" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <Input type="text" placeholder="Your Company" className="h-10 sm:h-12" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                    <Select>
                      <SelectTrigger className="h-10 sm:h-12">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="backend">Backend Development</SelectItem>
                        <SelectItem value="frontend">Frontend Development</SelectItem>
                        <SelectItem value="ai">AI Development</SelectItem>
                        <SelectItem value="fullstack">Full-Stack Project</SelectItem>
                        <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                        <SelectItem value="consultation">Technical Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                    <Textarea
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                      rows={4}
                      className="resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div {...scaleOnHover}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-base sm:text-lg py-4 sm:py-6 h-auto"
                      >
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          Send Project Inquiry
                        </motion.span>
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA to Contact Page */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                >
                  More Ways to Connect
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <motion.div
                className="flex items-center space-x-3 mb-4 sm:mb-6 cursor-pointer"
                onClick={() => scrollToSection("home")}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 0px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.span
                    className="relative z-10"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    IV
                  </motion.span>
                </motion.div>
                <span className="text-xl sm:text-2xl font-bold">IdeaVerse</span>
              </motion.div>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                A boutique development studio delivering exceptional technical solutions for forward-thinking companies.
              </p>
            </motion.div>

            {[
              {
                title: "Company",
                links: [
                  { label: "About Us", href: "/about" },
                  { label: "Our Approach", href: "/approach" },
                  { label: "Case Studies", href: "/portfolio" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Backend Development", href: "/services" },
                  { label: "Frontend Interfaces", href: "/services" },
                  { label: "AI Development", href: "/services" },
                  { label: "Cloud Infrastructure", href: "/services" },
                ],
              },
              {
                title: "Connect",
                links: [
                  { label: "Start a Project", href: "/contact" },
                  { label: "Schedule Consultation", href: "/contact" },
                  { label: "Partnership Inquiry", href: "/contact" },
                  { label: "Technical Discussion", href: "/contact" },
                ],
              },
            ].map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h4 className="font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">{section.title}</h4>
                <div className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.div key={linkIndex} whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={link.href}
                        className="block text-slate-400 hover:text-white transition-colors text-base sm:text-lg"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-slate-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-base sm:text-lg">
              &copy; 2024 IdeaVerse. All rights reserved. Crafted with precision for exceptional partnerships.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
