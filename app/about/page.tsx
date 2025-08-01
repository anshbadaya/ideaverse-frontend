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
      name: "Technical Lead",
      role: "Full-Stack Architecture",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Every line of code should serve a purpose and solve a real problem.",
      bio: "Experienced in modern frameworks, cloud infrastructure, and scalable system design. Passionate about clean code and efficient solutions.",
    },
    {
      name: "Development Partner",
      role: "Frontend & UX",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Great user experiences are built on solid technical foundations.",
      bio: "Specializes in React ecosystems, responsive design, and performance optimization. Believes in user-centered development.",
    },
    {
      name: "Cloud Specialist",
      role: "Infrastructure & DevOps",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Reliable infrastructure is the backbone of successful applications.",
      bio: "Expert in AWS/Azure deployments, CI/CD pipelines, and monitoring solutions. Ensures scalable and secure systems.",
    },
    {
      name: "Project Coordinator",
      role: "Client Relations & Strategy",
      image: "/placeholder.svg?height=300&width=300",
      philosophy: "Clear communication and aligned expectations lead to successful partnerships.",
      bio: "Manages client relationships, project timelines, and strategic planning. Ensures smooth collaboration and delivery.",
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
                quality over quantity
              </span>
            </motion.h1>

            <motion.p className="text-xl text-slate-600 leading-relaxed" variants={fadeInUp}>
              Founded in 2024 as a boutique development studio, we focus on delivering exceptional results for select
              clients. Quality partnerships over volume contracts.
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Built on a simple principle</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>"Every client deserves dedicated expertise, not divided attention."</p>
                <p>
                  We started IdeaVerse because we saw too many development teams spread thin across dozens of projects,
                  delivering mediocre results. We chose a different path - working with fewer clients to deliver
                  exceptional outcomes.
                </p>
                <p>
                  Our current partnerships with Breethr and ActiveBuildings exemplify this approach. By focusing deeply
                  on each client's unique needs, we deliver solutions that truly make a difference.
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
                <div className="text-3xl font-bold">2024</div>
                <div className="text-blue-100">Founded with purpose</div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What drives our work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
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
                title: "Client-Focused",
                description: "Every solution is tailored to your specific business needs and goals.",
                color: "from-red-400 to-pink-500",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results-Driven",
                description: "We measure success by the tangible impact we create for your business.",
                color: "from-blue-400 to-indigo-500",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation-First",
                description: "Leveraging cutting-edge technologies to solve complex challenges.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Partnership Approach",
                description: "We work as an extension of your team, not just another vendor.",
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet our focused team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A small, dedicated team of specialists who bring deep expertise to every project.
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to partner with us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're selective about our partnerships to ensure we can deliver exceptional results. Let's discuss if
              we're the right fit for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
