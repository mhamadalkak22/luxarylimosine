"use client"

import { Car, User, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Car,
    title: "Premium Fleet",
    description: "A wide selection of luxury sedans, SUVs, limousines, and party buses to suit any occasion.",
  },
  {
    icon: User,
    title: "Experienced Chauffeurs",
    description: "Professional, courteous drivers with 20+ years of experience.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for airport transfers, events, and last-minute bookings.",
  },
  {
    icon: Target,
    title: "Punctual & Reliable",
    description: "Always on time, with real-time flight tracking and guaranteed pick-up schedules.",
  },
]

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#FF4500]/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"
      />

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -400],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          className="absolute w-2 h-2 bg-[#FF4500]/60 rounded-full pointer-events-none"
        />
      ))}

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
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Luxury Transportation Backed by
            <br />
            Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Features */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center"
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.5 }}
              className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-[#FF4500]"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 border-4 border-[#FF4500] rounded-full"
              />
              <img
                src="/chicago-skyline-at-dusk-aerial-view-willis-tower.jpg"
                alt="Chicago Skyline"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Features - Hidden on mobile, shown on large screens */}
          <div className="hidden lg:block space-y-8">
            {features.slice(2).map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
                  whileHover={{ x: -10 }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center"
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right Features - Mobile Layout */}
        <div className="lg:hidden mt-8 space-y-8">
          {features.slice(2).map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center"
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
