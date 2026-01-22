"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Percent, Sparkles } from "lucide-react";

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-[#FF4500] via-orange-500 to-[#FF6347] text-white py-3 px-4 z-[100] shadow-lg"
        >
          <div className="container mx-auto flex items-center justify-center gap-3 relative">
            {/* Sparkle Icons */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </motion.div>

            {/* Discount Text */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-bold text-lg md:text-xl"
              >
                20% OFF
              </motion.span>
              <Percent className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
              <span className="text-sm md:text-base font-medium">
                on all bookings - Limited Time Offer!
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-all"
              aria-label="Close banner"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
