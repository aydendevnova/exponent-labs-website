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
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "finale", label: "Finale" },
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
