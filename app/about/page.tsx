"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Target, Users, Lightbulb, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Innovation happens when technology meets human insight.",
      bio: "Former VP at TechGiant, built 3 successful startups. Loves hiking and terrible dad jokes.",
    },
    {
      name: "Sam Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Code should solve problems, not create them.",
      bio: "Ex-Google engineer, AI researcher. Collects vintage keyboards and makes amazing coffee.",
    },
    {
      name: "Maya Patel",
      role: "Head of Growth",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Data tells stories, but humans write the endings.",
      bio: "Growth hacker turned strategist. Marathon runner who thinks in metrics and dreams in conversions.",
    },
    {
      name: "Jordan Kim",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Beautiful design is invisible until it's missing.",
      bio: "Design thinking evangelist, former agency creative director. Weekend pottery enthusiast.",
    },
  ]

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
                Our Story
              </Badge>
            </motion.div>

            <motion.h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight" variants={fadeInUp}>
              We believe in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                human potential
              </span>{" "}
              amplified by technology
            </motion.h1>

            <motion.p className="text-xl text-slate-600 leading-relaxed" variants={fadeInUp}>
              Started in 2020 when we realized most businesses were drowning in manual processes while AI sat unused on
              the shelf. We decided to change that.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">It started with a simple question</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>"Why are brilliant people spending 60% of their time on tasks a computer could do better?"</p>
                <p>
                  Our founder Alex was watching his team at a Fortune 500 company manually process thousands of customer
                  requests daily. Meanwhile, the AI tools they'd invested millions in sat largely unused because they
                  were too complex to implement.
                </p>
                <p>
                  That's when we realized the problem wasn't technology – it was the gap between what's possible and
                  what's practical. We started IdeaVerse to bridge that gap.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our founding story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">4 years</div>
                <div className="text-blue-100">of transforming businesses</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What drives us every day</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision we make.
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
                icon: <Heart className="h-8 w-8" />,
                title: "Human-First",
                description: "Technology should enhance human potential, not replace it.",
                color: "from-red-400 to-pink-500",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results-Driven",
                description: "We measure success by your growth, not our features.",
                color: "from-blue-400 to-indigo-500",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Relentlessly Curious",
                description: "Every problem is a puzzle waiting to be solved.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Radically Transparent",
                description: "Honest communication builds lasting partnerships.",
                color: "from-green-400 to-teal-500",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet the humans behind the magic</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're not just colleagues – we're a family of problem-solvers, dreamers, and coffee enthusiasts.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerChildren}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <blockquote className="text-sm italic text-slate-600 mb-4 border-l-4 border-blue-200 pl-4">
                      "{member.philosophy}"
                    </blockquote>
                    <p className="text-sm text-slate-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Want to be part of our story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your business or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Join Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
