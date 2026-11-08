# Sistema de diseño y voz de weAAAre

Referencia visual y editorial del curso. Recoge cómo se ve y cómo habla weAAAre
para que las diapositivas, el portal, el contenido y las páginas de ejemplo
parezcan parte de la escuela.

Fuentes analizadas (noviembre de 2026):

- [weaaare.com/inicio](https://weaaare.com/inicio): portada, cabecera, botones,
  tarjetas de curso y pie.
- [weaaare.com/guias/auditoria-accesibilidad-web](https://weaaare.com/guias/auditoria-accesibilidad-web):
  forma de explicar, avisos, pasos numerados e índice lateral.
- [weaaare.com/cursos/…/html-semantico-para-disenadores](https://weaaare.com/cursos/curso-accesibilidad-digital-html-semantico-para-disenadores):
  ficha de curso y características.
- [halloween-web-oscura.vercel.app](https://halloween-web-oscura.vercel.app/#contenido):
  página de práctica de weAAAre. Es el modelo para las páginas de ejemplo.

- Presentación en PDF del curso «Introducción a ARIA» de weAAAre (54
  diapositivas, septiembre de 2025). Es la referencia de la sección 6 y no se
  versiona en este repositorio. weaaare.com no publica PDFs de muestra.

Los valores salen del CSS de producción de weaaare.com (Tailwind v4, tokens en
`:root`). La implementación del curso vive en
[`src/brand/tokens.css`](src/brand/tokens.css).

## 1. Personalidad

Una escuela que explica la accesibilidad **de manera clara y sin
complicaciones**. Seria en el contenido, cercana en el tono, con un punto de
juego en la ilustración.

- **Tinta sobre papel.** Casi todo es negro `#161616` sobre gris papel `#f8f8f8`.
  El color se reserva para señalar.
- **Bordes y sombras duras.** Líneas de 2 px y sombras sólidas sin difuminar
  hacen que los elementos parezcan piezas físicas que se pulsan.
- **Una serif cálida para titular y una sans hiperlegible para leer.**
- **Garabatos a mano**: estrellas de cuatro puntas (✦), explosiones y subrayados
  dibujados. Siempre decorativos (`aria-hidden="true"`) y escasos.
- **Accesible por defecto**: foco visible amarillo-ámbar, contraste AA o mejor,
  tipografía que no se rompe al ampliar.

## 2. Tipografía

| Papel | weaaare.com | En el curso (libre) | Pesos |
| --- | --- | --- | --- |
| Títulos (`--font-display`) | Recoleta | **Fraunces** (variable, la misma que usa la web de Halloween) | 500 |
| Texto e interfaz (`--font-body`) | Atkinson Hyperlegible | **Atkinson Hyperlegible** | 400 y 700 |
| Código (`--font-mono`) | Atkinson Hyperlegible Mono | **Atkinson Hyperlegible Mono** | 400 y 700 |

Recoleta es comercial, así que el curso usa Fraunces, que weAAAre ya eligió como
sustituta en sus páginas de práctica. Ajusta Fraunces con
`font-variation-settings: "SOFT" 100, "WONK" 0` y `opsz` automático para acercarla
a la redondez de Recoleta.

### Escala

Interlineados fijos y tamaños en `rem`. Los títulos crecen en dos saltos (48rem y
80rem); el texto no cambia.

| Token | Familia | Base | ≥ 48rem | ≥ 80rem |
| --- | --- | --- | --- | --- |
| `h1` | display 500 | 2.1875 / 2.4375rem | 2.75 / 3.125rem | 4.3125 / 4.9375rem |
| `h2` | display 500 | 1.75 / 2rem | 2.1875 / 2.4375rem | 3.4375 / 3.8125rem |
| `h3` | display 500 | 1.75 / 2rem | — | 2.125 / 2.4375rem |
| `h4` | display 500 | 1.4375 / 1.75rem | — | 1.75 / 2rem |
| `large` | body 400/700 | 1.4375 / 1.75rem | | |
| `medium` | body 400/700 | 1.125 / 1.4375rem | | |
| `small` | body 400/700 | 1 / 1.375rem | | |
| `xsmall` | body 400/700 | 0.875 / 1.25rem | | |

Reglas:

- Los encabezados de sección van en display; los nombres dentro de tarjetas
  (personas, herramientas, pasos) van en body **bold** `large` o `medium`.
- El texto de lectura usa `medium` (18 px). `small` para metadatos, `xsmall` para
  pies y etiquetas.
- Sin `letter-spacing` ni mayúsculas forzadas. La única excepción son las
  etiquetas de una o dos palabras, y aun así se prefiere la caja normal.
- La frase destacada del titular puede llevar un subrayado dibujado a mano (en el
  curso: `text-decoration` ondulada o un SVG decorativo).

## 3. Color

### Neutros (rampa `primary`)

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-paper` | `#f8f8f8` | Fondo general (`background-main`). |
| `--color-surface` | `#ffffff` | Tarjetas, diálogos, campos (`background-main-light`). |
| `--color-surface-sunken` | `#e7e7e7` | Bloques hundidos, pistas de interruptores (`background-main-dark`). |
| `--color-ink` | `#161616` | Texto, bordes, botón principal, bloques invertidos (`foreground-main`). |
| `--color-ink-medium` | `#454545` | Texto secundario largo. |
| `--color-ink-soft` | `#5d5d5d` | Metadatos y ayudas (6.3:1 sobre papel). |
| `--color-rule-soft` | `#d1d1d1` | Separadores internos que no delimitan piezas. |

`#888` (`foreground-main-light`) solo para decoración: no llega a 4.5:1.

### Acento ámbar (rampa `accent`)

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-accent-50` | `#fefaec` | Fondo de aviso suave. |
| `--color-accent-100` | `#faf2cb` | Fondo de etiqueta «Intermedio». |
| `--color-accent-200` | `#f5e292` | Etiqueta amarilla. |
| `--color-accent` | `#efcd55` | **Relleno del enlace al pasar o enfocar**, resaltados. Siempre con tinta encima (12:1). |
| `--color-focus` | `#ca7815` | **Anillo de foco**: 3 px, separación 4 px (3.2:1 sobre papel). |
| `--color-accent-ink` | `#703817` | Texto ámbar sobre claro. |

### Avisos editoriales (`doc-*`)

Las guías usan familias de tres tonos —fondo, filete y tinta— para distinguir
tipos de bloque. El curso las asigna así:

| Familia | Fondo | Filete | Tinta | En el curso |
| --- | --- | --- | --- | --- |
| `callout` | `#fffdf5` | `#161616` | `#161616` | Idea clave, resumen de la lección. |
| `decide` (azul) | `#e8eefb` | `#c4d2f3` | `#1f3fa8` | **Situación**: la persona y su tarea. |
| `steps` (melocotón) | `#ffe8e0` | `#f3c3b3` | `#9b3b25` | **Error común**. |
| `case` (verde) | `#ebf6da` | `#c8e0a4` | `#33621c` | **Solución**. |
| `compare` (lila) | `#efe8ff` | `#d3c4f5` | `#4a2fa6` | **Cómo comprobarlo**. |
| `time` (miel) | `#fff3d4` | `#eed091` | `#8a5407` | Lección y resumen. |
| `mark` | `#ffe29a` | — | `#b96b05` | Resaltado dentro del texto (`<mark>`). |

### Etiquetas de nivel

Píldoras con borde de tinta de 2 px y relleno pastel: verde `#86efac`
(principiante), amarillo `#f5e292` (intermedio), rojo `#fecaca` (avanzado). El
texto siempre es tinta.

### Estados

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-error` | `#dc2626` / texto `#991b1b` | Errores de formulario. Acompaña siempre de icono o texto. |
| `--color-positive` | `#166534` | Confirmaciones. |

### Reglas de uso

1. Texto siempre en tinta o en la tinta de su familia; nunca en el color de
   relleno.
2. Un solo color de familia por bloque. Si dos bloques significan cosas
   distintas, usan familias distintas.
3. El color nunca es la única señal: acompaña con etiqueta, icono o forma.
4. El ámbar es el color de la interacción (hover, foco, seleccionado). No se
   usa como decoración de fondo grande.
5. Las secciones invertidas (fondo tinta, texto papel) sirven para agrupar
   ventajas o tarjetas blancas; una por pantalla como máximo.

## 4. Forma, espacio y sombra

- **Bordes**: 2 px tinta en todo lo que es una pieza (botón, tarjeta, campo,
  aviso, cabecera). Las secciones de la página se separan con una línea de 2 px a
  todo el ancho.
- **Radios**: 8 px (`--radius-md`) en botones y campos; 12 px (`--radius-lg`) en
  tarjetas y avisos; 999 px en etiquetas y conmutadores.
- **Sombra dura**: `0 var(--shadow-h) 0 0 var(--color-ink)` con `--shadow-h` de
  4, 6 u 8 px. Nunca sombras difuminadas, salvo en la herramienta flotante.
- **Espaciado**: múltiplos de 0.25rem. Margen lateral de página
  `clamp(1.25rem, 5vw, 3.5rem)`; separación entre secciones
  `clamp(3rem, 7vw, 5rem)`; relleno de tarjeta `clamp(1.5rem, 4vw, 2.5rem)`;
  2.5rem entre tarjetas apiladas y 1.5rem entre elementos de una lista de
  bloques. weaaare.com respira: ante la duda, más aire, no menos.
- **Ancho de lectura**: 42–48rem para texto largo, con interlineado 1.6.

### Requisitos de accesibilidad del sistema

Son parte de la marca, no un añadido. Se comprueban en cada superficie nueva.

| Requisito | Regla | WCAG |
| --- | --- | --- |
| Tamaño de objetivo | Todo enlace o botón que no esté dentro de una frase mide al menos 44 px de alto (`min-block-size: 2.75rem`) y se separa 0.5rem de su vecino. | 2.5.8 (AA) y 2.5.5 |
| Foco | Anillo de 3 px que contraste 3:1 con el fondo que pisa: ámbar sobre papel, blanco o tinta; **tinta sobre acentos pastel** (el ámbar se queda en 2–2.6:1). | 1.4.11, 2.4.7, 2.4.13 |
| Reflujo | A 320 px de ancho no hay desplazamiento horizontal: rejillas con `minmax(min(100%, Xrem), 1fr)`, `min-inline-size: 0` en elementos de rejilla y `overflow-wrap: anywhere` en código en línea. | 1.4.10 |
| Espaciado de texto | Nada se recorta ni se solapa con interlineado 1.5, espaciado entre letras 0.12em, entre palabras 0.16em y párrafos 2em. Sin alturas fijas en contenedores de texto. | 1.4.12 |
| Zonas desplazables | Una tabla o bloque de código que se desplaza en horizontal recibe `tabindex="0"` y foco visible. | 2.1.1 |
| Puntos de referencia | Todo contenido visible vive en `header`, `nav`, `main` o `footer`, incluida la barra del logotipo. | 1.3.1 |
| Contraste | Texto 4.5:1; colores de resaltado de código 7:1 sobre negro. | 1.4.3, 1.4.6 |

## 5. Componentes

### Botón

| Variante | Fondo | Texto | Borde | Sombra |
| --- | --- | --- | --- | --- |
| Principal | tinta | papel | 2 px tinta | 6 px degradado iridiscente (ver abajo) |
| Secundario | transparente | tinta | 2 px tinta | 6 px tinta |
| Icono | transparente | tinta | 2 px tinta | 6 px tinta, cuadrado |

- Atkinson bold 18 px, relleno `0.75rem 1rem`, radio 8 px.
- Al pasar el puntero, el botón **baja** un tercio de la sombra; al pulsar, baja
  entera. Con `prefers-reduced-motion: reduce` el cambio es instantáneo.
- La flecha `→` acompaña a las llamadas a la acción que llevan a otra página.
- Degradado iridiscente del principal (y del fondo del logotipo):
  `linear-gradient(90deg, #8b5cf6, #3b82f6, #22c55e, #facc15, #f97316, #ec4899)`.

### Enlace en el texto

Tinta, sin `text-decoration`, con `border-bottom: 2px solid`. Al pasar o enfocar,
un relleno ámbar sube desde la base hasta el 87 % de la línea y el filete pasa a
3 px. Es la seña de identidad más reconocible: úsala en todos los enlaces de
contenido.

### Foco

`outline: 3px solid var(--color-focus); outline-offset: 4px` en todo elemento
interactivo. En fondos de tinta se usa el ámbar claro `--color-accent`. Sobre un
acento pastel (cabeceras y recuadros de color), el anillo pasa a tinta, porque el
ámbar no llega a 3:1.

### Tarjeta

Superficie blanca, borde 2 px, radio 12 px, sombra dura opcional. Cabecera de
tarjeta como banda de color con borde inferior de 2 px (así se muestran los niveles
de curso).

### Aviso (callout)

Fondo `#fffdf5`, borde 2 px tinta, radio 12 px, sombra de 4 px, texto bold. Para
la idea que la persona debe recordar de la sección. Las variantes de familia
(`decide`, `case`…) usan su fondo, borde de su filete y título en su tinta.

### Lista de comprobación y pasos

- Ventajas: icono ✓ en círculo verde con borde de tinta + título bold + párrafo.
- Pasos: número dentro de un círculo pastel con borde de tinta, título en
  display, párrafo debajo.

### Teclas

`<kbd>` como píldora: borde 1.5 px tinta, radio 6 px, fondo blanco, Atkinson
bold 0.85em. Igual que en la web de Halloween.

### Logotipo

Tres píldoras apiladas con borde de tinta: «we», «AAA», «re». En el curso se
dibuja con texto y CSS (`BrandMark`), con `aria-label="weAAAre"`.

## 6. Presentaciones

Patrones del PDF «Introducción a ARIA», lienzo de 1920 × 1080:

- **Marco**: barra superior con celdas separadas por filetes de 1 px (logotipo
  sobre degradado iridiscente · nombre del curso · «weAAAre») y barra inferior
  (Módulo N · título del módulo · flecha →). El contenido vive entre ambas.
- **Portada de lección**: fondo papel con un degradado iridiscente difuminado
  desde la base (lila, azul, amarillo, rosa), insignia «Módulo N» inclinada sobre
  la píldora «Lección N.M» con sombra iridiscente y el título grande en display.
- **Título + entrada en negrita**: el párrafo que sigue al título va en Atkinson
  bold; los detalles, en regular.
- **Código**: bloque negro puro, radio 8 px, monoespaciada clara con resaltado.
  En el curso, `highlight.js` (HTML, CSS y JS) con estos colores sobre `#000`:
  etiquetas `#c4b5fd`, atributos `#a5b4fc`, valores `#86efac`, selectores
  `#fde68a`, palabras clave `#f9a8d4`, funciones `#93c5fd`, comentarios
  `#a3a3a3`. Todos superan 7:1. Se rotula con una
  etiqueta inclinada sobre una explosión («Ejemplo 2.1.1») o con una marca ✕ / ✓
  en círculo con borde para lo que no se debe y lo que sí se debe hacer.
- **Términos**: roles y atributos como fichas negras con texto blanco seguidas de
  su definición.
- **Tarjetas**: blancas con borde y sombra dura; los objetivos aparecen como tres
  tarjetas numeradas «01, 02, 03» sobre un bloque de tinta, con estrellas ✦.
- **Listas numeradas**: número blanco en círculo negro dentro de una píldora con
  borde y el texto en display.
- **«¿Sabías que?…»**: recuadro pequeño con borde, abajo a la derecha, para el
  dato curioso.
- **Tono**: «Este curso te proporcionará…», «¡Prepárate para aprender…!»,
  preguntas como títulos («¿Qué es ARIA?», «¿Cuándo usar ARIA?») e imperativos
  claros («No uses ARIA»).

## 7. Voz y forma de explicar

### Tono

- **Tú**, en singular y con cercanía: «Aprende a tu ritmo», «Pondrás en
  práctica la teoría aprendida».
- **Beneficio en futuro**: «Conseguirás», «Contarás con», «Aplicarás».
- **Exclamaciones con medida** en titulares de ánimo: «¡Aprende a tu ritmo!».
  Nunca en contenido técnico.
- **Honestidad que tranquiliza**: «No vende nada y no te pediremos datos
  reales», «Mediremos cuánto tardas, pero no hay límite de tiempo».
- **Humor solo en la ficción de los ejemplos** (la tienda de objetos malditos),
  nunca a costa de las personas con discapacidad.

### Estructura de una explicación (guías)

1. **Titular en pregunta**: «¿Qué es una auditoría de accesibilidad web?».
2. **Definición en una frase** que empieza por el término.
3. **Por qué importa**, con datos concretos y fuente («Más del 15 % de la
   población mundial…», «detectan alrededor del 30–40 %»).
4. **Cómo se hace**, en pasos numerados con título corto y un párrafo.
5. **Aviso** con la idea que hay que recordar.
6. **Herramientas** agrupadas por tipo, una línea por herramienta.

Recursos frecuentes:

- **Analogías cotidianas**: «Los encabezados son como el índice de un periódico
  para una persona ciega».
- **Consecuencia para la persona**: «Si en algún punto no sabes dónde estás…,
  eso es un error crítico».
- **Término en español y el inglés entre paréntesis** la primera vez: «indicador
  de foco (*focus indicator*)», «puntos de referencia (*landmarks*)».

### Vocabulario

| Preferido | Evitar |
| --- | --- |
| personas usuarias, personas con discapacidad | usuarios discapacitados, minusválidos |
| tecnologías asistivas, productos de apoyo | dispositivos especiales |
| lector de pantalla, ampliador, navegación por teclado | — |
| barrera, que nadie se quede fuera | problema del usuario |
| accesibilidad digital | a11y (en textos para el público) |
| a tu ritmo, teoría y práctica, sin complicaciones | fácil, simplemente, obviamente |
| foco visible, orden de lectura, texto alternativo | — |
| criterio WCAG, nivel AA | — |

La marca se escribe **weAAAre** en el texto visible. El dominio y los
identificadores del código mantienen `weaaare`.

### Microcopia

- Llamadas a la acción con verbo en imperativo y objeto: «Comienza tu
  aprendizaje», «Descubre nuestros cursos», «Únete gratis».
- Etiquetas de metadatos con dos puntos: «Duración: 1 h», «Nivel del curso:
  Principiante».
- Instrucciones de juego como misión numerada: «Tu misión: 1. Encuentra… 2.
  Elige… 3. Ve al carrito…».

## 8. Aplicación en el curso

| Superficie | Cómo aplica el sistema |
| --- | --- |
| Diapositivas | Lienzo de 1080 px de alto cuyo ancho sigue la proporción de la ventana (de 1728 a 2560 px, de 16:10 a 21:9) para ocupar todo el ancho sin recortar, letra base de 42 px, con el marco de las presentaciones, portada y separadores de módulo con degradado iridiscente, insignia «Módulo N / Lección N.M», títulos Fraunces, tipo de slide como etiqueta pastel con borde, tarjeta de persona en familia `decide`, código negro con marca ✕ (error) o ✓ (solución) y código en línea como ficha negra. |
| Portal y contenido | Cabecera con logotipo y línea de 2 px, tarjetas con sombra dura, enlaces con relleno ámbar. |
| Herramienta flotante | Barra de tinta con botones de borde, foco ámbar. Sigue aislada con su bloque BEM. |
| Páginas de ejemplo | Comparten el kit de [`src/brand/example-kit.css`](src/brand/example-kit.css): tipografías, papel, tinta, botones y tarjetas. Cada página conserva un color propio como «marca ficticia», como la llama de la web de Halloween. Las barreras deliberadas (`--barrier`) **no se suavizan** al aplicar la marca. |
