"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VehicleCard } from "@/components/vehicle-card";
import { vehiclesData } from "@/lib/vehicles-data";
import { FloatingBookingButton } from "@/components/floating-booking-button";

export default function FleetPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vehicles = vehiclesData.map((vehicle) => ({
    name: vehicle.name,
    type: vehicle.type,
    image: vehicle.mainImage,
    modelYear: vehicle.modelYear,
    seating: vehicle.seating,
    slug: vehicle.slug,
  }));

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#FF4500] font-semibold mb-4 flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                ✱
              </motion.span>
              Our Fleet
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Luxury Fleet –{" "}
              <span className="text-[#FF4500]">SUVs, Sedans,</span>
              <br />
              Sprinters & Party Buses in Chicago
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Explore our premium collection of luxury vehicles. From elegant
              SUVs to spacious party buses, we have the perfect vehicle for any
              occasion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section ref={ref} className="py-20 bg-zinc-950 relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-[700px] h-[700px] bg-gradient-to-br from-[#FF4500]/15 to-red-600/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 150, 0],
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-tl from-orange-500/10 to-red-700/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* SUVs Section - 3 vehicles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#FF4500]" />
              <h2 className="text-3xl md:text-4xl font-bold">Premium SUVs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.slice(0, 3).map((vehicle, index) => (
                <VehicleCard key={vehicle.slug} {...vehicle} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Limousines Section - 3 vehicles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#FF4500]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Stretch Limousines
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.slice(3, 6).map((vehicle, index) => (
                <VehicleCard
                  key={vehicle.slug}
                  {...vehicle}
                  index={index + 3}
                />
              ))}
            </div>
          </motion.div>

          {/* Mercedes Sprinters - 4 vehicles (incl. Mercedes Benz Freightliner - Shuttle Style) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#FF4500]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Mercedes Sprinter Vans
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vehicles.slice(6, 10).map((vehicle, index) => (
                <VehicleCard
                  key={vehicle.slug}
                  {...vehicle}
                  index={index + 6}
                />
              ))}
            </div>
          </motion.div>

          {/* Ford Party Buses - 3 vehicles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#FF4500]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Ford Party Buses
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.slice(10, 13).map((vehicle, index) => (
                <VehicleCard
                  key={vehicle.slug}
                  {...vehicle}
                  index={index + 10}
                />
              ))}
            </div>
          </motion.div>

          {/* Mercedes Benz Freightliner - 2 vehicles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#FF4500]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Mercedes Benz Freightliner
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.slice(13, 15).map((vehicle, index) => (
                <VehicleCard
                  key={vehicle.slug}
                  {...vehicle}
                  index={index + 13}
                />
              ))}
            </div>
          </motion.div>

          {/* Luxury Coach Buses - 3 vehicles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#FF4500]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Luxury Coach Buses
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.slice(15, 18).map((vehicle, index) => (
                <VehicleCard
                  key={vehicle.slug}
                  {...vehicle}
                  index={index + 15}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Fleet */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#FF4500]/15 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#FF4500] font-semibold mb-4 flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                ✱
              </motion.span>
              Fleet Features
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Fleet?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Immaculate Condition",
                description:
                  "Every vehicle is meticulously maintained and detailed",
              },
              {
                title: "Latest Models",
                description: "Our fleet features the newest luxury vehicles",
              },
              {
                title: "Variety of Options",
                description:
                  "From intimate rides to large group transportation",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
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
              Ready to Experience
              <br />
              <span className="text-[#FF4500]">Luxury on Wheels?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Reserve your preferred vehicle today and travel in ultimate
              comfort and style
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
      <FloatingBookingButton />
    </main>
  );
}
