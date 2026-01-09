"use client"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const serviceAreas = [
  "Downtown Chicago",
  "O'Hare International Airport",
  "Midway International Airport",
  "Naperville",
  "Schaumburg",
  "Oak Brook",
  "Rosemont",
  "Evanston",
  "Aurora",
  "Joliet",
  "Lake Forest",
  "Winnetka",
]

export function ServiceAreasSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
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
            Service Areas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Serve Throughout
            <br />
            Chicagoland Area
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From downtown Chicago to surrounding suburbs, airports, and special event venues — we've got you covered.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#FF4500] transition-all group"
            >
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <MapPin className="h-5 w-5 text-[#FF4500]" />
                </motion.div>
                <span className="font-semibold">{area}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
