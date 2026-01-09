"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Map } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <a href="/" className="flex items-center gap-3 mb-6 cursor-pointer">
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                  <path d="M25 5L30 15H40L32 23L35 33L25 27L15 33L18 23L10 15H20L25 5Z" fill="#FF4500" />
                  <rect x="15" y="30" width="20" height="8" rx="1" fill="white" />
                  <circle cx="20" cy="42" r="3" fill="#FF4500" />
                  <circle cx="30" cy="42" r="3" fill="#FF4500" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-lg font-bold">CHICAGO</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Luxury Limousine</p>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for luxury transportation services in Chicago and surrounding areas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Our Fleet", "Contact"].map((link, index) => {
                const getHref = () => {
                  if (link === "Home") return "/"
                  if (link === "About Us") return "/about"
                  if (link === "Contact") return "/contact"
                  return `/#${link.toLowerCase().replace(/\s+/g, "")}`
                }
                
                return (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={getHref()}
                      className="text-gray-400 hover:text-[#FF4500] transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Airport Transfer", "Corporate Travel", "Wedding Service", "City Tours"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="text-gray-400"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", value: "(+1) 708-497-5200", href: "tel:+17084975200" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "Limoride247@gmail.com",
                  href: "mailto:Limoride247@gmail.com",
                },
                { icon: MapPin, label: "Location", value: "808 W Higgins Rd 1-b, Park Ridge, IL 60068", href: "https://www.google.com/maps/dir//808+W+Higgins+Rd+1-+b+Park+Ridge,+IL+60068+USA/@41.9865154,-87.8356541,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x880fc9f2d17bffff:0xdc1674a2439a00d7" },
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.li
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                      <Icon className="h-5 w-5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-white hover:text-[#FF4500] transition-colors"
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white">{contact.value}</p>
                      )}
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Social & Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-zinc-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Chicago Luxury Limousine. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms & Conditions"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-[#FF4500] text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {[
                {
                  Icon: Map,
                  href: "https://www.google.com/maps/dir//808+W+Higgins+Rd+1-+b+Park+Ridge,+IL+60068+USA/@41.9865154,-87.8356541,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x880fc9f2d17bffff:0xdc1674a2439a00d7",
                  label: "Google Maps",
                },
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/ChicagoLuxuryLimousine/about_contact_and_basic_info/?id=61578963085387&sk=about_contact_and_basic_info#",
                  label: "Facebook",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/chicago.luxury.limousine/",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="h-5 w-5" />
                </motion.a>
              ))}
              {/* TikTok Icon - Custom SVG */}
              <motion.a
                href="https://www.tiktok.com/@chicago.luxury.li?_t=ZT-8yR7bi2I0UZ&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.3 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
