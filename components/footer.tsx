"use client"

import Link from "next/link"
import { Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react"

const navigation = {
  services: [
    { name: "SEO Services", href: "/services/seo" },
    { name: "Content Marketing", href: "/services/content" },
    { name: "Digital PR", href: "/services/pr" },
    { name: "Social Media", href: "/services/social" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Work", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-xl font-semibold tracking-tight">
                  Rise at Seven<span className="text-[#a8f0d4]">*</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                Organic media planners creating, distributing & optimising content for SEO, Social, PR, digital PR across 4 global offices.
              </p>
              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white hover:text-white transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Services
              </h3>
              <nav className="space-y-3">
                {navigation.services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Company
              </h3>
              <nav className="space-y-3">
                {navigation.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Get in Touch
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Ready to become a category leader?
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1a1f36] bg-[#a8f0d4] rounded-full hover:bg-white transition-colors"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Rise at Seven. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
