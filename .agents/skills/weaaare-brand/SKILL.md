---
name: weaaare-brand
description: Use when writing or reviewing course text, slides, presenter notes, example pages, the portal, Markdown content, or any CSS in this repository, so that it looks and sounds like weAAAre. Applies the weAAAre tokens, components and voice documented in DESIGN.md without softening the deliberate barriers of the example pages.
---

# Aplicar la marca weAAAre

Haz que cada superficie del curso parezca una pieza de weAAAre: tinta sobre papel,
Fraunces y Atkinson Hyperlegible, bordes de 2 px y sombras duras, ámbar para la
interacción y una voz cercana que explica con claridad. La referencia completa,
con valores y fuentes, está en [`DESIGN.md`](../../../DESIGN.md).

## Fuentes de verdad

| Qué | Dónde |
| --- | --- |
| Tokens (color, tipografía, forma, foco) | `src/brand/tokens.css` |
| Logotipo | `src/brand/BrandMark.tsx` (`<BrandMark />`) |
| Diapositivas | `src/styles.css`, `src/slides/CourseSlides.tsx`, `src/slides/parts.tsx` |
| Portal, contenido e índice de ejemplos | `src/portal/portal.css`, `src/content/content.css`, `src/examples/examples-index.css` |
| Base de las páginas de ejemplo | `src/examples/example-base.css` |
| Herramienta flotante | `src/examples/example-devtools.css` (paleta propia en negativo) |

Usa siempre las variables de `tokens.css`. Un valor de color, radio o sombra
escrito a mano solo es válido para el acento ficticio de una página de ejemplo o
dentro de la herramienta flotante, que está aislada.

## Pasos

1. **Escribe con la voz de weAAAre.** Tutea, explica el beneficio en futuro
   («Aprenderás», «Conseguirás») y centra cada idea en la persona usuaria. Para
   explicar un concepto: pregunta o título → definición en una frase que empieza
   por el término → por qué importa con un dato y su fuente → cómo se hace en pasos
   → idea clave. Primera mención de un término técnico en español y el inglés
   entre paréntesis. Usa el vocabulario de `DESIGN.md` §7 («personas usuarias»,
   «tecnologías asistivas», «barrera») y escribe la marca como **weAAAre** en el
   texto visible.
   **Completado cuando:** el texto no contiene «usuarios discapacitados»,
   «simplemente», «obviamente» ni «a11y» dirigido al público, y cada concepto nuevo
   aparece después de la necesidad que resuelve.

2. **Aplica la tipografía.** Títulos y nombres de sección en `--font-display`
   (Fraunces, peso 500, `font-variation-settings: var(--font-display-settings)`);
   texto, etiquetas, botones y datos en `--font-body` (Atkinson Hyperlegible 400 y
   700); código en `--font-mono`. Sin mayúsculas forzadas ni `letter-spacing`.
   **Completado cuando:** ningún archivo de estilos del curso declara otra familia
   tipográfica salvo los respaldos de los tokens.

3. **Aplica color y forma.** Fondo `--color-paper`, texto `--color-ink`, piezas con
   `--border` (2 px tinta), `--radius-md` en botones y campos, `--radius-lg` en
   tarjetas y avisos, sombras `--shadow-sm` o `--shadow-md`. Cada tipo de bloque usa
   una sola familia editorial (`decide`, `steps`, `case`, `compare`, `time`) con su
   fondo y su tinta. El ámbar es solo para interacción: relleno del enlace al pasar
   o enfocar y anillo `--focus-ring` con `--focus-offset`.
   **Completado cuando:** todo texto alcanza 4.5:1, todo elemento interactivo
   muestra el anillo ámbar al enfocarse y el color nunca es la única señal.

4. **Usa los componentes.** Botón principal en tinta y secundario con borde y
   sombra dura que baja al pasar el puntero; enlaces con filete de 2 px y relleno
   ámbar; etiquetas en píldora con borde y relleno pastel; `<kbd>` como píldora
   blanca con borde; avisos crema con borde y sombra. En las diapositivas usa el
   marco de `CourseSlides`, la insignia «Módulo N / Lección N.M», bloques de código
   negros con marca ✕ o ✓ (`<Code tone>`) y términos de código como fichas negras.
   **Completado cuando:** la superficie no introduce un componente nuevo que ya
   exista en `DESIGN.md` §5 con otro aspecto.

5. **Protege las barreras de los ejemplos.** Cada página de ejemplo es una marca
   ficticia con el lenguaje de weAAAre y un `--page-accent` pastel propio, como la
   tienda de la web de Halloween de weAAAre. Las reglas que crean la barrera
   (`--barrier`, `--no-focus`, `--sold-out`, `--reversed`…) se conservan tal cual;
   no añadas un estilo con más especificidad que las anule (por ejemplo, un
   `:focus-visible` propio de un botón en una página cuya barrera es el foco).
   **Completado cuando:** la página sin arreglo sigue mostrando la barrera, la
   versión arreglada la corrige y los tests del ejemplo pasan.

6. **Cumple los requisitos de accesibilidad del sistema** (`DESIGN.md` §4):
   objetivos de 44 px fuera de las frases, separación generosa entre bloques,
   anillo de foco de tinta sobre acentos pastel, sin desplazamiento horizontal a
   320 px ni recortes con espaciado de texto ampliado, zonas desplazables
   enfocables y todo el contenido dentro de un punto de referencia. Pasa axe en el
   navegador (no en jsdom, que no calcula contraste) con las reglas WCAG 2.2 AA.
   **Completado cuando:** axe no informa infracciones y las comprobaciones de 320 px
   y espaciado de texto no encuentran desbordamientos.

7. **Comprueba en el navegador.** Abre las superficies tocadas con `pnpm dev` y
   recorre las diapositivas afectadas con el lienzo más estrecho (1728 × 1080, una
   ventana 16:10) y el más ancho: ningún contenido puede desbordar
   `.slide-frame__body`. El código de las slides se
   escribe con `<Code>`, que lo resalta; no uses `<pre>` a mano. Después aplica
   `example-pr-visuals`.
   **Completado cuando:** `pnpm test`, `pnpm lint` y `pnpm build` pasan y las rutas
   afectadas quedan listas para la revisión manual.

## Decisiones fijas

- Recoleta es comercial: el curso usa **Fraunces**, la sustituta que weAAAre ya
  usa en sus páginas de práctica.
- El logotipo se dibuja con texto y CSS; no se descargan recursos de weaaare.com.
- Las ilustraciones y garabatos son decorativos: `aria-hidden="true"` y nunca
  portadores de información.
