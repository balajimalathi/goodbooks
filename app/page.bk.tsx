import { HeroSection } from "@/components/marketing/hero-section"
import { FeaturedToolsSection } from "@/components/marketing/featured-tools-section"
import { UpdatesSection } from "@/components/marketing/updates-section"
import { AlternativesSection } from "@/components/marketing/alternatives-section"
import { DeepdiveSection } from "@/components/marketing/deepdive-section"
import { RecentBlogs } from "@/components/marketing/recent-blogs"
import { NewsletterSection } from "@/components/marketing/newsletter-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedToolsSection />
      <UpdatesSection />
      <AlternativesSection />
      <DeepdiveSection />
      <RecentBlogs />
      <NewsletterSection />
    </div>
  )
}
