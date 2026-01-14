"use client";

import {
  Shield,
  Briefcase,
  Plane,
  MapPin,
  Crown,
  PartyPopper,
  Heart,
  Calendar,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBookingButton } from "@/components/floating-booking-button";

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Shield,
      title: "Security Chauffeur",
      description: "Discreet and professional drivers for secure VIP movement.",
      features: [
        "Background-checked drivers",
        "Confidential service",
        "Advanced security protocols",
        "VIP-level discretion",
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description:
        "Reliable transportation for executives, meetings, and business events.",
      features: [
        "Professional chauffeurs",
        "On-time guarantee",
        "Corporate accounts",
        "Fleet for groups",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      description:
        "Seamless, on-time pickups and drop-offs from O'Hare, Midway, and private terminals.",
      features: [
        "Flight tracking",
        "Meet & greet service",
        "Luggage assistance",
        "24/7 availability",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "City Tours",
      description:
        "Explore Chicago in comfort and style with a private chauffeur.",
      features: [
        "Custom tour routes",
        "Knowledgeable drivers",
        "Flexible scheduling",
        "Photo opportunities",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Crown,
      title: "VIP Service",
      description:
        "White-glove transportation for high-profile clients and special occasions.",
      features: [
        "Premium luxury vehicles",
        "Personal concierge",
        "Red carpet treatment",
        "Privacy guaranteed",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: PartyPopper,
      title: "Event Chauffeur",
      description:
        "Limo and bus services for concerts, galas, sporting events, and more.",
      features: [
        "Group transportation",
        "Event coordination",
        "Multiple stops",
        "Professional service",
      ],
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Heart,
      title: "Prom Limo Service",
      description:
        "Arrive in luxury and style — a night to remember for prom-goers.",
      features: [
        "Safe & supervised",
        "Photos & memories",
        "Multiple pick-ups",
        "Parent tracking",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Wedding Limo & Shuttle Service",
      description:
        "Perfect for weddings, including bridal party transportation, guest shuttles, and elegant getaways for the newlyweds.",
      features: [
        "Bridal packages",
        "Guest shuttles",
        "Decorated vehicles",
        "Just married signage",
      ],
      color: "from-rose-500 to-pink-500",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service for your convenience",
    },
    {
      icon: Star,
      title: "Professional Drivers",
      description: "Licensed, experienced chauffeurs",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete coverage for peace of mind",
    },
    {
      icon: CheckCircle,
      title: "On-Time Guarantee",
      description: "We value your time as much as you do",
    },
  ];

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
            className="text-center max-w-4xl mx-auto"
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
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Premium Luxury Ground
              <br />
              <span className="text-[#FF4500]">Transportation Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              From airport transfers to weddings and corporate events — we
              deliver elegance, comfort, and punctuality for every occasion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full"
                >
                  <a href="/contact">Book Now</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full"
                >
                  <a href="tel:+17084975200">Call Us</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-zinc-950 relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Transportation Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Choose from our diverse range of luxury transportation services
              tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all group relative overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF4500]/20 relative z-10"
                  >
                    <Icon className="h-8 w-8 text-[#FF4500]" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 relative z-10">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + idx * 0.05,
                        }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle className="h-4 w-4 text-[#FF4500] flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10"
                  >
                    <Button
                      asChild
                      className="w-12 h-12 bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full p-0 flex items-center justify-center"
                    >
                      <a href="/fleet">
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl"
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
              Service Benefits
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience the difference with Chicago Luxury Limousine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FF4500]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF4500]/20"
                  >
                    <Icon className="h-8 w-8 text-[#FF4500]" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
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
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to Book Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Service",
                description:
                  "Select from our range of luxury transportation options",
              },
              {
                step: "2",
                title: "Book & Confirm",
                description: "Contact us via phone, email, or our booking form",
              },
              {
                step: "3",
                title: "Enjoy Your Ride",
                description: "Sit back and experience premium luxury service",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-[#FF4500] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>

                {/* Arrow */}
                {index < 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="hidden md:block absolute top-10 -right-4 text-[#FF4500]"
                  >
                    <ArrowRight className="h-8 w-8" />
                  </motion.div>
                )}
              </motion.div>
            ))}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Book Your
                <br />
                <span className="text-[#FF4500]">Luxury Transportation?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact us today and let us take care of your transportation
                needs with style and professionalism
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full flex items-center gap-2"
                  >
                    <a href="/contact">
                      Book Now
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
                    <a href="tel:+17084975200">
                      (+1) 708-497-5200
                      <Phone className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <div className="mt-8 flex items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingBookingButton />
    </main>
  );
}
