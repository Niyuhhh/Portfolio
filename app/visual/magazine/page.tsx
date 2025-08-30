import { MagazineViewer } from "@/components/magazine-viewer";

const samplePages = [
  { id: 1, content: <div className="w-full h-full bg-white" /> },
  { id: 2, content: <div className="w-full h-full bg-gray-200" /> },
];

export default function MagazineVisualPage() {
  return (
    <main className="min-h-screen">
      <MagazineViewer pages={samplePages} />
    </main>
  );
}
