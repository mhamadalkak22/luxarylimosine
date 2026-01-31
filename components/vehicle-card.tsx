"use client";

import { Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface VehicleCardProps {
  name: string;
  type: "SUV" | "LIMO" | "BUSS";
  image: string;
  modelYear: string;
  seating: number | string;
  index: number;
  slug?: string;
}

export function VehicleCard({
  name,
  type,
  image,
  modelYear,
  seating,
  index,
  slug,
}: VehicleCardProps) {
  // Generate slug from name if not provided
  const vehicleSlug =
    slug ||
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-[#FF4500] transition-all">
        <div className="relative h-64 overflow-hidden bg-zinc-800">
          <motion.img
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ duration: 0.5 }}
            src={encodeURI(image)}
            alt={name}
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="absolute top-4 left-4"
          >
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
              {type}
            </span>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{name}</h3>
          <div className="space-y-2 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-4 w-4" />
                Model Year
              </span>
              <span className="font-semibold">{modelYear}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-gray-400">
                <Users className="h-4 w-4" />
                Seating Capacity
              </span>
              <span className="font-semibold">{seating}</span>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="w-full bg-transparent border-2 border-white hover:bg-[#FF4500] hover:border-[#FF4500] text-white group/btn"
            >
              <a href={`/fleet/${vehicleSlug}`}>
                <span className="flex items-center justify-between w-full">
                  <motion.span
                    className="font-bold text-lg"
                    animate={{
                      color: ["#FFFFFF", "#FF0000", "#FFFFFF"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    GET A QUOTE
                  </motion.span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
