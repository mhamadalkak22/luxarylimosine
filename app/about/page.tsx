"use client"

import { useState } from "react"
import { Car, Users, Shield, Clock, Award, Star, Phone, MessageCircle, CheckCircle, MapPin, Heart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const stats = [
    { number: "20+", label: "Years Experience", icon: Award },
    { number: "50K+", label: "Happy Clients", icon: Users },
    { number: "100+", label: "Luxury Vehicles", icon: Car },
    { number: "24/7", label: "Available Service", icon: Clock },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. All our vehicles undergo regular maintenance and safety inspections.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every ride, ensuring the highest quality of service for our clients.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "We treat every client like family, providing personalized service and attention to detail.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Punctuality and dependability are at the core of our service. We're always on time, every time.",
      color: "from-blue-500 to-purple-500",
    },
  ]

  const team = [
    {
      name: "Professional Chauffeurs",
      role: "Licensed & Experienced",
      description: "Our drivers have 20+ years of experience and are fully licensed, insured, and background-checked.",
      icon: Users,
    },
    {
      name: "24/7 Support Team",
      role: "Always Available",
      description: "Our customer support team is available around the clock to assist you with any needs.",
      icon: Clock,
    },
    {
      name: "Fleet Managers",
      role: "Vehicle Maintenance",
      description: "Our team ensures every vehicle is in pristine condition and ready for your journey.",
      icon: Car,
    },
  ]

  const milestones = [
    { year: "2003", title: "Company Founded", description: "Started with a vision to provide luxury transportation in Chicago" },
    { year: "2008", title: "Fleet Expansion", description: "Expanded our fleet to 25 luxury vehicles" },
    { year: "2015", title: "Award Winner", description: "Recognized as Best Limousine Service in Chicago" },
    { year: "2020", title: "50K+ Clients", description: "Served over 50,000 satisfied clients" },
    { year: "2024", title: "100+ Vehicles", description: "Grew to over 100 premium vehicles" },
  ]

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#FF4500] font-semibold mb-4 flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-2xl"
                >
                  ✱
                </motion.span>
                About Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Your Trusted Partner in{" "}
                <span className="text-[#FF4500]">Luxury Transportation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                For over 20 years, Chicago Luxury Limousine has been setting the standard for premium transportation services in the Chicagoland area. We combine luxury, professionalism, and reliability to create unforgettable experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full">
                    <a href="/contact">Contact Us</a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full">
                    <a href="tel:+17084975200">Call Now</a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden h-[600px]"
              >
                <img
                  src="/luxury-cadillac-escalade-suv-at-sunset-desert-land.jpg"
                  alt="Luxury Vehicle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-3xl font-bold text-[#FF4500]"
                      >
                        20+
                      </motion.div>
                      <div className="text-sm text-gray-400">Years</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="text-3xl font-bold text-[#FF4500]"
                      >
                        50K+
                      </motion.div>
                      <div className="text-sm text-gray-400">Clients</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-black border border-zinc-800 rounded-3xl p-8 text-center hover:border-[#FF4500] transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FF4500]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF4500]/20"
                  >
                    <Icon className="h-8 w-8 text-[#FF4500]" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-5xl font-bold text-[#FF4500] mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-20 bg-black relative overflow-hidden">
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
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Journey of Excellence
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From humble beginnings to becoming Chicago's premier luxury transportation provider
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF4500] to-red-600"
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#FF4500] transition-all"
                    >
                      <div className="text-3xl font-bold text-[#FF4500] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-8 h-8 bg-[#FF4500] rounded-full border-4 border-black z-10"
                  />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
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
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our core values shape every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF4500]/20 relative z-10"
                  >
                    <Icon className="h-8 w-8 text-[#FF4500]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
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
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Professionals
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Dedicated experts committed to delivering exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => {
              const Icon = member.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all group text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-[#FF4500]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF4500]/20"
                  >
                    <Icon className="h-10 w-10 text-[#FF4500]" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#FF4500] mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Chicago Luxury Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              "20+ years of industry experience",
              "Professional licensed chauffeurs",
              "Premium luxury fleet",
              "24/7 availability",
              "Real-time flight tracking",
              "Competitive pricing",
              "Pristine vehicle maintenance",
              "Corporate account options",
              "Special event expertise",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-black border border-zinc-800 rounded-2xl p-6 hover:border-[#FF4500] transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="h-6 w-6 text-[#FF4500]" />
                </motion.div>
                <p className="text-gray-300">{feature}</p>
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Experience
                <br />
                <span className="text-[#FF4500]">Luxury Transportation?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Book your ride today and discover why we're Chicago's most trusted limousine service
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full flex items-center gap-2">
                    <a href="/contact">
                      Book Now
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full flex items-center gap-2">
                    <a href="tel:+17084975200">
                      Call Us
                      <Phone className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

