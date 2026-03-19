import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { promptLibrary } from '@/data/promptLibrary'
import { frameworks } from '@/data/frameworks'
import { personas } from '@/data/personas'
import type { GenerateRequest } from '@/types'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

function fillTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{\{(\w+(?:-\w+)*)\}\}/g, (_, key) => vars[key] ?? key)
}

export async function POST(request: Request) {
  const body = (await request.json()) as GenerateRequest
  const { personaId, frameworkId, topic } = body

  const template = promptLibrary.find((t) => t.frameworkId === frameworkId)
  if (!template) {
    return NextResponse.json({ error: 'Onbekend framework' }, { status: 400 })
  }

  const persona = personas.find((p) => p.id === personaId)
  const framework = frameworks.find((f) => f.id === frameworkId)

  if (!persona || !framework) {
    return NextResponse.json({ error: 'Ongeldige waarden' }, { status: 400 })
  }

  const filledPrompt = fillTemplate(template.template, {
    persona_name: persona.name,
    platform: persona.platform_primary,
    tone: persona.tone.join(', '),
    style: persona.content_rules.style,
    pain_points: persona.pain_points.join(', '),
    avoid: persona.content_rules.avoid.join(', '),
    topic,
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
