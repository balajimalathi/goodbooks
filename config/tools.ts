export interface Tool {
  name: string
  description: string
  link: string
  category: "Website Builder" | "E-commerce" | "Marketing" | "Design" | "Analytics"
  pricing: "Free" | "Freemium" | "Paid"
  features: string[]
  image: string
  popular?: boolean
}

export const TOOLS: Tool[] = [
  {
    name: "Framer",
    description: "Design and publish your dream site. Zero code, maximum speed.",
    link: "https://framer.com",
    category: "Website Builder",
    pricing: "Freemium",
    features: ["Visual Editor", "CMS", "Animation"],
    image: "https://framerusercontent.com/images/48ha9K9kLd2q3g.png",
    popular: true,
  },
  {
    name: "Webflow",
    description: "Build with the power of code — without writing any.",
    link: "https://webflow.com",
    category: "Website Builder",
    pricing: "Freemium",
    features: ["CMS", "E-commerce", "Interactions"],
    image: "https://assets-global.website-files.com/659dbf403906721310292148/659dbf403906721310292148_opengraph.png",
    popular: true,
  },
  {
    name: "Shopify",
    description: "The global commerce platform to build your business.",
    link: "https://shopify.com",
    category: "E-commerce",
    pricing: "Paid",
    features: ["Storefront", "POS", "Payments"],
    image: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
  },
  {
    name: "Canva",
    description: "A graphic design platform that allows users to create social media graphics, presentations, posters, documents and other visual content.",
    link: "https://canva.com",
    category: "Design",
    pricing: "Freemium",
    features: ["Templates", "Stock Photos", "Collaboration"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    popular: true,
  },
  {
    name: "Google Analytics",
    description: "Get a deeper understanding of your customers. Google Analytics gives you the free tools you need to analyze data for your business in one place.",
    link: "https://analytics.google.com",
    category: "Analytics",
    pricing: "Free",
    features: ["Real-time reporting", "Audience insights", "Flow visualization"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/w/w9/Google_Analytics_logo.svg/1200px-Google_Analytics_logo.svg.png",
  },
  {
    name: "Mailchimp",
    description: "All-in-one marketing platform for small business. We empower millions of customers around the world to start and grow their businesses with our smart marketing technology.",
    link: "https://mailchimp.com",
    category: "Marketing",
    pricing: "Freemium",
    features: ["Email Marketing", "Automation", "CRM"],
    image: "https://eep.io/images/yzco4xsimv0y/6G1j288888888888888888/44444444444444444444444444444444/Mailchimp-Logo.png",
  },
  {
    name: "Carrd",
    description: "Simple, free, fully responsive one-page sites for pretty much anything.",
    link: "https://carrd.co",
    category: "Website Builder",
    pricing: "Freemium",
    features: ["One-page sites", "Responsive", "Simple"],
    image: "https://carrd.co/assets/images/share.jpg",
  },
  {
    name: "Gumroad",
    description: "Super-simple e-commerce for creators. Sell software, books, comics, music, and more.",
    link: "https://gumroad.com",
    category: "E-commerce",
    pricing: "Free",
    features: ["Digital Products", "Memberships", "Email Marketing"],
    image: "https://assets.gumroad.com/assets/og-image-64c51c2d2d2d2d2d2d2d2d2d2d2d2d2d.png",
  },
]
