import { Building2, Clock, Users, Leaf, Eye, Zap } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Quality Construction",
    description: "Premium materials and international standards in every project",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Consistent track record of on-time project completion",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Dedicated support and transparent communication throughout",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly practices and green building certifications",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear pricing, ethical practices, and honest dealings",
  },
  {
    icon: Zap,
    title: "Modern Design",
    description: "Contemporary architecture with innovative features",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-secondary mb-4">Why Choose Us</h2>
          <p className="text-foreground/70 font-poppins text-lg max-w-2xl mx-auto">
            We are committed to delivering excellence in every aspect of our real estate projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-foreground/70 font-poppins leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
