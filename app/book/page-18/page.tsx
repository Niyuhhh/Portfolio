import Link from "next/link"

export default function Page18() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page 18</h1>
      <p>This is the content for page 18.</p>
      <nav className="mt-8 flex justify-between">
        <Link href="/book/page-17">Previous</Link>
        <Link href="/book">Index</Link>
        <Link href="/book/page-19">Next</Link>
      </nav>
    </main>
  )
}
