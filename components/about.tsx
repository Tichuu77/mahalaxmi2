export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img src="/luxury-real-estate-interior-design.jpg" alt="Luxury interior design" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-secondary mb-6">About Us</h2>

            <p className="text-foreground/80 font-poppins text-lg mb-4 leading-relaxed">
              With over two decades of excellence in real estate development, we are committed to creating architectural
              landmarks that blend luxury, sustainability, and innovation.
            </p>

            <p className="text-foreground/80 font-poppins text-lg mb-6 leading-relaxed">
              Our portfolio showcases projects that reflect our dedication to quality craftsmanship, timely delivery,
              and customer satisfaction. We believe in building not just structures, but communities.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground font-poppins">
                  Premium quality construction with international standards
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground font-poppins">Transparent and ethical business practices</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground font-poppins">Sustainable and eco-friendly development</p>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-poppins font-semibold hover:opacity-90 transition-opacity">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
