"use client"
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBullet, setHoveredBullet] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isExpanded && expandedRef.current) {
      expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isExpanded]);

  const bullets = [
    "Premium quality construction with international standards",
    "Transparent and ethical business practices",
    "Sustainable and eco-friendly development"
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "10k+", label: "Happy Families" },
    { number: "25+", label: "Awards Won" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const values = [
    { 
      icon : "🌟",
      title: "Innovation", 
      description: "Incorporating cutting-edge technology and design principles in every project"
    },
    { 
      icon : "👨‍👩‍👧‍👦",
      title: "Integrity", 
      description: "Maintaining transparency and ethical practices in all our business dealings"
    },
    { 
      icon : "⚡",
      title: "Excellence", 
      description: "Delivering superior quality through meticulous attention to detail"
    },
    { 
      icon : "🌳",
      title: "Sustainability", 
      description: "Building environmentally responsible projects for future generations"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-background overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image with Parallax Effect */}
          <div 
            className={`relative h-64 sm:h-80 md:h-96 rounded-xl md:rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 ease-out touch-manipulation ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src="/luxury-real-estate-interior-design.jpg" 
              alt="Luxury interior design" 
              className="w-full h-full object-cover transform hover:scale-110 active:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
            
            {/* Floating Badge */}
            <div className={`absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-poppins font-semibold text-sm md:text-base shadow-lg z-20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '800ms' }}>
              20+ Years
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
          style={{ transitionDelay: '400ms' }}>
            <div className="relative inline-block mb-4 md:mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-secondary relative z-10">
                About Us
              </h2>
              <div className={`absolute -bottom-1 md:-bottom-2 left-0 h-2 md:h-3 bg-primary/20 transition-all duration-700 ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '600ms' }} />
            </div>

            <p className={`text-foreground/80 font-poppins text-base md:text-lg mb-3 md:mb-4 leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '700ms' }}>
              With over two decades of excellence in real estate development, we are committed to creating architectural
              landmarks that blend luxury, sustainability, and innovation.
            </p>

            <p className={`text-foreground/80 font-poppins text-base md:text-lg mb-5 md:mb-6 leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '800ms' }}>
              Our portfolio showcases projects that reflect our dedication to quality craftsmanship, timely delivery,
              and customer satisfaction. We believe in building not just structures, but communities.
            </p>

            <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {bullets.map((text, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-2.5 md:gap-3 transition-all duration-700 cursor-default touch-manipulation active:scale-95 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${900 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredBullet(index)}
                  onMouseLeave={() => setHoveredBullet(null)}
                  onTouchStart={() => setHoveredBullet(index)}
                  onTouchEnd={() => setHoveredBullet(null)}
                >
                  <div className={`w-2 h-2 rounded-full mt-1.5 md:mt-2 flex-shrink-0 transition-all duration-300 ${
                    hoveredBullet === index ? 'bg-primary scale-150 shadow-lg shadow-primary/50' : 'bg-primary'
                  }`} />
                  <p className={`text-foreground font-poppins text-sm md:text-base transition-all duration-300 ${
                    hoveredBullet === index ? 'translate-x-1 md:translate-x-2 text-foreground' : ''
                  }`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`group relative bg-primary text-primary-foreground px-6 py-2.5 md:px-8 md:py-3 rounded-xl md:rounded-lg font-poppins font-semibold text-sm md:text-base overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-primary/30 active:scale-95 hover:scale-105 cursor-pointer touch-manipulation ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isExpanded ? 'Show Less' : 'Read More'}
                <svg 
                  className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <div 
          ref={expandedRef}
          className={`transition-all duration-700 ease-out overflow-hidden ${
            isExpanded ? 'max-h-[3000px] opacity-100 mt-10 md:mt-16' : 'max-h-0 opacity-0'
          }`}
        >
          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-10 md:mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`text-center p-4 md:p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl md:rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-500 active:scale-95 hover:scale-105 hover:shadow-lg touch-manipulation ${
                  isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-1 md:mb-2">
                  {achievement.number}
                </div>
                <div className="text-xs md:text-sm font-poppins text-foreground/70 leading-tight">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className={`transition-all duration-700 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}>
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-secondary mb-3 md:mb-4">Our Core Values</h3>
              <div className="w-20 md:w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`group p-4 md:p-6 bg-background border border-foreground/10 rounded-xl md:rounded-lg hover:border-primary/40 hover:shadow-xl transition-all duration-500 active:scale-95 hover:scale-105 touch-manipulation ${
                    isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg md:rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-active:scale-105 transition-transform duration-300">
                      <span>{value.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-playfair font-bold text-secondary mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-foreground/70 font-poppins text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className={`mt-8 md:mt-12 p-5 md:p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl md:rounded-lg border border-primary/20 transition-all duration-700 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}>
            <h4 className="text-xl md:text-2xl font-playfair font-bold text-secondary mb-3 md:mb-4">
              Why Choose Us?
            </h4>
            <p className="text-foreground/80 font-poppins text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              Our commitment extends beyond construction. We create living spaces that enhance quality of life, 
              foster community connections, and stand the test of time. Every project is a testament to our 
              unwavering dedication to excellence and innovation in real estate development.
            </p>
            <p className="text-foreground/80 font-poppins text-sm md:text-base leading-relaxed">
              From concept to completion, we work closely with our clients to ensure their vision becomes reality. 
              Our team of experienced professionals brings together expertise in architecture, engineering, and 
              sustainable design to deliver projects that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}