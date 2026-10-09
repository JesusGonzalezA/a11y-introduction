import { Fragment } from 'react'

const storybook = import.meta.env.VITE_STORYBOOK_URL || 'http://localhost:6006'
export const slides = [
  <Fragment key="5.3-1">
    <h2 className="lesson-slide__title">Cómo continuar aprendiendo</h2>
    <p>
      Ya puedes reconocer barreras, dar significado al contenido, facilitar la
      interacción y comenzar una revisión.
    </p>
    <p>
      Para profundizar en estructura: HTML Semántico. Para nombres, roles,
      estados y relaciones: Fundamentos de ARIA.
    </p>
    <a
      className="lesson-slide__example-link"
      href="https://weaaare.com/cursos/curso-accesibilidad-digital-html-semantico-para-disenadores"
    >
      HTML Semántico para diseñadores
    </a>
    <a
      className="lesson-slide__example-link"
      href="https://weaaare.com/cursos/curso-accesibilidad-digital-introduccion-a-aria"
    >
      Introducción a ARIA
    </a>
    <p>Estos son los títulos de las fichas públicas verificadas.</p>
  </Fragment>,
  <Fragment key="5.3-2">
    <h2 className="lesson-slide__title">
      Practicar, probar y ampliar las interfaces
    </h2>
    <p>
      Ruta prevista: Testing de componentes para accesibilidad; después,
      Formularios y navegación. Data Display queda como curso futuro.
    </p>
    <a
      className="lesson-slide__example-link"
      href="https://weaaare.com/cursos/curso-testing-de-accesibilidad-digital-para-desarrolladores"
    >
      Testing de accesibilidad para desarrolladores
    </a>
    <a
      className="lesson-slide__example-link"
      href="https://weaaare.com/cursos/aria-avanzado-navegacion-accesible"
    >
      ARIA Avanzado: Navegación accesible
    </a>
    <p>
      Curso específico de Formularios y Data Display: publicación y URL no
      verificadas. Como apoyo para formularios:
    </p>
    <a
      className="lesson-slide__example-link"
      href="https://www.w3.org/WAI/tutorials/forms/labels/"
    >
      Etiquetado de controles, WAI
    </a>
  </Fragment>,
  <Fragment key="5.3-3">
    <h2 className="lesson-slide__title">
      Herramientas, ejemplos y continuación
    </h2>
    <p>
      Inspeccionar:{' '}
      <a href="https://pauljadam.com/bookmarklets/headings.html">Headings</a>,{' '}
      <a href="https://pauljadam.com/bookmarklets/images.html">Images</a> y{' '}
      <a href="https://accessibilityinsights.io/docs/web/getstarted/fastpass/">
        FastPass
      </a>
      .
    </p>
    <p>
      Practicar:{' '}
      <a
        href={`${storybook}/iframe.html?id=m5-label-inspection--solucion&viewMode=story`}
      >
        actividad corregida
      </a>{' '}
      y <a href={storybook}>etapas del curso en Storybook</a>.
    </p>
    <p>
      Continuar:{' '}
      <a href="https://weaaare.com/cursos/curso-accesibilidad-digital-html-semantico-para-disenadores">
        HTML Semántico
      </a>
      ,{' '}
      <a href="https://weaaare.com/cursos/curso-accesibilidad-digital-introduccion-a-aria">
        Introducción a ARIA
      </a>
      ,{' '}
      <a href="https://weaaare.com/cursos/curso-testing-de-accesibilidad-digital-para-desarrolladores">
        Testing
      </a>{' '}
      y{' '}
      <a href="https://weaaare.com/cursos/aria-avanzado-navegacion-accesible">
        Navegación
      </a>
      .
    </p>
    <p>
      Formularios:{' '}
      <a href="https://www.w3.org/WAI/tutorials/forms/labels/">apoyo WAI</a>.
      curso aún no verificado. Data Display: futuro, sin enlace verificado.
    </p>
    <p>Elegir una tarea → revisar → corregir → volver a comprobar.</p>
  </Fragment>,
]
