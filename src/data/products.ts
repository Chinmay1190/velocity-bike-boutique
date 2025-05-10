
import { Product, Category, Brand } from "../types";

export const products: Product[] = [
  {
    id: "bike-1",
    name: "Velocity Vulcan 1000R",
    brand: "Velocity",
    category: "Sport",
    description: "The Vulcan 1000R is the epitome of speed and precision, offering unparalleled performance on both road and track. Its sleek design and powerful engine make it a favorite among speed enthusiasts.",
    price: 1450000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "1000cc, 4-cylinder",
      power: "185 HP",
      torque: "102 Nm",
      weight: "192 kg",
      topSpeed: "301 km/h"
    },
    rating: 4.8,
    reviewCount: 126,
    stock: 5,
    tags: ["sport", "premium", "racing"],
    featured: true
  },
  {
    id: "bike-2",
    name: "ThunderBolt X750",
    brand: "ThunderBolt",
    category: "Cruiser",
    description: "Experience the perfect blend of comfort and power with the ThunderBolt X750. Designed for long rides, it offers a smooth experience while turning heads with its classic design.",
    price: 850000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "750cc, V-twin",
      power: "95 HP",
      torque: "120 Nm",
      weight: "245 kg",
      topSpeed: "210 km/h"
    },
    rating: 4.6,
    reviewCount: 89,
    stock: 8,
    tags: ["cruiser", "comfortable", "touring"]
  },
  {
    id: "bike-3",
    name: "Samurai Ninja ZX-10R",
    brand: "Samurai",
    category: "Sport",
    description: "The Ninja ZX-10R is a track-focused machine that's equally at home on the street. With cutting-edge technology derived from MotoGP, it delivers blistering performance.",
    price: 1725000,
    discountPrice: 1599000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "998cc, 4-cylinder",
      power: "203 HP",
      torque: "114 Nm",
      weight: "207 kg",
      topSpeed: "299 km/h"
    },
    rating: 4.9,
    reviewCount: 173,
    stock: 3,
    tags: ["sport", "racing", "premium"],
    featured: true
  },
  {
    id: "bike-4",
    name: "Royal Enfield Classic 500",
    brand: "Royal Enfield",
    category: "Retro",
    description: "The Royal Enfield Classic 500 offers a nostalgic ride with its vintage design and thumping single-cylinder engine. It's perfect for those who appreciate tradition.",
    price: 235000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "499cc, single cylinder",
      power: "27.2 HP",
      torque: "41.3 Nm",
      weight: "194 kg",
      topSpeed: "130 km/h"
    },
    rating: 4.3,
    reviewCount: 412,
    stock: 15,
    tags: ["retro", "classic", "beginner-friendly"]
  },
  {
    id: "bike-5",
    name: "VortexStorm ADV 850",
    brand: "VortexStorm",
    category: "Adventure",
    description: "Conquer any terrain with the VortexStorm ADV 850. Built for adventure enthusiasts, this bike offers durability, comfort, and performance on and off the road.",
    price: 1250000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "853cc, parallel twin",
      power: "95 HP",
      torque: "92 Nm",
      weight: "229 kg",
      topSpeed: "220 km/h"
    },
    rating: 4.7,
    reviewCount: 104,
    stock: 6,
    tags: ["adventure", "touring", "off-road"],
    new: true
  },
  {
    id: "bike-6",
    name: "BlackArrow Streetfighter 890",
    brand: "BlackArrow",
    category: "Naked",
    description: "The BlackArrow Streetfighter 890 combines aggressive styling with exceptional handling. This naked bike delivers exhilarating performance for urban riding and canyon carving.",
    price: 950000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "889cc, 3-cylinder",
      power: "121 HP",
      torque: "93 Nm",
      weight: "196 kg",
      topSpeed: "240 km/h"
    },
    rating: 4.5,
    reviewCount: 78,
    stock: 9,
    tags: ["naked", "agile", "urban"]
  },
  {
    id: "bike-7",
    name: "Titan Hyperion 600",
    brand: "Titan",
    category: "Sport Touring",
    description: "The Titan Hyperion 600 offers the perfect balance between sportbike performance and touring comfort. Equipped with advanced electronics and ergonomic design for long journeys.",
    price: 875000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "599cc, 4-cylinder",
      power: "110 HP",
      torque: "80 Nm",
      weight: "210 kg",
      topSpeed: "245 km/h"
    },
    rating: 4.6,
    reviewCount: 92,
    stock: 7,
    tags: ["sport-touring", "comfortable", "tech"]
  },
  {
    id: "bike-8",
    name: "Mystic Phantom 1300",
    brand: "Mystic",
    category: "Cruiser",
    description: "Dominate the highway with the imposing Mystic Phantom 1300. This premium cruiser offers unmatched presence, comfort, and a thunderous exhaust note.",
    price: 1950000,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine: "1301cc, V-twin",
      power: "150 HP",
      torque: "138 Nm",
      weight: "320 kg",
      topSpeed: "200 km/h"
    },
    rating: 4.7,
    reviewCount: 56,
    stock: 4,
    tags: ["cruiser", "premium", "comfort"]
  }
];

// Add more product entries to reach 60+ items
for (let i = 9; i <= 64; i++) {
  const categories = ["Sport", "Cruiser", "Adventure", "Naked", "Retro", "Sport Touring"];
  const brands = ["Velocity", "ThunderBolt", "Samurai", "Royal Enfield", "VortexStorm", "BlackArrow", "Titan", "Mystic"];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const price = Math.floor(Math.random() * (2000000 - 200000 + 1) + 200000);
  const hasDiscount = Math.random() > 0.7;
  const isFeatured = Math.random() > 0.8;
  const isNew = !isFeatured && Math.random() > 0.8;
  const stock = Math.floor(Math.random() * 15) + 1;
  
  let name = "";
  let desc = "";
  let engine = "";
  let power = "";
  let weight = "";
  let tags = [];
  
  switch (category) {
    case "Sport":
      name = `${brand} Supersport ${Math.floor(Math.random() * 1000) + 600}R`;
      desc = "A high-performance sportbike designed for speed enthusiasts and track days. Features advanced aerodynamics and cutting-edge electronics.";
      engine = `${Math.floor(Math.random() * 400) + 600}cc, 4-cylinder`;
      power = `${Math.floor(Math.random() * 50) + 150} HP`;
      weight = `${Math.floor(Math.random() * 30) + 180} kg`;
      tags = ["sport", "racing", "agile"];
      break;
    case "Cruiser":
      name = `${brand} Cruiser ${Math.floor(Math.random() * 1000) + 800}`;
      desc = "A comfortable cruiser built for long rides and highway touring. Features a relaxed riding position and premium finishes.";
      engine = `${Math.floor(Math.random() * 600) + 800}cc, V-twin`;
      power = `${Math.floor(Math.random() * 40) + 70} HP`;
      weight = `${Math.floor(Math.random() * 50) + 250} kg`;
      tags = ["cruiser", "comfort", "touring"];
      break;
    case "Adventure":
      name = `${brand} Adventure ${Math.floor(Math.random() * 500) + 700}`;
      desc = "An all-terrain adventure bike built to take you anywhere. Features robust suspension and off-road capabilities.";
      engine = `${Math.floor(Math.random() * 400) + 700}cc, twin-cylinder`;
      power = `${Math.floor(Math.random() * 30) + 80} HP`;
      weight = `${Math.floor(Math.random() * 40) + 210} kg`;
      tags = ["adventure", "off-road", "touring"];
      break;
    case "Naked":
      name = `${brand} Streetfighter ${Math.floor(Math.random() * 300) + 700}`;
      desc = "An aggressive naked bike with minimal fairings and maximum attitude. Perfect for urban riding with precise handling.";
      engine = `${Math.floor(Math.random() * 300) + 700}cc, inline-twin`;
      power = `${Math.floor(Math.random() * 40) + 90} HP`;
      weight = `${Math.floor(Math.random() * 30) + 190} kg`;
      tags = ["naked", "urban", "agile"];
      break;
    case "Retro":
      name = `${brand} Classic ${Math.floor(Math.random() * 400) + 350}`;
      desc = "A timeless design with modern technology. This retro-styled bike offers a nostalgic riding experience with reliable performance.";
      engine = `${Math.floor(Math.random() * 250) + 350}cc, single-cylinder`;
      power = `${Math.floor(Math.random() * 15) + 25} HP`;
      weight = `${Math.floor(Math.random() * 30) + 180} kg`;
      tags = ["retro", "classic", "urban"];
      break;
    case "Sport Touring":
      name = `${brand} GT ${Math.floor(Math.random() * 300) + 800}`;
      desc = "The perfect combination of sportbike performance and touring comfort. Designed for long-distance rides without sacrificing speed.";
      engine = `${Math.floor(Math.random() * 400) + 800}cc, 4-cylinder`;
      power = `${Math.floor(Math.random() * 40) + 110} HP`;
      weight = `${Math.floor(Math.random() * 30) + 220} kg`;
      tags = ["sport-touring", "comfort", "tech"];
      break;
  }
  
  products.push({
    id: `bike-${i}`,
    name,
    brand,
    category,
    description: desc,
    price,
    discountPrice: hasDiscount ? Math.floor(price * 0.85) : undefined,
    imageUrl: "/placeholder.svg",
    specifications: {
      engine,
      power,
      torque: `${Math.floor(Math.random() * 50) + 70} Nm`,
      weight,
      topSpeed: `${Math.floor(Math.random() * 100) + 200} km/h`
    },
    rating: Math.floor(Math.random() * 15 + 30) / 10,
    reviewCount: Math.floor(Math.random() * 100) + 10,
    stock,
    tags,
    featured: isFeatured,
    new: isNew
  });
}

// Generate categories with counts
export const categories: Category[] = Array.from(
  new Set(products.map((product) => product.category))
).map((name) => ({
  id: name.toLowerCase(),
  name,
  imageUrl: "/placeholder.svg",
  count: products.filter((product) => product.category === name).length,
}));

// Generate brands with counts
export const brands: Brand[] = Array.from(
  new Set(products.map((product) => product.brand))
).map((name) => ({
  id: name.toLowerCase().replace(" ", "-"),
  name,
  count: products.filter((product) => product.brand === name).length,
}));
