"use client"

import Image from "next/image"

const platformLogos = [
  { name: "Google", display: "Google" },
  { name: "ChatGPT", display: "ChatGPT" },
  { name: "Gemini", display: "Gemini" },
  { name: "TikTok", display: "TikTok" },
  { name: "YouTube", display: "YouTube" },
  { name: "Pinterest", display: "Pinterest" },
  { name: "GIPHY", display: "GIPHY" },
  { name: "reddit", display: "reddit" },
  { name: "amazon", display: "amazon" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hElKpeDp6ZX4gJT6LWPegcfxR5CGjj.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a2744]/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-8 py-16">
        {/* Award Badge */}
        <div className="mb-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#5ba3e0] uppercase tracking-wider">
            #1 Most Recommended
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#5ba3e0] uppercase tracking-wider">
            Content Marketing Agency
          </p>
        </div>

        {/* Award Logos Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8 flex-wrap px-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-1 text-white/50">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 20.63L12 17.77L6.82 20.63L8 13.97L3 9.27L9.91 8.26L12 2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Main Headline */}
        <h1 className="text-center">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold text-white leading-[0.9] tracking-tight">
            We Create
          </span>
          <span className="flex items-center justify-center gap-2 sm:gap-4 mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold text-white leading-[0.9] tracking-tight">
            <span>Category</span>
            {/* Product Can */}
            <span className="relative inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
              <div className="w-10 h-14 sm:w-14 sm:h-18 md:w-16 md:h-20 lg:w-18 lg:h-24 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                <span className="text-[6px] sm:text-[8px] font-bold text-white">BRAND</span>
              </div>
            </span>
            <span>Leaders</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-medium text-center">
          on every searchable platform
        </p>

        {/* Platform Logos */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap max-w-4xl">
          {platformLogos.map((platform) => (
            <span 
              key={platform.name}
              className="text-xs sm:text-sm md:text-base text-white/60 hover:text-white transition-colors font-medium"
            >
              {platform.name === "TikTok" && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  {platform.display}
                </span>
              )}
              {platform.name === "YouTube" && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {platform.display}
                </span>
              )}
              {platform.name === "Pinterest" && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  {platform.display}
                </span>
              )}
              {platform.name === "ChatGPT" && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  {platform.display}
                </span>
              )}
              {platform.name === "reddit" && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  {platform.display}
                </span>
              )}
              {(platform.name === "Google" || platform.name === "Gemini" || platform.name === "GIPHY" || platform.name === "amazon") && (
                <span>{platform.display}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="relative z-10 px-6 lg:px-8 pb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-xs sm:text-sm text-white/60">
        <div className="max-w-xs">
          <p>Organic media planners creating, distributing & optimising</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-white text-sm sm:text-base">4 Global Offices serving</p>
        </div>
      </div>
    </section>
  )
}
