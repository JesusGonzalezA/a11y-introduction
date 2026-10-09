import { Fragment } from 'react'

const storybook = import.meta.env.VITE_STORYBOOK_URL || 'http://localhost:6006'

export const slides = [
  <Fragment key="3.2-1">
    <h2 className="lesson-slide__title">
      Imágenes, enlaces y controles comprensibles
    </h2>
    <p>
      Aprenderemos a comunicar qué aporta una imagen, adónde lleva un enlace,
      qué hace un botón y qué pide un campo.
    </p>
    <p>
      La información debe permitir decidir sin depender solo del aspecto ni de
      una pista que desaparece.
    </p>
  </Fragment>,
  <Fragment key="3.2-2">
    <h2 className="lesson-slide__title">
      La alternativa textual depende del propósito
    </h2>
    <p>
      Pregunta qué información perdería la persona si no percibiera la imagen.
      El alt debe comunicar lo relevante en ese contexto.
    </p>
    <pre>
      <code>
        {
          '<img src="actividad.svg"\n  alt="Sendero entre parterres que conduce\n       a un pabellón junto a un árbol.">'
        }
      </code>
    </pre>
    <p>
      Un nombre de archivo o una descripción de todos los píxeles no explica
      necesariamente esa información.
    </p>
  </Fragment>,
  <Fragment key="3.2-3">
    <h2 className="lesson-slide__title">
      Una imagen decorativa no necesita narración
    </h2>
    <p>
      Si solo adorna o repite información ya expresada en el contexto, usa alt
      vacío explícito.
    </p>
    <pre>
      <code>{'<img src="actividad.svg" alt="">'}</code>
    </pre>
    <p>
      Omitir alt no equivale a escribir alt vacío. No ocultes información útil
      tratándola como decoración.
    </p>
  </Fragment>,
  <Fragment key="3.2-4">
    <h2 className="lesson-slide__title">
      El enlace permite anticipar el destino
    </h2>
    <p>
      Usa un enlace cuando la acción lleva a un recurso o lugar. Su texto debe
      ayudar a decidir si seguirlo.
    </p>
    <pre>
      <code>
        {'<a href="#informacion">\n  Consultar información práctica\n</a>'}
      </code>
    </pre>
    <p>
      «Ver más» puede depender del contexto. Un texto descriptivo también se
      entiende en una lista de enlaces.
    </p>
  </Fragment>,
  <Fragment key="3.2-5">
    <h2 className="lesson-slide__title">El botón nombra la acción</h2>
    <p>
      Usa un botón para ejecutar una acción. Su texto debe explicar qué ocurrirá
      al activarlo.
    </p>
    <pre>
      <code>{'<button type="submit">Inscribirme</button>'}</code>
    </pre>
    <p>
      «Aceptar» puede resultar ambiguo. El texto visible aporta el nombre
      accesible; no hace falta repetirlo con aria-label.
    </p>
    <p>El enlace navega; el botón actúa. Ambos necesitan un propósito claro.</p>
  </Fragment>,
  <Fragment key="3.2-6">
    <h2 className="lesson-slide__title">La etiqueta permanece al escribir</h2>
    <p>
      El campo necesita indicar qué dato introducir y mantener esa información
      mientras se edita.
    </p>
    <pre>
      <code>
        {
          '<label for="nombre">Nombre (opcional)</label>\n<input id="nombre" type="text"\n  autocomplete="given-name" placeholder="Ej.: Ana">'
        }
      </code>
    </pre>
    <p>
      for e id relacionan etiqueta y campo. El placeholder es una pista; no
      sustituye la etiqueta.
    </p>
  </Fragment>,
  <Fragment key="3.2-7">
    <h2 className="lesson-slide__title">
      Corregir la información de cada elemento
    </h2>
    <ol>
      <li>
        Imagen: sustituye el nombre del archivo por la información relevante.
      </li>
      <li>Enlace y botón: expresa destino y acción en sus textos.</li>
      <li>
        Campo: añade una etiqueta asociada y escribe para comprobar que
        permanece.
      </li>
      <li>Si la imagen repite el texto del contexto, usa alt vacío.</li>
    </ol>
    <a
      className="lesson-slide__example-link"
      href={`${storybook}/iframe.html?id=m3-activity-content--contraejemplo&viewMode=story`}
    >
      {' '}
      Examinar información con barreras{' '}
    </a>
    <a
      className="lesson-slide__example-link"
      href={`${storybook}/iframe.html?id=m3-activity-content--contenido-corregido&viewMode=story`}
    >
      {' '}
      Comprobar nombres y etiqueta{' '}
    </a>
    <a
      className="lesson-slide__example-link"
      href={`${storybook}/iframe.html?id=m3-activity-content--imagen-decorativa&viewMode=story`}
    >
      {' '}
      Comparar imagen redundante{' '}
    </a>
  </Fragment>,
  <Fragment key="3.2-8">
    <h2 className="lesson-slide__title">Comprobar propósito y persistencia</h2>
    <ul>
      <li>¿La alternativa aporta lo necesario en este contexto?</li>
      <li>¿El enlace permite anticipar el destino?</li>
      <li>¿El botón explica la acción?</li>
      <li>¿La etiqueta sigue visible y asociada después de escribir?</li>
    </ul>
    <p>
      Revisa el contenido con personas y tecnologías de apoyo. Una comprobación
      automática no decide si el mensaje tiene sentido.
    </p>
  </Fragment>,
]
