import { Fragment } from 'react'
import { exampleUrl } from '../../../examples/exampleUrl'

export const slides = [
  <Fragment key="personas-interaccion-barreras">
    <h2 className="lesson-slide__title">
      Personas, formas de interacción y barreras
    </h2>
    <p>
      Aprenderemos a reconocer qué impide percibir, entender o completar una
      tarea.
    </p>
    <p>
      Una misma acción debe estar disponible para personas que utilizan la web
      de distintas formas.
    </p>
    <p>La barrera aparece en la relación entre la persona y la interfaz.</p>
  </Fragment>,
  <Fragment key="formas-de-utilizar-la-web">
    <h2 className="lesson-slide__title">
      Distintas formas de recorrer y activar
    </h2>
    <ul>
      <li>Ratón: señalar y activar un control.</li>
      <li>Teclado: recorrer controles y activarlos.</li>
      <li>Voz: dar órdenes usando nombres reconocibles.</li>
      <li>Ampliación: aumentar el contenido para percibirlo.</li>
      <li>
        Lector de pantalla: explorar estructura y contenido mediante voz o
        braille.
      </li>
    </ul>
    <p>
      Estas formas pueden combinarse; ninguna describe a todo un grupo de
      personas.
    </p>
  </Fragment>,
  <Fragment key="necesidades-y-barreras">
    <h2 className="lesson-slide__title">Necesidades y barreras concretas</h2>
    <ul>
      <li>
        Visuales: información solo por color → añadir texto con su significado.
      </li>
      <li>
        Auditivas: vídeo con explicación hablada sin subtítulos → subtitular
        habla y sonidos relevantes.
      </li>
      <li>Motoras: acción que solo responde al clic → permitir teclado.</li>
      <li>
        Cognitivas: instrucciones confusas → explicar pasos y acciones con
        claridad.
      </li>
    </ul>
    <p>Reconocer una barrera permite decidir qué cambiar en la interfaz.</p>
  </Fragment>,
  <Fragment key="alcanzar-accion-teclado">
    <h2 className="lesson-slide__title">Alcanzar una acción con teclado</h2>
    <p>
      Tab avanza y Shift + Tab retrocede entre controles. El foco indica dónde
      actuamos.
    </p>
    <p>
      Enlace de información → acción → enlace de ayuda. Si el foco salta la
      acción, la tarea se interrumpe.
    </p>
    <pre>
      <code>{'<button type="button">Añadir a la cesta</button>'}</code>
    </pre>
    <p>Un botón HTML permite activación con Enter y Espacio.</p>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('tienda-online')}
    >
      Observar una acción inalcanzable
    </a>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('tienda-online', true)}
    >
      Completar la acción con teclado
    </a>
  </Fragment>,
  <Fragment key="comprobar-la-tarea">
    <h2 className="lesson-slide__title">
      Comprobar que la tarea se puede completar
    </h2>
    <ol>
      <li>Alcanzar el control y reconocer el foco.</li>
      <li>Entender su acción y activarlo.</li>
      <li>Percibir el resultado y continuar el recorrido.</li>
    </ol>
    <p>Que funcione con ratón solo demuestra una forma de uso.</p>
    <p>El siguiente paso es entender qué significado comunica el navegador.</p>
  </Fragment>,
]
