"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// react-pageflip relies on the browser, so load it only on the client
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

export interface ResponsiveFlipBookProps {
  /** URLs for each page image */
  pages: string[];
  /** width / height ratio of a single page. Defaults to A4 ratio */
  ratio?: number;
}

export default function ResponsiveFlipBook({ pages, ratio = 0.707 }: ResponsiveFlipBookProps) {
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState({
    pageWidth: 0,
    pageHeight: 0,
    bookWidth: 0,
    bookHeight: 0,
  });

  // Update dimensions on resize to keep the book responsive
  useEffect(() => {
    const updateSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // compute max page height respecting viewport and ratio
      const pageHeight = Math.min(vh, vw / (2 * ratio));
      const pageWidth = pageHeight * ratio;

      setSize({
        pageWidth,
        pageHeight,
        bookWidth: pageWidth * 2,
        bookHeight: pageHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [ratio]);

  if (!size.bookWidth) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div style={{ width: size.bookWidth, height: size.bookHeight, position: "relative" }}>
        <HTMLFlipBook
          ref={bookRef}
          key={`${size.bookWidth}x${size.bookHeight}`}
          width={size.pageWidth}
          height={size.pageHeight}
          showCover
          className="shadow-xl"
          useMouseEvents
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
        {/* Navigation buttons */}
        <button
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1"
        >
          Prev
        </button>
        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
}
