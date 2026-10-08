# Domain docs

Este repositorio usa una organización **single-context**. La documentación de
dominio se consume desde:

- `CONTEXT.md` en la raíz, si existe.
- `docs/adr/`, para decisiones arquitectónicas relevantes al área que se va a
  modificar.

Antes de explorar o modificar una parte del sistema, lee el `CONTEXT.md` y los
ADRs relacionados. Si no existen, continúa sin crear documentación de dominio
por adelantado. El skill de modelado de dominio los crea de forma diferida
cuando un término o una decisión necesite quedar establecido.

Usa en issues, propuestas, nombres de tests y cambios los términos definidos en
el glosario. Si una propuesta contradice un ADR existente, señálalo
explícitamente en lugar de sobrescribirlo de forma silenciosa.
