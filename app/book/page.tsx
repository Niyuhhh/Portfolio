import Link from "next/link"

export default function BookIndex() {
  const pages = Array.from({ length: 20 }, (_, i) => i + 1)
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Book Index</h1>
      <ul className="list-disc pl-4 space-y-2">
        {pages.map((n) => (
          <li key={n}>
            <Link href={`/book/page-${n}`}>Page {n}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
