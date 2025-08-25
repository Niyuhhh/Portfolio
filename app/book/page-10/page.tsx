import Link from "next/link"

export default function Page10() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 10</h1>
      <p>This is the content for page 10.</p>
      <nav className="mt-8 flex justify-between">
        <Link href="/book/page-9">Previous</Link>
        <Link href="/book">Index</Link>
        <Link href="/book/page-11">Next</Link>
      </nav>
    </main>
  )
}
