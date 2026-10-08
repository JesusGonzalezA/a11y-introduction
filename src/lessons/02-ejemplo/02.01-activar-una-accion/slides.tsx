import { Fragment } from 'react'
import { course } from '../../../course'

const storyPath =
  'módulo-2-ejemplo-lección-2-1-activar-una-acción-componentes-button'

export const slides = [
  <Fragment key="accion">
    <h2 className="lesson-slide__title">Activar una acción</h2>
    <p>
      Aprender a ofrecer una acción reconocible y operable con un botón HTML.
    </p>
    <ul>
      <li>El texto visible identifica qué hace la acción.</li>
      <li>
        <code>button</code> aporta el rol y el comportamiento nativos.
      </li>
      <li>
        <code>type="button"</code> evita enviar un formulario.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="teclado">
    <h2 className="lesson-slide__title">Teclado y estado deshabilitado</h2>
    <ul>
      <li>Tab alcanza el botón y permite reconocer el foco.</li>
      <li>Enter y Espacio activan la acción.</li>
      <li>
        <code>disabled</code> impide activarlo y lo retira del recorrido de Tab.
      </li>
    </ul>
    <p>Estas conductas nativas no requieren añadir atributos ARIA.</p>
    <div>
      <a
        className="lesson-slide__example-link"
        href={`${course.storybookUrl}/?path=/story/${storyPath}--default`}
      >
        Probar la activación del botón
      </a>
      <a
        className="lesson-slide__example-link"
        href={`${course.storybookUrl}/?path=/story/${storyPath}--disabled`}
      >
        Revisar el estado deshabilitado
      </a>
    </div>
  </Fragment>,
]
