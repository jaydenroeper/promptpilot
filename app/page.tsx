'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import FilterPanel from '@/components/FilterPanel'
import ResultPanel from '@/components/ResultPanel'
import type { GenerateRequest, GenerateResponse, AudienceId, PlatformId, ToneId, FrameworkId } from '@/types'

const audienceIds: AudienceId[] = ['student', 'young-professional', 'parent']
const platformIds: PlatformId[] = ['instagram', 'linkedin', 'tiktok']
const toneIds: ToneId[] = ['informative', 'inspiring', 'playful', 'professional']
const frameworkIds: FrameworkId[] = ['core', 'create', 'risen', 'para', 'dare', 'road']

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function HomePage() {
  const [filters, setFilters] = useState<GenerateRequest>({
    audienceId: 'student',
    platformId: 'tiktok',
    toneId: 'playful',
    frameworkId: 'core',
    topic: '',
  })
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState<GenerateResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async (overrideFilters?: GenerateRequest, overrideTopic?: string) => {
    const activeTopic = overrideTopic ?? topic
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...(overrideFilters ?? filters), topic: activeTopic }),
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

  // Random vult alleen de filters, nooit het tekstveld
  const handleRandom = () => {
    const randomFilters: GenerateRequest = {
      audienceId: randomPick(audienceIds),
      platformId: randomPick(platformIds),
      toneId: randomPick(toneIds),
      frameworkId: randomPick(frameworkIds),
      topic,
    }
    setFilters(randomFilters)
    handleGenerate(randomFilters, topic)
  }

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Hero — vaste hoogte bovenaan */}
      <div className="shrink-0">
        <HeroSection />
      </div>

      {/* Two-column zone — vult resterende hoogte, elke kolom scrollt intern */}
      <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-6">
        <aside className="overflow-y-auto">
          <FilterPanel
            filters={filters}
            topic={topic}
            onTopicChange={setTopic}
            onChange={setFilters}
            onGenerate={() => handleGenerate()}
            onRandom={handleRandom}
            loading={loading}
          />
        </aside>

        <main className="overflow-y-auto flex flex-col gap-4">
          {error && (
            <div className="bg-red-950 border border-red-800 text-red-300 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}
          <ResultPanel result={result} loading={loading} />
        </main>
      </div>
    </div>
  )
}
