import PdfPreviewSection from "@/components/portfolio/PdfPreviewSection"
import { PortfolioHero } from "@/components/portfolio/PortfolioHero"
import { ProjectGrid } from "@/components/portfolio/ProjectGrid"
import { siteMetadata } from "@/lib/data/metadata"

export const metadata = siteMetadata.portfolio

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030308] text-slate-900 dark:text-white selection:bg-orange-500/30">
      <PortfolioHero />
      <ProjectGrid />
      <PdfPreviewSection />
    </main>
  )
}
