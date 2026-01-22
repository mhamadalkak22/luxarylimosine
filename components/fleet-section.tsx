"use client"

import { Calendar, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const fleetData = [
  // 1. SUV - Lincoln Navigator
  {
    name: "Lincoln Navigator",
    type: "SUV",
    image: "/car/car/Lincoln Navigator/MYXJ_20260112173034058_save.jpg",
    modelYear: "New Model",
    seating: 6,
    slug: "lincoln-navigator",
  },
  // 2. SUV - Cadillac Escalade
  {
    name: "Cadillac Escalade",
    type: "SUV",
    image: "/car/car/Cadaliac Escalade/MYXJ_20260112173138965_save.jpg",
    modelYear: "2025",
    seating: 6,
    slug: "cadillac-escalade",
  },
  // 3. SUV - Chevy Suburban
  {
    name: "Chevy Suburban",
    type: "SUV",
    image: "/car/car/Chevy Suburban/MYXJ_20260112173304554_save.jpg",
    modelYear: "New Model",
    seating: 6,
    slug: "chevy-suburban",
  },
]

export function FleetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="fleet" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
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
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-tl from-orange-500/10 to-red-700/10 rounded-full blur-3xl pointer-events-none"
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
            Our Fleets
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore our perfect and
            <br />
            extensive fleet
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetData.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-[#FF4500] transition-all">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {vehicle.type}
                    </span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{vehicle.name}</h3>
                  <div className="space-y-2 mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        Model Year
                      </span>
                      <span className="font-semibold">{vehicle.modelYear}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-gray-400">
                        <Users className="h-4 w-4" />
                        Seating Capacity
                      </span>
                      <span className="font-semibold">{vehicle.seating}</span>
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="w-full bg-transparent border-2 border-white hover:bg-[#FF4500] hover:border-[#FF4500] text-white group/btn">
                      <a href={`/fleet/${vehicle.slug}`}>
                        <span className="flex items-center justify-between w-full">
                          <span className="font-bold text-lg">GET A QUOTE</span>
                          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
