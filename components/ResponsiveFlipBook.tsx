"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false }) as any;

export interface ResponsiveFlipBookProps {
  pages: React.ReactNode[];
  pageAspectRatio?: number; // height / width of a single page
  marginTopPercent?: number;
  marginBottomPercent?: number;
  fullscreenMarginTopPercent?: number;
  fullscreenMarginBottomPercent?: number;
  className?: string;
}

interface BookSize {
  pageWidth: number;
  pageHeight: number;
  marginTop: number;
  marginBottom: number;
}

export default function ResponsiveFlipBook({
  pages,
  pageAspectRatio = 1.333,
  marginTopPercent = 6,
  marginBottomPercent = 6,
  fullscreenMarginTopPercent = 5,
  fullscreenMarginBottomPercent = 5,
  className,
}: ResponsiveFlipBookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState<BookSize>({
    pageWidth: 0,
    pageHeight: 0,
    marginTop: 0,
    marginBottom: 0,
  });
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const element = document.fullscreenElement || (document as any).webkitFullscreenElement;
      setIsFullscreen(Boolean(element));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange as any);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange as any);
    };
  }, []);

  const computeSize = (width: number, height: number) => {
    const topPercent = isFullscreen ? fullscreenMarginTopPercent : marginTopPercent;
    const bottomPercent = isFullscreen ? fullscreenMarginBottomPercent : marginBottomPercent;

    const marginTop = (topPercent / 100) * height;
    const marginBottom = (bottomPercent / 100) * height;
    let usableHeight = height - marginTop - marginBottom;
    let pageHeight = usableHeight;
    let pageWidth = pageHeight / pageAspectRatio;

    if (pageWidth * 2 > width) {
      pageWidth = width / 2;
      pageHeight = pageWidth * pageAspectRatio;
    }

    const newSize: BookSize = { pageWidth, pageHeight, marginTop, marginBottom };
    setSize((prev) => {
      if (
        prev.pageWidth === newSize.pageWidth &&
        prev.pageHeight === newSize.pageHeight &&
        prev.marginTop === newSize.marginTop &&
        prev.marginBottom === newSize.marginBottom
      ) {
        return prev;
      }
      requestAnimationFrame(() => {
        bookRef.current?.pageFlip().update();
      });
      return newSize;
    });
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleResize = () => computeSize(node.clientWidth, node.clientHeight);
    handleResize();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => handleResize());
      ro.observe(node);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [
    isFullscreen,
    pageAspectRatio,
    marginTopPercent,
    marginBottomPercent,
    fullscreenMarginTopPercent,
    fullscreenMarginBottomPercent,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full flex justify-center", className)}
      style={{ paddingTop: size.marginTop, paddingBottom: size.marginBottom }}
    >
      {size.pageWidth > 0 && (
        <HTMLFlipBook
          ref={bookRef}
          width={size.pageWidth}
          height={size.pageHeight}
          size="fixed"
          autoSize={false}
          usePortrait={false}
          className="shadow-2xl"
        >
          {pages.map((page, idx) => (
            <div key={idx} className="w-full h-full">
              {page}
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
}

