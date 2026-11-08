import { Fragment } from 'react'
import { exampleUrl } from '../../../examples/exampleUrl'

export const slides = [
  <Fragment key="5.2-1">
    <h2 className="lesson-slide__title">
      Detectar problemas con Accessibility Insights
    </h2>
    <p>
      Aprenderemos a localizar un fallo, entender su corrección y repetir la
      comprobación con FastPass.
    </p>
    <p>
      Accessibility Insights for Web combina comprobaciones automáticas con un
      recorrido de teclado asistido: Tab stops.
    </p>
  </Fragment>,
  <Fragment key="5.2-2">
    <h2 className="lesson-slide__title">Ejecutar y abrir un resultado</h2>
    <p>
      Instala la extensión oficial en Chrome o Edge. Abre la página aislada,
      lanza la extensión y elige FastPass → Automated checks.
    </p>
    <p>
      Expande una regla, selecciona la instancia y localiza el elemento
      resaltado. Lee por qué falla y cómo corregirlo.
    </p>
    <a
      className="lesson-slide__example-link"
      href="https://accessibilityinsights.io/downloads/"
    >
      Instalar Accessibility Insights
    </a>
    <a
      className="lesson-slide__example-link"
      href="https://accessibilityinsights.io/docs/web/getstarted/fastpass/"
    >
      Consultar el procedimiento FastPass
    </a>
  </Fragment>,
  <Fragment key="5.2-3">
    <h2 className="lesson-slide__title">Corregir el nombre de un campo</h2>
    <p>
      Un texto visible junto al campo no le da nombre si no está asociado.
      Asocia una etiqueta visible y persistente mediante for e id.
    </p>
    <pre>
      <code>
        {
          '<label for="telefono">Teléfono</label>\n<input id="telefono" type="tel"\n  autocomplete="tel">'
        }
      </code>
    </pre>
    <p>
      Analiza la página, aplica el arreglo y ejecuta FastPass de nuevo.
      Comprueba que el fallo del campo desaparece.
    </p>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('taller-bicicletas')}
    >
      Detectar el campo sin etiqueta
    </a>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('taller-bicicletas', true)}
    >
      Repetir con etiqueta asociada
    </a>
  </Fragment>,
  <Fragment key="5.2-4">
    <h2 className="lesson-slide__title">Recorrer la interfaz con Tab stops</h2>
    <p>
      Selecciona Tab stops, recarga la página objetivo y activa Show tab stops.
      Vuelve a la página y recórrela con Tab y Shift + Tab.
    </p>
    <p>
      Las marcas numeran las paradas visitadas. Comprueba alcance, orden, foco
      visible y salida; escribe en el campo y activa el botón.
    </p>
    <p>
      La numeración ayuda a observar. Tú decides si la tarea se puede completar
      y registras los resultados.
    </p>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('taller-bicicletas', true)}
    >
      Revisar el recorrido del formulario
    </a>
  </Fragment>,
  <Fragment key="5.2-5">
    <h2 className="lesson-slide__title">
      Cero errores no garantiza accesibilidad
    </h2>
    <p>
      Las reglas automáticas detectan ciertos problemas. No deciden por sí solas
      si un texto se entiende o una tarea resulta utilizable.
    </p>
    <p>
      Revisa los casos Needs review y completa el recorrido manual. Añade
      pruebas con tecnologías de apoyo y personas usuarias.
    </p>
    <p>
      Conserva página, versión, pasos y resultado. Una comprobación pendiente no
      es una comprobación aprobada.
    </p>
  </Fragment>,
]
