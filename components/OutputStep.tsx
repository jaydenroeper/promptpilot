'use client'

import ResultPanel from './ResultPanel'
import type { GenerateResponse } from '@/types'

interface Props {
  result: GenerateResponse | null
  loading: boolean
  onBack: () => void
  onReset: () => void
}

export default function OutputStep({ result, loading, onBack, onReset }: Props) {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex-1 min-h-0">
        <ResultPanel result={result} loading={loading} />
      </div>

      <div className="shrink-0 flex justify-between">
        <button
          onClick={onBack}
          disabled={loading}
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-300 rounded-xl transition-colors text-sm font-medium"
        >
          ← Terug
        </button>
        <button
          onClick={onReset}
          disabled={loading}
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-300 rounded-xl transition-colors text-sm font-medium"
        >
          Opnieuw beginnen
        </button>
      </div>
    </div>
  )
}
