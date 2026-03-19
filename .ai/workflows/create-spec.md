# Spec Workflow Prompt

Transform high-level requirements into a complete spec inside `.ai/specs/{slug}/`.

---

## Output

Produce exactly **three files** inside `.ai/specs/{slug}/`:

| File              | Purpose                        |
|-------------------|--------------------------------|
| `requirements.md` | What we are building and why   |
| `plan.md`         | How we will build it           |
| `tasks.md`        | Concrete, enumerated task list |

---

## Step 1 — `requirements.md`

**Heading:** `# Requirements: {Feature Name}`

**Structure:**

1. **Introduction** – One short paragraph summarising the purpose and scope.
2. **Requirements** – Sequentially numbered (1, 2, 3, …).

Each requirement must contain:

- A **User Story**:
  > As a [role], I want [goal] so that [benefit].

- One or more **Acceptance Criteria**:
  > WHEN [condition] THEN the system SHALL [expected behaviour].

**Guidelines:**

- Cover the happy path, edge cases, error handling, persistence, and UI/UX where applicable.
- Group related requirements under a `##` subheading.
- Make every acceptance criterion specific and independently testable.

---

## Step 2 — `plan.md`

**Heading:** `# Implementation Plan: {Feature Name}`

**Structure:**

1. **Overview** – Two to three sentences on the overall approach.
2. **Plan items** – Sequentially numbered, grouped under `##` subheadings by concern (e.g. Data Layer, API, Frontend).

Each plan item must contain:

- A concise title.
- A short description of the work involved.
- **Priority:** `High` | `Medium` | `Low`
- **Linked requirements:** e.g. `REQ-1, REQ-3`

**Guidelines:**

- Every requirement from `requirements.md` must appear in at least one plan item.
- Order plan items so that dependencies are visible (foundational items first).

---

## Step 3 — `tasks.md`

**Heading:** `# Tasks: {Feature Name}`

**Structure:**

- Group tasks under `##` phase headings, ordered logically:
  `Setup → Core → Extended Features → Testing & QA`
- Each task is a numbered checklist item.

Each task must contain:

- `[ ]` completion checkbox.
- A concise action description (imperative, e.g. *Create*, *Implement*, *Write*).
- Reference to the linked plan item: `→ Plan-2`
- Reference to the linked requirement(s): `→ REQ-1, REQ-4`

**Example:**

```
## Phase 1 – Setup

1. [ ] Initialise the database schema for invoices → Plan-1 → REQ-2
2. [ ] Configure authentication middleware → Plan-2 → REQ-1
```

**Guidelines:**

- Every plan item must appear in at least one task.
- Tasks must be atomic — one clear action per item.
- Do not skip phases even if they contain only one or two tasks.

---

## Quality check

Before finishing, verify:

- [ ] Every requirement in `requirements.md` is covered by at least one plan item in `plan.md`.
- [ ] Every plan item in `plan.md` is covered by at least one task in `tasks.md`.
- [ ] All cross-references (`REQ-n`, `Plan-n`) are consistent across the three files.
- [ ] The slug folder name matches the slug provided by the user.