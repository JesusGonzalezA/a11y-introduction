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
      Un lector de pantalla no ve la página. Lee lo que el navegador le cuenta
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
      El navegador lee el HTML y crea el <strong>árbol de accesibilidad</strong>
      : la lista de lo que hay en la página. Las tecnologías asistivas, como el
      lector de pantalla, leen ese árbol.
    </p>
    <Code tone="neutral">
      {'<button type="button" disabled>19:00 · Agotada</button>'}
    </Code>
    <ul>
      <li>
        <strong>Nombre</strong> (cómo se llama): «19:00 · Agotada».
      </li>
      <li>
        <strong>Rol</strong> (qué es): botón.
      </li>
      <li>
        <strong>Estado</strong> (cómo está): no disponible.
      </li>
    </ul>
    <p>Un lector lo anuncia así: «19:00 Agotada, botón, no disponible».</p>
  </Fragment>,
  <Fragment key="2.2-situacion">
    <SlideTitle kind="situacion">
      Elena quiere elegir sesión en el cine
    </SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere ir al cine esta tarde: elegir una sesión con entradas y saber que la ha elegido."
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
      <li>Oye «16:30» y nada más: no sabe que se puede pulsar.</li>
      <li>La sesión agotada solo se distingue por el color gris.</li>
      <li>
        Al elegir, aparece un mensaje en pantalla, pero el lector no se lo lee.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-solucion-html">
    <SlideTitle kind="solucion">Botones de verdad, con su estado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button type="button" onclick="elegir()">16:30</button>\n<button type="button" disabled>\n  19:00 · Agotada\n</button>'
      }
    </Code>
    <ul>
      <li>
        <code>button</code> ya trae el rol, el teclado y el foco.
      </li>
      <li>
        <code>disabled</code> añade el estado.
      </li>
      <li>El texto «Agotada» lo explica a todas las personas.</li>
    </ul>
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
        <code>role="status"</code>: el lector lee el texto cuando cambia, sin
        mover el foco.
      </li>
      <li>
        <code>aria-atomic="true"</code>: lo lee entero.
      </li>
    </ul>
    <p>
      Regla de oro: primero HTML. ARIA añade información, pero no añade teclado
      ni comportamiento.
    </p>
    <ExampleLinks slug="cine" task="elegir una sesión" />
  </Fragment>,
]
