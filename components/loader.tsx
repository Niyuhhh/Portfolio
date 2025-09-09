"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-orange-200">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
        <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-500">
          ciao
        </span>
      </div>
    </div>
  );
}
