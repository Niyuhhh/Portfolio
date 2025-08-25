import Link from "next/link"

export default function Page4() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 4</h1>
      <p>This is the content for page 4.</p>
      <nav className="mt-8 flex justify-between">
        <Link href="/book/page-3">Previous</Link>
        <Link href="/book">Index</Link>
        <Link href="/book/page-5">Next</Link>
      </nav>
    </main>
  )
}
