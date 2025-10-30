"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Load Cloudinary Video Player script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    // Load Cloudinary Video Player CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      // Initialize Cloudinary player
      if (window.cloudinary && videoRef.current) {
        const player = window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'auto',
        })
      }
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background - Cloudinary */}
      <div className="absolute inset-0 z-0">
        <div ref={videoRef} className="w-full h-full">
          <video
            id="cloudinary-player"
            className="cld-video-player"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </div>
        {/* Gradient Overlay - Enhanced for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:from-black/60 md:via-black/40 md:to-black/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: "6s", animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-primary mb-4 md:mb-6 leading-tight transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Building Excellence. Creating Legacies.
        </h1>

        <p className={`text-base text-[8px] md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto font-poppins leading-relaxed transition-all duration-700 px-2 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
           style={{ transitionDelay: "0.2s" }}>
          Mahalaxmi Developers brings you premium real estate projects with a tradition of trust and excellence in every
          development.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
             style={{ transitionDelay: "0.4s" }}>
          <button
            onClick={() => scrollToSection('#projects')}
            className=" w-1/2 md:w-full sm:w-auto bg-primary text-primary-foreground px-1 py-2 md:px-8 md:py-4 rounded-xl md:rounded-lg font-poppins font-semibold text-xs md:text-base hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
          >
            Explore Projects
            <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="w-1/2 md:w-full sm:w-auto border-2 border-primary text-primary bg-black/20 backdrop-blur-sm px-1 py-2 md:px-8 md:py-4 rounded-xl md:rounded-lg font-poppins font-semibold text-xs md:text-base hover:bg-primary hover:text-secondary transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-primary/50 cursor-pointer touch-manipulation"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className={`hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-secondary rounded-full flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

// TypeScript declaration for Cloudinary
declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}