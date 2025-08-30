import { MagazineViewer } from "@/components/magazine-viewer";
import { portfolioPages } from "@/components/portfolio-pages";

export default function PortfolioVisualPage() {
  return (
    <main className="min-h-screen">
      <MagazineViewer pages={portfolioPages} />
    </main>
  );
}
