"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

interface Page {
  id: number;
  content: React.ReactNode;
}

interface ResponsiveFlipBookProps {
  pages: Page[];
}

const ORIGINAL_WIDTH = 1000;
const ORIGINAL_HEIGHT = 710;

export default function ResponsiveFlipBook({ pages }: ResponsiveFlipBookProps) {
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState({ width: ORIGINAL_WIDTH, height: ORIGINAL_HEIGHT });

  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      const ratio = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

      let newWidth = innerWidth * 0.85;
      let newHeight = newWidth / ratio;

      if (newHeight > innerHeight * 0.85) {
        newHeight = innerHeight * 0.85;
        newWidth = newHeight * ratio;
      }

      setSize({ width: newWidth, height: newHeight });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-black">
      <HTMLFlipBook
        width={size.width / 2}
        height={size.height}
        minWidth={315}
        maxWidth={2000}
        minHeight={400}
        maxHeight={2500}
        size="stretch"
        showCover
        mobileScrollSupport
        ref={bookRef}
        className="shadow-2xl"
      >
        {pages.map((page) => (
          <div key={page.id} className="w-full h-full flex items-center justify-center bg-white">
            {page.content}
          </div>
        ))}
      </HTMLFlipBook>

      {/* Boutons navigation */}
      <button
        onClick={flipPrev}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={flipNext}
        className="absolute top-1/2 right-6 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
