import { Fragment } from 'react'
import { exampleUrl } from '../../../examples/exampleUrl'

export const slides = [
  <Fragment key="4.1-1">
    <h2 className="lesson-slide__title">
      Navegación por teclado y foco visible
    </h2>
    <p>
      Aprenderemos a llegar a los controles, utilizarlos y reconocer dónde está
      el foco sin usar el ratón.
    </p>
    <p>
      La tarea debe poder completarse y permitir continuar fuera del formulario.
    </p>
  </Fragment>,
  <Fragment key="4.1-2">
    <h2 className="lesson-slide__title">Tab avanza y Shift + Tab retrocede</h2>
    <p>
      El foco indica qué elemento recibirá la próxima interacción. Tab recorre
      enlaces y controles; Shift + Tab vuelve al anterior.
    </p>
    <p>
      Ordena el documento según la tarea: llegar al campo, escribir, revisar y
      activar el envío. Tab no lee todos los párrafos.
    </p>
  </Fragment>,
  <Fragment key="4.1-3">
    <h2 className="lesson-slide__title">Activar enlaces y botones nativos</h2>
    <p>
      Enlace: Enter sigue su destino. Botón: Enter o Espacio ejecuta su acción.
      En un campo, las teclas permiten escribir y editar.
    </p>
    <p>
      HTML proporciona estas interacciones. No hace falta programar otra vez las
      teclas ni añadir roles redundantes.
    </p>
    <pre>
      <code>
        {
          '<a href="#horarios">Horarios</a>\n<button type="submit">Entrar</button>'
        }
      </code>
    </pre>
  </Fragment>,
  <Fragment key="4.1-4">
    <h2 className="lesson-slide__title">El foco debe poder verse</h2>
    <p>
      Saber dónde estamos permite anticipar qué ocurrirá al pulsar una tecla.
      Conserva el indicador del navegador o define otro visible.
    </p>
    <p>
      No elimines outline sin sustituto. Comprueba también que el control
      enfocado no queda tapado.
    </p>
    <pre>
      <code>
        {
          ':focus-visible {\n  outline: 3px solid #004fc4;\n  outline-offset: 4px;\n}'
        }
      </code>
    </pre>
  </Fragment>,
  <Fragment key="4.1-5">
    <h2 className="lesson-slide__title">Reconocer tres barreras de teclado</h2>
    <p>
      Inalcanzable: una acción solo funciona con puntero y no ofrece alternativa
      de teclado.
    </p>
    <p>
      Incoherente: el foco salta en un orden que dificulta comprender o
      completar la tarea. Revisa el DOM antes de usar tabindex.
    </p>
    <p>
      Sin salida: un componente retiene el foco y no permite continuar con
      teclado. Si necesita una salida no estándar, debe explicarla.
    </p>
    <pre>
      <code>
        {
          '// Contraejemplo NO ejecutable: bloquea Tab\nif (event.key === "Tab") event.preventDefault()'
        }
      </code>
    </pre>
  </Fragment>,
  <Fragment key="4.1-6">
    <h2 className="lesson-slide__title">
      Completar el recorrido y comparar el foco
    </h2>
    <p>
      Desde el primer campo: escribir → Tab → botón → Enter o Espacio →
      confirmación. Después, continuar con Tab.
    </p>
    <p>
      Volver con Shift + Tab y repetir sin indicador: el foco sigue moviéndose,
      pero cuesta localizarlo.
    </p>
    <a className="lesson-slide__example-link" href={exampleUrl('biblioteca')}>
      Comparar recorrido sin foco visible
    </a>
    <a
      className="lesson-slide__example-link"
      href={exampleUrl('biblioteca', true)}
    >
      Completar el acceso con foco visible
    </a>
  </Fragment>,
  <Fragment key="4.1-7">
    <h2 className="lesson-slide__title">Comprobar el recorrido completo</h2>
    <p>
      Recorre hacia delante y atrás. Comprueba destino de enlaces, activación de
      botones y salida del formulario.
    </p>
    <p>
      Observa el foco en cada paso. Alcanzar un control no demuestra que se vea;
      ver un control no demuestra que pueda usarse.
    </p>
  </Fragment>,
]
