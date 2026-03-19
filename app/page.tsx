'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import FilterPanel from '@/components/FilterPanel'
import ResultPanel from '@/components/ResultPanel'
import type { GenerateRequest, GenerateResponse, AudienceId, PlatformId, ToneId, FrameworkId } from '@/types'

const audienceIds: AudienceId[] = ['student', 'young-professional', 'parent']
const platformIds: PlatformId[] = ['instagram', 'linkedin', 'tiktok']
const toneIds: ToneId[] = ['informative', 'inspiring', 'playful', 'professional']
const frameworkIds: FrameworkId[] = [
  'role-based',
  'structured-output',
  'few-shot',
  'chain-of-thought',
  'style-tone',
  'constraint-based',
]

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function HomePage() {
  const [filters, setFilters] = useState<GenerateRequest>({
    audienceId: 'student',
    platformId: 'tiktok',
    toneId: 'playful',
    frameworkId: 'role-based',
  })
  const [result, setResult] = useState<GenerateResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async (overrideFilters?: GenerateRequest) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(overrideFilters ?? filters),
      })
      if (!res.ok) throw new Error('Genereren mislukt')
      const data: GenerateResponse = await res.json()
      setResult(data)
    } catch {
      setError('Er ging iets mis. Controleer je API key en probeer opnieuw.')
    } finally {
      setLoading(false)
    }
  }

  const handleRandom = () => {
    const randomFilters: GenerateRequest = {
      audienceId: randomPick(audienceIds),
      platformId: randomPick(platformIds),
      toneId: randomPick(toneIds),
      frameworkId: randomPick(frameworkIds),
    }
    setFilters(randomFilters)
    handleGenerate(randomFilters)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <HeroSection />

        <div className="space-y-6">
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            onGenerate={() => handleGenerate()}
            onRandom={handleRandom}
            loading={loading}
          />

          {error && (
            <div className="bg-red-950 border border-red-800 text-red-300 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <ResultPanel result={result} loading={loading} />
        </div>
      </div>
    </div>
  )
}
