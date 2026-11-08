import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="2.2-leccion">
    <SlideTitle kind="leccion">
      Cómo interpreta el navegador nuestra interfaz
    </SlideTitle>
    <p>
      Un lector de pantalla no ve la página: lee lo que el navegador le cuenta
      de cada elemento.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Qué es el árbol de accesibilidad.</li>
      <li>Qué son el nombre, el rol y el estado de un control.</li>
      <li>Por qué HTML va primero y ARIA solo completa lo que falta.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-arbol">
    <SlideTitle kind="leccion">Nombre, rol y estado</SlideTitle>
    <p>
      HTML → el navegador crea el <strong>árbol de accesibilidad</strong> → la
      tecnología de apoyo lo lee y lo anuncia.
    </p>
    <Code tone="neutral">
      {'<button type="button" disabled>19:00 · Agotada</button>'}
    </Code>
    <ul>
      <li>
        <strong>Nombre</strong> (qué es): «19:00 · Agotada».
      </li>
      <li>
        <strong>Rol</strong> (qué tipo de control): botón.
      </li>
      <li>
        <strong>Estado</strong> (cómo está): no disponible.
      </li>
    </ul>
    <p>Un lector lo anuncia así: «19:00 Agotada, botón, atenuado».</p>
  </Fragment>,
  <Fragment key="2.2-situacion">
    <SlideTitle kind="situacion">
      Elena quiere elegir sesión en el cine
    </SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere ver una película esta tarde: elegir una sesión que tenga entradas y saber que la ha elegido."
    />
  </Fragment>,
  <Fragment key="2.2-error">
    <SlideTitle kind="error">
      Las sesiones parecen botones, pero no lo son
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div class="sesion" onclick="elegir()">16:30</div>\n<div class="sesion sesion--agotada">19:00</div>\n<p class="resultado"></p>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong>
    </p>
    <ul>
      <li>Oye «16:30», sin rol: no sabe que puede pulsarlo.</li>
      <li>La sesión agotada solo se distingue por estar en gris.</li>
      <li>Al elegir, el mensaje aparece en pantalla, pero nadie se lo lee.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-solucion-html">
    <SlideTitle kind="solucion">Botones nativos con su estado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button type="button" onclick="elegir()">16:30</button>\n<button type="button" disabled>\n  19:00 · Agotada\n</button>'
      }
    </Code>
    <p>
      El elemento <code>button</code> ya aporta rol, teclado y foco;{' '}
      <code>disabled</code> aporta el estado. El texto «Agotada» lo hace visible
      para todas las personas.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-aria">
    <SlideTitle kind="solucion">Anunciar la confirmación con ARIA</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<p role="status" aria-atomic="true"></p>\n<!-- al elegir: «Has elegido la sesión de las 16:30» -->'
      }
    </Code>
    <ul>
      <li>
        <code>role="status"</code>: el lector anuncia el texto cuando cambia,
        sin mover el foco.
      </li>
      <li>
        <code>aria-atomic="true"</code>: lo lee completo.
      </li>
    </ul>
    <p>
      Regla de oro: primero HTML. ARIA solo añade información; no añade teclado
      ni comportamiento.
    </p>
    <ExampleLinks
      slug="cine"
      barrier="Ver las sesiones en el árbol de accesibilidad"
      fixed="Elegir sesión con botones y confirmación"
    />
  </Fragment>,
]
