import { OnepageProgressNavigation } from "@/components/OnepageProgressNavigation"

const sections = [
  { id: "introduction", label: "Intro" },
  { id: "concept", label: "Concept" },
  { id: "product", label: "Product" },
  { id: "result", label: "Result" },
]

export default function Page() {
  return (
    <div className="min-h-screen">
      <OnepageProgressNavigation sections={sections} />

      <section
        id="top"
        className="flex min-h-screen items-center justify-center bg-[#e2e1df]"
      >
        <h2 className="text-5xl font-medium">Top</h2>
      </section>

      <section
        id="introduction"
        className="flex min-h-screen items-center justify-center bg-[#7886c7] text-white"
      >
        <h2 className="text-5xl font-medium">Introduction</h2>
      </section>

      <section
        id="concept"
        className="flex min-h-screen items-center justify-center bg-[#e2e1df]"
      >
        <h2 className="text-5xl font-medium">Concept</h2>
      </section>

      <section
        id="product"
        className="flex min-h-screen items-center justify-center bg-[#7886c7] text-white"
      >
        <h2 className="text-5xl font-medium">Product</h2>
      </section>

      <section
        id="result"
        className="flex min-h-screen items-center justify-center bg-[#e2e1df]"
      >
        <h2 className="text-5xl font-medium">Result</h2>
      </section>

      <section
        id="bottom"
        className="flex min-h-screen items-center justify-center bg-[#7886c7] text-white"
      >
        <h2 className="text-5xl font-medium">Bottom</h2>
      </section>
    </div>
  )
}
