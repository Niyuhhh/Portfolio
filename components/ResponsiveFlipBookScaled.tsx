"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

interface MarginRatios {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface ResponsiveFlipBookScaledProps {
  pages: React.ReactNode[];
  basePageWidth: number;
  basePageHeight: number;
  marginRatios?: MarginRatios;
}

export default function ResponsiveFlipBookScaled({
  pages,
  basePageWidth,
  basePageHeight,
  marginRatios = {},
}: ResponsiveFlipBookScaledProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const relayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { clientWidth, clientHeight } = container;
    const {
      top = 0,
      right = 0,
      bottom = 0,
      left = 0,
    } = marginRatios;

    const marginTop = clientHeight * top;
    const marginBottom = clientHeight * bottom;
    const marginLeft = clientWidth * left;
    const marginRight = clientWidth * right;

    const availableWidth = clientWidth - marginLeft - marginRight;
    const availableHeight = clientHeight - marginTop - marginBottom;

    const bookWidth = basePageWidth * 2;
    const bookHeight = basePageHeight;

    const newScale = Math.min(
      availableWidth / bookWidth,
      availableHeight / bookHeight
    );

    const x = marginLeft + (availableWidth - bookWidth * newScale) / 2;
    const y = marginTop + (availableHeight - bookHeight * newScale) / 2;

    setScale(newScale);
    setPosition({ x, y });
  }, [basePageWidth, basePageHeight, marginRatios]);

  useEffect(() => {
    relayout();
  }, [relayout]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => relayout());
    observer.observe(container);

    const handleResize = () => relayout();
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [relayout]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      bookRef.current?.pageFlip().update();
    });
    return () => cancelAnimationFrame(id);
  }, [scale]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div
        className="absolute top-0 left-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <HTMLFlipBook ref={bookRef} width={basePageWidth} height={basePageHeight}>
          {pages.map((page, i) => (
            <div key={i}>{page}</div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

