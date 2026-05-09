"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { 
    name: "Services", 
    href: "/services",
    hasDropdown: true,
    items: [
      { name: "SEO Services", href: "/services/seo" },
      { name: "Content Marketing", href: "/services/content" },
      { name: "Digital PR", href: "/services/pr" },
      { name: "Social Media", href: "/services/social" },
    ]
  },
  { 
    name: "Industries", 
    href: "/industries",
    hasDropdown: true,
    items: [
      { name: "E-commerce", href: "/industries/ecommerce" },
      { name: "Finance", href: "/industries/finance" },
      { name: "Travel", href: "/industries/travel" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ]
  },
  { 
    name: "International", 
    href: "/international",
    hasDropdown: true,
    items: [
      { name: "USA", href: "/international/usa" },
      { name: "UK", href: "/international/uk" },
      { name: "Europe", href: "/international/europe" },
      { name: "Asia", href: "/international/asia" },
    ]
  },
  { 
    name: "About", 
    href: "/about",
    hasDropdown: true,
    badge: "2",
    items: [
      { name: "Our Story", href: "/about/story" },
      { name: "Team", href: "/about/team" },
      { name: "Culture", href: "/about/culture" },
    ]
  },
  { name: "Work", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { 
    name: "Blog & Resources", 
    href: "/blog",
    hasDropdown: true,
    items: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/blog/case-studies" },
      { name: "Guides", href: "/blog/guides" },
    ]
  },
  { name: "Webinar", href: "/webinar" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = React.useState<string[]>([])

  const toggleMobileDropdown = (name: string) => {
    setMobileOpenDropdowns(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    )
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#9fe2c7] py-2 text-center">
        <Link href="/leaderboard" className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1f36] hover:underline">
          <span>🔥</span>
          <span>The Category Leaderboard - Live Now</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <header className="bg-[#1a2744] sticky top-0 z-50">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-white">
              Rise at Seven<span className="text-[#9fe2c7]">*</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  )}
                  {item.badge && (
                    <span className="absolute -top-0.5 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#4a90e2] text-[10px] text-white font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.items && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-1 z-50">
                    <div className="bg-white rounded-lg shadow-xl py-1.5 min-w-[180px]">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a1f36] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-full transition-all hover:bg-white hover:text-[#1a1f36]"
            >
              Get in Touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-5 h-3.5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-white transition-all duration-300",
                  mobileMenuOpen && "top-1/2 -translate-y-1/2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-white transition-all duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-0.5 w-5 bg-white transition-all duration-300",
                  mobileMenuOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-[#1a2744]" />
        
        <div className="relative h-full flex flex-col pt-20 px-6 overflow-y-auto">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                    className="block py-2.5 text-xl font-medium text-white"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button 
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2 text-white"
                    >
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-transform",
                        mobileOpenDropdowns.includes(item.name) && "rotate-180"
                      )} />
                    </button>
                  )}
                </div>
                {item.hasDropdown && item.items && mobileOpenDropdowns.includes(item.name) && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-base text-white/70 hover:text-white"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-medium text-[#1a1f36] bg-white rounded-full"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
