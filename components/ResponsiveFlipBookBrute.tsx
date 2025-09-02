"use client";

import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// charge côté client uniquement
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

type Props = {
  pages: React.ReactNode[];
  pageAspectRatio?: number; // hauteur / largeur d'UNE page (ex A4 ≈ 1.414)
  className?: string;
  margins?: number; // % de marge autour (même valeur pour 4 côtés) – ex: 6
};

export default function ResponsiveFlipBookBrute({
  pages,
  pageAspectRatio = 1.333, // ~3:4 par défaut
  className = "",
  margins = 6,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pageWH, setPageWH] = useState<{ w: number; h: number }>({ w: 600, h: 800 });
  const [keyBump, setKeyBump] = useState(0); // force un re-mount propre
  const [currentPage, setCurrentPage] = useState(0); // on garde la page courante

  // Mesure la zone utile (contener - marges %) → calcule largeur/hauteur d'UNE page
  const measure = () => {
    const el = containerRef.current;
    if (!el) return null;

    const cw = el.clientWidth;
    const ch = el.clientHeight;
    if (cw <= 0 || ch <= 0) return null;

    const mX = cw * (margins / 100); // marges gauches/droites en px
    const mY = ch * (margins / 100); // marges haut/bas en px
    const innerW = Math.max(0, cw - mX * 2);
    const innerH = Math.max(0, ch - mY * 2);

    // Livret = 2 pages côte à côte → bookW = 2*pageW ; bookH = pageH = pageW*ratio
    // Fit par largeur d'abord
    let pageW = innerW / 2;
    let pageH = pageW * pageAspectRatio;

    // Si on dépasse la hauteur → fit par hauteur
    if (pageH > innerH) {
      pageH = innerH;
      pageW = pageH / pageAspectRatio;
    }

    // Valeurs minimales pour éviter les tailles < 1 px
    pageW = Math.max(50, Math.floor(pageW));
    pageH = Math.max(50, Math.floor(pageH));

    return { w: pageW, h: pageH };
  };

  // 1) Première mesure
  useLayoutEffect(() => {
    const first = measure();
    if (first) setPageWH(first);
  }, [pageAspectRatio, margins]);

  // 2) Écoute les changements de taille → re-monte le flipbook (fiable à 100%)
  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = measure();
        if (!next) return;
        setPageWH((prev) => {
          if (prev.w === next.w && prev.h === next.h) return prev;
          return next;
        });
        // on re-monte le composant proprement
        setKeyBump((k) => k + 1);
      });
    };

    const el = containerRef.current;
    let ro: ResizeObserver | null = null;

    if (el && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(schedule);
      ro.observe(el);
    }
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", schedule);
      if (ro && el) {
        ro.unobserve(el);
        ro.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      // ⚠️ Donne une vraie hauteur via className côté parent (ex: h-[80vh] ou h-[100dvh])
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: `${margins}%`,
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* Re-mount contrôlé avec conservation de la page */}
        <HTMLFlipBook
          key={`${pageWH.w}x${pageWH.h}-${keyBump}`}
          width={pageWH.w}
          height={pageWH.h}
          size="fixed"          // respecte strictement width/height
          autoSize={false}      // on pilote la taille
          usePortrait={false}   // toujours double-page
          minWidth={0}
          minHeight={0}
          maxWidth={10000}
          maxHeight={10000}
          startPage={currentPage} // on revient où on était
          onFlip={(e: any) => setCurrentPage(e.data)} // e.data = index de page
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,.35)" }}
        >
          {pages.map((p, i) => (
            <div key={i} style={{ width: "100%", height: "100%" }}>
              {p}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

