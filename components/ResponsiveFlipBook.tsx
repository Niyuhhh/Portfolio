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
  const totalPages = pages.length;
  const [size, setSize] = useState({
    pageWidth: 0,
    pageHeight: 0,
  });

  // calcul dynamique du responsive
  useEffect(() => {
    const updateSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // hauteur max : 90% viewport, largeur max : 95% viewport
      let pageHeight = vh * 0.9;
      let pageWidth = pageHeight * ratio;

      if (pageWidth * 2 > vw * 0.95) {
        pageWidth = (vw * 0.95) / 2;
        pageHeight = pageWidth / ratio;
      }

      setSize({ pageWidth, pageHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [ratio]);

  const handleNextPage = () => {
    const flip = bookRef.current?.pageFlip?.();
    if (!flip || totalPages <= 1) return;

    const currentIndex = flip.getCurrentPageIndex?.() ?? 0;
    if (currentIndex >= totalPages - 1) {
      const anyFlip = flip as any;
      const controller = anyFlip?.getFlipController?.();
      const collection = anyFlip?.getPageCollection?.();

      if (
        controller &&
        collection &&
        typeof collection.currentSpreadIndex === "number" &&
        typeof collection.currentPageIndex === "number"
      ) {
        collection.currentSpreadIndex = -1;
        collection.currentPageIndex = -1;
        controller.flipNext?.("top");
      } else {
        flip.flip?.(0);
      }
    } else {
      flip.flipNext?.();
    }
  };

  const handlePrevPage = () => {
    const flip = bookRef.current?.pageFlip?.();
    if (!flip || totalPages <= 1) return;

    const currentIndex = flip.getCurrentPageIndex?.() ?? 0;
    if (currentIndex <= 0) {
      const anyFlip = flip as any;
      const controller = anyFlip?.getFlipController?.();
      const collection = anyFlip?.getPageCollection?.();
      const lastPageIndex = totalPages - 1;
      const lastSpreadIndex = collection?.getSpreadIndexByPage?.(lastPageIndex);

      if (
        controller &&
        collection &&
        typeof collection.currentSpreadIndex === "number" &&
        typeof collection.currentPageIndex === "number"
      ) {
        const wrapIndex =
          typeof lastSpreadIndex === "number"
            ? lastSpreadIndex + 1
            : collection.currentSpreadIndex + 1;

        const normalizedWrapIndex = Math.floor(wrapIndex);

        if (Number.isFinite(normalizedWrapIndex)) {
          collection.currentSpreadIndex = normalizedWrapIndex;
          collection.currentPageIndex = Math.max(lastPageIndex + 1, 1);
          controller.flipPrev?.("top");
        } else {
          flip.flip?.(lastPageIndex);
        }
      } else {
        flip.flip?.(lastPageIndex);
      }
    } else {
      flip.flipPrev?.();
    }
  };

  if (!size.pageWidth) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
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

      {/* Boutons navigation */}
      <button
        onClick={handlePrevPage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ◀
      </button>
      <button
        onClick={handleNextPage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ▶
      </button>
    </div>
  );
}

