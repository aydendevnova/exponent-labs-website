"use client"

import {
  DollarSign,
  Lightbulb,
  Palette,
  Play,
  Smile,
  Swords,
  Sparkles,
  Users,
  Database,
  Filter,
  MessageSquare,
  FileText,
 
} from "lucide-react"

const services = [
  { icon: DollarSign, label: "Funding" },
  { icon: Lightbulb, label: "Advising" },
  { icon: Palette, label: "Designing" },
  { icon: Play, label: "Building" },
  { icon: Smile, label: "Laughing" },
  { icon: Swords, label: "Fighting" },
  { icon: Sparkles, label: "Aufhebung" },
  { icon: Users, label: "Community-Building" },
  { icon: Database, label: "Data Science" },
  { icon: Filter, label: "Social Campaigns" },
  { icon: MessageSquare, label: "PR Training" },
  { icon: FileText, label: "Copywriting" },
]

function ServiceTag({ icon: Icon, label }: { icon: typeof DollarSign; label: string }) {
  return (
    <div className="group flex items-center gap-2.5 rounded-full border border-[#7c3aed]/30 bg-[#0c0c10] px-4 py-2.5 transition-all duration-300 hover:border-[#7c3aed]/60 hover:bg-[#7c3aed]/10">
      <Icon className="h-4 w-4 text-[#a78bfa]" strokeWidth={1.5} />
      <span className="text-sm text-white/90">{label}</span>
    </div>
  )
}

export function ResultSection() {
  return (
    <section
      id="finale"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#08080a] px-8 py-24 text-white"
    >
      {/* Purple light rays effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px]">
        {/* Central glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-gradient-to-b from-[#7c3aed]/40 via-[#7c3aed]/10 to-transparent blur-3xl" />
        
        {/* Light rays */}
        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
          <div className="absolute left-1/2 top-0 h-[350px] w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#a78bfa]/60 via-[#7c3aed]/20 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[2px] -translate-x-[60px] rotate-[-8deg] bg-gradient-to-b from-[#a78bfa]/40 via-[#7c3aed]/15 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[2px] translate-x-[60px] rotate-[8deg] bg-gradient-to-b from-[#a78bfa]/40 via-[#7c3aed]/15 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[250px] w-[2px] -translate-x-[120px] rotate-[-16deg] bg-gradient-to-b from-[#a78bfa]/30 via-[#7c3aed]/10 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[250px] w-[2px] translate-x-[120px] rotate-[16deg] bg-gradient-to-b from-[#a78bfa]/30 via-[#7c3aed]/10 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[200px] w-[2px] -translate-x-[180px] rotate-[-24deg] bg-gradient-to-b from-[#a78bfa]/20 via-[#7c3aed]/5 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[200px] w-[2px] translate-x-[180px] rotate-[24deg] bg-gradient-to-b from-[#a78bfa]/20 via-[#7c3aed]/5 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[150px] w-[2px] -translate-x-[240px] rotate-[-32deg] bg-gradient-to-b from-[#a78bfa]/10 to-transparent" />
          <div className="absolute left-1/2 top-0 h-[150px] w-[2px] translate-x-[240px] rotate-[32deg] bg-gradient-to-b from-[#a78bfa]/10 to-transparent" />
        </div>

        {/* Ambient glow overlay */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#7c3aed]/20 via-[#5b21b6]/10 to-transparent blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Services badge */}
        <div className="flex items-center gap-2 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-4 py-2">
          <Lightbulb className="h-4 w-4 text-[#a78bfa]" strokeWidth={1.5} />
          <span className="text-sm font-medium text-white/90">one more thing...</span>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-6xl font-semibold tracking-tight text-white md:text-7xl">
            We're Exponent Labs.
          </h2>
          <p className="mt-1 text-5xl font-light tracking-tight text-white/50 md:text-6xl">
            Not Square Root Labs.
          </p>
        </div>

 


        {/* Service tags */}
        <div className="mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {services.map((service) => (
            <ServiceTag key={service.label} icon={service.icon} label={service.label} />
          ))}
        </div>
      </div>

<div className="mt-32">
  {/* Description */}
  <p className="max-w-xl text-center text-xl text-white/40">
    "Change the environment, change the behaviour."
  </p>

  <p className="mt-2 text-center text-white/50">- Matios Berhe</p>

  <h3 className="text-center text-white mt-20 text-4xl">A Wyoming LLC</h3>
</div>

      {/* Bottom fade to blend with next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08080a] to-transparent" />
    </section>
  )
}
