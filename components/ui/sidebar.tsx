"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Info, Briefcase, Mail, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Services", href: "/services", icon: Mail },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("lg:hidden")}>
          <Menu className={cn("h-6 w-6")} />
          <span className={cn("sr-only")}>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={cn("flex flex-col p-4 sm:p-6 w-64")}>
        <div className={cn("flex items-center justify-between mb-8")}>
          <Link href="/" className={cn("flex items-center gap-2")} onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="IdeaVerse Logo" className={cn("h-8 w-auto")} />
            <span className={cn("text-xl font-bold text-slate-900")}>IdeaVerse</span>
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className={cn("h-6 w-6")} />
              <span className={cn("sr-only")}>Close menu</span>
            </Button>
          </SheetClose>
        </div>
        <motion.nav
          className={cn("flex flex-col gap-2")}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-slate-900 hover:bg-slate-100",
                  pathname === item.href && "bg-slate-100 text-slate-900 font-medium",
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className={cn("h-5 w-5")} />
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </SheetContent>
    </Sheet>
  )
}
