export type AudienceId = 'student' | 'young-professional' | 'parent'
export type PlatformId = 'instagram' | 'linkedin' | 'tiktok'
export type ToneId = 'informative' | 'inspiring' | 'playful' | 'professional'
export type FrameworkId =
  | 'core'
  | 'create'
  | 'risen'
  | 'para'
  | 'dare'
  | 'road'

export interface Audience {
  id: AudienceId
  label: string
  description: string
}

export interface Platform {
  id: PlatformId
  label: string
  description: string
}

export interface Tone {
  id: ToneId
  label: string
  description: string
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
  // Gebruik {{audience}}, {{platform}}, {{tone}}, {{topic}} als placeholders
  template: string
}

export interface GenerateRequest {
  audienceId: AudienceId
  platformId: PlatformId
  toneId: ToneId
  frameworkId: FrameworkId
  topic: string
}

export interface GenerateResponse {
  post: string
  prompt: string
  frameworkExplanation: string
}
