"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Corporate Executive",
    rating: 5,
    text: "Absolutely phenomenal service! The chauffeur was professional, the vehicle was immaculate, and we arrived at our corporate event on time and in style. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Wedding Client",
    rating: 5,
    text: "Our wedding day transportation was flawless. The stretch limo was stunning and the driver made sure everything ran smoothly. Best decision we made!",
  },
  {
    name: "Emily Rodriguez",
    role: "Frequent Traveler",
    rating: 5,
    text: "I use Chicago Luxury Limo for all my airport transfers. Always punctual, always professional. The real-time flight tracking gives me peace of mind.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  return (
    <section className="py-20 bg-zinc-950" ref={ref}>
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
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 bg-[#FF4500] rounded-full blur-3xl"
            />

            <div className="relative z-10">
              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="icon"
                    onClick={prev}
                    className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="icon"
                    onClick={next}
                    className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </motion.div>
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    rotateY: { duration: 0.4 },
                  }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <Star className="h-6 w-6 fill-[#FF4500] text-[#FF4500]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">"{current.text}"</p>
                  <h4 className="text-xl font-bold mb-1">{current.name}</h4>
                  <p className="text-gray-400">{current.role}</p>
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1)
                      setCurrentIndex(i)
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-3 rounded-full transition-all ${
                      i === currentIndex ? "bg-[#FF4500] w-8" : "bg-gray-600 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
