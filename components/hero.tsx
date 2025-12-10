"use client"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=Cinematic+3D+rendered+abstract+geometric+shapes+floating+in+dark+space+with+dramatic+lighting+and+cyan+blue+accent+glows"
          alt="Cinematic 3D rendered abstract geometric shapes floating in dark space with dramatic lighting and cyan blue accent glows"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight text-balance">
          DITOOO
          <br />
          <span className="text-cyan-400">STUDIO</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 max-w-3xl mx-auto text-balance">
          Crafting immersive 3D experiences through animation and brand design
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all hover:scale-105"
          >
            VIEW WORK
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
