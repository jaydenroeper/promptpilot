'use client'

import { personas } from '@/data/personas'
import type { PersonaId } from '@/types'

interface Props {
  selectedPersonaId: PersonaId | null
  topic: string
  onPersonaSelect: (id: PersonaId) => void
  onTopicChange: (topic: string) => void
  onNext: () => void
}

export default function PersonaStep({
  selectedPersonaId,
  topic,
  onPersonaSelect,
  onTopicChange,
  onNext,
}: Props) {
  const canNext = selectedPersonaId !== null && topic.trim().length > 0

  return (
    <div className="flex flex-col gap-8">
      {/* Persona kaarten */}
      <div>
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
          Kies je doelgroep
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {personas.map((persona) => {
            const selected = selectedPersonaId === persona.id
            return (
              <button
                key={persona.id}
                onClick={() => onPersonaSelect(persona.id)}
                className={`text-left rounded-2xl p-5 border transition-all ${
                  selected
                    ? 'bg-zinc-800 border-indigo-500 ring-1 ring-indigo-500'
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <p className={`font-semibold text-base mb-1 ${selected ? 'text-white' : 'text-zinc-200'}`}>
                  {persona.name}
                </p>
                <p className="text-xs text-zinc-500 mb-3">
                  {persona.age_range} · {persona.platform_primary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {persona.tone.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        selected
                          ? 'bg-indigo-900 text-indigo-300'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Topic input */}
      <div>
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
          Onderwerp
        </p>
        <input
          type="text"
          value={topic}
          onChange={(e) => onTopicChange(e.target.value)}
          placeholder="Bijv. minder schermtijd en meer focus"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Volgende */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!canNext}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
        >
          Volgende →
        </button>
      </div>
    </div>
  )
}
