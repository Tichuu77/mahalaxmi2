import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Amenities from "@/components/amenities"
import UserGuide from "@/components/user-guide"
import NewsArticles from "@/components/news-articles"
import WhyChooseUs from "@/components/why-choose-us"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingActionButtons from "@/components/floating-action-buttons"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Amenities />
      <UserGuide />
      <NewsArticles />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActionButtons />
    </main>
  )
}
