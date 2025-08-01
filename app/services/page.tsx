import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Code, Cloud, Brain, Server, Layout } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Our Comprehensive Technical Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl mt-4">
              At IdeaVerse, we offer a full spectrum of development services to bring your vision to life.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={Code}
                title="Backend Development"
                description="Robust and scalable server-side solutions using modern frameworks and databases."
                features={[
                  "API Development (REST, GraphQL)",
                  "Database Design & Management",
                  "Microservices Architecture",
                  "Security & Authentication",
                ]}
              />
              <ServiceCard
                icon={Layout}
                title="Frontend Development"
                description="Intuitive and responsive user interfaces that provide exceptional user experiences."
                features={[
                  "React, Next.js, Vue.js",
                  "Responsive Web Design",
                  "Performance Optimization",
                  "UI/UX Implementation",
                ]}
              />
              <ServiceCard
                icon={Brain}
                title="AI & Machine Learning"
                description="Integrating intelligent algorithms to automate processes and derive insights."
                features={[
                  "Custom AI Model Development",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Predictive Analytics",
                ]}
              />
              <ServiceCard
                icon={Cloud}
                title="Cloud Infrastructure"
                description="Designing, deploying, and managing scalable cloud environments."
                features={[
                  "AWS, Azure, Google Cloud",
                  "Serverless Architectures",
                  "DevOps & CI/CD Pipelines",
                  "Containerization (Docker, Kubernetes)",
                ]}
              />
              <ServiceCard
                icon={Server}
                title="Full-Stack Development"
                description="End-to-end development, from database to user interface, for seamless applications."
                features={[
                  "Integrated Backend & Frontend",
                  "Rapid Prototyping",
                  "Scalable Architectures",
                  "Comprehensive Testing",
                ]}
              />
              <ServiceCard
                icon={CheckCircle2}
                title="Quality Assurance"
                description="Ensuring the reliability, performance, and security of your software."
                features={["Automated Testing", "Manual Testing", "Performance Testing", "Security Audits"]}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl mt-4">
              Contact us today to discuss your ideas and get a personalized quote.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
}

function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-slate-600 mb-4">{description}</p>
        <ul className="space-y-2 text-slate-700 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
