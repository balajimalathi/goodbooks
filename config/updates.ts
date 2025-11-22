export type UpdateType = "release" | "pricing" | "feature" | "llm" | "startup" | "security" | "event"

export interface Update {
  id: string
  type: UpdateType
  title: string
  description: string
  toolSlug?: string
  toolName?: string
  date: Date
  link?: string
  image?: string
}

export const UPDATES: Update[] = [
  {
    id: "1",
    type: "llm",
    title: "GPT-4 Turbo Released",
    description: "OpenAI releases GPT-4 Turbo with 128K context window and lower pricing. Now available in ChatGPT Plus and API.",
    toolSlug: "chatgpt-plus",
    toolName: "ChatGPT Plus",
    date: new Date("2024-11-20"),
    link: "https://openai.com/blog/gpt-4-turbo",
    image: "https://images.unsplash.com/photo-1698488489678-1234567890ab?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    type: "release",
    title: "Supabase Launches Vector Embeddings",
    description: "Supabase adds native support for vector embeddings, making it easier to build AI-powered applications with semantic search.",
    toolSlug: "supabase",
    toolName: "Supabase",
    date: new Date("2024-11-18"),
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    type: "pricing",
    title: "Lemon Squeezy Reduces Transaction Fees",
    description: "Lemon Squeezy announces reduced transaction fees from 5% + 50¢ to 5% + 30¢ for all users.",
    toolSlug: "lemon-squeezy",
    toolName: "Lemon Squeezy",
    date: new Date("2024-11-15"),
  },
  {
    id: "4",
    type: "feature",
    title: "Framer Adds Advanced SEO Controls",
    description: "Framer introduces comprehensive SEO settings including custom meta tags, Open Graph optimization, and sitemap generation.",
    toolSlug: "framer",
    toolName: "Framer",
    date: new Date("2024-11-12"),
  },
  {
    id: "5",
    type: "startup",
    title: "Resend Raises $3M Seed Round",
    description: "Email API startup Resend raises $3M seed round led by Y Combinator to build the next generation of email infrastructure.",
    date: new Date("2024-11-11"),
    link: "https://resend.com",
  },
  {
    id: "6",
    type: "feature",
    title: "Make Introduces Error Handling Dashboard",
    description: "Make (formerly Integromat) launches a new error handling dashboard with retry logic and detailed error analytics.",
    toolSlug: "make",
    toolName: "Make",
    date: new Date("2024-11-10"),
  },
  {
    id: "7",
    type: "security",
    title: "Critical Vulnerability Patched in WordPress",
    description: "A critical security vulnerability affecting over 1 million WordPress sites has been patched. Users are urged to update immediately.",
    date: new Date("2024-11-09"),
  },
  {
    id: "8",
    type: "release",
    title: "Vercel Announces v1.0 of Edge Config",
    description: "Vercel releases Edge Config v1.0, enabling ultra-fast global state management at the edge.",
    toolSlug: "vercel",
    toolName: "Vercel",
    date: new Date("2024-11-08"),
  },
  {
    id: "9",
    type: "event",
    title: "No-Code Conf 2024 Announced",
    description: "Webflow announces No-Code Conf 2024 will take place in San Francisco this October. Early bird tickets now available.",
    toolSlug: "webflow",
    toolName: "Webflow",
    date: new Date("2024-11-07"),
    link: "https://webflow.com/nocodeconf",
  },
  {
    id: "10",
    type: "pricing",
    title: "Bubble Introduces New Starter Plan",
    description: "Bubble launches a new $29/month Starter plan with increased capacity and custom domain support.",
    toolSlug: "bubble",
    toolName: "Bubble",
    date: new Date("2024-11-05"),
  },
  {
    id: "11",
    type: "startup",
    title: "Linear Valuation Hits $400M",
    description: "Project management tool Linear reaches $400M valuation after latest funding round.",
    date: new Date("2024-11-04"),
  },
  {
    id: "12",
    type: "feature",
    title: "Notion AI Now Available in Free Plan",
    description: "Notion makes AI features available to free plan users with a limited monthly quota.",
    toolSlug: "notion",
    toolName: "Notion",
    date: new Date("2024-11-03"),
  },
  {
    id: "13",
    type: "llm",
    title: "Anthropic Releases Claude 3.5 Sonnet",
    description: "Anthropic launches Claude 3.5 Sonnet with improved coding capabilities and faster response times.",
    date: new Date("2024-11-01"),
    link: "https://www.anthropic.com/news/claude-3-5-sonnet",
  },
  {
    id: "14",
    type: "security",
    title: "Okta Security Breach Investigation",
    description: "Okta concludes investigation into recent support system breach, implementing new security protocols.",
    date: new Date("2024-10-30"),
  },
  {
    id: "15",
    type: "feature",
    title: "Airtable Launches Airtable AI",
    description: "Airtable introduces AI-powered features including automated data classification and smart field suggestions.",
    toolSlug: "airtable",
    toolName: "Airtable",
    date: new Date("2024-10-28"),
  },
  {
    id: "16",
    type: "event",
    title: "OpenAI DevDay 2024",
    description: "OpenAI announces its first developer conference, DevDay, featuring keynotes on the future of AI.",
    date: new Date("2024-10-25"),
  },
]
