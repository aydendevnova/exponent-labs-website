import { OnepageProgressNavigation } from "@/components/OnepageProgressNavigation"
import {
  HeroSection,
  IntroductionSection,
  ConceptSection,
  ProductSection,
  ResultSection,
  BottomSection,
} from "@/components/sections"

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
      <HeroSection />
      <IntroductionSection />
      <ConceptSection />
      <ProductSection />
      <ResultSection />
      <BottomSection />
    </div>
  )
}
