import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Limo Service in Chicago | Airport & Corporate Transportation",
  description:
    "Premium limo service in Chicago offering airport transfers, corporate transportation, and luxury chauffeur services. Book your ride today. Best limo service in Chicago with professional chauffeurs and luxury fleet.",
  keywords: [
    "Chicago limo service",
    "Limo service Chicago",
    "Luxury limo Chicago",
    "Car service Chicago",
    "Private car service Chicago",
    "Executive limo service Chicago",
    "Book limo Chicago",
    "Hire limo Chicago",
    "Limo rental Chicago",
    "Rent a limo Chicago",
    "Professional limo service Chicago",
    "Best limo service in Chicago",
    "Affordable limo service Chicago",
    "Chicago airport limo",
    "O'Hare airport limo service",
    "Midway airport limo service",
    "Airport transfer Chicago limo",
    "Luxury airport transportation Chicago",
    "Corporate limo service Chicago",
    "Executive transportation Chicago",
    "Business car service Chicago",
    "CEO limo service Chicago",
    "Wedding limo Chicago",
    "Luxury wedding transportation Chicago",
    "Wedding car rental Chicago",
    "luxury black car service in Chicago",
    "chauffeur driven limo Chicago",
    "VIP limo service Chicago",
    "hourly limo service Chicago",
    "premium limousine service Chicago",
    "limo service near me Chicago",
    "chauffeur service near me Chicago",
    "luxury car service near Chicago IL",
    "Chicago IL limo company",
    "Cadillac Escalade limo Chicago",
    "Luxury SUV limo Chicago",
    "Black SUV limo service Chicago",
    "Stretch limo Chicago",
    "how much does a limo cost in Chicago",
    "Chicago limo vs Uber Black",
    "why choose limo service in Chicago",
  ],
  authors: [{ name: "Chicago Luxury Limousine" }],
  creator: "Chicago Luxury Limousine",
  publisher: "Chicago Luxury Limousine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://limolux.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Limo Service in Chicago | Airport & Corporate Transportation",
    description:
      "Premium limo service in Chicago offering airport transfers, corporate transportation, and luxury chauffeur services. Book your ride today.",
    url: "https://limolux.vercel.app",
    siteName: "Chicago Luxury Limousine",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Chicago Luxury Limousine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Limo Service in Chicago | Airport & Corporate Transportation",
    description:
      "Premium limo service in Chicago offering airport transfers, corporate transportation, and luxury chauffeur services.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
