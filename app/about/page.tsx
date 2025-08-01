import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Rocket } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  return (
    <div className={cn("flex flex-col min-h-screen pt-20")}>
      <main className={cn("flex-1")}>
        <section
          className={cn("w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white")}
        >
          <div className={cn("container px-4 md:px-6 text-center")}>
            <h1 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none")}>
              About IdeaVerse
            </h1>
            <p className={cn("mx-auto max-w-[700px] text-slate-300 md:text-xl mt-4")}>
              We are a boutique development studio dedicated to transforming bold ideas into digital reality.
            </p>
          </div>
        </section>

        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-white")}>
          <div className={cn("container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16")}>
            <div className={cn("space-y-6")}>
              <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl")}>Our Philosophy</h2>
              <p className={cn("text-slate-700 md:text-lg")}>
                At IdeaVerse, we believe in quality over quantity. Every project we undertake is a testament to our
                commitment to excellence, meticulous attention to detail, and a passion for innovation. We don't just
                build software; we craft solutions that stand the test of time and deliver tangible value.
              </p>
              <p className={cn("text-slate-700 md:text-lg")}>
                Our approach is collaborative and transparent. We work closely with our clients, ensuring their vision
                is at the forefront of every development phase. From initial concept to deployment and beyond, we are
                partners in your success.
              </p>
            </div>
            <div className={cn("grid gap-6 md:grid-cols-2")}>
              <PhilosophyCard
                icon={Lightbulb}
                title="Innovation"
                description="Pushing the boundaries of technology to create cutting-edge solutions."
              />
              <PhilosophyCard
                icon={Users}
                title="Collaboration"
                description="Working hand-in-hand with clients to achieve shared goals."
              />
              <PhilosophyCard
                icon={Rocket}
                title="Excellence"
                description="Delivering high-quality, robust, and scalable software."
              />
              <PhilosophyCard
                icon={Lightbulb} // Reusing icon for demonstration, replace with a unique one if available
                title="Integrity"
                description="Operating with honesty and transparency in all our endeavors."
              />
            </div>
          </div>
        </section>

        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-slate-50")}>
          <div className={cn("container px-4 md:px-6 text-center")}>
            <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl")}>Meet Our Team</h2>
            <p className={cn("mx-auto max-w-[700px] text-slate-600 md:text-xl mt-4")}>
              Our diverse team of experts brings a wealth of experience and passion to every project.
            </p>
            <div className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12")}>
              <TeamMemberCard
                name="Jane Doe"
                title="CEO & Lead Architect"
                image="/placeholder-user.png"
                description="With over 15 years in software architecture, Jane leads our technical vision."
              />
              <TeamMemberCard
                name="John Smith"
                title="Head of Engineering"
                image="/placeholder-user.png"
                description="John is a full-stack maestro, ensuring seamless integration across all layers."
              />
              <TeamMemberCard
                name="Emily White"
                title="AI/ML Specialist"
                image="/placeholder-user.png"
                description="Emily is at the forefront of AI innovation, developing intelligent solutions."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

interface PhilosophyCardProps {
  icon: React.ElementType
  title: string
  description: string
}

function PhilosophyCard({ icon: Icon, title, description }: PhilosophyCardProps) {
  return (
    <Card className={cn("flex flex-col items-center text-center p-6")}>
      <CardHeader>
        <div className={cn("flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4")}>
          <Icon className={cn("h-6 w-6")} />
        </div>
        <CardTitle className={cn("text-xl font-bold")}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={cn("text-slate-600")}>{description}</p>
      </CardContent>
    </Card>
  )
}

interface TeamMemberCardProps {
  name: string
  title: string
  image: string
  description: string
}

function TeamMemberCard({ name, title, image, description }: TeamMemberCardProps) {
  return (
    <Card className={cn("flex flex-col items-center text-center p-6")}>
      <Image
        src={image || "/placeholder.png"}
        alt={name}
        width={120}
        height={120}
        className={cn("rounded-full mb-4 object-cover aspect-square")}
      />
      <CardTitle className={cn("text-xl font-bold")}>{name}</CardTitle>
      <p className={cn("text-blue-600 font-medium mb-2")}>{title}</p>
      <CardContent>
        <p className={cn("text-slate-600")}>{description}</p>
      </CardContent>
    </Card>
  )
}
