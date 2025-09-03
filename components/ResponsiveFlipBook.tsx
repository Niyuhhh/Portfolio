"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// react-pageflip doit être chargé uniquement côté client
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

export interface ResponsiveFlipBookProps {
  pages: string[];
  ratio?: number; // ratio largeur/hauteur d'une page
}

export default function ResponsiveFlipBook({ pages, ratio = 0.707 }: ResponsiveFlipBookProps) {
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState({
    pageWidth: 0,
    pageHeight: 0,
  });

  const margin = 40; // marge constante autour du flipbook

  // calcul dynamique du responsive
  useEffect(() => {
    const updateSize = () => {
      const availableWidth = window.innerWidth - margin * 2;
      const availableHeight = window.innerHeight - margin * 2;

      let pageHeight = availableHeight;
      let pageWidth = pageHeight * ratio;

      if (pageWidth * 2 > availableWidth) {
        pageWidth = availableWidth / 2;
        pageHeight = pageWidth / ratio;
      }

      setSize({ pageWidth, pageHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [ratio, margin]);

  if (!size.pageWidth) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div style={{ padding: margin }}>
        <HTMLFlipBook
          ref={bookRef}
          key={`${size.pageWidth}x${size.pageHeight}`} // force re-render au resize
          width={size.pageWidth}
          height={size.pageHeight}
          size="fixed"
          minWidth={200}
          maxWidth={3000}
          minHeight={200}
          maxHeight={4000}
          showCover={true}
          usePortrait={false} // 🚀 force toujours double page
          className="shadow-2xl"
        >
          {pages.map((src, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={src}
                alt={`page-${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Boutons navigation */}
      <button
        onClick={() => bookRef.current?.pageFlip().flipPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ◀
      </button>
      <button
        onClick={() => bookRef.current?.pageFlip().flipNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ▶
      </button>
    </div>
  );
}

