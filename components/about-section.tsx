"use client"

import { MessageCircle, Smartphone, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, 150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with Arch Effect */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[200px] overflow-hidden h-[600px] bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200"
            >
              <img
                src="/range.jpeg"
                alt="Luxury Cadillac Escalade"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#FF4500] font-semibold mb-4 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="text-2xl"
                >
                  ✱
                </motion.span>
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Your trusted partner in luxury transportation
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At <span className="text-white font-semibold">Chicago Luxury Limo Ride</span>, we go beyond just getting
                you from point A to B — we deliver a{" "}
                <span className="text-white font-semibold">first-class experience</span>. Whether it's an airport
                transfer, corporate trip, wedding, or special event, our professional chauffeurs and premium fleet
                ensure your journey is smooth, safe, and on time.
              </p>
            </motion.div>

            {/* Features */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center"
                >
                  <Smartphone className="h-8 w-8 text-[#FF4500]" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Easy Booking Process</h3>
                  <p className="text-gray-400">
                    We've streamlined our reservation system to make booking your ride fast, secure, and hassle-free —
                    available 24/7.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-[#FF4500]/10 rounded-2xl flex items-center justify-center"
                >
                  <Car className="h-8 w-8 text-[#FF4500]" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Convenient Pick-up & Drop-off</h3>
                  <p className="text-gray-400">
                    From O'Hare & Midway to regional suburbs and events, we offer direct curbside pickups and tailored
                    drop-offs to meet your schedule.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-6 text-lg rounded-full">
                  <a href="/about">Learn More</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full w-14 h-14">
                  <MessageCircle className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
