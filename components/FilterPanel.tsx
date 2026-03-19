'use client'

import { audiences } from '@/data/audiences'
import { platforms } from '@/data/platforms'
import { tones } from '@/data/tones'
import { frameworks } from '@/data/frameworks'
import type { GenerateRequest, AudienceId, PlatformId, ToneId, FrameworkId } from '@/types'

interface Props {
  filters: GenerateRequest
  topic: string
  onTopicChange: (topic: string) => void
  onChange: (filters: GenerateRequest) => void
  onGenerate: () => void
  onRandom: () => void
  loading: boolean
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{children}</p>
  )
}

function SelectField<T extends string>({
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
      <SectionLabel>{label}</SectionLabel>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function FilterPanel({
  filters,
  topic,
  onTopicChange,
  onChange,
  onGenerate,
  onRandom,
  loading,
}: Props) {
  const canGenerate = topic.trim().length > 0

  return (
    <div className="flex flex-col h-full px-6 pt-6 pb-8 gap-5">
      {/* Campagneonderwerp */}
      <div>
        <SectionLabel>Campagne</SectionLabel>
        <input
          type="text"
          value={topic}
          onChange={(e) => onTopicChange(e.target.value)}
          placeholder="Bijv. minder schermtijd en meer focus"
          className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      <SelectField<AudienceId>
        label="Doelgroep"
        options={audiences}
        value={filters.audienceId}
        onChange={(id) => onChange({ ...filters, audienceId: id })}
      />
      <SelectField<PlatformId>
        label="Platform"
        options={platforms}
        value={filters.platformId}
        onChange={(id) => onChange({ ...filters, platformId: id })}
      />
      <SelectField<ToneId>
        label="Tone of voice"
        options={tones}
        value={filters.toneId}
        onChange={(id) => onChange({ ...filters, toneId: id })}
      />

      {/* Framework cards */}
      <div className="flex-1 flex flex-col min-h-0">
        <SectionLabel>Mode</SectionLabel>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {frameworks.map((f) => {
            const selected = filters.frameworkId === f.id
            return (
              <button
                key={f.id}
                onClick={() => onChange({ ...filters, frameworkId: f.id as FrameworkId })}
                className={`w-full text-left rounded-xl px-3 py-2.5 border transition-colors ${
                  selected
                    ? 'bg-zinc-700 border-indigo-500'
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm font-semibold ${selected ? 'text-white' : 'text-zinc-300'}`}>
                    {f.label}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono shrink-0">{f.technicalName}</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">{f.shortDescription}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Actions — altijd onderaan */}
      <div className="shrink-0 flex gap-2">
        <button
          onClick={onGenerate}
          disabled={loading || !canGenerate}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
        >
          {loading ? 'Genereren…' : 'Genereer content'}
        </button>
        <button
          onClick={onRandom}
          disabled={loading}
          className="px-3 py-2.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-300 rounded-xl transition-colors text-sm"
          title="Willekeurige filters"
        >
          ⚡
        </button>
      </div>
    </div>
  )
}
