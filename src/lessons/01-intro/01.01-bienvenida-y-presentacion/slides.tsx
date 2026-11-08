import { Fragment } from 'react'
import { course } from '../../../course'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="bienvenida">
    <SlideTitle kind="leccion">Bienvenida y presentación</SlideTitle>
    <p>{course.description}</p>
    <dl className="facts">
      <dt>Docente</dt>
      <dd>{course.author} · weaaare</dd>
      <dt>Para quién</dt>
      <dd>{course.audience}</dd>
    </dl>
  </Fragment>,
  <Fragment key="por-que-accesibilidad">
    <SlideTitle kind="leccion">Qué es la accesibilidad web</SlideTitle>
    <p>
      Una web es accesible cuando cualquier persona, también con discapacidad,
      puede <strong>percibirla, entenderla, recorrerla y usarla</strong>.
    </p>
    <ul>
      <li>1 de cada 6 personas en el mundo vive con una discapacidad (OMS).</li>
      <li>
        Todas la necesitamos alguna vez: un brazo roto, el sol en la pantalla,
        la vista cansada con la edad.
      </li>
      <li>
        En la Unión Europea, la Ley Europea de Accesibilidad la exige a muchos
        productos y servicios digitales desde junio de 2025.
      </li>
    </ul>
    <p>
      Casi todas las barreras nacen en el HTML y el CSS que escribimos. Por eso
      también se arreglan ahí.
    </p>
  </Fragment>,
  <Fragment key="como-funciona-cada-leccion">
    <SlideTitle kind="leccion">Cómo funciona cada lección</SlideTitle>
    <ol className="steps">
      <li>
        <strong>La lección:</strong> qué vamos a aprender.
      </li>
      <li>
        <strong>La situación:</strong> una persona, cómo usa la web y qué quiere
        hacer.
      </li>
      <li>
        <strong>El error común:</strong> qué falla en la página y qué le pasa a
        esa persona.
      </li>
      <li>
        <strong>La solución:</strong> el cambio en el código y por qué funciona.
      </li>
    </ol>
    <p>
      Cada error vive en una página de ejemplo real. Un botón flotante aplica el
      arreglo y muestra dónde está cada cambio.
    </p>
  </Fragment>,
]
