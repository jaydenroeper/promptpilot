interface Props {
  currentStep: 1 | 2 | 3
}

const steps = [
  { n: 1, label: 'Persona' },
  { n: 2, label: 'Framework' },
  { n: 3, label: 'Output' },
]

export default function WizardStepIndicator({ currentStep }: Props) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((step, i) => {
        const done = currentStep > step.n
        const active = currentStep === step.n

        return (
          <div key={step.n} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  done
                    ? 'bg-indigo-500 text-white'
                    : active
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 ring-offset-2 ring-offset-zinc-950'
                    : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                {done ? '✓' : step.n}
              </div>
              <span
                className={`text-xs font-medium ${
                  active ? 'text-white' : done ? 'text-indigo-400' : 'text-zinc-600'
                }`}
              >
                {step.label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`w-16 h-px mb-5 mx-2 transition-colors ${
                  currentStep > step.n ? 'bg-indigo-500' : 'bg-zinc-700'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
