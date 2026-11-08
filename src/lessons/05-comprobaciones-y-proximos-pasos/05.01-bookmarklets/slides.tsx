import { Fragment } from 'react'
import { exampleUrl } from '../../../examples/exampleUrl'

export const slides = [
  <Fragment key="5.1-1">
    <h2 className="lesson-slide__title">
      Inspeccionar el contenido con bookmarklets
    </h2>
    <p>
      Aprenderemos a hacer visibles los niveles de los encabezados y las
      alternativas de las imágenes para revisar su significado.
    </p>
    <p>
      Un bookmarklet es un marcador que ejecuta JavaScript sobre la página
      abierta y añade información de inspección.
    </p>
  </Fragment>,
  <Fragment key="5.1-2">
    <h2 className="lesson-slide__title">Guardar y ejecutar un bookmarklet</h2>
    <ol>
      <li>
        Abre la ficha del autor y arrastra el enlace de instalación a la barra
        de marcadores.
      </li>
      <li>Abre la página que quieres revisar y activa el marcador guardado.</li>
      <li>
        Recarga para retirar las anotaciones antes de la siguiente comprobación.
      </li>
    </ol>
    <p>
      Guarda el enlace ejecutable, no la dirección de la ficha. Algunas
      políticas pueden bloquear sus scripts.
    </p>
    <a
      className="lesson-slide__example-link"
      href="https://pauljadam.com/bookmarklets/headings.html"
    >
      Instalar Headings de Paul Adam
    </a>
    <a
      className="lesson-slide__example-link"
      href="https://pauljadam.com/bookmarklets/images.html"
    >
      Instalar Images de Paul Adam
    </a>
  </Fragment>,
  <Fragment key="5.1-3">
    <h2 className="lesson-slide__title">Leer niveles y relaciones</h2>
    <p>
      Headings muestra etiquetas como h1, h2 y h3. Comprueba qué es título,
      sección y subsección: el tamaño visual no define esa relación.
    </p>
    <pre>
      <code>
        {
          '<h1>Hilos del Mediterráneo</h1>\n<h3>Información práctica</h3>  ← sección\n<h2>Horarios</h2>              ← subsección'
        }
      </code>
    </pre>
    <p>
      Aquí la sección necesita h2 y su subsección h3. Volver de h3 a h2 para
      abrir otra sección sí puede tener sentido.
    </p>
    <a className="lesson-slide__example-link" href={exampleUrl('museo')}>
      Inspeccionar niveles incoherentes
    </a>
  </Fragment>,
  <Fragment key="5.1-4">
    <h2 className="lesson-slide__title">Valorar la alternativa en contexto</h2>
    <p>
      Images muestra el valor de alt. Una marca verde indica su presencia, no
      que explique la información necesaria.
    </p>
    <pre>
      <code>
        {
          'alt="sala3_IMG_0412.jpg"  ← nombre de archivo\nalt="Tapiz de lana con olas azules y\nbarcas rojas sobre fondo arena."'
        }
      </code>
    </pre>
    <p>
      Compara imagen, texto y propósito. Si la imagen es decorativa o
      redundante, alt vacío puede ser adecuado; omitirlo es distinto.
    </p>
    <a className="lesson-slide__example-link" href={exampleUrl('museo')}>
      Inspeccionar una alternativa poco útil
    </a>
    <a className="lesson-slide__example-link" href={exampleUrl('museo', true)}>
      Revisar jerarquía y alternativa corregidas
    </a>
  </Fragment>,
  <Fragment key="5.1-5">
    <h2 className="lesson-slide__title">Interpretar y volver a comprobar</h2>
    <p>
      La herramienta revela datos. La persona decide si las relaciones y las
      alternativas permiten comprender el contenido.
    </p>
    <p>
      Corrige el HTML, recarga y repite. Las anotaciones no son una prueba de
      lector de pantalla ni una auditoría completa.
    </p>
    <p>
      Si la herramienta no se ejecuta, registra el bloqueo: no lo interpretes
      como una página sin problemas.
    </p>
  </Fragment>,
]
