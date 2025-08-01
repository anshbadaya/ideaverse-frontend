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
  Shield,
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
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  // Loading animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    // Progress animation
    const progressTimer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

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

  const rotateAnimation = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
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

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.8)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              IV
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Company Name Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            className="inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            style={{
              background: "linear-gradient(90deg, #60A5FA, #A78BFA, #60A5FA)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            IdeaVerse
          </motion.span>
        </motion.h1>

        {/* Tagline Animation */}
        <motion.p
          className="text-xl text-blue-100 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Transforming Ideas Into Reality
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-blue-200 mt-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {loadingProgress < 100 ? `Loading... ${loadingProgress}%` : "Welcome!"}
        </motion.p>

        {/* Geometric Shapes Animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-400 rounded-lg opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-purple-400 rounded-full opacity-20"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-8 h-8 border-2 border-purple-400 rotate-45 opacity-40"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {/* Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
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
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      {...rotateAnimation}
                    >
                      IV
                    </motion.div>
                    <span className="text-2xl font-bold text-slate-900">IdeaVerse</span>
                  </motion.div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-slate-600 hover:text-slate-900 transition-colors relative ${
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
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
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
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => scrollToSection("contact")}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>

                  {/* Mobile Menu Button */}
                  <motion.button
                    className="md:hidden"
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
                          className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors"
                          whileHover={{ x: 10 }}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.nav>

            {/* Scroll to Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-40 flex items-center justify-center"
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
            <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Animated Background Elements */}
              <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                {...floatingAnimation}
              />
              <motion.div
                className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                animate={{
                  y: [20, -20, 20],
                  transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
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
                    <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 text-lg px-4 py-2">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                        className="inline-block mr-2"
                      >
                        🚀
                      </motion.span>
                      Transforming ideas into reality since 2020
                    </Badge>
                  </motion.div>

                  <motion.h1
                    className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight"
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  >
                    We turn your{" "}
                    <motion.span
                      className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      wildest ideas
                    </motion.span>{" "}
                    into digital masterpieces
                  </motion.h1>

                  <motion.p
                    className="text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    Stop dreaming, start building. We help visionary companies create extraordinary digital experiences
                    that captivate audiences and drive unprecedented growth.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-8 rounded-2xl shadow-2xl"
                        onClick={() => scrollToSection("contact")}
                      >
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                        >
                          Start Your Journey
                        </motion.span>
                        <ArrowRight className="ml-3 h-6 w-6" />
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
                        className="text-xl px-10 py-8 rounded-2xl border-2 border-slate-300 hover:bg-slate-50 bg-transparent"
                        onClick={() => scrollToSection("portfolio")}
                      >
                        See Our Magic
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Hero Visual with Enhanced Animation */}
                <motion.div
                  className="mt-20 relative"
                  initial={{ opacity: 0, y: 150, scale: 0.8, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
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

                    <div className="bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                      {[
                        { icon: TrendingUp, value: "500%", label: "Average Growth", color: "green" },
                        { icon: Users, value: "1000+", label: "Happy Clients", color: "blue" },
                        { icon: Zap, value: "24hrs", label: "Launch Time", color: "purple" },
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
                            className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 10,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: index * 2,
                            }}
                          >
                            <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                          </motion.div>
                          <motion.div
                            className="text-4xl font-bold text-slate-900 mb-2"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 3 + index * 0.5 }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-slate-600 font-medium">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
              <motion.div
                className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-20"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    We believe in{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      human potential
                    </span>{" "}
                    amplified by technology
                  </motion.h2>
                  <motion.p
                    className="text-2xl text-slate-600 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Founded in 2020 when we realized most businesses were drowning in outdated processes while
                    innovation sat unused. We decided to bridge that gap.
                  </motion.p>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                  initial="initial"
                  whileInView="animate"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: Heart,
                      title: "Human-First",
                      description: "Technology should enhance human potential, not replace it.",
                      color: "from-red-400 to-pink-500",
                    },
                    {
                      icon: Target,
                      title: "Results-Driven",
                      description: "We measure success by your growth, not our features.",
                      color: "from-blue-400 to-indigo-500",
                    },
                    {
                      icon: Lightbulb,
                      title: "Relentlessly Curious",
                      description: "Every problem is a puzzle waiting to be solved.",
                      color: "from-yellow-400 to-orange-500",
                    },
                    {
                      icon: Users,
                      title: "Radically Transparent",
                      description: "Honest communication builds lasting partnerships.",
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
                        <CardContent className="p-8 relative">
                          <motion.div
                            className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center text-white mb-6 mx-auto relative z-10`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <value.icon className="h-10 w-10" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{value.description}</p>

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
                        className="text-lg px-8 py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                      >
                        Meet Our Team & Story
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                  className="text-center mb-20"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                    Solutions that{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      scale with you
                    </span>
                  </h2>
                  <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
                    From automation to analytics, we provide the tools and expertise to transform your business
                    operations.
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                  initial="initial"
                  whileInView="animate"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: Zap,
                      title: "AI-Powered Automation",
                      description:
                        "Transform manual processes into intelligent workflows that scale with your business.",
                      features: [
                        "Custom workflow automation",
                        "Intelligent document processing",
                        "Predictive task routing",
                      ],
                      color: "from-yellow-400 to-orange-500",
                      pricing: "Starting at $2,500/month",
                    },
                    {
                      icon: TrendingUp,
                      title: "Growth Analytics Platform",
                      description: "Turn your data into actionable insights with AI-driven analytics and forecasting.",
                      features: ["Real-time dashboard creation", "Predictive analytics", "Custom KPI tracking"],
                      color: "from-green-400 to-blue-500",
                      pricing: "Starting at $1,800/month",
                    },
                    {
                      icon: Shield,
                      title: "Enterprise Security Suite",
                      description: "Protect your business with AI-enhanced security that adapts to emerging threats.",
                      features: ["Threat detection & response", "Compliance automation", "Access management"],
                      color: "from-purple-400 to-pink-500",
                      pricing: "Starting at $3,200/month",
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
                                <motion.li
                                  key={idx}
                                  className="flex items-center text-slate-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-slate-100">
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-xl font-bold text-slate-900">{service.pricing}</span>
                              <div className="flex items-center text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                  >
                                    <Star className="h-4 w-4 fill-current" />
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                            <motion.div {...scaleOnHover}>
                              <Button
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                onClick={() => scrollToSection("contact")}
                              >
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="text-center mt-16"
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
                        className="text-lg px-8 py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                      >
                        Explore All Services & Pricing
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-20"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                    Real results from{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      real businesses
                    </span>
                  </h2>
                  <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
                    See how we've helped companies transform their operations and achieve extraordinary growth.
                  </p>
                </motion.div>

                {/* Featured Case Studies */}
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16"
                  initial="initial"
                  whileInView="animate"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      title: "TechScale Solutions: 500% Revenue Growth",
                      client: "TechScale Solutions",
                      industry: "SaaS",
                      impact: { revenue: "+500%", efficiency: "+85%", satisfaction: "4.9/5" },
                      image: "/placeholder.svg?height=400&width=600",
                      testimonial:
                        "IdeaVerse transformed our entire business model. We went from struggling with churn to becoming the fastest-growing company in our space.",
                      author: "Sarah Chen, CEO",
                    },
                    {
                      title: "RetailMax: Smart Inventory Revolution",
                      client: "RetailMax",
                      industry: "E-commerce",
                      impact: { revenue: "+300%", efficiency: "+70%", satisfaction: "4.8/5" },
                      image: "/placeholder.svg?height=400&width=600",
                      testimonial:
                        "Our inventory costs dropped by 60% while sales increased 300%. The ROI was immediate and continues to compound.",
                      author: "Mike Rodriguez, COO",
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
                                <Star key={i} className="h-4 w-4 fill-current" />
                              ))}
                            </div>
                          </div>
                          <CardTitle className="text-xl text-slate-900">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-3 gap-4 py-4 bg-slate-50 rounded-xl px-4">
                            {Object.entries(study.impact).map(([key, value], idx) => (
                              <motion.div
                                key={key}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="text-lg font-bold text-green-600">{value}</div>
                                <div className="text-xs text-slate-600 capitalize">{key}</div>
                              </motion.div>
                            ))}
                          </div>

                          <blockquote className="border-l-4 border-blue-200 pl-4 italic text-slate-600">
                            "{study.testimonial}"
                            <footer className="mt-2 text-sm font-medium text-slate-900">— {study.author}</footer>
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
                        className="text-lg px-8 py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                      >
                        View All Case Studies & Results
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section
              id="testimonials"
              className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden"
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
                    className="flex justify-center mb-8"
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
                        <Star className="h-8 w-8 text-yellow-400 fill-current mx-1" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.blockquote
                    className="text-3xl md:text-4xl font-medium text-white mb-10 leading-relaxed"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(255,255,255,0.8)",
                        "0 0 0px rgba(255,255,255,0.5)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    "IdeaVerse didn't just solve our problems – they transformed how we think about innovation. Our
                    revenue increased 500% in just 8 months, and our team efficiency doubled."
                  </motion.blockquote>

                  <motion.div
                    className="flex items-center justify-center space-x-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Sarah Chen"
                      className="w-20 h-20 rounded-full border-4 border-white/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="text-left">
                      <div className="text-white font-semibold text-xl">Sarah Chen</div>
                      <div className="text-blue-100 text-lg">CEO, TechScale Solutions</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* CTA to Testimonials Page */}
                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href="/testimonials">
                    <motion.div {...scaleOnHover}>
                      <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                        Read More Success Stories
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-20"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 text-lg px-4 py-2">
                    <Clock className="h-5 w-5 mr-2" />
                    We usually respond in a few hours!
                  </Badge>
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                    Let's start a{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      conversation
                    </span>
                  </h2>
                  <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
                    Ready to transform your business? We're here to help. Choose the best way to reach us below.
                  </p>
                </motion.div>

                {/* Contact Methods */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
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
                      title: "Call Us",
                      description: "Speak with our team",
                      contact: "+1 (555) 123-4567",
                      color: "from-green-400 to-green-600",
                    },
                    {
                      icon: MessageCircle,
                      title: "Live Chat",
                      description: "Chat with us now",
                      contact: "Available 9AM-6PM EST",
                      color: "from-purple-400 to-purple-600",
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      description: "Our headquarters",
                      contact: "123 Innovation St, Tech City",
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
                        <CardContent className="p-8">
                          <motion.div
                            className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-3xl flex items-center justify-center text-white mb-6 mx-auto`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <method.icon className="h-8 w-8" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                          <p className="text-slate-600 mb-4">{method.description}</p>
                          <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
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
                      <CardTitle className="text-3xl text-slate-900">Send us a message</CardTitle>
                      <p className="text-slate-600 text-lg">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                            <Input type="text" placeholder="John Doe" className="h-12" />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                            <Input type="email" placeholder="john@company.com" className="h-12" />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                          <Input type="text" placeholder="Your Company" className="h-12" />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            What can we help you with? *
                          </label>
                          <Select>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="business">Business Inquiry</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                              <SelectItem value="careers">Careers</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                          <Textarea
                            placeholder="Tell us about your project, goals, or questions..."
                            rows={5}
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
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 h-auto"
                            >
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                Send Message
                              </motion.span>
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* CTA to Contact Page */}
                <motion.div
                  className="text-center mt-16"
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
                        className="text-lg px-8 py-6 bg-transparent border-2 border-slate-300 hover:bg-slate-100"
                      >
                        More Contact Options & FAQ
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                  backgroundSize: "200px 200px",
                }}
              />

              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-4 gap-12"
                  initial="initial"
                  whileInView="animate"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <motion.div
                      className="flex items-center space-x-3 mb-6 cursor-pointer"
                      onClick={() => scrollToSection("home")}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        IV
                      </motion.div>
                      <span className="text-2xl font-bold">IdeaVerse</span>
                    </motion.div>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Transforming businesses with innovative digital solutions that drive real growth and lasting
                      impact.
                    </p>
                  </motion.div>

                  {[
                    {
                      title: "Company",
                      links: [
                        { label: "About Us", href: "/about" },
                        { label: "Careers", href: "/careers" },
                        { label: "Blog", href: "/blog" },
                        { label: "Press", href: "/press" },
                      ],
                    },
                    {
                      title: "Services",
                      links: [
                        { label: "AI Automation", href: "/services" },
                        { label: "Growth Analytics", href: "/services" },
                        { label: "Enterprise Security", href: "/services" },
                        { label: "Custom Solutions", href: "/services" },
                      ],
                    },
                    {
                      title: "Support",
                      links: [
                        { label: "Contact Us", href: "/contact" },
                        { label: "FAQ", href: "/faq" },
                        { label: "Privacy Policy", href: "/privacy" },
                        { label: "Terms of Service", href: "/terms" },
                      ],
                    },
                  ].map((section, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <h4 className="font-semibold mb-6 text-xl">{section.title}</h4>
                      <div className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <motion.div key={linkIndex} whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                            <Link
                              href={link.href}
                              className="block text-slate-400 hover:text-white transition-colors text-lg"
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
                  className="border-t border-slate-800 mt-16 pt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-slate-400 text-lg">
                    &copy; 2024 IdeaVerse. All rights reserved. Made with ❤️ for innovators worldwide.
                  </p>
                </motion.div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
