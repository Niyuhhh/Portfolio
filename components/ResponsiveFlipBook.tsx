"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// react-pageflip doit être chargé uniquement côté client
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

export interface ResponsiveFlipBookProps {
  pages: string[];
  ratio?: number; // ratio largeur/hauteur d'une page
}

const DEFAULT_MARGIN_RATIO = 0.06;
const FULLSCREEN_MARGIN_RATIO = 0.045;

export default function ResponsiveFlipBook({
  pages,
  ratio = 0.707,
}: ResponsiveFlipBookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);
  const [{ pageWidth, pageHeight }, setPageSize] = useState({
    pageWidth: 0,
    pageHeight: 0,
  });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const recomputeSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    if (!containerWidth || !containerHeight) return;

    const marginRatio = isFullscreen ? FULLSCREEN_MARGIN_RATIO : DEFAULT_MARGIN_RATIO;
    const verticalMargin = containerHeight * marginRatio;
    const usefulHeight = containerHeight - verticalMargin * 2;
    const usefulWidth = containerWidth;

    if (usefulHeight <= 0 || usefulWidth <= 0) return;

    const pageAspectRatio = 1 / ratio; // hauteur/largeur
    let nextPageWidth = usefulWidth / 2;
    let nextPageHeight = nextPageWidth * pageAspectRatio;

    if (nextPageHeight > usefulHeight) {
      nextPageHeight = usefulHeight;
      nextPageWidth = nextPageHeight / pageAspectRatio;
    }

    setPageSize((prev) => {
      const widthChanged = Math.abs(prev.pageWidth - nextPageWidth) > 0.5;
      const heightChanged = Math.abs(prev.pageHeight - nextPageHeight) > 0.5;

      if (!widthChanged && !heightChanged) {
        return prev;
      }

      return {
        pageWidth: nextPageWidth,
        pageHeight: nextPageHeight,
      };
    });
  }, [isFullscreen, ratio]);

  useEffect(() => {
    const getFullscreenElement = () => {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null;
      };
      return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
    };

    const updateFullscreenState = () => {
      setIsFullscreen(Boolean(getFullscreenElement()));
    };

    updateFullscreenState();

    document.addEventListener("fullscreenchange", updateFullscreenState);
    document.addEventListener("webkitfullscreenchange", updateFullscreenState as EventListener);

    return () => {
      document.removeEventListener("fullscreenchange", updateFullscreenState);
      document.removeEventListener(
        "webkitfullscreenchange",
        updateFullscreenState as EventListener,
      );
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => recomputeSize())
        : null;

    resizeObserver?.observe(container);

    const handleWindowResize = () => recomputeSize();
    window.addEventListener("resize", handleWindowResize);

    recomputeSize();

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [recomputeSize]);

  useEffect(() => {
    recomputeSize();
  }, [isFullscreen, recomputeSize]);

  useEffect(() => {
    if (!pageWidth || !pageHeight) return;

    const frame = requestAnimationFrame(() => {
      bookRef.current?.pageFlip()?.update();
    });

    return () => cancelAnimationFrame(frame);
  }, [pageWidth, pageHeight]);

  const containerHeight = isFullscreen ? "100dvh" : "80vh";

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center bg-black"
      style={{ height: containerHeight }}
    >
      {pageWidth > 0 && pageHeight > 0 && (
        <HTMLFlipBook
          ref={bookRef}
          width={pageWidth}
          height={pageHeight}
          size="fixed"
          minWidth={200}
          maxWidth={3000}
          minHeight={200}
          maxHeight={4000}
          showCover={true}
          usePortrait={false}
          className="shadow-2xl"
        >
          {pages.map((src, index) => (
            <div key={index} className="h-full w-full">
              <img
                src={src}
                alt={`page-${index + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </HTMLFlipBook>
      )}

      {/* Boutons navigation */}
      <button
        onClick={() => bookRef.current?.pageFlip().flipPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded bg-black/60 px-3 py-1 text-white"
      >
        ◀
      </button>
      <button
        onClick={() => bookRef.current?.pageFlip().flipNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-black/60 px-3 py-1 text-white"
      >
        ▶
      </button>
    </div>
  );
}

