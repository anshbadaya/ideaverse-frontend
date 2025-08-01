"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils" // Import cn utility

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  }

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
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're eager to hear about your project and explore how IdeaVerse can help bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "For general inquiries and project discussions.",
              contact: "hello@ideaverse.com",
              color: "from-blue-400 to-blue-600",
            },
            {
              icon: Phone,
              title: "Schedule a Call",
              description: "Book a dedicated consultation with our team.",
              contact: "Available by appointment",
              color: "from-green-400 to-green-600",
            },
            {
              icon: MessageCircle,
              title: "Project Discussion",
              description: "Let's dive deep into your requirements.",
              contact: "Free initial consultation",
              color: "from-purple-400 to-purple-600",
            },
            {
              icon: MapPin,
              title: "Remote First",
              description: "We collaborate effectively with clients worldwide.",
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

        {/* Contact Form */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-0 bg-white shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl text-slate-900">Send Us a Message</CardTitle>
              <p className="text-slate-600 text-base sm:text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
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
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input id="fullName" type="text" placeholder="John Doe" className="h-10 sm:h-12" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" className="h-10 sm:h-12" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <Input id="companyName" type="text" placeholder="Your Company" className="h-10 sm:h-12" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Type *
                  </label>
                  <Select>
                    <SelectTrigger id="projectType" className="h-10 sm:h-12">
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
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="projectDetails"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
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
                      className={cn(
                        "w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-base sm:text-lg py-4 sm:py-6 h-auto",
                      )}
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
      </div>
    </div>
  )
}
