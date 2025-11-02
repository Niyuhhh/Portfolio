"use client";

import { useRef } from "react";
import ResponsiveFlipBook from "@/components/ResponsiveFlipBook";
import LandscapeGuard from "@/components/landscape-guard";

export default function FlipbookPage() {
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const pages = [
    "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114211/PORTFOLIO_ELIOTT_PAGE5_iknqcd.jpg",
    "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114211/PORTFOLIO_ELIOTT_PAGE6_t9v6hd.jpg",
    "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114211/PORTFOLIO_ELIOTT_PAGE7_e4hqts.jpg",
    "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114211/PORTFOLIO_ELIOTT_PAGE8_f8pikg.jpg",
  ];

  const requestFullscreenAndLockLandscape = async () => {
    const el = fullscreenRef.current;
    if (!el) return;
    try {
      await el.requestFullscreen();
      // Try to lock orientation if API is available
      // @ts-ignore
      await screen.orientation?.lock?.("landscape");
    } catch (err) {
      console.warn("Failed to enter fullscreen", err);
    }
  };

  return (
    <div className="w-full h-[100dvh]" ref={fullscreenRef}>
      <LandscapeGuard enableOnMobile fullscreenTargetRef={fullscreenRef}>
        <ResponsiveFlipBook pages={pages} />
      </LandscapeGuard>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          onClick={requestFullscreenAndLockLandscape}
          className="px-3 py-1 bg-white/20 text-white rounded"
        >
          Enter fullscreen
        </button>
        <button
          onClick={() => document.exitFullscreen()}
          className="px-3 py-1 bg-white/20 text-white rounded"
        >
          Exit fullscreen
        </button>
      </div>
    </div>
  );
}

