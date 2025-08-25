import Link from "next/link"

export default function Page5() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 5</h1>
      <p>This is the content for page 5.</p>
      <nav className="mt-8 flex justify-between">
        <Link href="/book/page-4">Previous</Link>
        <Link href="/book">Index</Link>
        <Link href="/book/page-6">Next</Link>
      </nav>
    </main>
  )
}
