"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Rocket, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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

  const stats = [
    { label: "Years in Business", value: "10+", icon: Lightbulb },
    { label: "Projects Completed", value: "200+", icon: Rocket },
    { label: "Satisfied Clients", value: "150+", icon: Handshake },
    { label: "Expert Team Members", value: "50+", icon: Users },
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
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">IdeaVerse</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of innovators and problem-solvers dedicated to crafting exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <section className="mb-16 sm:mb-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Story & Mission</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Founded with a vision to transform ideas into impactful digital realities, IdeaVerse has grown into a
                leading development studio. We believe in the power of technology to solve complex problems and create
                meaningful connections. Our journey began with a commitment to quality over quantity, a principle that
                continues to guide every project we undertake.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Our mission is to empower businesses and individuals with cutting-edge software solutions that are not
                only functional but also intuitive, scalable, and aesthetically pleasing. We strive to build
                long-lasting partnerships with our clients, working collaboratively to achieve their strategic goals and
                exceed expectations.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="relative">
              <img
                src="/placeholder.png?height=500&width=700"
                alt="Our Story"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-500/20 rounded-xl"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Values Section */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {[
              {
                title: "Innovation",
                description:
                  "Continuously exploring new technologies and creative approaches to deliver groundbreaking solutions.",
              },
              {
                title: "Quality",
                description:
                  "Committed to excellence in every line of code and every design element, ensuring robust and reliable products.",
              },
              {
                title: "Collaboration",
                description:
                  "Fostering strong partnerships with clients, working hand-in-hand to achieve shared success.",
              },
              {
                title: "Integrity",
                description: "Operating with transparency, honesty, and ethical practices in all our interactions.",
              },
              {
                title: "Client-Centricity",
                description:
                  "Placing our clients' needs at the forefront, delivering solutions that truly add value to their business.",
              },
              {
                title: "Adaptability",
                description: "Embracing change and evolving with the dynamic digital landscape to stay ahead.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 text-base sm:text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Stats Section */}
        <section>
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full text-center border-0 bg-white shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <stat.icon className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-5xl sm:text-6xl font-bold text-slate-900 mb-2">{stat.value}</p>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-700">{stat.label}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  )
}
