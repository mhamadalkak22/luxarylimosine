"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, Users, Wifi, Wind, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { FloatingBookingButton } from "@/components/floating-booking-button";
import { getVehicleBySlug, type VehicleDetails } from "@/lib/vehicles-data";
import { notFound, useParams } from "next/navigation";

export default function VehicleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const vehicle = getVehicleBySlug(slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (!vehicle) {
    notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section with Vehicle Name */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#FF4500]/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              asChild
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-zinc-900"
            >
              <a href="/fleet" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Fleet
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
              <img
                src="/logo.png"
                alt="Chicago Luxury Limousine"
                className="h-12 mx-auto relative z-10"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              {vehicle.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-[#FF4500] font-semibold mb-6"
            >
              {vehicle.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - GET A QUOTE Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-black border border-zinc-800 rounded-3xl p-8 space-y-6">
                <h2 className="text-3xl font-bold mb-6">GET A QUOTE</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="flex items-center gap-3 text-gray-400">
                      <Calendar className="h-5 w-5" />
                      Model Year
                    </span>
                    <span className="font-semibold text-lg">{vehicle.modelYear}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="flex items-center gap-3 text-gray-400">
                      <Users className="h-5 w-5" />
                      Seating Capacity
                    </span>
                    <span className="font-semibold text-lg">{vehicle.seating}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="flex items-center gap-3 text-gray-400">
                      <Wifi className="h-5 w-5" />
                      Wi-Fi
                    </span>
                    <span className="font-semibold text-lg">{vehicle.wifi ? "Yes" : "No"}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="flex items-center gap-3 text-gray-400">
                      <Wind className="h-5 w-5" />
                      Climate Control
                    </span>
                    <span className="font-semibold text-lg">{vehicle.climateControl}</span>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white py-6 text-lg rounded-full"
                    >
                      <motion.span
                        animate={{ 
                          color: ["#FFFFFF", "#FF0000", "#FFFFFF"]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        GET A QUOTE
                      </motion.span>
                      <MessageCircle className="h-5 w-5 ml-2" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-black py-6 text-lg rounded-full"
                    >
                      <a href="tel:+17735502500" className="flex items-center justify-center gap-2">
                        <Phone className="h-5 w-5" />
                        (+1) 773-550-2500
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white py-6 text-lg rounded-full"
                    >
                      <a href="https://wa.me/17735502500" className="flex items-center justify-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image Carousel and Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Image Carousel */}
              <div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
                <div className="relative aspect-[4/3]">
                  <img
                    src={vehicle.images[currentImageIndex]}
                    alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {vehicle.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-[#FF4500] w-8"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-[#FF4500]" />
                  <h2 className="text-2xl font-bold">Powerful Conveyance</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">{vehicle.description}</p>

                {/* Ideal For */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#FF4500]">
                    <span className="text-xl">✱</span> Ideal For:
                  </h3>
                  <ul className="space-y-2">
                    {vehicle.idealFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#FF4500] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FF4500]">
                    <span className="text-xl">✱</span> Features:
                  </h3>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#FF4500] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/5 to-red-600/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Book
              <br />
              <span className="text-[#FF4500]">This Vehicle?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to reserve your {vehicle.name} and travel in style
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full flex items-center gap-2"
                >
                  <a href="/contact">
                    Book Your Ride
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full flex items-center gap-2"
                >
                  <a href="tel:+17735502500">
                    (+1) 773-550-2500
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        vehicleName={vehicle.name}
      />

      {/* Floating Booking Button */}
      <FloatingBookingButton />
    </main>
  );
}
