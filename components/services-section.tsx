"use client"

import { Shield, Briefcase, MapPin, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Shield,
    title: "Security Chauffeur",
    description: "Discreet and professional drivers for secure VIP movement.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Reliable transportation for executives, meetings, and business events.",
  },
  {
    icon: MapPin,
    title: "City Tours",
    description: "Explore Chicago in comfort and style with a private chauffeur.",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Seamless, on-time pickups and drop-offs from O'Hare, Midway, and private terminals.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-zinc-950 relative overflow-hidden" ref={ref}>
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -150, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-20 w-[500px] h-[500px] bg-[#FF4500]/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-20 w-[550px] h-[550px] bg-red-600/12 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none"
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
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="text-2xl"
            >
              ✱
            </motion.span>
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Complete Luxury Ground
            <br />
            Transportation Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Explore our premium car rental services, tailored to fit every travel need. Choose from a diverse fleet and
            enjoy flexible rental plans designed for your convenience and comfort.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 mx-auto group">
              View All Service
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#FF4500] transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF4500]/20 transition-colors"
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
