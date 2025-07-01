import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import BrandsSection from "@/components/brands-section"
import WhyChooseSection from "@/components/why-choose-section"
import TrustedBySection from "@/components/trusted-by-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <BrandsSection />
      <WhyChooseSection />
      <TrustedBySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
