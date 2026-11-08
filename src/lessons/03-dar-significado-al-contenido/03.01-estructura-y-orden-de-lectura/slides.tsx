import { Fragment } from 'react'
import { exampleUrl } from '../../../examples/exampleUrl'

export const slides = [
  <Fragment key="3.1-1">
    <h2 className="lesson-slide__title">
      Estructura de página y orden de lectura
    </h2>
    <p>
      Aprenderemos a organizar una página para localizar contenido y
      comprenderlo al leer en secuencia.
    </p>
    <p>
      Antes de actuar necesitamos saber de qué trata, dónde está la información
      y en qué orden usarla.
    </p>
  </Fragment>,
  <Fragment key="3.1-2">
    <h2 className="lesson-slide__title">
      Los encabezados permiten localizar secciones
    </h2>
    <p>
      Un encabezado anuncia de qué trata el contenido que viene después. Un
      texto grande o en negrita no aporta esa relación por sí solo.
    </p>
    <pre>
      <code>{'<h2>Ingredientes</h2>\n<ul>\n  <li>1 cebolla</li>\n</ul>'}</code>
    </pre>
    <p>
      Los lectores de pantalla pueden reunir los encabezados en una lista y
      saltar entre ellos.
    </p>
  </Fragment>,
  <Fragment key="3.1-3">
    <h2 className="lesson-slide__title">
      El nivel expresa una relación entre secciones
    </h2>
    <p>
      El título principal orienta sobre la página; las secciones y subsecciones
      organizan sus partes.
    </p>
    <pre>
      <code>
        {
          '<h1>Lentejas estofadas con verduras</h1>\n<h2>Ingredientes</h2>\n<h3>Para el sofrito</h3>\n<h2>Preparación</h2>'
        }
      </code>
    </pre>
    <p>
      Elige el nivel por jerarquía; usa CSS para el tamaño. Al cerrar una
      subsección se puede volver a un nivel superior.
    </p>
  </Fragment>,
  <Fragment key="3.1-4">
    <h2 className="lesson-slide__title">
      Las regiones identifican grandes áreas
    </h2>
    <p>
      Para orientarse también ayuda distinguir la cabecera, la navegación, el
      contenido principal y el pie.
    </p>
    <pre>
      <code>
        {
          '<header>…</header>\n<nav>…</nav>\n<main>Contenido propio de esta página</main>\n<footer>…</footer>'
        }
      </code>
    </pre>
    <p>
      Usa un main visible por documento. Un header o footer dentro de una
      sección no representa necesariamente la cabecera o el pie global.
    </p>
  </Fragment>,
  <Fragment key="3.1-5">
    <h2 className="lesson-slide__title">
      El documento debe conservar una secuencia con sentido
    </h2>
    <p>
      Si el orden cambia el significado, conserva una secuencia correcta en el
      HTML.
    </p>
    <ol>
      <li>Presentar la información necesaria.</li>
      <li>Dar las instrucciones en su orden.</li>
      <li>Ofrecer la acción y su resultado.</li>
    </ol>
    <p>
      Reordenar con CSS no corrige el orden del documento. Leer contenido y
      recorrer controles con Tab son comprobaciones diferentes.
    </p>
  </Fragment>,
  <Fragment key="3.1-6">
    <h2 className="lesson-slide__title">
      Recorrer encabezados y leer las instrucciones
    </h2>
    <ol>
      <li>Abre la lista de encabezados del lector y localiza una sección.</li>
      <li>Busca el contenido principal mediante regiones.</li>
      <li>Lee los pasos: ¿mantienen el mismo sentido que en pantalla?</li>
    </ol>
    <p>
      Una lista de roles en el inspector no demuestra lo que anuncia un lector
      real.
    </p>
    <a className="lesson-slide__example-link" href={exampleUrl('receta')}>
      {' '}
      Examinar estructura con barreras{' '}
    </a>
    <a className="lesson-slide__example-link" href={exampleUrl('receta', true)}>
      {' '}
      Recorrer estructura corregida{' '}
    </a>
  </Fragment>,
  <Fragment key="3.1-7">
    <h2 className="lesson-slide__title">Comprobar estructura y secuencia</h2>
    <ul>
      <li>¿Los encabezados describen las secciones y sus relaciones?</li>
      <li>¿Se identifica el contenido principal?</li>
      <li>¿La lectura secuencial conserva las instrucciones?</li>
      <li>
        ¿La presentación visual y el documento permiten comprender lo mismo?
      </li>
    </ul>
    <p>
      Comprueba con un lector real; el aspecto y el código por separado no
      muestran toda la experiencia.
    </p>
  </Fragment>,
]
