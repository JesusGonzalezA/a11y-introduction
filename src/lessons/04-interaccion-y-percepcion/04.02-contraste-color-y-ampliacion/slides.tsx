import { Fragment } from 'react'
import { exampleUrl } from '../../../examples/exampleUrl'

export const slides = [
  <Fragment key="4.2-1">
    <h2 className="lesson-slide__title">
      Contraste, color y ampliación del contenido
    </h2>
    <p>
      Aprenderemos a leer información sin depender de distinguir colores y a
      conservar el acceso al ampliar.
    </p>
    <p>
      Revisaremos tres preguntas: ¿se entiende el estado?, ¿se lee el texto?,
      ¿sigue disponible todo el contenido?
    </p>
  </Fragment>,
  <Fragment key="4.2-2">
    <h2 className="lesson-slide__title">
      El color necesita otra señal visible
    </h2>
    <p>
      Verde y rojo pueden reforzar un estado, pero el significado debe poder
      reconocerse sin distinguir esos tonos.
    </p>
    <p>
      Añade texto visible. Un nombre disponible solo para lectores de pantalla
      no ayuda a quien ve la página pero no distingue el color.
    </p>
    <pre>
      <code>
        {
          '<span class="estado estado--a-tiempo">A tiempo</span>\n<span class="estado estado--cancelado">Cancelado</span>'
        }
      </code>
    </pre>
  </Fragment>,
  <Fragment key="4.2-3">
    <h2 className="lesson-slide__title">Medir el contraste contra el fondo</h2>
    <p>
      Texto normal: al menos 4,5:1. Texto grande: 3:1 desde 18 pt, o 14 pt en
      negrita. No redondees para alcanzar el umbral.
    </p>
    <p>
      Indicadores de autor necesarios para reconocer controles y estados,
      incluido el foco: 3:1 contra colores adyacentes.
    </p>
    <p>
      Comprueba la pareja de colores realmente utilizada. Un borde decorativo no
      tiene el mismo requisito que una señal necesaria.
    </p>
  </Fragment>,
  <Fragment key="4.2-4">
    <h2 className="lesson-slide__title">
      Ampliar sin perder contenido ni controles
    </h2>
    <p>
      Hasta 200%: el texto debe poder crecer sin pérdida de contenido o
      funcionalidad.
    </p>
    <p>
      Reflujo: a 320 píxeles CSS de ancho, leer sin desplazarse en dos
      direcciones. Equivale a 1280 píxeles al 400% de zoom.
    </p>
    <p>
      El scroll vertical es normal. Esta página no necesita una disposición
      bidimensional como un mapa.
    </p>
  </Fragment>,
  <Fragment key="4.2-5">
    <h2 className="lesson-slide__title">Dejar que el contenido crezca</h2>
    <p>
      Los anchos y altos rígidos pueden recortar texto al ampliar. Permite
      saltos de línea y que la altura se ajuste al contenido.
    </p>
    <p>
      Usa un ancho flexible y revisa etiquetas, avisos y controles; ocultar el
      desbordamiento no recupera lo perdido.
    </p>
    <pre>
      <code>
        {
          '.aviso {\n  max-inline-size: 100%;\n  overflow-wrap: anywhere;\n  /* Sin altura fija ni recorte */\n}'
        }
      </code>
    </pre>
  </Fragment>,
  <Fragment key="4.2-6">
    <h2 className="lesson-slide__title">
      Revisar estados, contraste y recortes
    </h2>
    <p>
      Compara estados solo en color con estados nombrados. Mide texto y fondo, y
      contrasta el resultado con el umbral.
    </p>
    <p>
      Amplía al 200%; después revisa 320 píxeles CSS o 1280 al 400%. Lee el
      aviso completo y alcanza el enlace final.
    </p>
    <a className="lesson-slide__example-link" href={exampleUrl('horarios')}>
      Examinar color y recortes
    </a>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('horarios', true)}
    >
      Revisar texto, contraste y reflujo
    </a>
  </Fragment>,
  <Fragment key="4.2-7">
    <h2 className="lesson-slide__title">Separar las comprobaciones</h2>
    <p>
      Texto visible para el estado, contraste suficiente y contenido que se
      reorganiza resuelven necesidades diferentes.
    </p>
    <p>
      Comprueba cada una. Una prueba automática limpia no confirma la
      legibilidad ni que todo siga disponible al ampliar.
    </p>
  </Fragment>,
]
