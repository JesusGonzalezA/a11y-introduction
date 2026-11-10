import { Fragment } from 'react'
import { course } from '../../../course'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="bienvenida">
    <SlideTitle kind="leccion">Bienvenida y presentación</SlideTitle>
    <p>{course.description}</p>
    <dl className="facts">
      <dt>Docente</dt>
      <dd>{course.author} · weAAAre</dd>
      <dt>Para quién</dt>
      <dd>{course.audience}</dd>
    </dl>
  </Fragment>,
  <Fragment key="por-que-accesibilidad">
    <SlideTitle kind="leccion">Qué es la accesibilidad web</SlideTitle>
    <p>
      Una web es accesible cuando cualquier persona puede{' '}
      <strong>percibirla, entenderla, recorrerla y usarla</strong>, también si
      tiene una discapacidad.
    </p>
    <ul>
      <li>1 de cada 6 personas vive con una discapacidad (OMS).</li>
      <li>
        Todas la necesitamos alguna vez: un brazo roto, el sol en la pantalla,
        la vista cansada.
      </li>
      <li>
        En la Unión Europea es obligatoria para muchos productos y servicios
        digitales desde junio de 2025.
      </li>
    </ul>
    <p>Muchas barreras nacen en nuestro HTML y CSS. Ahí mismo se arreglan.</p>
  </Fragment>,
  <Fragment key="como-funciona-cada-leccion">
    <SlideTitle kind="leccion">Cómo funciona cada lección</SlideTitle>
    <p>Todas las lecciones siguen los mismos cuatro pasos:</p>
    <ol className="steps">
      <li>
        <strong>La lección:</strong> qué vas a aprender.
      </li>
      <li>
        <strong>La situación:</strong> una persona y lo que quiere hacer.
      </li>
      <li>
        <strong>El error común:</strong> qué falla y qué le pasa a esa persona.
      </li>
      <li>
        <strong>La solución:</strong> qué cambia en el código y por qué
        funciona.
      </li>
    </ol>
    <p>Cada error se puede probar en una página de ejemplo.</p>
  </Fragment>,
  <Fragment key="como-usar-los-ejemplos">
    <SlideTitle kind="leccion">Cómo usar las páginas de ejemplo</SlideTitle>
    <p>
      Cada ejemplo es una página web normal que se abre{' '}
      <strong>con la barrera</strong>. Abajo a la derecha tiene una barra
      flotante:
    </p>
    <ol className="steps">
      <li>
        <strong>Prueba la tarea</strong> de la persona y nota la barrera.
      </li>
      <li>
        Elige <strong>«Con arreglo»</strong> y repite la tarea.
      </li>
      <li>
        Abre <strong>«Explicación»</strong>: verás qué cambia, dónde y por qué,
        con el código de las dos versiones.
      </li>
    </ol>
    <p>Vuelve a «Con barrera» cuando quieras para comparar.</p>
  </Fragment>,
]
