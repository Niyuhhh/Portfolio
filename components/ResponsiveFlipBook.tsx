"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// react-pageflip doit être chargé uniquement côté client
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

const WRAP_SPIN_DURATION = 600;

export interface ResponsiveFlipBookProps {
  pages: string[];
  ratio?: number; // ratio largeur/hauteur d'une page
}

export default function ResponsiveFlipBook({ pages, ratio = 0.707 }: ResponsiveFlipBookProps) {
  const bookRef = useRef<any>(null);
  const wrapTimeoutRef = useRef<number | null>(null);
  const totalPages = pages.length;
  const [size, setSize] = useState({
    pageWidth: 0,
    pageHeight: 0,
  });
  const [wrapDirection, setWrapDirection] = useState<"forward" | "backward" | null>(null);
  const isWrapping = wrapDirection !== null;

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

  useEffect(() => {
    return () => {
      if (wrapTimeoutRef.current != null) {
        window.clearTimeout(wrapTimeoutRef.current);
        wrapTimeoutRef.current = null;
      }
    };
  }, []);

  const triggerWrapRotation = (targetIndex: number, direction: "forward" | "backward") => {
    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;

    setWrapDirection(direction);

    requestAnimationFrame(() => {
      flip.turnToPage?.(targetIndex);
    });

    if (wrapTimeoutRef.current != null) {
      window.clearTimeout(wrapTimeoutRef.current);
    }

    wrapTimeoutRef.current = window.setTimeout(() => {
      setWrapDirection(null);
      wrapTimeoutRef.current = null;
    }, WRAP_SPIN_DURATION);
  };

  const handleNextPage = () => {
    if (isWrapping) return;

    const flip = bookRef.current?.pageFlip?.();
    if (!flip || totalPages <= 1) return;

    const currentIndex = flip.getCurrentPageIndex?.() ?? 0;
    if (currentIndex >= totalPages - 1) {
      triggerWrapRotation(0, "forward");
    } else {
      flip.flipNext?.();
    }
  };

  const handlePrevPage = () => {
    if (isWrapping) return;

    const flip = bookRef.current?.pageFlip?.();
    if (!flip || totalPages <= 1) return;

    const currentIndex = flip.getCurrentPageIndex?.() ?? 0;
    if (currentIndex <= 0) {
      triggerWrapRotation(totalPages - 1, "backward");
    } else {
      flip.flipPrev?.();
    }
  };

  if (!size.pageWidth) return null;

  const rotationClass = wrapDirection
    ? wrapDirection === "forward"
      ? "flipbook-spin-forward"
      : "flipbook-spin-backward"
    : "";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black"
      style={{ perspective: "2000px" }}
    >
      <div
        className={`flipbook-rotate-wrapper ${rotationClass}`.trim()}
        style={
          wrapDirection
            ? { animationDuration: `${WRAP_SPIN_DURATION}ms` }
            : undefined
        }
      >
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

