import Link from "next/link"

export default function Page13() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 13</h1>
      <p>This is the content for page 13.</p>
      <nav className="mt-8 flex justify-between">
        <Link href="/book/page-12">Previous</Link>
        <Link href="/book">Index</Link>
        <Link href="/book/page-14">Next</Link>
      </nav>
    </main>
  )
}
