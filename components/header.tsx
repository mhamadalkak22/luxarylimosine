"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }} className="relative">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25 5L30 15H40L32 23L35 33L25 27L15 33L18 23L10 15H20L25 5Z" fill="#FF4500" />
                <rect x="15" y="30" width="20" height="8" rx="1" fill="white" />
                <circle cx="20" cy="42" r="3" fill="#FF4500" />
                <circle cx="30" cy="42" r="3" fill="#FF4500" />
              </svg>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">CHICAGO</h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Luxury Limousine</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center gap-8"
          >
            {["Home", "About Us", "Service", "Our Fleet", "Contact Us"].map((item, index) => {
              const getHref = () => {
                if (item === "Home") return "/"
                if (item === "About Us") return "/about"
                if (item === "Service") return "/services"
                if (item === "Contact Us") return "/contact"
                return `/#${item.toLowerCase().replace(/\s+/g, "")}`
              }
              
              return (
                <motion.a
                  key={item}
                  href={getHref()}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`${
                    index === 0 ? "text-[#FF4500] font-medium" : "text-white"
                  } hover:text-[#FF4500] transition-colors`}
                >
                  {item}
                </motion.a>
              )
            })}
          </motion.nav>

          {/* Call Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden md:flex items-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-6 rounded-full">
                <a href="tel:+17084975200">CALL US</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <Button asChild size="icon" className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full">
                <a href="tel:+17084975200">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {["Home", "About Us", "Service", "Our Fleet", "Contact Us"].map((item, index) => {
                  const getHref = () => {
                    if (item === "Home") return "/"
                    if (item === "About Us") return "/about"
                    if (item === "Service") return "/services"
                    if (item === "Contact Us") return "/contact"
                    return `/#${item.toLowerCase().replace(/\s+/g, "")}`
                  }
                  
                  return (
                    <motion.a
                      key={item}
                      href={getHref()}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`${index === 0 ? "text-[#FF4500] font-medium" : "text-white"} hover:text-[#FF4500]`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Button asChild className="bg-[#FF4500] hover:bg-[#FF6347] text-white w-full">
                    <a href="tel:+17084975200">CALL US</a>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
