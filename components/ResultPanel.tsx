'use client'

import { useState } from 'react'
import CopyButton from './CopyButton'
import type { GenerateResponse } from '@/types'

type Tab = 'post' | 'prompt' | 'uitleg'

interface Props {
  result: GenerateResponse | null
  loading: boolean
}

function Skeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-zinc-800 rounded w-3/4" />
      <div className="h-4 bg-zinc-800 rounded w-full" />
      <div className="h-4 bg-zinc-800 rounded w-5/6" />
      <div className="h-4 bg-zinc-800 rounded w-2/3" />
    </div>
  )
}

export default function ResultPanel({ result, loading }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('post')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'post', label: 'Post' },
    { id: 'prompt', label: 'Prompt' },
    { id: 'uitleg', label: 'Uitleg' },
  ]

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3.5 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-white border-b-2 border-indigo-500 -mb-px'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 min-h-48">
        {loading ? (
          <Skeleton />
        ) : !result ? (
          <p className="text-zinc-600 text-sm">
            Stel je filters in en klik op &ldquo;Genereer content&rdquo; om te beginnen.
          </p>
        ) : (
          <>
            {activeTab === 'post' && (
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-zinc-100 text-base leading-relaxed whitespace-pre-wrap flex-1">
                    {result.post}
                  </p>
                  <CopyButton text={result.post} />
                </div>
              </div>
            )}

            {activeTab === 'prompt' && (
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <pre className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap font-mono flex-1 bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                    {result.prompt}
                  </pre>
                  <CopyButton text={result.prompt} />
                </div>
              </div>
            )}

            {activeTab === 'uitleg' && (
              <div className="space-y-3">
                <p className="text-zinc-200 text-sm leading-relaxed">
                  {result.frameworkExplanation}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
