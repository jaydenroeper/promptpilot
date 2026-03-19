export type PersonaId = 'student' | 'young_professional' | 'senior'
export type FrameworkId =
  | 'core'
  | 'create'
  | 'risen'
  | 'para'
  | 'dare'
  | 'road'

export interface ContentRules {
  sentence_length: 'short' | 'medium' | 'long'
  style: string
  language: string
  avoid: string[]
}

export interface Persona {
  id: PersonaId
  name: string
  age_range: string
  platform_primary: string
  platform_secondary: string
  tone: string[]
  pain_points: string[]
  motivations: string[]
  content_rules: ContentRules
}

export interface Framework {
  id: FrameworkId
  name: string
  goal: string
  description: string
  label: string
  shortDescription: string
  technicalName: string
}

export interface PromptTemplate {
  id: string
  name: string
  frameworkId: FrameworkId
  description: string
  // Placeholders: {{persona_name}}, {{platform}}, {{tone}}, {{style}}, {{pain_points}}, {{avoid}}, {{topic}}
  template: string
}

export interface GenerateRequest {
  personaId: PersonaId
  frameworkId: FrameworkId
  topic: string
}

export interface GenerateResponse {
  post: string
  prompt: string
  frameworkExplanation: string
}
