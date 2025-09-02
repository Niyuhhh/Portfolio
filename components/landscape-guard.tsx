"use client";

import { useEffect, useState, useRef, type RefObject } from "react";

interface LandscapeGuardProps {
  children: React.ReactNode;
  enableOnMobile?: boolean;
  fullscreenTargetRef?: RefObject<HTMLDivElement>;
}

/**
 * A simple guard that displays a rotate device message on mobile portrait
 * orientations. It also forwards the provided ref to the wrapping div so it can
 * be used as a target for fullscreen requests.
 */
export default function LandscapeGuard({
  children,
  enableOnMobile = false,
  fullscreenTargetRef,
}: LandscapeGuardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const target = fullscreenTargetRef ?? containerRef;
    if (fullscreenTargetRef) {
      (fullscreenTargetRef as any).current = target.current;
    }
  }, [fullscreenTargetRef]);

  useEffect(() => {
    const mql = window.matchMedia("(orientation: landscape)");
    const handleChange = () => setIsLandscape(mql.matches);
    handleChange();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  if (enableOnMobile && !isLandscape) {
    return (
      <div
        ref={containerRef}
        className="flex items-center justify-center w-full h-full"
      >
        <p className="text-center">Please rotate your device</p>
      </div>
    );
  }

  return (
    <div ref={fullscreenTargetRef ?? containerRef} className="w-full h-full">
      {children}
    </div>
  );
}

