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
import { DiscountBanner } from "@/components/discount-banner"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chicago Luxury Limousine",
    image: "https://limolux.vercel.app/logo.png",
    "@id": "https://limolux.vercel.app",
    url: "https://limolux.vercel.app",
    telephone: "+17735502500",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8536 W Lawrence Ave",
      addressLocality: "Norridge",
      addressRegion: "IL",
      postalCode: "60706",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.986515,
      longitude: -87.835654,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/ChicagoLuxuryLimousine/",
      "https://www.instagram.com/chicago.luxury.limousine/",
      "https://www.tiktok.com/@chicago.luxury.li",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
    serviceArea: {
      "@type": "City",
      name: "Chicago",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Limousine Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfer Service",
            description: "Luxury airport limo service to O'Hare and Midway airports",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Travel Service",
            description: "Executive transportation for business professionals",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Limo Service",
            description: "Luxury wedding transportation in Chicago",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Chauffeur Service",
            description: "VIP security chauffeur service with background-checked drivers",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DiscountBanner />
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
    </>
  );
}
