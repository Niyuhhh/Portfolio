"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { default as FlipBook } from "react-pageflip";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

const BOOK_WIDTH = 500;
const BOOK_HEIGHT = 710;

interface Page {
  id: number;
  content: React.ReactNode;
}

interface ResponsiveFlipBookProps {
  pages: Page[];
}

function ResponsiveFlipBook({ pages }: ResponsiveFlipBookProps) {
  const bookRef = useRef<FlipBook | null>(null);
  const [size, setSize] = useState({ width: BOOK_WIDTH, height: BOOK_HEIGHT });

  useEffect(() => {
    const updateSize = () => {
      const { innerWidth, innerHeight } = window;
      const scale = Math.min(
        innerWidth / (BOOK_WIDTH * 2),
        innerHeight / BOOK_HEIGHT
      );
      setSize({
        width: BOOK_WIDTH * scale,
        height: BOOK_HEIGHT * scale,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleNext = () => bookRef.current?.pageFlip()?.flipNext();
  const handlePrev = () => bookRef.current?.pageFlip()?.flipPrev();

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <HTMLFlipBook
        width={size.width}
        height={size.height}
        showCover
        ref={bookRef}
        className="shadow-md"
        maxShadowOpacity={0.2}
        drawShadow
      >
        {pages.map((page) => (
          <div key={page.id} className="w-full h-full">
            {page.content}
          </div>
        ))}
      </HTMLFlipBook>
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ResponsiveFlipBook), { ssr: false });

