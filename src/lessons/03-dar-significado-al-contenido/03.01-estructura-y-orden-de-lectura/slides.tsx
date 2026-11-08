import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="3.1-leccion">
    <SlideTitle kind="leccion">
      Estructura de página y orden de lectura
    </SlideTitle>
    <p>
      Con la vista, una página se entiende de un vistazo. Con un lector de
      pantalla se recorre por partes: la estructura es el mapa.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Encabezados y sus niveles: h1, h2, h3…</li>
      <li>Regiones: cabecera, navegación, contenido principal y pie.</li>
      <li>Un orden del HTML que conserve el sentido.</li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-situacion">
    <SlideTitle kind="situacion">Elena quiere cocinar unas lentejas</SlideTitle>
    <PersonaCard
      id="elena"
      task="Abre una receta en un blog. Quiere saltar directamente a los ingredientes y después seguir los pasos en orden."
    />
    <p>
      Su lector le ofrece la lista de encabezados y de regiones para saltar
      entre secciones, como quien echa un vistazo.
    </p>
  </Fragment>,
  <Fragment key="3.1-error-estructura">
    <SlideTitle kind="error">Títulos y zonas que solo lo parecen</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div class="cabecera">…</div>\n<div class="contenido">\n  <div class="titulo">Ingredientes</div>\n  <div class="subtitulo">Para el sofrito</div>\n</div>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> su lector no encuentra ningún
      encabezado ni región. Tiene que escuchar la página entera, desde el menú,
      para llegar a los ingredientes.
    </p>
  </Fragment>,
  <Fragment key="3.1-solucion-estructura">
    <SlideTitle kind="solucion">Encabezados con nivel y regiones</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<header>…</header>\n<nav aria-label="Principal">…</nav>\n<main>\n  <h1>Lentejas estofadas</h1>\n  <h2>Ingredientes</h2>\n  <h3>Para el sofrito</h3>\n</main>\n<footer>…</footer>'
      }
    </Code>
    <ul>
      <li>
        El nivel indica la jerarquía, no el tamaño: el tamaño se cambia con CSS.
      </li>
      <li>
        Un solo <code>h1</code> y un solo <code>main</code> por página.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-error-orden">
    <SlideTitle kind="error">
      Los pasos se ven en orden, pero se leen al revés
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div style="flex-direction: column-reverse">\n  <p>4. Cuece 35 minutos…</p>\n  …\n  <p>1. Pica la cebolla…</p>\n</div>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> el lector sigue el orden del HTML,
      no el de la pantalla. Oye «cuece 35 minutos» antes de picar la cebolla.
    </p>
  </Fragment>,
  <Fragment key="3.1-solucion-orden">
    <SlideTitle kind="solucion">
      El orden del HTML es el orden de lectura
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<ol>\n  <li>Pica la cebolla…</li>\n  …\n  <li>Cuece 35 minutos…</li>\n</ol>'
      }
    </Code>
    <ul>
      <li>Escribe el HTML en el orden en que debe leerse; CSS solo coloca.</li>
      <li>
        <code>ol</code> anuncia que son pasos y cuántos hay.
      </li>
    </ul>
    <ExampleLinks
      slug="receta"
      barrier="Recorrer la receta sin estructura"
      fixed="Recorrer la receta con encabezados y regiones"
    />
  </Fragment>,
]
