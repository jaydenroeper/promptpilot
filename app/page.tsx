'use client'

import { useState } from 'react'
import TopBar from '@/components/TopBar'
import WizardStepIndicator from '@/components/WizardStepIndicator'
import PersonaStep from '@/components/PersonaStep'
import FrameworkStep from '@/components/FrameworkStep'
import OutputStep from '@/components/OutputStep'
import type { GenerateResponse, PersonaId, FrameworkId } from '@/types'

type WizardStep = 1 | 2 | 3

export default function HomePage() {
  const [step, setStep] = useState<WizardStep>(1)
  const [personaId, setPersonaId] = useState<PersonaId | null>(null)
  const [topic, setTopic] = useState('')
  const [frameworkId, setFrameworkId] = useState<FrameworkId>('core')
  const [result, setResult] = useState<GenerateResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!personaId) return
    setStep(3)
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ personaId, frameworkId, topic }),
      })
      if (!res.ok) throw new Error('Genereren mislukt')
      const data: GenerateResponse = await res.json()
      setResult(data)
    } catch {
      setError('Er ging iets mis. Controleer je API key en probeer opnieuw.')
      setStep(2)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setStep(1)
    setPersonaId(null)
    setTopic('')
    setFrameworkId('core')
    setResult(null)
    setError(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <TopBar />

      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-3xl flex flex-col gap-10">
          {/* Step indicator */}
          <div className="flex justify-center">
            <WizardStepIndicator currentStep={step} />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-950 border border-red-800 text-red-300 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Stap inhoud */}
          {step === 1 && (
            <PersonaStep
              selectedPersonaId={personaId}
              topic={topic}
              onPersonaSelect={setPersonaId}
              onTopicChange={setTopic}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <FrameworkStep
              selectedFrameworkId={frameworkId}
              onFrameworkSelect={setFrameworkId}
              onBack={() => setStep(1)}
              onGenerate={handleGenerate}
              loading={loading}
            />
          )}

          {step === 3 && (
            <div className="min-h-96">
              <OutputStep
                result={result}
                loading={loading}
                onBack={() => setStep(2)}
                onReset={handleReset}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
