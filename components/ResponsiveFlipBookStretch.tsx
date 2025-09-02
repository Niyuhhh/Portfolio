"use client";

import type React from "react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// Charge react-pageflip côté client uniquement
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

type Props = {
  pages: React.ReactNode[];
  /** Pourcentage de marge identique sur les 4 côtés (ex. 6 = 6%) */
  marginPercent?: number;
  /** Hauteur/largeur "de base" d'UNE page (sert juste de référence) */
  basePageWidth?: number;
  basePageHeight?: number;
  /** Classes sur le conteneur externe (pense à lui donner une hauteur réelle) */
  className?: string;
};

/**
 * Idée clé :
 * - Le parent de ce composant a une taille réelle (ex. h-[80vh]).
 * - On active les "container queries" sur ce parent (container-type: size).
 * - On applique des marges proportionnelles AU CONTENEUR via 1cqw / 1cqh (100% = largeur/hauteur du conteneur).
 * - On met <HTMLFlipBook size="stretch"> pour qu'il s'étire automatiquement dans la zone utile.
 * - Un petit ResizeObserver déclenche update() pour être 100% synchro.
 */
export default function ResponsiveFlipBookStretch({
  pages,
  marginPercent = 6,
  basePageWidth = 600,
  basePageHeight = 800,
  className = "",
}: Props) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<any>(null);

  // Sécurité : si le parent change de taille, on "ping" react-pageflip
  useEffect(() => {
    const el = boxRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      try {
        bookRef.current?.pageFlip().update();
      } catch {}
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={className}
      // IMPORTANT : donne une hauteur réelle à CE conteneur depuis le parent (ex. h-[80vh])
      style={{
        width: "100%",
        height: "100%",
        // Active les unités de container queries (cqw/cqh) sur CE conteneur
        // => 1cqw = 1% de la largeur du conteneur, 1cqh = 1% de la hauteur du conteneur
        containerType: "size",
      }}
    >
      {/* Cadre avec marges proportionnelles au conteneur */}
      <div
        style={{
          boxSizing: "border-box",
          paddingInline: `calc(${marginPercent} * 1cqw)`, // marges gauche/droite
          paddingBlock: `calc(${marginPercent} * 1cqh)`, // marges haut/bas
          width: "100%",
          height: "100%",
        }}
      >
        {/* Zone utile pour le flipbook (remplit l'espace entre les marges) */}
        <div ref={boxRef} style={{ position: "relative", width: "100%", height: "100%" }}>
          <HTMLFlipBook
            ref={bookRef}
            // ⚡ Le flipbook s'étire pour occuper TOUTE la zone utile
            size="stretch"
            usePortrait={false} // toujours en double-page
            autoSize={true}
            minWidth={0}
            minHeight={0}
            maxWidth={100000}
            maxHeight={100000}
            // Width/height de base d'UNE page (juste une référence pour l'aspect)
            width={basePageWidth}
            height={basePageHeight}
            style={{ width: "100%", height: "100%" }}
          >
            {pages.map((page, i) => (
              <div key={i} style={{ width: "100%", height: "100%" }}>
                {page}
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}

