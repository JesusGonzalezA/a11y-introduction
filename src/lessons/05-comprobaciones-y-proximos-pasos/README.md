# Módulo 5. Primeras comprobaciones de accesibilidad y próximos pasos

**10 minutos**, incluidas demos. [Issue #6](https://github.com/JesusGonzalezA/a11y-introduction/issues/6),
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
La persona necesita reconocer qué información expone una página, localizar una
barrera, corregirla y saber qué revisar después. Se completa el programa de
**5 módulos, 11 lecciones y 60 minutos nominales**.

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [5.1 Inspeccionar el contenido con bookmarklets](05.01-bookmarklets/README.md) | Revelar niveles y alt; interpretarlos en contexto | 4 min | 49–53 (`/#/48` a `/#/52`) |
| [5.2 Detectar problemas con Accessibility Insights](05.02-accessibility-insights/README.md) | Localizar, corregir, repetir; observar Tab stops | 4 min | 54–58 (`/#/53` a `/#/57`) |
| [5.3 Cómo continuar aprendiendo](05.03-como-continuar-aprendiendo/README.md) | Elegir continuación y recuperar recursos | 2 min | 59–61 (`/#/58` a `/#/60`) |

Cinco/cinco/tres slides y apartados de guion correspondientes. Los tiempos
240/240/120 s incluyen las demos, con herramientas preparadas antes de clase.
**Ensayo cronometrado pendiente**. No se añaden patrones avanzados ni una demo
en la recapitulación. La instalación completa se prepara fuera de la grabación;
5.1 sí explica y muestra cómo guardar/ejecutar un marcador.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile`. Puertos de esta sesión:

```bash
VITE_STORYBOOK_URL=http://localhost:6010 pnpm dev --host 127.0.0.1 --port 5180 --strictPort
pnpm storybook --host 127.0.0.1 --port 6010 --ci
```

[Slides del módulo](http://localhost:5180/#/48),
[Storybook](http://localhost:6010). Sin estas opciones: 5173/6006.
Todas las demos usan `iframe.html` como documento aislado y `pageLayout: true`;
no ejecutar herramientas sobre el panel contenedor de Storybook.

| Superficie | Ruta desde Storybook |
| --- | --- |
| 5.1 Contraejemplo deliberado: niveles y alt | `/iframe.html?id=m5-content-inspection--contraejemplo&viewMode=story` |
| 5.1 Solución: jerarquía y alternativa contextual | `/iframe.html?id=m5-content-inspection--solucion&viewMode=story` |
| 5.2 Contraejemplo deliberado: campo sin etiqueta | `/iframe.html?id=m5-label-inspection--contraejemplo&viewMode=story` |
| 5.2 Solución: etiqueta visible asociada | `/iframe.html?id=m5-label-inspection--solucion&viewMode=story` |

Los ejemplos componen [ActivityPage compartida](../shared/README.md), que conserva
la inscripción simulada sin envío de datos, sus estilos y las etapas anteriores.
Solo se añade `inspectionBarrier` opcional. Los dos wrappers son escenarios,
no componentes reutilizables nuevos. Las soluciones restituyen la base HTML nativa.

## Evidencia y límites

[Investigación previa fechada](../../../docs/research/05-comprobaciones-y-proximos-pasos.md),
[auditoría separada de tests y documentación](audit.md). Las lecciones indican los
pasos reproducibles y el estado de cada herramienta. DOM/axe no son FastPass ni AT.

| Comprobación | Estado / cómo completarla |
| --- | --- |
| Headings e Images en fichas oficiales | Enlaces ejecutados realmente; etiquetas observadas. Guardado en barra y ejecución en actividad local pendientes |
| Accessibility Insights / FastPass / Tab stops | No ejecutado: política del navegador bloqueó `chrome://extensions/`; no se intentó eludirla. Procedimiento en 5.2 |
| Autor humano | Revisión visual final de 13 slides y 4 stories; ensayo 4 + 4 + 2 min pendientes |
| NVDA + Firefox/Chrome en Windows; VoiceOver + Safari en macOS | Niveles, alternativas, campo, enlaces, botón y confirmación; no ejecutado |
| VoiceOver iOS/Safari; TalkBack Android/Chrome | Lectura, gestos, edición/teclado virtual y confirmación; no ejecutado |
| Teclado humano en Chrome/Firefox/Safari | Recorrido ida/vuelta, activación, foco visible/no tapado y salida; pendiente |
| Control por voz | Activar por nombre visible; no ejecutado |
| Zoom real 200%/400%, reflujo, orientación móvil | Legibilidad, contenido y operabilidad; pendientes, no sustituidos por JSDOM |

Registrar fecha, SO, navegador/versión, herramienta/versión, URL/variante, pasos,
resultado y bloqueos. No marcar completo sin esa evidencia. Formularios (curso
específico) y Data Display no tienen publicación/URL verificadas; la ruta prevista
se conserva con recursos WAI de apoyo, sin inventar disponibilidad.
