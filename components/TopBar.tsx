export default function TopBar() {
  return (
    <header className="h-14 shrink-0 flex items-center px-6 bg-zinc-950 border-b border-zinc-800 sticky top-0 z-10">
      <div className="flex items-baseline gap-3">
        <span className="text-white font-bold text-lg tracking-tight">PromptPilot</span>
        <span className="text-zinc-500 text-sm hidden sm:inline">
          Genereer social content met de juiste AI-aanpak
        </span>
      </div>
    </header>
  )
}
