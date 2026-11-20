---
name: example-pr-visuals
description: Prepare example pages, the floating fix toggle, course slides, or rendered UI for the author's manual pull-request review. Build every changed surface, identify its local route, and keep screenshots out of the pull request.
---

# Prepare local visual review

Use this skill whenever a pull request changes a course slide, the portal, the
content pages, or any rendered UI. Example pages live in a separate site
(<https://weaaare.github.io/curso-introduccion-desarrollo-web-accesible/>). The author performs the visual
review locally; the agent leaves every affected surface ready to inspect.

## Workflow

1. Inspect the diff and list every affected course slide and every example link it points to.
   Reuse the slugs in `src/examples/exampleRegistry.ts` and the slide headings
   already present in the repository. Completion means the author can identify
   every changed rendered surface without reconstructing the diff.
2. Build the app with the commands declared in `package.json`. The same Vite app
   serves the index at `/`, slides at `/diapositivas/` (`#/modulo-N`,
   `#/leccion-N-M`) and Markdown content at `/contenido/`. Examples are external:
   `<site>/<slug>/` and `<site>/<slug>/arreglo/` for the fixed state.
3. Confirm that each affected example link opens the right external page in both
   states. Confirm that every affected slide is reachable in teaching
   order. Render every changed slide at the review viewport and confirm that all
   visible content and links remain inside the slide canvas without clipping or
   overlap. Leave those surfaces running when the author is actively reviewing them.
4. Return the affected example routes and slide positions in the task handoff so the
   author can open them locally without reconstructing the diff.
5. Add one concise PR validation line that marks the author's manual visual review
   as pending or completed. Keep route inventories out of the PR and preserve the
   issue-closing line and executed validation commands.

## Review rules

- Keep visual review separate from tests, accessibility checks, and build
  validation.
- Keep generated captures and uploaded images out of the workflow.
- Inspect and validate routes without producing screenshots; the rendered local
  surfaces are the review artifact.

## Completion criteria

- Every changed example link is mapped to its external `<slug>/` URL.
- Every changed course slide is included in teaching order.
- Every changed slide fits the review viewport without clipped or overlapping
  content.
- The app builds successfully.
- The task handoff identifies the local routes and slide positions affected.
- The PR description states the status of the author's manual visual review,
  contains no screenshots, and preserves its issue reference and validation
  details.
