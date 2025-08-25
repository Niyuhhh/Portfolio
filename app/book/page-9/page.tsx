import Link from "next/link"

export default function Page9() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 9</h1>
      <p>This is the content for page 9.</p>
      <nav className="mt-8 flex justify-between">
        <Link href="/book/page-8">Previous</Link>
        <Link href="/book">Index</Link>
        <Link href="/book/page-10">Next</Link>
      </nav>
    </main>
  )
}
