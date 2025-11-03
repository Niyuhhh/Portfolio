"use client";

import React from "react";

interface Page35OverlayProps {
  isTargetPage: boolean;
}

const GIF_URL =
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDN6ZXp1OXZtaW5sMXg1eTRzMXdkc242NHVobmh6Z2ljNmtkdjJkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L6J78MhsbfUmPdRl3N/giphy.gif";

export function Page35Overlay({ isTargetPage }: Page35OverlayProps) {
  if (!isTargetPage) {
    return null;
  }

  return (
    <div
      className="pointer-events-none"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <img
        src={GIF_URL}
        alt="gif"
        draggable={false}
        style={{
          position: "absolute",
          left: "268px",
          bottom: "840px",
          width: "2050px",
          height: "1170px",
          objectFit: "cover",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default Page35Overlay;
