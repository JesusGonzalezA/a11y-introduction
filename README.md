# Introducción al desarrollo web accesible

Curso de **weaaare** para personas con HTML y CSS básicos, sin conocimientos
previos de accesibilidad. Docente: **Jesús González Álvarez**. Duración
aproximada: **60 minutos**, demostraciones incluidas.

Presenta los **errores de accesibilidad más comunes** desde la experiencia de
cinco personas y cómo resolverlos con HTML y CSS.

## Cómo está construida cada lección

1. **Lección:** qué vamos a aprender.
2. **Situación:** una persona, cómo usa la web y qué quiere hacer.
3. **Error común:** qué falla en la página y qué le pasa a esa persona.
4. **Solución:** el cambio en el código, con enlace a su página de ejemplo.

| Persona | Cómo usa la web |
| --- | --- |
| Andrés | Temblor en las manos; solo teclado |
| Elena | Ciega; lector de pantalla |
| Lucía | TDAH y dislexia; necesita textos claros que no desaparezcan |
| Manuel | 72 años, daltonismo rojo-verde; letra grande y zoom |
| Ana | Trastorno vestibular; «Reducir movimiento» activado |

## Programa

| Módulo | Lecciones | Ejemplos |
| --- | --- | --- |
| [1. Introducción](./src/lessons/01-intro/README.md) | 1.1 Bienvenida y presentación · 1.2 Objetivos y contenidos | — |
| [2. Entender la accesibilidad](./src/lessons/02-entender-la-accesibilidad/README.md) | 2.1 Personas, formas de interacción y barreras · 2.2 Cómo interpreta el navegador nuestra interfaz | `tienda-online`, `cine` |
| [3. Dar significado al contenido](./src/lessons/03-dar-significado-al-contenido/README.md) | 3.1 Estructura de página y orden de lectura · 3.2 Imágenes, enlaces y controles comprensibles | `receta`, `noticia` |
| [4. Permitir la interacción y la percepción](./src/lessons/04-interaccion-y-percepcion/README.md) | 4.1 Navegación por teclado y foco visible · 4.2 Contraste, color y tamaño del texto · 4.3 Animaciones y movimiento | `biblioteca`, `horarios`, `festival` |
| [5. Primeras comprobaciones y próximos pasos](./src/lessons/05-comprobaciones-y-proximos-pasos/README.md) | 5.1 Bookmarklets · 5.2 Accessibility Insights · 5.3 Cómo continuar aprendiendo | `museo`, `taller-bicicletas` |

Temario original: [issue #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).

## Instalar y ejecutar

Requisitos: Node.js 22.12 o posterior y pnpm 10.26.1 (`.nvmrc` selecciona Node 22).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

| Ruta | Qué es |
| --- | --- |
| `/` | Índice: por módulo y lección, enlaces a diapositivas, ejemplos y contenido |
| `/diapositivas/` | Presentación completa; `#/modulo-2` o `#/leccion-2-1` abren un punto concreto |
| `/ejemplos/` | Páginas de ejemplo agrupadas por módulo; `/ejemplos/<slug>?arreglo=1` abre la versión corregida |
| `/contenido/` | Documentación Markdown: `/contenido/modulo-2`, `/contenido/2.1`, `/contenido/2.1/presentador` |

Al publicar en un servidor estático, configura que las rutas desconocidas sirvan
`index.html`, como hacen `pnpm dev` y `pnpm preview`.

## Materiales de cada lección

Cada lección vive en `src/lessons/<módulo>/<lección>/`:

- `slides.tsx`: diapositivas que se entienden sin otro material.
- `presenter.md`: guía del presentador con palabras clave y frases importantes.
- `README.md`: resumen esquemático (objetivo, situación, errores, ejemplo, pruebas, fuentes).
- `examples/<Página>/`: página de ejemplo, su definición (`*.example.ts`) y sus tests.

`src/lessons/lessonRegistry.ts` fija el orden de módulos, lecciones y slides;
`src/examples/exampleRegistry.ts` registra las páginas de ejemplo.

## Páginas de ejemplo

Cada página es un sitio creíble y distinto que se abre con la barrera. El botón
flotante **Aplicar arreglo** la corrige sin recargar y **Ver cambios** resalta
dónde está cada cambio, explica por qué y muestra el código antes y después.

## Validación

```bash
pnpm check
```

Ejecuta tests (Vitest + Testing Library + axe), lint (Biome) y build. Las pruebas
en JSDOM no sustituyen la revisión con teclado, lector de pantalla, zoom, ajustes
del sistema y la revisión visual del autor; cada módulo enumera las comprobaciones
manuales pendientes.
