# Issue tracker: GitHub

Issues y specs de este repositorio viven en GitHub Issues. Usa la CLI `gh` para
todas las operaciones del tracker.

## Convenciones

- Crear una issue: `gh issue create --title "..." --body "..."`.
- Leer una issue: `gh issue view <number> --comments`.
- Listar issues: `gh issue list --state open`.
- Comentar una issue: `gh issue comment <number> --body "..."`.
- Aplicar o quitar etiquetas: `gh issue edit <number> --add-label "..."` y
  `gh issue edit <number> --remove-label "..."`.
- Cerrar una issue: `gh issue close <number> --comment "..."`.

La issue se infiere del remoto GitHub del checkout actual. Las skills que
publiquen una especificación deben crear una issue de GitHub.

## Pull requests como superficie de triage

No. Las pull requests no se tratan como solicitudes externas dentro del flujo
de triage.
