import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function PortfolioPage() {
  return (
    <div className={cn("flex flex-col min-h-screen pt-20")}>
      <main className={cn("flex-1")}>
        <section
          className={cn("w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white")}
        >
          <div className={cn("container px-4 md:px-6 text-center")}>
            <h1 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none")}>
              Our Featured Work
            </h1>
            <p className={cn("mx-auto max-w-[700px] text-slate-300 md:text-xl mt-4")}>
              Explore our portfolio of successful projects and see how we bring ideas to life.
            </p>
          </div>
        </section>

        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-white")}>
          <div className={cn("container px-4 md:px-6")}>
            <div className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3")}>
              <PortfolioCard
                title="Breethr - AI-Powered Wellness App"
                description="A mobile application leveraging AI to provide personalized breathing exercises and mindfulness techniques."
                image="/placeholder.png"
                tags={["Mobile App", "AI/ML", "Healthcare", "React Native"]}
                link="#"
              />
              <PortfolioCard
                title="ActiveBuildings - Smart Building Management"
                description="A comprehensive web platform for monitoring and managing energy consumption and environmental factors in commercial buildings."
                image="/placeholder.png"
                tags={["Web Platform", "IoT", "Data Analytics", "Next.js", "Node.js"]}
                link="#"
              />
              <PortfolioCard
                title="QuantumFlow - Secure Data Exchange"
                description="A blockchain-based solution for secure and transparent data exchange between enterprises."
                image="/placeholder.png"
                tags={["Blockchain", "Security", "Enterprise", "Solidity"]}
                link="#"
              />
              <PortfolioCard
                title="EcoHarvest - Sustainable Agriculture Platform"
                description="An agricultural tech platform optimizing crop yields and resource management through satellite imagery and machine learning."
                image="/placeholder.png"
                tags={["Agriculture", "AI/ML", "SaaS", "Python", "AWS"]}
                link="#"
              />
              <PortfolioCard
                title="FitFusion - Personalized Fitness Coach"
                description="An interactive web application offering custom workout plans and nutrition tracking, integrated with wearable devices."
                image="/placeholder.png"
                tags={["Fitness", "Web App", "API Integration", "React", "GraphQL"]}
                link="#"
              />
              <PortfolioCard
                title="ArtisanConnect - Creator Marketplace"
                description="A vibrant online marketplace connecting independent artists and crafters with buyers worldwide, featuring secure payment gateways."
                image="/placeholder.png"
                tags={["E-commerce", "Marketplace", "Community", "Stripe", "Next.js"]}
                link="#"
              />
            </div>
          </div>
        </section>

        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-slate-50")}>
          <div className={cn("container px-4 md:px-6 text-center")}>
            <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl")}>
              Have a Project in Mind?
            </h2>
            <p className={cn("mx-auto max-w-[700px] text-slate-600 md:text-xl mt-4")}>
              Let's collaborate and build something amazing together.
            </p>
            <div className={cn("mt-8")}>
              <Link href="/contact">
                <Button size="lg" className={cn("bg-blue-600 hover:bg-blue-700 text-white")}>
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

function PortfolioCard({ title, description, image, tags, link }: PortfolioCardProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden h-full")}>
      <div className={cn("relative w-full h-48")}>
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={cn("rounded-t-lg")}
        />
      </div>
      <CardHeader className={cn("flex-1")}>
        <CardTitle className={cn("text-xl font-bold")}>{title}</CardTitle>
        <CardDescription className={cn("text-slate-600")}>{description}</CardDescription>
      </CardHeader>
      <CardContent className={cn("p-6 pt-0")}>
        <div className={cn("flex flex-wrap gap-2 mb-4")}>
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className={cn("bg-slate-100 text-slate-700")}>
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={link}>
          <Button variant="outline" className={cn("w-full border-blue-600 text-blue-600 hover:bg-blue-50")}>
            View Case Study
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
