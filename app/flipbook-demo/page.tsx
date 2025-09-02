"use client";

import ResponsiveFlipBook from "@/components/ResponsiveFlipBook";

export default function FlipbookDemoPage() {
  const pages = [
    <div className="w-full h-full flex items-center justify-center bg-gray-200" key="p1">
      Page 1
    </div>,
    <div className="w-full h-full flex items-center justify-center bg-gray-300" key="p2">
      Page 2
    </div>,
    <div className="w-full h-full flex items-center justify-center bg-gray-400" key="p3">
      Page 3
    </div>,
    <div className="w-full h-full flex items-center justify-center bg-gray-500" key="p4">
      Page 4
    </div>,
  ];

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <div className="p-2 flex gap-2">
        <button
          onClick={enterFullscreen}
          className="px-4 py-2 border rounded"
        >
          Plein écran
        </button>
        <button
          onClick={exitFullscreen}
          className="px-4 py-2 border rounded"
        >
          Quitter
        </button>
      </div>
      <div className="flex-1">
        <ResponsiveFlipBook pages={pages} />
      </div>
    </div>
  );
}

