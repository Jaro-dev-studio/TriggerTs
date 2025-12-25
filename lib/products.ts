export interface Product {
  id: string;
  handle: string;
  title: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
}

/**
 * Mock product data - Replace with Shopify Storefront API
 */
export const products: Product[] = [
  {
    id: "1",
    handle: "im-not-arguing",
    title: "I'm Not Arguing",
    tagline: "I'm just explaining why I'm right.",
    description: "For those moments when you're definitely, absolutely, 100% correct. Again. Premium cotton, because you deserve to be right in comfort.",
    price: 48,
    compareAtPrice: 65,
    image: "/products/arguing.jpg",
    images: ["/products/arguing.jpg", "/products/arguing-back.jpg"],
    category: "classics",
    tags: ["bestseller", "attitude"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    handle: "strong-opinions-loosely-held",
    title: "Strong Opinions",
    tagline: "Loosely held. Loudly shared.",
    description: "The perfect shirt for your next meeting, family dinner, or Twitter thread. You're welcome to change your mind. You just won't.",
    price: 52,
    image: "/products/opinions.jpg",
    images: ["/products/opinions.jpg", "/products/opinions-back.jpg"],
    category: "tech",
    tags: ["tech", "startup"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    handle: "this-meeting-could-have-been-an-email",
    title: "This Meeting",
    tagline: "Could have been an email.",
    description: "We all know it. Now you can wear it. Premium cotton for premium passive aggression. Pairs well with muted Zoom calls.",
    price: 48,
    image: "/products/meeting.jpg",
    images: ["/products/meeting.jpg", "/products/meeting-back.jpg"],
    category: "corporate",
    tags: ["office", "remote work"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    handle: "technically-correct",
    title: "Technically Correct",
    tagline: "The best kind of correct.",
    description: "Because being right on a technicality is still being right. Futurama energy in a luxury package. For the pedants who have taste.",
    price: 52,
    compareAtPrice: 68,
    image: "/products/technically.jpg",
    images: ["/products/technically.jpg", "/products/technically-back.jpg"],
    category: "classics",
    tags: ["bestseller", "nerd"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    handle: "dyor",
    title: "DYOR",
    tagline: "Do your own research. (I did. You're wrong.)",
    description: "The rallying cry of the chronically online. Whether it's crypto, conspiracies, or just the best pizza spot - you've done the work.",
    price: 55,
    image: "/products/dyor.jpg",
    images: ["/products/dyor.jpg", "/products/dyor-back.jpg"],
    category: "crypto",
    tags: ["crypto", "internet money"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    handle: "touch-grass",
    title: "Touch Grass",
    tagline: "A gentle suggestion.",
    description: "For the friend who needs to hear it. Or for yourself - we don't judge. 100% organic cotton, ironically enough.",
    price: 48,
    image: "/products/grass.jpg",
    images: ["/products/grass.jpg", "/products/grass-back.jpg"],
    category: "internet",
    tags: ["internet culture", "meme"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    handle: "per-my-last-email",
    title: "Per My Last Email",
    tagline: "Read it again.",
    description: "The most passive-aggressive phrase in corporate history, now immortalized on premium cotton. Your colleagues will love it.",
    price: 48,
    image: "/products/email.jpg",
    images: ["/products/email.jpg", "/products/email-back.jpg"],
    category: "corporate",
    tags: ["office", "corporate"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    handle: "new-money-old-problems",
    title: "New Money",
    tagline: "Old problems.",
    description: "Because getting rich didn't solve everything. A meditation on modern wealth, printed on a really nice shirt.",
    price: 58,
    image: "/products/money.jpg",
    images: ["/products/money.jpg", "/products/money-back.jpg"],
    category: "crypto",
    tags: ["crypto", "luxury"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: false,
  },
];

export const categories = [
  { id: "all", name: "All", count: products.length },
  { id: "classics", name: "Classics", count: products.filter(p => p.category === "classics").length },
  { id: "corporate", name: "Corporate Satire", count: products.filter(p => p.category === "corporate").length },
  { id: "crypto", name: "Internet Money", count: products.filter(p => p.category === "crypto").length },
  { id: "internet", name: "Internet Culture", count: products.filter(p => p.category === "internet").length },
  { id: "tech", name: "Tech Life", count: products.filter(p => p.category === "tech").length },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find(p => p.handle === handle);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}
