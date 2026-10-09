import { Fragment } from 'react'

const storybook = import.meta.env.VITE_STORYBOOK_URL || 'http://localhost:6006'

export const slides = [
  <Fragment key="interpretacion-del-navegador">
    <h2 className="lesson-slide__title">
      Cómo interpreta el navegador nuestra interfaz
    </h2>
    <p>
      Aprenderemos qué información permite reconocer y utilizar un control más
      allá de su aspecto.
    </p>
    <p>
      Para decidir cómo actuar necesitamos saber qué hace, qué tipo de control
      es y si está disponible.
    </p>
  </Fragment>,
  <Fragment key="arbol-de-accesibilidad">
    <h2 className="lesson-slide__title">Del HTML al árbol de accesibilidad</h2>
    <p>
      El navegador representa estructura, controles y propiedades para las
      tecnologías de apoyo.
    </p>
    <ol>
      <li>HTML: elementos y contenido de la página.</li>
      <li>Árbol de accesibilidad: información expuesta por el navegador.</li>
      <li>
        Tecnología de apoyo: utiliza esa información para presentar y recorrer
        la interfaz.
      </li>
    </ol>
    <p>
      No es una captura de pantalla ni una copia de todos los nodos del DOM.
    </p>
  </Fragment>,
  <Fragment key="nombre-rol-estado">
    <h2 className="lesson-slide__title">Nombre, rol y estado</h2>
    <ul>
      <li>Nombre: identifica la acción concreta.</li>
      <li>Rol: indica qué clase de control es.</li>
      <li>Estado: informa de su situación, por ejemplo, no disponible.</li>
    </ul>
    <pre>
      <code>{'<button type="button" disabled>Inscribirme</button>'}</code>
    </pre>
    <p>Nombre: «Inscribirme». Rol: botón. Estado: deshabilitado.</p>
    <p>
      El navegador obtiene esta información del HTML; no hace falta repetirla
      con ARIA.
    </p>
  </Fragment>,
  <Fragment key="aspecto-y-semantica">
    <h2 className="lesson-slide__title">El aspecto no define el control</h2>
    <pre>
      <code>
        {'<button type="button">Inscribirme</button>\n<span>Inscribirme</span>'}
      </code>
    </pre>
    <p>
      Con el mismo estilo, solo el botón aporta semántica de botón y teclado
      nativo.
    </p>
    <p>
      El texto del elemento genérico puede leerse; el clic añadido no lo
      convierte en botón.
    </p>
    <a
      className="lesson-slide__example-link"
      href={`${storybook}/?path=/story/m2-button-semantics--comparacion`}
    >
      Comparar nombre y rol
    </a>
    <a
      className="lesson-slide__example-link"
      href={`${storybook}/?path=/story/m2-button-semantics--no-disponible`}
    >
      Inspeccionar el estado no disponible
    </a>
  </Fragment>,
  <Fragment key="html-y-aria">
    <h2 className="lesson-slide__title">
      HTML primero; ARIA completa información
    </h2>
    <p>
      Usa el elemento HTML que resuelve la tarea. ARIA puede describir
      información adicional: una confirmación sin mover el foco.
    </p>
    <pre>
      <code>
        {
          '<p role="status" aria-atomic="true"></p>\n<!-- Después de actuar: insertar la confirmación -->'
        }
      </code>
    </pre>
    <p>
      <code>status</code> identifica el mensaje no urgente;{' '}
      <code>aria-atomic</code> indica que se presente completo.
    </p>
    <p>
      ARIA no añade teclado ni ejecuta acciones. Los anuncios reales necesitan
      comprobación con lector.
    </p>
  </Fragment>,
  <Fragment key="verificar-significado">
    <h2 className="lesson-slide__title">
      Comprobar significado y comportamiento
    </h2>
    <ol>
      <li>¿El nombre permite entender la acción?</li>
      <li>¿El rol corresponde al control y se comunica su estado?</li>
      <li>¿Se alcanza y activa con teclado cuando está disponible?</li>
      <li>¿La persona puede percibir el resultado?</li>
    </ol>
    <p>
      Inspeccionar la información del navegador ayuda; no sustituye probar con
      tecnologías de apoyo.
    </p>
  </Fragment>,
]
