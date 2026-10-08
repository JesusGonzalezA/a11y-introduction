---
name: storybook-pr-visuals
description: Prepare components, stories, course slides, or rendered UI for the author's manual pull-request review. Build every changed surface, identify its local route, and keep screenshots out of the pull request.
---

# Prepare local visual review

Use this skill whenever a pull request changes a React component, Storybook
story, lesson example, course slide, or any rendered UI. The author performs
the visual review locally; the agent leaves every affected surface ready to
inspect.

## Workflow

1. Inspect the diff and list every affected component, story, and course slide.
   Reuse the story titles, exported story names, and slide headings already
   present in the repository. Completion means the author can identify every
   changed rendered surface without reconstructing the diff.
2. Build Storybook and the course deck with the commands declared in
   `package.json`.
3. Confirm that each affected story has a local Storybook route and that every
   affected slide is reachable in teaching order. Render every changed slide at
   the review viewport and confirm that all visible content and links remain inside
   the slide canvas without clipping or overlap. Leave those surfaces running when
   the author is actively reviewing them.
4. Return the affected story routes and slide positions in the task handoff so the
   author can open them locally without reconstructing the diff.
5. Add one concise PR validation line that marks the author's manual visual review
   as pending or completed. Keep route inventories out of the PR and preserve the
   issue-closing line and executed validation commands.

## Review rules

- Prefer real Storybook stories over ad hoc preview routes.
- Keep visual review separate from tests, accessibility checks, and build
  validation.
- Keep generated captures and uploaded images out of the workflow.
- Inspect and validate routes without producing screenshots; the rendered local
  surfaces are the review artifact.
- When the change has no Storybook story, add the smallest co-located story
  needed to make the rendered behavior reviewable, unless the repository's
  course structure explicitly says the unit is documentation-only.

## Completion criteria

- Every changed component or story is mapped to a Storybook story.
- Every changed course slide is included in teaching order.
- Every changed slide fits the review viewport without clipped or overlapping
  content.
- Storybook builds successfully.
- The course deck builds successfully when slides change.
- The task handoff identifies the local routes and slide positions affected.
- The PR description states the status of the author's manual visual review,
  contains no screenshots, and preserves its issue reference and validation
  details.
