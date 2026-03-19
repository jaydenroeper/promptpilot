'use client'

import { frameworks } from '@/data/frameworks'
import type { FrameworkId } from '@/types'

interface Props {
  selectedFrameworkId: FrameworkId
  onFrameworkSelect: (id: FrameworkId) => void
  onBack: () => void
  onGenerate: () => void
  loading: boolean
}

export default function FrameworkStep({
  selectedFrameworkId,
  onFrameworkSelect,
  onBack,
  onGenerate,
  loading,
}: Props) {
  return (
    <div className="flex flex-col gap-8">
      {/* Framework kaarten */}
      <div>
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
          Kies een framework
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {frameworks.map((f) => {
            const selected = selectedFrameworkId === f.id
            return (
              <button
                key={f.id}
                onClick={() => onFrameworkSelect(f.id)}
                className={`text-left rounded-xl px-4 py-3.5 border transition-all ${
                  selected
                    ? 'bg-zinc-800 border-indigo-500 ring-1 ring-indigo-500'
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-sm font-semibold ${selected ? 'text-white' : 'text-zinc-300'}`}>
                    {f.label}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono shrink-0">{f.technicalName}</span>
                </div>
                <p className="text-xs text-zinc-500">{f.shortDescription}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Knoppen */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          disabled={loading}
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-300 rounded-xl transition-colors text-sm font-medium"
        >
          ← Terug
        </button>
        <button
          onClick={onGenerate}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
        >
          {loading ? 'Genereren…' : 'Genereer content'}
        </button>
      </div>
    </div>
  )
}
