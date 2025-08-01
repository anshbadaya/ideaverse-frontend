"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted!")
  }

  return (
    <div className={cn("flex flex-col min-h-screen pt-20")}>
      <main className={cn("flex-1")}>
        <section
          className={cn("w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white")}
        >
          <div className={cn("container px-4 md:px-6 text-center")}>
            <h1 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none")}>
              Get in Touch
            </h1>
            <p className={cn("mx-auto max-w-[700px] text-slate-300 md:text-xl mt-4")}>
              We'd love to hear from you. Reach out to us through any of the methods below.
            </p>
          </div>
        </section>

        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-white")}>
          <div className={cn("container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16")}>
            <div className={cn("space-y-8")}>
              <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl")}>Contact Information</h2>
              <div className={cn("grid gap-6")}>
                <div className={cn("flex items-center gap-4")}>
                  <Mail className={cn("h-6 w-6 text-blue-600")} />
                  <div>
                    <h3 className={cn("text-lg font-semibold")}>Email</h3>
                    <p className={cn("text-slate-600")}>hello@ideaverse.com</p>
                  </div>
                </div>
                <div className={cn("flex items-center gap-4")}>
                  <Phone className={cn("h-6 w-6 text-blue-600")} />
                  <div>
                    <h3 className={cn("text-lg font-semibold")}>Phone</h3>
                    <p className={cn("text-slate-600")}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className={cn("flex items-center gap-4")}>
                  <MapPin className={cn("h-6 w-6 text-blue-600")} />
                  <div>
                    <h3 className={cn("text-lg font-semibold")}>Address</h3>
                    <p className={cn("text-slate-600")}>123 Dev Street, Suite 400, Tech City, TX 78701</p>
                  </div>
                </div>
              </div>
              <Card className={cn("p-6")}>
                <CardHeader>
                  <CardTitle className={cn("text-2xl font-bold")}>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className={cn("text-slate-600")}>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                  <p>Saturday - Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>

            <div className={cn("space-y-8")}>
              <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl")}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className={cn("grid gap-6")}>
                <div className={cn("grid gap-2")}>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required type="text" />
                </div>
                <div className={cn("grid gap-2")}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="your@example.com" required type="email" />
                </div>
                <div className={cn("grid gap-2")}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" required type="text" />
                </div>
                <div className={cn("grid gap-2")}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea className={cn("min-h-[120px]")} id="message" placeholder="Your message" required />
                </div>
                <Button className={cn("w-full bg-blue-600 hover:bg-blue-700 text-white")} type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
