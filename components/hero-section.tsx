"use client"

import Image from "next/image"

const awardBadges = [
  { name: "US Search Awards", id: 1 },
  { name: "Global Search Awards", id: 2 },
  { name: "The Drum", id: 3 },
  { name: "UK Social Media Awards", id: 4 },
  { name: "Content Awards", id: 5 },
]

const platformLogos = [
  { name: "Google", logo: "Google" },
  { name: "ChatGPT", logo: "ChatGPT" },
  { name: "Gemini", logo: "Gemini" },
  { name: "TikTok", logo: "TikTok" },
  { name: "YouTube", logo: "YouTube" },
  { name: "Pinterest", logo: "Pinterest" },
  { name: "GIPHY", logo: "GIPHY" },
  { name: "reddit", logo: "reddit" },
  { name: "amazon", logo: "amazon" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a1f36] via-[#1e2844] to-[#2a3a5e]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hElKpeDp6ZX4gJT6LWPegcfxR5CGjj.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f36]/80 via-[#1a1f36]/60 to-[#1a1f36]/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Award Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#1a1f36]/60 backdrop-blur-sm rounded-full text-xs font-semibold text-[#4a9eff] uppercase tracking-wider border border-[#4a9eff]/20">
            #1 Most Recommended<br />Content Marketing Agency
          </span>
        </div>

        {/* Award Logos Row */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 flex-wrap">
          {awardBadges.map((award) => (
            <div 
              key={award.id}
              className="flex items-center justify-center h-10 w-auto"
            >
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 20.63L12 17.77L6.82 20.63L8 13.97L3 9.27L9.91 8.26L12 2Z" />
                </svg>
                <span className="hidden sm:inline">{award.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.95] tracking-tight">
          <span className="block">We Create</span>
          <span className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <span>Category</span>
            {/* Red Bull Can */}
            <span className="relative inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
              <div className="w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white/20">
                <div className="text-center">
                  <div className="text-[6px] md:text-[8px] font-bold text-red-500 leading-tight">Red</div>
                  <div className="text-[6px] md:text-[8px] font-bold text-yellow-400 leading-tight">Bull</div>
                </div>
              </div>
            </span>
            <span>Leaders</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl lg:text-2xl text-white/80 font-medium">
          on every searchable platform
        </p>

        {/* Platform Logos */}
        <div className="mt-10 flex items-center justify-center gap-6 md:gap-8 lg:gap-10 flex-wrap">
          {platformLogos.map((platform) => (
            <div 
              key={platform.name}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              {platform.name === "Google" && (
                <span className="text-sm md:text-base font-medium tracking-wide">Google</span>
              )}
              {platform.name === "ChatGPT" && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span className="text-sm md:text-base font-medium">ChatGPT</span>
                </span>
              )}
              {platform.name === "Gemini" && (
                <span className="text-sm md:text-base font-medium">Gemini</span>
              )}
              {platform.name === "TikTok" && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  <span className="text-sm md:text-base font-medium">TikTok</span>
                </span>
              )}
              {platform.name === "YouTube" && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm md:text-base font-medium">YouTube</span>
                </span>
              )}
              {platform.name === "Pinterest" && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                  <span className="text-sm md:text-base font-medium">Pinterest</span>
                </span>
              )}
              {platform.name === "GIPHY" && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <rect width="24" height="24" rx="4" />
                  </svg>
                  <span className="text-sm md:text-base font-medium">GIPHY</span>
                </span>
              )}
              {platform.name === "reddit" && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z"/>
                  </svg>
                  <span className="text-sm md:text-base font-medium">reddit</span>
                </span>
              )}
              {platform.name === "amazon" && (
                <span className="text-sm md:text-base font-medium tracking-wide">amazon</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between text-sm text-white/60">
          <div className="max-w-xs text-left">
            <p>Organic media planners creating, distributing & optimising</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-white">4 Global Offices serving</p>
          </div>
        </div>
      </div>
    </section>
  )
}
