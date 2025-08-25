import Link from "next/link"

export default function Page1() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 1</h1>
      <p>This is the content for page 1.</p>
      <nav className="mt-8 flex justify-between">
        <span />
        <Link href="/book">Index</Link>
        <Link href="/book/page-2">Next</Link>
      </nav>
    </main>
  )
}
