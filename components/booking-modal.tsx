"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, MapPin, Calendar, Clock, Users, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

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

    try {
      // EmailJS Configuration
      const serviceId = "service_67ey4mm";
      const templateId = "template_7dio5rr";
      const publicKey = "nylXtr816ANF9Bl9g";

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        pickup_location: formData.pickupLocation,
        date: formData.date,
        time: formData.time,
        dropoff_location: formData.dropoffLocation,
        passengers: formData.passengers || "Not specified",
        hours: formData.hours || "Not specified",
        special_request: formData.specialRequest || "None",
        vehicle_name: vehicleName || "Not specified",
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

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
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      alert("Failed to send quote request. Please try again or contact us directly.");
    }
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
            className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl w-[95%] max-w-[340px] my-2 relative shadow-2xl"
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
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-50 w-7 h-7 md:w-8 md:h-8 bg-zinc-800 hover:bg-[#FF4500] rounded-full flex items-center justify-center transition-all group cursor-pointer"
            >
              <X className="h-3.5 w-3.5 md:h-4 md:w-4 text-white group-hover:rotate-90 transition-transform" />
            </button>

            {/* Content */}
            <div className="p-3 md:p-5 relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block text-[#FF4500] text-base md:text-lg mb-0.5"
                >
                  ✱
                </motion.div>
                <h2 className="text-base md:text-xl font-bold mb-0.5">Get A Quote</h2>
                {vehicleName && (
                  <p className="text-gray-400 text-[9px] md:text-[10px]">
                    for <span className="text-[#FF4500] font-semibold">{vehicleName}</span>
                  </p>
                )}
                <p className="text-gray-500 text-[9px] md:text-[10px] mt-0.5">Fill out the form and we'll get back to you shortly</p>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-1.5 md:space-y-2">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                    <User className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
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
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-7 md:h-8 text-white text-[10px] md:text-[11px] px-1.5 md:px-2"
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
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-7 md:h-8 text-white text-[10px] md:text-[11px] px-1.5 md:px-2"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Phone & Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="grid md:grid-cols-2 gap-1.5 md:gap-2"
                >
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                      <Phone className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="71 123 456"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-7 md:h-8 text-white text-[10px] md:text-[11px] px-1.5 md:px-2"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                      <Mail className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-7 md:h-8 text-white text-[10px] md:text-[11px] px-1.5 md:px-2"
                    />
                  </div>
                </motion.div>

                {/* Pickup Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                    Pick up Location *
                  </label>
                  <Input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    placeholder="Enter pickup address"
                    className="bg-black border-zinc-700 focus:border-[#FF4500] h-11 text-white text-sm"
                  />
                </motion.div>

                {/* Date & Time */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid md:grid-cols-2 gap-1.5 md:gap-2"
                >
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                      <Calendar className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                      Date *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      placeholder="mm/dd/yyyy"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-11 text-white text-sm [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                      Time *
                    </label>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      placeholder="--:--"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-11 text-white text-sm [color-scheme:dark]"
                    />
                  </div>
                </motion.div>

                {/* Drop off Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                    Drop off Location *
                  </label>
                  <Input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    required
                    placeholder="Enter dropoff address"
                    className="bg-black border-zinc-700 focus:border-[#FF4500] h-11 text-white text-sm"
                  />
                </motion.div>

                {/* Passengers & Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="grid md:grid-cols-2 gap-1.5 md:gap-2"
                >
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                      <Users className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                      How Many Passengers
                    </label>
                    <Input
                      type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      placeholder="Number of passengers"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-7 md:h-8 text-white text-[10px] md:text-[11px] px-1.5 md:px-2"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                      How Many Hours
                    </label>
                    <Input
                      type="number"
                      name="hours"
                      value={formData.hours}
                      onChange={handleChange}
                      placeholder="Duration in hours"
                      className="bg-black border-zinc-700 focus:border-[#FF4500] h-7 md:h-8 text-white text-[10px] md:text-[11px] px-1.5 md:px-2"
                    />
                  </div>
                </motion.div>

                {/* Special Request */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-[9px] md:text-[10px] font-semibold mb-0.5 md:mb-1 flex items-center gap-1">
                    <MessageSquare className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#FF4500]" />
                    Special Request
                  </label>
                  <Textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    placeholder="Any special requirements or requests..."
                    rows={2}
                    className="bg-black border-zinc-700 focus:border-[#FF4500] text-white text-[10px] md:text-[11px] resize-none px-1.5 md:px-2 py-1 md:py-1.5"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="pt-0.5 md:pt-1"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white h-8 md:h-9 text-[10px] md:text-xs rounded-full flex items-center justify-center gap-1 md:gap-1.5 font-bold shadow-lg shadow-[#FF4500]/20"
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
