"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, MapPin, Calendar, Clock, Users, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleName?: string;
}

export function BookingModal({ isOpen, onClose, vehicleName }: BookingModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    pickupLocation: "",
    date: "",
    time: "",
    dropoffLocation: "",
    passengers: "",
    hours: "",
    specialRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        pickupLocation: "",
        date: "",
        time: "",
        dropoffLocation: "",
        passengers: "",
        hours: "",
        specialRequest: "",
      });
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border-2 border-zinc-800 rounded-3xl w-full max-w-2xl my-8 relative shadow-2xl"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF4500]/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-zinc-800 hover:bg-[#FF4500] rounded-full flex items-center justify-center transition-all group"
            >
              <X className="h-5 w-5 text-white group-hover:rotate-90 transition-transform" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10 relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block text-[#FF4500] text-3xl mb-4"
                >
                  ✱
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Get A Quote</h2>
                {vehicleName && (
                  <p className="text-gray-400 text-lg">
                    for <span className="text-[#FF4500] font-semibold">{vehicleName}</span>
                  </p>
                )}
                <p className="text-gray-500 mt-2">Fill out the form and we'll get back to you shortly</p>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-[#FF4500]" />
                    Name *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First"
                        className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last"
                        className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Phone & Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#FF4500]" />
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="71 123 456"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#FF4500]" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                    />
                  </div>
                </motion.div>

                {/* Pickup Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#FF4500]" />
                    Pick up Location *
                  </label>
                  <Input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    placeholder="Enter pickup address"
                    className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                  />
                </motion.div>

                {/* Date & Time */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#FF4500]" />
                      Date *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#FF4500]" />
                      Time *
                    </label>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                    />
                  </div>
                </motion.div>

                {/* Drop off Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#FF4500]" />
                    Drop off Location *
                  </label>
                  <Input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    required
                    placeholder="Enter dropoff address"
                    className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                  />
                </motion.div>

                {/* Passengers & Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#FF4500]" />
                      How Many Passengers
                    </label>
                    <Input
                      type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      placeholder="Number of passengers"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#FF4500]" />
                      How Many Hours
                    </label>
                    <Input
                      type="number"
                      name="hours"
                      value={formData.hours}
                      onChange={handleChange}
                      placeholder="Duration in hours"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-12 text-white"
                    />
                  </div>
                </motion.div>

                {/* Special Request */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-[#FF4500]" />
                    Special Request
                  </label>
                  <Textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    placeholder="Any special requirements or requests..."
                    rows={4}
                    className="bg-black border-zinc-700 focus:border-[#FF4500] text-white resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="pt-4"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white h-14 text-lg rounded-full flex items-center justify-center gap-2 font-bold shadow-lg shadow-[#FF4500]/20"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Submitting...
                        </>
                      ) : submitted ? (
                        <>
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="text-2xl"
                          >
                            ✓
                          </motion.span>
                          Quote Request Sent!
                        </>
                      ) : (
                        <>
                          Submit
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
