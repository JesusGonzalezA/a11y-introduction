import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.1-leccion">
    <SlideTitle kind="leccion">
      Navegación por teclado y foco visible
    </SlideTitle>
    <p>
      El <strong>foco</strong> es el elemento que recibirá la próxima tecla.
      Quien navega con teclado necesita verlo en todo momento.
    </p>
    <ul className="keys">
      <li>
        <kbd>Tab</kbd> avanza y <kbd>Shift</kbd> + <kbd>Tab</kbd> retrocede
        entre enlaces y controles.
      </li>
      <li>
        <kbd>Enter</kbd> sigue un enlace; <kbd>Enter</kbd> o <kbd>Espacio</kbd>{' '}
        pulsan un botón.
      </li>
      <li>
        Todo se debe poder <strong>alcanzar</strong>, <strong>ver</strong>,{' '}
        <strong>activar</strong> y <strong>abandonar</strong> con teclado.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-situacion">
    <SlideTitle kind="situacion">
      Andrés entra en su cuenta de la biblioteca
    </SlideTitle>
    <PersonaCard
      id="andres"
      task="Quiere escribir su número de carné y su PIN, pulsar «Entrar» y renovar un préstamo."
    />
  </Fragment>,
  <Fragment key="4.1-error-foco">
    <SlideTitle kind="error">El foco se ha borrado con CSS</SlideTitle>
    <Code tone="error" caption="Así está">
      {'*:focus {\n  outline: none;\n}'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> pulsa Tab y no sabe dónde está.
      ¿Escribe en el carné o en el PIN? ¿Está ya en «Entrar»? Navega a ciegas.
    </p>
  </Fragment>,
  <Fragment key="4.1-solucion-foco">
    <SlideTitle kind="solucion">
      Un indicador de foco visible y con contraste
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        ':focus-visible {\n  outline: 3px solid #6d28d9;\n  outline-offset: 3px;\n}'
      }
    </Code>
    <ul>
      <li>
        <code>:focus-visible</code> es un selector de CSS: se aplica cuando el
        navegador sabe que hace falta ver el foco, como al usar el teclado.
      </li>
      <li>
        Nunca quites el <code>outline</code> sin poner otro indicador. Contraste
        mínimo 3:1 con el fondo.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-error-tapado">
    <SlideTitle kind="error">
      La cabecera fija tapa el elemento con foco
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {'.cabecera {\n  position: sticky;\n  top: 0;\n}'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> al volver hacia arriba con Shift +
      Tab, el enlace con foco queda debajo de la cabecera. El foco existe, pero
      no se ve.
    </p>
  </Fragment>,
  <Fragment key="4.1-solucion-tapado">
    <SlideTitle kind="solucion">
      Reservar espacio para la cabecera fija
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'html {\n  scroll-padding-top: 6rem;\n}'}
    </Code>
    <p>
      Al desplazarse hasta el elemento con foco, el navegador deja ese margen
      libre arriba.
    </p>
    <p>
      Compruébalo: recorre la página entera hacia delante y hacia atrás, sin
      ratón, mirando siempre dónde está el foco.
    </p>
    <ExampleLinks
      slug="biblioteca"
      barrier="Entrar en la cuenta sin foco visible"
      fixed="Entrar en la cuenta con foco visible"
    />
  </Fragment>,
]
