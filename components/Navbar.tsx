"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="section h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-white font-black">G</span>
          <span className="text-lg font-semibold">GDG</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <Link className="hover:text-black" href="#features">Features</Link>
          <Link className="hover:text-black" href="#showcase">Showcase</Link>
          <Link className="hover:text-black" href="#pricing">Pricing</Link>
          <Link className="hover:text-black" href="#faq">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild><Link href="#contact">Contact</Link></Button>
          <Button asChild><Link href="#get-started">Get Started</Link></Button>
        </div>
      </div>
    </header>
  )
}