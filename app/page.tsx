import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FleetSection } from "@/components/fleet-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { Footer } from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <Footer />
      <FloatingBookingButton />
    </main>
  )
}
