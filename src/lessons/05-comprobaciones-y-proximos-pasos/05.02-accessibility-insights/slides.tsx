import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="5.2-leccion">
    <SlideTitle kind="leccion">
      Detectar problemas con Accessibility Insights
    </SlideTitle>
    <p>
      Accessibility Insights for Web es una extensión gratuita de Microsoft para
      Chrome y Edge. Usaremos dos de sus pruebas:
    </p>
    <ul>
      <li>
        <strong>FastPass → Automated checks:</strong> analiza la página y lista
        los fallos que una máquina puede detectar.
      </li>
      <li>
        <strong>Tab stops:</strong> dibuja el camino del foco mientras pulsas
        Tab.
      </li>
    </ul>
    <p>
      <a
        className="lesson-slide__example-link"
        href="https://accessibilityinsights.io/downloads/"
      >
        Instalar Accessibility Insights
      </a>
      <a
        className="lesson-slide__example-link"
        href="https://accessibilityinsights.io/docs/web/getstarted/fastpass/"
      >
        Guía de FastPass
      </a>
    </p>
  </Fragment>,
  <Fragment key="5.2-situacion">
    <SlideTitle kind="situacion">
      Elena pide cita en un taller de bicicletas
    </SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere rellenar el formulario de cita: nombre, teléfono y qué le pasa a la bici."
    />
  </Fragment>,
  <Fragment key="5.2-error">
    <SlideTitle kind="error">
      El texto «Teléfono» no está unido al campo
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {'<span>Teléfono</span>\n<input id="telefono" type="tel">'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> llega al campo y su lector solo dice
      «campo de edición». No sabe qué escribir.
    </p>
    <p>
      FastPass lo detecta. Abre el resultado y la extensión resalta el campo en
      la página.
    </p>
  </Fragment>,
  <Fragment key="5.2-solucion">
    <SlideTitle kind="solucion">
      Asociar la etiqueta y repetir la prueba
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<label for="telefono">Teléfono</label>\n<input id="telefono" type="tel"\n  autocomplete="tel">'
      }
    </Code>
    <ol>
      <li>Ejecuta FastPass otra vez: el fallo ya no aparece.</li>
      <li>
        Activa Tab stops y recorre el formulario como Andrés: ¿llegas a todo, en
        orden y viendo el foco?
      </li>
    </ol>
    <ExampleLinks
      slug="taller-bicicletas"
      task="analizar el formulario de cita"
    />
  </Fragment>,
  <Fragment key="5.2-limites">
    <SlideTitle kind="resumen">Cero errores no significa accesible</SlideTitle>
    <p>
      Las herramientas automáticas solo encuentran una parte de los problemas.
      No saben si:
    </p>
    <ul>
      <li>un alt describe bien la imagen;</li>
      <li>un enlace o un botón se entiende;</li>
      <li>el orden tiene sentido o la tarea se puede completar.</li>
    </ul>
    <p>
      Combina herramientas, revisión manual con teclado y lector de pantalla y,
      siempre que puedas, pruebas con personas usuarias.
    </p>
  </Fragment>,
]
