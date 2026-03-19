export default function HeroSection() {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-6">
        Hackathon Demo · Prompt Engineering
      </div>
      <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
        Prompt<span className="text-indigo-400">Pilot</span>
      </h1>
      <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
        Kies een doelgroep, platform en framework. Zie hoe AI dezelfde boodschap anders vertaalt — en welke prompt daarvoor nodig is.
      </p>
    </div>
  )
}
