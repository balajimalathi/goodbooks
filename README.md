# GoodBooks - SaaS Tools Directory & Affiliate Platform

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

> A modern, feature-rich platform for discovering, comparing, and reviewing SaaS tools with an integrated blog and news system.

## 🚀 Project Vision

GoodBooks is a comprehensive SaaS tools directory and affiliate marketing platform designed to help users discover, compare, and make informed decisions about the best SaaS products across various categories. The platform combines powerful directory features with rich content, including blogs, news updates, and detailed tool comparisons.

### Core Objectives

- **Discovery**: Help users find the right SaaS tools for their needs
- **Comparison**: Provide detailed comparisons, pricing information, and alternatives
- **Education**: Offer tutorials, guides, and insights through blogs and articles
- **Community**: Keep users updated with the latest news, releases, and updates in the SaaS ecosystem
- **Monetization**: Generate revenue through affiliate links while providing genuine value

## 📋 Table of Contents

- [Features](#-features)
  - [Completed Features](#-completed-features)
  - [Pending Features](#-pending-features)
  - [Upcoming Features](#-upcoming-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Database Schema](#-database-schema)
- [Content Management](#-content-management)
- [Configuration](#-configuration)

---

## ✨ Features

### ✅ Completed Features

#### 1. **Tools Directory System**
- ✅ **Comprehensive Tool Listings**: 20+ pre-configured SaaS tools across 10 categories
- ✅ **Tool Categories**: 
  - Website Builders
  - E-commerce
  - Marketing & Email
  - Design & Creative
  - Automation & Workflow
  - Databases & CMS
  - AI & LLM
  - Analytics & Tracking
  - Payment Processing
  - Content Management
- ✅ **Tool Detail Pages**: Individual pages for each tool with:
  - Logo, tagline, and description
  - Pricing tiers with detailed features
  - Feature lists and integrations
  - Ratings and review counts
  - Affiliate links
  - Alternative tool suggestions
- ✅ **Filtering & Search**: Browse tools by category with responsive layouts
- ✅ **Tool Badges**: Popular, New, and Verified badges
- ✅ **Pricing Information**: Detailed pricing tiers with Free, Freemium, and Paid models

#### 2. **Blog System (Contentlayer Integration)**
- ✅ **MDX-Based Content**: Write rich blog posts using MDX format
- ✅ **Blog Categories**: 
  - News & Updates
  - Tutorials
  - Comparisons
  - Alternatives
  - Guides
  - Deep Dives
- ✅ **Category Filtering**: Filter blog posts by category
- ✅ **Author System**: Support for multiple authors with profiles
- ✅ **Related Posts**: Automatic related post suggestions
- ✅ **Syntax Highlighting**: Beautiful code syntax highlighting with Shiki
- ✅ **Responsive Images**: Automatic image extraction and optimization
- ✅ **SEO Optimized**: Meta tags, Open Graph, and structured data
- ✅ **Reading Experience**: Optimized typography with Gabarito font

#### 3. **News/Updates System**
- ✅ **Latest News Section**: Dedicated updates page with news articles
- ✅ **MDX Content Support**: Rich content formatting for news articles
- ✅ **Update Types**: 
  - Releases
  - Pricing Changes
  - New Features
  - AI/LLM Updates
  - Startup News
  - Security Alerts
  - Upcoming Events
- ✅ **Hero Section**: 3-7 key articles prominently displayed
- ✅ **Sidebar Widgets**: Quick access to categorized updates
- ✅ **TechCrunch-Inspired Layout**: Modern, engaging news layout

#### 4. **UI/UX Components**
- ✅ **Responsive Navigation**: Desktop and mobile-friendly navbar
- ✅ **Theme System**: Dark/Light mode toggle with next-themes
- ✅ **Custom Components**: Built with shadcn/ui and Radix UI
- ✅ **Animations**: Smooth transitions with Framer Motion
- ✅ **Image Optimization**: Next.js Image component with blur placeholders
- ✅ **Layout Components**: Reusable marketing layout structure

#### 5. **Typography & Design**
- ✅ **Custom Font**: Gabarito font (400, 700, 900 weights)
- ✅ **Tailwind CSS v4**: Modern styling with @tailwindcss/postcss
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: ARIA labels and semantic HTML

#### 6. **Content Processing**
- ✅ **Contentlayer Configuration**: Automated content processing
- ✅ **Rehype Plugins**: 
  - Autolink headings
  - Pretty code blocks
  - Slug generation
- ✅ **Remark Plugins**: GitHub Flavored Markdown support
- ✅ **Image Extraction**: Automatic extraction of images from MDX

---

### ⏳ Pending Features

#### 1. **Database Migration (In Progress)**
- ⏳ **Drizzle ORM Integration**: PostgreSQL database setup
- ⏳ **Database Schema**: Complete schema for tools, categories, pricing, reviews, and features
- ⏳ **Data Migration**: Moving static config data to database
- ⏳ **Database Queries**: Helper functions for data retrieval
- ⏳ **Type Safety**: Full TypeScript support for database operations

#### 2. **Tool Pages Enhancement**
- ⏳ **Dynamic Tool Pages**: Fetch tool data from database instead of config files
- ⏳ **Advanced Filtering**: Filter by pricing, features, ratings, integrations
- ⏳ **Search Functionality**: Full-text search across tools
- ⏳ **Comparison View**: Side-by-side tool comparisons
- ⏳ **Screenshots Gallery**: Tool screenshots with lightbox view

#### 3. **Review System**
- ⏳ **User Reviews**: Allow users to submit reviews
- ⏳ **Rating System**: 5-star rating with detailed breakdown
- ⏳ **Review Moderation**: Admin approval workflow
- ⏳ **Helpful Votes**: Upvote/downvote review helpfulness
- ⏳ **Verified Badges**: Mark verified purchasers

#### 4. **Alternatives Page**
- ⏳ **Tool Alternatives**: Dedicated alternatives comparison pages
- ⏳ **Pros/Cons**: Detailed comparison tables
- ⏳ **Use Cases**: When to use each alternative
- ⏳ **Migration Guides**: How to switch between tools

#### 5. **About & Newsletter Pages**
- ⏳ **About Page**: Dynamic MDX-based about page
- ⏳ **Newsletter System**: Email collection and management
- ⏳ **Privacy Policy**: Legal pages
- ⏳ **Terms of Service**: Legal documentation

---

### 🔮 Upcoming Features

#### 1. **Advanced Search & Discovery**
- 🔮 **AI-Powered Search**: Semantic search using vector embeddings
- 🔮 **Smart Recommendations**: ML-based tool recommendations
- 🔮 **Comparison Matrix**: Interactive comparison tables
- 🔮 **Filter Presets**: Save and share filter combinations
- 🔮 **Collections**: Curated tool collections by use case

#### 2. **User Accounts & Personalization**
- 🔮 **User Authentication**: Sign up/login with NextAuth.js
- 🔮 **Favorites/Bookmarks**: Save favorite tools
- 🔮 **Custom Lists**: Create and share tool lists
- 🔮 **Review History**: Track user reviews and ratings
- 🔮 **Personalized Feed**: Custom news and update feed

#### 3. **Community Features**
- 🔮 **Discussion Forums**: Tool-specific discussion threads
- 🔮 **Q&A System**: Stack Overflow-style Q&A
- 🔮 **User Profiles**: Public user profiles with activity
- 🔮 **Badges & Gamification**: Reward active community members
- 🔮 **Expert Verification**: Mark industry experts

#### 4. **Content Expansion**
- 🔮 **Video Content**: Tool tutorials and reviews
- 🔮 **Podcast Integration**: Embed podcast episodes
- 🔮 **Webinars**: Live and recorded webinar content
- 🔮 **Case Studies**: Real-world implementation examples
- 🔮 **Tool Spotlights**: Weekly/monthly featured tools

#### 5. **Analytics & Insights**
- 🔮 **Tool Trends**: Popularity trends over time
- 🔮 **Price History**: Track pricing changes
- 🔮 **Market Insights**: Industry analysis and reports
- 🔮 **User Analytics**: Track user behavior and engagement
- 🔮 **Affiliate Performance**: Track click-through and conversions

#### 6. **Advanced Integrations**
- 🔮 **API Development**: Public API for tool data
- 🔮 **Chrome Extension**: Quick tool lookup browser extension
- 🔮 **Slack Bot**: Tool recommendations in Slack
- 🔮 **Email Digests**: Weekly/monthly email summaries
- 🔮 **RSS Feeds**: Blog and news RSS feeds

#### 7. **Monetization Features**
- 🔮 **Sponsored Listings**: Featured tool placements
- 🔮 **Premium Memberships**: Ad-free experience and exclusive content
- 🔮 **Affiliate Dashboard**: Track earnings and performance
- 🔮 **Deal Alerts**: Exclusive discounts and promotions
- 🔮 **Partner Program**: Partner with SaaS companies

#### 8. **Admin Panel**
- 🔮 **Content Management**: Admin dashboard for content
- 🔮 **Tool Management**: CRUD operations for tools
- 🔮 **User Management**: Moderate users and reviews
- 🔮 **Analytics Dashboard**: View site metrics
- 🔮 **SEO Tools**: Manage SEO settings and meta tags

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 16.0.3](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss)
  - [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **UI Components**: 
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide Icons](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

### Content & Data
- **Content Layer**: [Contentlayer 2](https://contentlayer.dev/)
- **MDX Processing**: 
  - [@mdx-js/mdx](https://mdxjs.com/)
  - [@mdx-js/react](https://mdxjs.com/)
  - [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Database**: 
  - [PostgreSQL](https://www.postgresql.org/) (via [postgres](https://www.npmjs.com/package/postgres))
  - [Drizzle ORM](https://orm.drizzle.team/)
- **Markdown Plugins**:
  - [remark-gfm](https://github.com/remarkjs/remark-gfm)
  - [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)
  - [rehype-slug](https://github.com/rehypejs/rehype-slug)
  - [rehype-pretty-code](https://rehype-pretty.pages.dev/)
  - [Shiki](https://shiki.style/) (syntax highlighting)

### Development Tools
- **Linting**: [ESLint](https://eslint.org/) with Next.js config
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/)
- **Utilities**:
  - [clsx](https://github.com/lukeed/clsx)
  - [class-variance-authority](https://cva.style/)
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge)
  - [date-fns](https://date-fns.org/)

---

## 📁 Project Structure

```
goodbooks/
├── app/                          # Next.js App Router
│   ├── (marketing)/             # Marketing site group
│   │   ├── blog/                # Blog pages
│   │   │   ├── category/[slug]/ # Category filtered blog
│   │   │   └── [slug]/          # Individual blog posts
│   │   ├── updates/             # News/updates section
│   │   │   └── [slug]/          # Individual news articles
│   │   ├── tools/               # Tools directory
│   │   │   └── [slug]/          # Individual tool pages
│   │   ├── categories/          # Category pages
│   │   ├── alternatives/        # Tool alternatives
│   │   ├── about/               # About page
│   │   └── newsletter/          # Newsletter signup
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
│
├── components/                   # React components
│   ├── content/                 # MDX content components
│   ├── layout/                  # Layout components (nav, footer)
│   ├── marketing/               # Marketing-specific components
│   ├── shared/                  # Shared utility components
│   ├── tools/                   # Tool-related components
│   └── ui/                      # shadcn/ui components
│
├── config/                       # Configuration files
│   ├── blog.ts                  # Blog categories and authors
│   ├── categories.ts            # Tool categories
│   ├── tools.ts                 # Tool data (20+ tools)
│   └── updates.ts               # News/updates data
│
├── content/                      # MDX content
│   ├── blog/                    # Blog posts (.mdx)
│   └── news/                    # News articles (.mdx)
│
├── lib/                         # Utility libraries
│
├── src/                         # Source code
│   └── db/                      # Database layer
│       ├── client.ts            # PostgreSQL client
│       ├── schema.ts            # Drizzle schema
│       └── queries.ts           # Database queries
│
├── public/                       # Static assets
├── styles/                       # Additional styles
├── contentlayer.config.ts       # Contentlayer configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **pnpm**: v8.x or higher (or npm/yarn)
- **PostgreSQL**: v14.x or higher (for database features)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd goodbooks
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and configure:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/goodbooks

# Add other environment variables as needed
```

4. **Run database migrations** (when database features are complete)
```bash
pnpm db:push
```

5. **Start the development server**
```bash
pnpm dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🗄️ Database Schema

The database schema (currently being implemented with Drizzle ORM) includes:

### Tables

#### `categories`
- `id`: Serial primary key
- `name`: Tool category name
- `slug`: URL-friendly slug
- `description`: Category description
- `icon`: Icon identifier

#### `tools`
- `id`: Serial primary key
- `name`: Tool name
- `slug`: URL-friendly slug
- `tagline`: Short tagline
- `description`: Brief description
- `logo`: Logo URL
- `categoryId`: Foreign key to categories
- `pricingModel`: Free/Freemium/Paid
- `rating`: Average rating (0-5)
- `reviewCount`: Number of reviews
- `affiliateLink`: Affiliate URL
- `popular`: Boolean flag
- `new`: Boolean flag

#### `pricingTiers`
- `id`: Serial primary key
- `toolId`: Foreign key to tools
- `name`: Tier name (Free, Pro, etc.)
- `price`: Monthly price
- `period`: month/year/one-time
- `features`: JSON array of features
- `popular`: Boolean flag

#### `updates`
- `id`: Serial primary key
- `type`: release/pricing/feature/llm/startup/security/event
- `title`: Update title
- `description`: Update description
- `toolId`: Optional foreign key to tools
- `date`: Timestamp
- `link`: Optional external link

#### `reviews`
- `id`: Serial primary key
- `toolId`: Foreign key to tools
- `author`: Reviewer name
- `rating`: 1-5 stars
- `content`: Review text
- `date`: Timestamp
- `helpful`: Helpfulness count

#### `features`
- `id`: Serial primary key
- `toolId`: Foreign key to tools
- `name`: Feature name

---

## 📝 Content Management

### Creating Blog Posts

Blog posts are written in MDX format and stored in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
date: 2024-11-22
published: true
image: "/images/post-image.jpg"
authors: ["mickasmt"]
categories: ["tutorials", "guides"]
related: ["other-post-slug"]
---

Your content here with **markdown** and MDX components...
```

### Creating News Articles

News articles are stored in `content/news/`:

```mdx
---
title: "News Title"
description: "News description"
date: 2024-11-22
image: "/images/news-image.jpg"
authors: ["balaji"]
categories: ["releases", "features"]
---

News content...
```

### Supported Frontmatter

#### Blog Posts (`Post`)
- `title`: Required string
- `description`: Optional string
- `date`: Required date
- `published`: Boolean (default: true)
- `image`: Required image URL
- `authors`: Required array of author slugs
- `categories`: Required array of category slugs
- `related`: Optional array of related post slugs

#### News Articles (`News`)
- `title`: Required string
- `description`: Required string
- `date`: Required date
- `image`: Optional image URL
- `authors`: Optional array of author slugs
- `categories`: Optional array of category strings

---

## ⚙️ Configuration

### Tool Categories

Edit `config/categories.ts` to add/modify tool categories:

```typescript
{
  name: "Category Name",
  slug: "category-slug",
  description: "Category description",
  icon: "🔧",
  color: "blue"
}
```

### Tools

Edit `config/tools.ts` to add/modify tools:

```typescript
{
  name: "Tool Name",
  slug: "tool-slug",
  tagline: "Short tagline",
  description: "Brief description",
  longDescription: "Detailed description",
  logo: "https://logo-url.png",
  category: "Website Builder",
  pricingModel: "Freemium",
  pricingTiers: [...],
  features: [...],
  affiliateLink: "https://affiliate-url",
  rating: 4.8,
  reviewCount: 1247,
  popular: true
}
```

### Blog Authors

Edit `config/blog.ts` to add/modify authors:

```typescript
{
  name: "Author Name",
  image: "/_static/avatars/author.png",
  twitter: "twitter_handle"
}
```

---

## 🎨 Customization

### Theme Colors

Tailwind configuration supports custom theme colors. Edit `app/globals.css` to modify:

```css
@theme {
  --color-primary: ...;
  --color-secondary: ...;
}
```

### Typography

The project uses the **Gabarito** font family. Modify in `app/layout.tsx`:

```typescript
const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});
```

---

## 📊 Analytics & SEO

- **Open Graph**: Automatic OG image generation
- **Sitemap**: Auto-generated in `app/robots.ts`
- **Meta Tags**: Configured in individual page layouts
- **Structured Data**: JSON-LD for rich snippets (coming soon)

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- Design inspiration from [TechCrunch](https://techcrunch.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Font: [Gabarito](https://fonts.google.com/specimen/Gabarito)

---

## 📞 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
