"use client"

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
        {/* Main Heading */}
        <div className="space-y-4 mb-6 md:mb-8 max-w-4xl">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-primary transition-all duration-700 drop-shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Build Your Dream Home With Mahalaxmi Developers In Nagpur.
          </h1>
        </div>

        <div className="space-y-4 mb-6 md:mb-8 max-w-4xl">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white transition-all duration-700 drop-shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Residential & Commercial Plots Heart Of City Nagpur.
          </h1>
        </div>

        <div className="py-1 px-4 md:px-6 bg-primary mb-4 md:mb-6">
          <h3 className="text-xs md:text-lg text-primary-foreground font-light">
            NMRDA SANCTION RL RERA APPROVED PROJECTS
          </h3>
        </div>

        <p className="text-white text-base md:text-xl lg:text-2xl font-extralight mb-4 md:mb-6 drop-shadow-md px-4">
          Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, katol road, Umred road, Koradi road & Samruddhi circle Nagpur.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
             style={{ transitionDelay: "300ms" }}>
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-lg font-poppins font-semibold text-sm md:text-base hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer touch-manipulation"
          >
            Contact Us
          </button>

          <button
            onClick={() => scrollToSection('#projects')}
            className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-lg font-poppins font-semibold text-sm md:text-base hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
          >
            Explore Projects
          </button>
        </div>

        <div className="bg-primary py-3 px-6 rounded">
          <h3 className="text-primary-foreground text-sm md:text-base">
            Best For Investment @ 22 lakh only on samruddhi circle Nagpur.
          </h3>
        </div>
      </div>

      {/* Scroll Indicator */}
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