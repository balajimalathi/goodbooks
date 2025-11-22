export interface Category {
  name: string
  slug: string
  description: string
  icon: string
  color: string
}

export const CATEGORIES: Category[] = [
  {
    name: "Website Builders",
    slug: "website-builder",
    description: "Build stunning websites without code. From simple landing pages to complex web apps.",
    icon: "🌐",
    color: "blue",
  },
  {
    name: "E-commerce",
    slug: "e-commerce",
    description: "Sell products online with powerful e-commerce platforms and digital storefronts.",
    icon: "🛍️",
    color: "green",
  },
  {
    name: "Marketing & Email",
    slug: "marketing",
    description: "Grow your audience with email marketing, automation, and CRM tools.",
    icon: "📧",
    color: "purple",
  },
  {
    name: "Design & Creative",
    slug: "design",
    description: "Create beautiful graphics, UI designs, and visual content.",
    icon: "🎨",
    color: "pink",
  },
  {
    name: "Automation  & Workflow",
    slug: "automation",
    description: "Automate repetitive tasks and connect your apps with no-code workflows.",
    icon: "⚡",
    color: "yellow",
  },
  {
    name: "Databases & CMS",
    slug: "database",
    description: "Organize data, build databases, and manage content without code.",
    icon: "🗄️",
    color: "indigo",
  },
  {
    name: "AI & LLM",
    slug: "ai-llm",
    description: "Leverage AI models, language models, and machine learning tools.",
    icon: "🤖",
    color: "violet",
  },
  {
    name: "Analytics & Tracking",
    slug: "analytics",
    description: "Track website visitors, analyze user behavior, and measure performance.",
    icon: "📊",
    color: "cyan",
  },
  {
    name: "Payment Processing",
    slug: "payment-processing",
    description: "Accept payments, manage subscriptions, and handle transactions.",
    icon: "💳",
    color: "emerald",
  },
  {
    name: "Content Management",
    slug: "cms",
    description: "Manage content, documentation, wikis, and knowledge bases.",
    icon: "📝",
    color: "orange",
  },
]
