import { Fragment } from 'react'
import { portalUrl } from '../../../routes'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="5.3-resumen">
    <SlideTitle kind="leccion">Cómo continuar aprendiendo</SlideTitle>
    <p>Primero, un repaso: qué necesita cada persona y cómo se lo damos.</p>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Persona</th>
          <th scope="col">Necesita</th>
          <th scope="col">Solución</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Andrés</th>
          <td>Llegar a todo con teclado y ver el foco</td>
          <td>
            <code>button</code>, <code>:focus-visible</code>
          </td>
        </tr>
        <tr>
          <th scope="row">Elena</th>
          <td>Que el lector le cuente qué es cada cosa</td>
          <td>Encabezados, regiones, alt, label y ARIA solo si hace falta</td>
        </tr>
        <tr>
          <th scope="row">Lucía</th>
          <td>Textos claros que no desaparecen</td>
          <td>Etiquetas visibles, botones que nombran la acción, pausa</td>
        </tr>
        <tr>
          <th scope="row">Manuel</th>
          <td>Leer sin depender del color y con su tamaño de letra</td>
          <td>
            Texto en el estado, contraste, <code>rem</code>
          </td>
        </tr>
        <tr>
          <th scope="row">Ana</th>
          <td>Una página que no se mueva sin control</td>
          <td>
            <code>prefers-reduced-motion</code>, pausar
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>,
  <Fragment key="5.3-cursos">
    <SlideTitle kind="resumen">Cursos para profundizar</SlideTitle>
    <ul>
      <li>
        Estructura y significado del contenido:{' '}
        <a href="https://weaaare.com/cursos/curso-accesibilidad-digital-html-semantico-para-disenadores">
          HTML Semántico
        </a>
        .
      </li>
      <li>
        Nombres, roles, estados y relaciones:{' '}
        <a href="https://weaaare.com/cursos/curso-accesibilidad-digital-introduccion-a-aria">
          Introducción a ARIA
        </a>
        .
      </li>
      <li>
        Verificar el comportamiento de los componentes:{' '}
        <a href="https://weaaare.com/cursos/curso-testing-de-accesibilidad-digital-para-desarrolladores">
          Testing de accesibilidad para desarrolladores
        </a>
        .
      </li>
      <li>
        Navegación y menús:{' '}
        <a href="https://weaaare.com/cursos/aria-avanzado-navegacion-accesible">
          ARIA Avanzado: Navegación accesible
        </a>
        .
      </li>
      <li>
        Formularios:{' '}
        <a href="https://weaaare.com/cursos/aria-avanzado-formularios-accesibles">
          ARIA Avanzado: Formularios accesibles
        </a>
        .
      </li>
      <li>
        Bases de la accesibilidad:{' '}
        <a href="https://weaaare.com/cursos/curso-fundamentos-accesibilidad-diseno-universal">
          Fundamentos de accesibilidad y diseño universal
        </a>
        .
      </li>
      <li>
        Cómo usan la web las personas:{' '}
        <a href="https://weaaare.com/cursos/curso-discapacidad-y-tecnologias-asistivas">
          Discapacidad y tecnologías asistivas
        </a>
        .
      </li>
    </ul>
  </Fragment>,
  <Fragment key="5.3-materiales">
    <SlideTitle kind="resumen">Herramientas y materiales</SlideTitle>
    <ul>
      <li>
        Revisar:{' '}
        <a href="https://pauljadam.com/bookmarklets/headings.html">Headings</a>,{' '}
        <a href="https://pauljadam.com/bookmarklets/images.html">Images</a> y{' '}
        <a href="https://accessibilityinsights.io/docs/web/getstarted/fastpass/">
          Accessibility Insights
        </a>
        .
      </li>
      <li>
        Consultar:{' '}
        <a href="https://www.w3.org/WAI/WCAG22/quickref/">
          WCAG 2.2, referencia rápida
        </a>{' '}
        y{' '}
        <a href="https://www.w3.org/WAI/people-use-web/">
          cómo usan la web las personas con discapacidad
        </a>
        .
      </li>
    </ul>
    <p>
      Método: elige una tarea → piensa en una persona → revisa → corrige →
      vuelve a comprobar.
    </p>
    <p>
      <a className="lesson-slide__example-link" href={portalUrl}>
        Volver al índice del curso: diapositivas, ejemplos y contenido
      </a>
    </p>
  </Fragment>,
]
