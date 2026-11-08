---
name: example-pr-visuals
description: Prepare example pages, the floating fix toggle, course slides, or rendered UI for the author's manual pull-request review. Build every changed surface, identify its local route, and keep screenshots out of the pull request.
---

# Prepare local visual review

Use this skill whenever a pull request changes an example page, the floating
fix toolbar, a course slide, or any rendered UI. The author performs the visual
review locally; the agent leaves every affected surface ready to inspect.

## Workflow

1. Inspect the diff and list every affected example page and course slide.
   Reuse the slugs in `src/examples/exampleRegistry.ts` and the slide headings
   already present in the repository. Completion means the author can identify
   every changed rendered surface without reconstructing the diff.
2. Build the app with the commands declared in `package.json`. The same Vite app
   serves the index at `/`, slides at `/diapositivas/` (`#/modulo-N`,
   `#/leccion-N-M`), examples at `/ejemplos/<slug>` with `?arreglo=1` for the
   fixed state, and Markdown content at `/contenido/`.
3. Confirm that each affected example page opens in both states, that the floating
   toggle switches between them, and that "Ver cambios" highlights every fix listed
   in its definition. Confirm that every affected slide is reachable in teaching
   order. Render every changed slide at the review viewport and confirm that all
   visible content and links remain inside the slide canvas without clipping or
   overlap. Leave those surfaces running when the author is actively reviewing them.
4. Return the affected example routes and slide positions in the task handoff so the
   author can open them locally without reconstructing the diff.
5. Add one concise PR validation line that marks the author's manual visual review
   as pending or completed. Keep route inventories out of the PR and preserve the
   issue-closing line and executed validation commands.

## Review rules

- Prefer real example pages over ad hoc preview routes.
- Keep visual review separate from tests, accessibility checks, and build
  validation.
- Keep generated captures and uploaded images out of the workflow.
- Inspect and validate routes without producing screenshots; the rendered local
  surfaces are the review artifact.
- When the change has no example page, add the smallest co-located page and
  registry entry needed to make the rendered behavior reviewable, unless the
  repository's course structure explicitly says the unit is documentation-only.

## Completion criteria

- Every changed example is mapped to an `/ejemplos/<slug>` route.
- Every changed course slide is included in teaching order.
- Every changed slide fits the review viewport without clipped or overlapping
  content.
- The app builds successfully.
- The task handoff identifies the local routes and slide positions affected.
- The PR description states the status of the author's manual visual review,
  contains no screenshots, and preserves its issue reference and validation
  details.
