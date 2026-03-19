'use client'

import { audiences } from '@/data/audiences'
import { platforms } from '@/data/platforms'
import { tones } from '@/data/tones'
import { frameworks } from '@/data/frameworks'
import type { GenerateRequest, AudienceId, PlatformId, ToneId, FrameworkId } from '@/types'

interface Props {
  filters: GenerateRequest
  onChange: (filters: GenerateRequest) => void
  onGenerate: () => void
  onRandom: () => void
  loading: boolean
}

function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { id: T; label: string }[]
  value: T
  onChange: (id: T) => void
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              value === opt.id
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function FilterPanel({ filters, onChange, onGenerate, onRandom, loading }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">
      <ChipGroup<AudienceId>
        label="Doelgroep"
        options={audiences}
        value={filters.audienceId}
        onChange={(id) => onChange({ ...filters, audienceId: id })}
      />
      <ChipGroup<PlatformId>
        label="Platform"
        options={platforms}
        value={filters.platformId}
        onChange={(id) => onChange({ ...filters, platformId: id })}
      />
      <ChipGroup<ToneId>
        label="Tone of voice"
        options={tones}
        value={filters.toneId}
        onChange={(id) => onChange({ ...filters, toneId: id })}
      />
      <ChipGroup<FrameworkId>
        label="Prompt framework"
        options={frameworks.map((f) => ({ id: f.id, label: f.name }))}
        value={filters.frameworkId}
        onChange={(id) => onChange({ ...filters, frameworkId: id })}
      />

      <div className="flex gap-3 pt-2">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {loading ? 'Genereren…' : 'Genereer content'}
        </button>
        <button
          onClick={onRandom}
          disabled={loading}
          className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-300 rounded-xl transition-colors text-sm"
          title="Random scenario"
        >
          ⚡
        </button>
      </div>
    </div>
  )
}
