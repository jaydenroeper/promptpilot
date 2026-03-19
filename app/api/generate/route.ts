import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { promptLibrary } from '@/data/promptLibrary'
import { frameworks } from '@/data/frameworks'
import { audiences } from '@/data/audiences'
import { platforms } from '@/data/platforms'
import { tones } from '@/data/tones'
import type { GenerateRequest } from '@/types'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

function fillTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{\{(\w+(?:-\w+)*)\}\}/g, (_, key) => vars[key] ?? key)
}

export async function POST(request: Request) {
  const body = (await request.json()) as GenerateRequest
  const { audienceId, platformId, toneId, frameworkId } = body

  const template = promptLibrary.find((t) => t.frameworkId === frameworkId)
  if (!template) {
    return NextResponse.json({ error: 'Onbekend framework' }, { status: 400 })
  }

  const audience = audiences.find((a) => a.id === audienceId)
  const platform = platforms.find((p) => p.id === platformId)
  const tone = tones.find((t) => t.id === toneId)
  const framework = frameworks.find((f) => f.id === frameworkId)

  if (!audience || !platform || !tone || !framework) {
    return NextResponse.json({ error: 'Ongeldige filter waarden' }, { status: 400 })
  }

  const filledPrompt = fillTemplate(template.template, {
    audience: audience.label,
    platform: platform.label,
    tone: tone.label,
    topic: 'minder schermtijd en meer focus',
  })

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: filledPrompt }],
    temperature: 0.8,
    max_tokens: 400,
  })

  const post = completion.choices[0]?.message?.content?.trim() ?? ''

  return NextResponse.json({
    post,
    prompt: filledPrompt,
    frameworkExplanation: framework.description,
  })
}
