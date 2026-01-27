"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, Clock, Facebook, Instagram, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "(+1) 773-550-2500",
      href: "tel:+17735502500",
      description: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "Limoride247@gmail.com",
      href: "mailto:Limoride247@gmail.com",
      description: "Quick Response",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "8536 W Lawrence Ave Norridge IL 60706",
      href: "https://www.google.com/maps/search/8536+W+Lawrence+Ave+Norridge+IL+60706",
      description: "Serving Chicagoland",
    },
  ]

  const services = [
    "Airport Transfer",
    "Corporate Travel",
    "Wedding Service",
    "City Tours",
    "Special Events",
    "Hourly Service",
    "Other",
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
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
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Ready to experience luxury transportation? Reach out to us today and let's plan your perfect ride.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href?.startsWith("http") ? "_blank" : undefined}
                  rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF4500]/20"
                  >
                    <Icon className="h-8 w-8 text-[#FF4500]" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-300 mb-2">{info.value}</p>
                  <p className="text-gray-500 text-sm">{info.description}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-white/25 border border-white/30 placeholder:text-white/70 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/40 h-12 text-white"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-white/25 border border-white/30 placeholder:text-white/70 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/40 h-12 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="bg-white/25 border border-white/30 placeholder:text-white/70 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/40 h-12 text-white"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Type *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/25 border border-white/30 rounded-md h-12 px-3 text-white placeholder:text-white/70 focus:border-[#FF4500] focus:outline-none focus:ring-2 focus:ring-[#FF4500]/40"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-white/25 border border-white/30 placeholder:text-white/70 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/40 h-12 text-white"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your transportation needs..."
                    rows={6}
                    className="bg-white/25 border border-white/30 placeholder:text-white/70 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/40 text-white resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white h-14 text-lg rounded-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : submitted ? (
                        <>
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            ✓
                          </motion.span>
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center"
                  >
                    <Clock className="h-8 w-8 text-[#FF4500]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-[#FF4500] font-semibold">Available 24 Hours, 7 Days a Week</p>
                  </div>
                </div>
              </motion.div>

              {/* Why Contact Us */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    "Quick response within 24 hours",
                    "Professional chauffeur service",
                    "Premium luxury fleet",
                    "Competitive pricing",
                    "24/7 availability",
                    "Real-time flight tracking",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#FF4500] rounded-full" />
                      <p className="text-gray-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    {
                      Icon: Map,
                      href: "https://www.google.com/maps/search/8536+W+Lawrence+Ave+Norridge+IL+60706",
                      label: "Google Maps",
                    },
                    {
                      Icon: Facebook,
                      href: "https://www.facebook.com/ChicagoLuxuryLimousine/",
                      label: "Facebook",
                    },
                    {
                      Icon: Instagram,
                      href: "https://www.instagram.com/chicago.luxury.limousine/",
                      label: "Instagram",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors"
                      aria-label={social.label}
                    >
                      <social.Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                  {/* TikTok */}
                  <motion.a
                    href="https://www.tiktok.com/@chicago.luxury.li"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Find Us</h2>
            <p className="text-gray-400 text-lg">Visit us or track your ride location</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-zinc-800"
          >
            <iframe
              src="https://www.google.com/maps?ll=41.986515,-87.835654&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=808+W+Higgins+Rd+1-+b+Park+Ridge,+IL+60068+USA&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingBookingButton />
    </main>
  )
}

