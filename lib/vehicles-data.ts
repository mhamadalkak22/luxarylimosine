export interface VehicleDetails {
  name: string;
  slug: string;
  type: "SUV" | "LIMO" | "BUSS";
  modelYear: string;
  seating: number | string;
  mainImage: string;
  images: string[];
  wifi: boolean;
  climateControl: string;
  idealFor: string[];
  features: string[];
  description: string;
  tagline: string;
}

export const vehiclesData: VehicleDetails[] = [
  // SUVs - 3 vehicles
  {
    name: "Cadillac Escalade",
    slug: "cadillac-escalade",
    type: "SUV",
    modelYear: "2025",
    seating: 6,
    mainImage: "/Cadaliac Escalade.jpeg",
    images: [
      "/Cadaliac Escalade.jpeg",
      "/Cadaliac Escalade1.jpeg",
      "/Cadaliac Escalade2.jpeg",
    ],
    wifi: true,
    climateControl: "Tri-Zone Automatic",
    idealFor: ["Executive travel", "Corporate events", "VIP transportation"],
    features: [
      "Seating Capacity: 6 passengers",
      "Premium leather interior, OLED display, Super Cruise",
      "Interior: Premium sound system, advanced safety features",
    ],
    description: "The pinnacle of American luxury and performance.",
    tagline: "Executive Elegance",
  },
  {
    name: "Lincoln Navigator",
    slug: "lincoln-navigator",
    type: "SUV",
    modelYear: "New Model",
    seating: 6,
    mainImage: "/Lincoln Navigator.jpeg",
    images: [
      "/Lincoln Navigator.jpeg",
      "/Lincoln Navigator1.jpeg",
      "/Lincoln Navigator2.jpeg",
    ],
    wifi: true,
    climateControl: "Tri-Zone Automatic",
    idealFor: ["Family airport pickups", "Business guests", "Wedding parties"],
    features: [
      "Seating Capacity: 6 passengers",
      "Captain chairs, customizable ambient lighting, advanced noise reduction",
      "Interior: Captain chairs, customizable ambient lighting, advanced noise reduction",
    ],
    description: "Elegant, spacious, and packed with technology.",
    tagline: "Powerful Conveyance",
  },
  {
    name: "Chevy Suburban",
    slug: "chevy-suburban",
    type: "SUV",
    modelYear: "New Model",
    seating: 6,
    mainImage: "/Chevy Suburban 2025.jpeg",
    images: [
      "/Chevy Suburban 2025.jpeg",
      "/Chevy Suburban 1.jpeg",
      "/Chevy Suburban 2.jpeg",
    ],
    wifi: true,
    climateControl: "Tri-Zone Automatic",
    idealFor: ["Group travel", "Airport transfers", "Special events"],
    features: [
      "Seating Capacity: 6 passengers",
      "Spacious interior, premium amenities, smooth ride",
      "Interior: Advanced entertainment system, power liftgate",
    ],
    description: "Spacious comfort for the whole family.",
    tagline: "Spacious Comfort",
  },

  // Limousines - 3 vehicles
  {
    name: "Stretch Hummer",
    slug: "stretch-hummer",
    type: "LIMO",
    modelYear: "New Model",
    seating: 18,
    mainImage: "/car/Stretch Hummer.jpeg",
    images: [
      "/car/Stretch Hummer.jpeg",
      "/car/Stretch Hummer1.jpeg",
      "/car/Stretch Hummer2.jpeg",
    ],
    wifi: true,
    climateControl: "Multi-Zone Automatic",
    idealFor: [
      "Bachelor/Bachelorette parties",
      "Prom nights",
      "Night out events",
    ],
    features: [
      "Seating Capacity: 18 passengers",
      "Premium sound system, LED lighting, bar area",
      "Interior: Luxury seating, entertainment system, privacy divider",
    ],
    description: "Make a statement with this impressive stretch limousine.",
    tagline: "Party in Style",
  },
  {
    name: "Lincoln Navigator 16",
    slug: "lincoln-navigator-16",
    type: "LIMO",
    modelYear: "New Model",
    seating: 16,
    mainImage: "/car/lincon.jpeg",
    images: ["/car/lincon.jpeg", "/car/lincon1.jpeg", "/car/lincon2.jpeg"],
    wifi: true,
    climateControl: "Multi-Zone Automatic",
    idealFor: ["Wedding parties", "Corporate events", "Special celebrations"],
    features: [
      "Seating Capacity: 16 passengers",
      "Ambient lighting, premium bar, luxury seating",
      "Interior: State-of-the-art sound system, climate control",
    ],
    description: "Elegance and space combined for your special occasion.",
    tagline: "Elegant Celebrations",
  },
  {
    name: "Stretch MKT",
    slug: "stretch-mkt",
    type: "LIMO",
    modelYear: "New Model",
    seating: 10,
    mainImage: "/car/StretchMKT.jpeg",
    images: [
      "/car/StretchMKT.jpeg",
      "/car/StretchMKT1.jpeg",
      "/car/StretchMKT2.jpeg",
    ],
    wifi: true,
    climateControl: "Dual-Zone Automatic",
    idealFor: ["Small group celebrations", "Wine tours", "Anniversary events"],
    features: [
      "Seating Capacity: 10 passengers",
      "Premium interior, mood lighting, entertainment system",
      "Interior: Comfortable seating, minibar, privacy glass",
    ],
    description: "Intimate luxury for your special moments.",
    tagline: "Intimate Luxury",
  },

  // Mercedes Sprinters - 4 vehicles (incl. Mercedes Benz Freightliner - Shuttle Style)
  {
    name: "Mercedes – Executive Style",
    slug: "mercedes-executive-style",
    type: "BUSS",
    modelYear: "New Model",
    seating: 10,
    mainImage: "/car/car/Mercedesexecutivestyle.jpeg",
    images: [
      "/car//car/Mercedesexecutivestyle.jpeg",
      "/car/car/Mercedesexecutivestyle1.jpeg",
      "/car/car/Mercedesexecutivestyle2.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Corporate groups", "Executive shuttles", "Business meetings"],
    features: [
      "Seating Capacity: 10 passengers",
      "Executive seating, conference table, premium amenities",
      "Interior: Leather captain chairs, workspace, charging ports",
    ],
    description: "Executive comfort for business professionals.",
    tagline: "Executive Transport",
  },
  {
    name: "Mercedes – Limo Style",
    slug: "mercedes-limo-style",
    type: "BUSS",
    modelYear: "New Model",
    seating: 15,
    mainImage: "/car/car/Mercedesexecutivestyle.jpeg",
    images: [
      "/car/car/Mercedesexecutivestyle.jpeg",
      "/car/car/Mercedesexecutivestyle1.jpeg",
      "/car/car/Mercedesexecutivestyle2.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Wedding groups", "Special events", "VIP transportation"],
    features: [
      "Seating Capacity: 15 passengers",
      "Luxury seating, ambient lighting, premium sound",
      "Interior: Plush seating, entertainment system, bar area",
    ],
    description: "Limousine luxury in a spacious van format.",
    tagline: "Van Luxury",
  },
  {
    name: "Mercedes Shuttle – Style",
    slug: "mercedes-shuttle-style",
    type: "BUSS",
    modelYear: "New Model",
    seating: 15,
    mainImage: "/car/car/Mercedesexecutivestyle.jpeg",
    images: [
      "/car/car/Mercedesexecutivestyle.jpeg",
      "/car/car/Mercedesexecutivestyle1.jpeg",
      "/car//mercedesshuttle.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Airport shuttles", "Hotel transfers", "Group tours"],
    features: [
      "Seating Capacity: 15 passengers",
      "Comfortable seating, luggage space, smooth ride",
      "Interior: Climate controlled, entertainment options",
    ],
    description: "Comfortable group transportation with style.",
    tagline: "Shuttle Comfort",
  },
  {
    name: "Mercedes Benz Freightliner - Shuttle Style",
    slug: "mercedes-benz-freightliner-shuttle-style",
    type: "BUSS",
    modelYear: "New Model",
    seating: "35-45",
    mainImage: "/car/MercedesBenzFreightlinerShuttleStyle.jpeg",
    images: [
      "/car/MercedesBenzFreightlinerShuttleStyle.jpeg",
      "/car/MercedesBenzFreightlinerShuttleStyle1.jpeg",
      "/car/MercedesBenzFreightlinerShuttleStyle2.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: [
      "Convention shuttles",
      "Corporate transfers",
      "Large group transport",
    ],
    features: [
      "Seating Capacity: 35-45 passengers",
      "Comfortable shuttle seating, luggage storage, amenities",
      "Interior: Climate controlled, entertainment, storage",
    ],
    description: "Efficient luxury shuttle for large groups.",
    tagline: "Shuttle Excellence",
  },

  // Ford Party Buses - 3 vehicles
  {
    name: "22 FORD Party BUS – Shuttle Style",
    slug: "22-ford-party-bus-shuttle-style",
    type: "BUSS",
    modelYear: "New Model",
    seating: 22,
    mainImage: "/car/22 FORD Party BUSShuttle Style.jpeg",
    images: [
      "/car/22 FORD Party BUSShuttle Style.jpeg",
      "/car/22 FORD Party BUSShuttle Style1.jpeg",
      "/car/22 FORD Party BUS Shuttle Style2.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: [
      "Large group events",
      "Company outings",
      "Concert transportation",
    ],
    features: [
      "Seating Capacity: 22 passengers",
      "Spacious interior, entertainment system, LED lighting",
      "Interior: Party atmosphere, sound system, bar area",
    ],
    description: "Party on wheels for your group celebration.",
    tagline: "Group Party",
  },
  {
    name: "22 FORD Party BUS – Limo Style",
    slug: "22-ford-party-bus-limo-style",
    type: "LIMO",
    modelYear: "New Model",
    seating: 22,
    mainImage: "/car/22FORDPartyBUSLimoStyle.jpeg",
    images: [
      "/car/22FORDPartyBUSLimoStyle.jpeg",
      "/car/22FORDPartyBUSLimoStyle1.jpeg",
      "/car/22FORDPartyBUSLimoStyle2.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Bachelor parties", "Birthday celebrations", "Night club tours"],
    features: [
      "Seating Capacity: 22 passengers",
      "Premium party setup, club lighting, premium sound",
      "Interior: Dance floor, bar, LED displays",
    ],
    description: "Ultimate party experience on wheels.",
    tagline: "Party Luxury",
  },
  {
    name: "FORD Party BUS – Limo Style",
    slug: "ford-party-bus-limo-style-28",
    type: "BUSS",
    modelYear: "New Model",
    seating: 28,
    mainImage: "/car/FORDpartyBUSLimoStyle.jpeg",
    images: [
      "/car/FORDpartyBUSLimoStyle.jpeg",
      "/car/FORDpartyBUSLimoStyle1.jpeg",
      "/car/FORDpartyBUSLimoStyle2.jpeg",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Large celebrations", "Corporate parties", "Sports events"],
    features: [
      "Seating Capacity: 28 passengers",
      "Massive party space, premium sound, lighting effects",
      "Interior: Spacious layout, entertainment center, bar",
    ],
    description: "Maximum capacity for maximum fun.",
    tagline: "Mega Party",
  },

  // Mercedes Benz Freightliner - 2 vehicles (Limo Style, Limo Style 35-45)
  {
    name: "32 Passenger Mercedes Freightliner Party Bus",
    slug: "32-passenger-mercedes-freightliner-party-bus",
    type: "BUSS",
    modelYear: "New Model",
    seating: 32,
    mainImage: "/car/bus32.webp",
    images: [
      "/car/bus32.webp",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: [
      "Large weddings",
      "Corporate parties",
      "Festival transportation",
      "Night out events",
    ],
    features: [
      "Seating Capacity: 32 passengers",
      "Great 15,000 Watt Sound System",
      "4 Power Amplifiers",
      "4 Sub Woofers, 8 Speakers",
      "Interior: Club-style seating, premium lighting, entertainment",
    ],
    description:
      "32 passenger Mercedes Freightliner party bus with a powerful 15,000 watt sound system, 4 power amplifiers, 4 sub woofers, and 8 speakers for the ultimate party on wheels.",
    tagline: "Party Bus Luxury",
  },
  {
    name: "25 Passenger GMC Party Bus",
    slug: "25-passenger-gmc-party-bus",
    type: "BUSS",
    modelYear: "New Model",
    seating: 25,
    mainImage: "/car/bus32.webp",
    images: [
      "/car/bus32.webp",
    ],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: [
      "Bachelor/Bachelorette parties",
      "Corporate events",
      "Night out events",
      "Concert transportation",
    ],
    features: [
      "Seating Capacity: 25 passengers",
      "Great 12,000 Watt Sound System",
      "2 Power Amplifiers",
      "3 Sub Woofers, 8 Speakers",
      "Interior: Club-style seating, premium lighting, entertainment",
    ],
    description:
      "25 passenger GMC party bus with a powerful 12,000 watt sound system, 2 power amplifiers, 3 sub woofers, and 8 speakers for an unforgettable party on wheels.",
    tagline: "Party Bus Excellence",
  },

  // Mercedes Benz Freightliner - 2 vehicles (Shuttle Style moved to Mercedes Sprinter Vans)

  // Luxury Coach Buses - 3 vehicles
  {
    name: "Luxury Coach Bus",
    slug: "luxury-coach-bus",
    type: "BUSS",
    modelYear: "New Model",
    seating: "40-56",
    mainImage: "/car/bus.jpeg",
    images: ["/car/bus.jpeg", "/car/bus1.jpeg", "/car/bus2.jpeg"],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Charter tours", "Long distance travel", "Large events"],
    features: [
      "Seating Capacity: 40-56 passengers",
      "Reclining seats, overhead storage, restroom",
      "Interior: Premium coach seating, entertainment, WiFi",
    ],
    description: "Full-size luxury coach for maximum comfort.",
    tagline: "Coach Comfort",
  },
  {
    name: "Luxury Coach Bus Premium",
    slug: "luxury-coach-bus-premium",
    type: "BUSS",
    modelYear: "New Model",
    seating: "40-56",
    mainImage: "/car/bus11.jpeg",
    images: ["/car/bus11.jpeg", "/car/bus22.jpeg", "/car/bus33.jpeg"],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["Corporate conferences", "Sports teams", "Music tours"],
    features: [
      "Seating Capacity: 40-56 passengers",
      "Premium reclining seats, power outlets, WiFi",
      "Interior: Luxury amenities, entertainment system, restroom",
    ],
    description: "Premium coach with top-tier amenities.",
    tagline: "Premium Travel",
  },
  {
    name: "Luxury Coach Bus Elite",
    slug: "luxury-coach-bus-elite",
    type: "BUSS",
    modelYear: "New Model",
    seating: "40-56",
    mainImage: "/car/bus111.jpeg",
    images: ["/car/bus111.jpeg", "/car/bus22.jpeg", "/car/bus333.jpeg"],
    wifi: true,
    climateControl: "Automatic Climate Control",
    idealFor: ["VIP tours", "Executive groups", "Special events"],
    features: [
      "Seating Capacity: 40-56 passengers",
      "Elite seating, premium entertainment, luxury amenities",
      "Interior: Top-tier comfort, advanced features, WiFi",
    ],
    description: "Elite coach experience for discerning travelers.",
    tagline: "Elite Experience",
  },
];

export function getVehicleBySlug(slug: string): VehicleDetails | undefined {
  return vehiclesData.find((vehicle) => vehicle.slug === slug);
}

export function getAllVehicleSlugs(): string[] {
  return vehiclesData.map((vehicle) => vehicle.slug);
}
