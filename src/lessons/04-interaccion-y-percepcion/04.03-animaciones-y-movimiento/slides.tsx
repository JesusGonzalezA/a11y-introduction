import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.3-leccion">
    <SlideTitle kind="leccion">Animaciones y movimiento</SlideTitle>
    <p>
      Las animaciones pueden ayudar, pero el movimiento grande o constante marea
      a unas personas y distrae a otras.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Dónde pide una persona «reducir movimiento» a su sistema.</li>
      <li>
        Cómo lo lee CSS: la media query <code>prefers-reduced-motion</code>.
      </li>
      <li>Por qué todo lo que se mueve solo debe poder pausarse.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-ajustes">
    <SlideTitle kind="leccion">
      «Reducir movimiento» en el sistema operativo
    </SlideTitle>
    <ul>
      <li>
        <strong>macOS:</strong> Ajustes del Sistema → Accesibilidad → Pantalla →
        Reducir movimiento.
      </li>
      <li>
        <strong>Windows:</strong> Configuración → Accesibilidad → Efectos
        visuales → Efectos de animación (desactivar).
      </li>
      <li>
        <strong>iOS:</strong> Ajustes → Accesibilidad → Movimiento → Reducir
        movimiento.
      </li>
      <li>
        <strong>Android:</strong> Ajustes → Accesibilidad → Quitar animaciones.
      </li>
    </ul>
    <p>
      Para probarlo sin cambiar el sistema: DevTools → Rendering → Emular{' '}
      <code>prefers-reduced-motion: reduce</code>.
    </p>
  </Fragment>,
  <Fragment key="4.3-situacion">
    <SlideTitle kind="situacion">
      Ana quiere comprar un abono del festival
    </SlideTitle>
    <PersonaCard
      id="ana"
      task="Entra en la web de un festival de música para ver el cartel y comprar un abono."
    />
  </Fragment>,
  <Fragment key="4.3-error-preferencia">
    <SlideTitle kind="error">
      Las animaciones ignoran «Reducir movimiento»
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '.onda  { animation: deriva 6s infinite alternate; }\n.boton { animation: latido 1.2s infinite; }'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Ana:</strong> aunque su sistema pide menos
      movimiento, el fondo gira y el botón «Comprar abono» late sin parar. Se
      marea y tiene que cerrar la página.
    </p>
  </Fragment>,
  <Fragment key="4.3-solucion-preferencia">
    <SlideTitle kind="solucion">
      Animar solo si la persona no pidió reducir movimiento
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '@media (prefers-reduced-motion: no-preference) {\n  .onda  { animation: deriva 6s infinite alternate; }\n  .boton { animation: latido 1.2s infinite; }\n}'
      }
    </Code>
    <ul>
      <li>
        La media query lee el ajuste del sistema: <code>reduce</code> o{' '}
        <code>no-preference</code>.
      </li>
      <li>
        El movimiento es una mejora que se añade, no algo que haya que quitar
        después.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-pausa">
    <SlideTitle kind="error">
      El cartel se mueve sin fin y no se puede parar
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<ul class="cartel">…</ul>\n\n.cartel { animation: desplazar 12s linear infinite; }'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Ana y a Lucía:</strong> los nombres de los grupos
      pasan sin parar. Ana se marea; Lucía pierde la concentración y no consigue
      leerlos.
    </p>
  </Fragment>,
  <Fragment key="4.3-solucion-pausa">
    <SlideTitle kind="solucion">Un botón para pausar el movimiento</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button type="button">Pausar el cartel</button>\n<ul class="cartel">…</ul>\n\n.cartel--pausado { animation-play-state: paused; }'
      }
    </Code>
    <p>
      Todo lo que se mueve solo durante más de 5 segundos necesita un control
      para pausarlo, detenerlo u ocultarlo.
    </p>
    <ExampleLinks
      slug="festival"
      barrier="Ver el festival con movimiento constante"
      fixed="Ver el festival respetando la preferencia"
    />
  </Fragment>,
  <Fragment key="4.3-preferencias">
    <SlideTitle kind="resumen">
      Otras preferencias que CSS puede leer
    </SlideTitle>
    <ul>
      <li>
        <code>prefers-reduced-motion</code>: menos movimiento.
      </li>
      <li>
        <code>prefers-color-scheme</code>: modo claro u oscuro.
      </li>
      <li>
        <code>prefers-contrast</code>: más contraste.
      </li>
      <li>
        <code>forced-colors</code>: colores forzados, como el contraste alto de
        Windows.
      </li>
      <li>
        Tamaño de letra del navegador: se respeta usando <code>rem</code>.
      </li>
    </ul>
    <p>
      La persona ya ha dicho cómo necesita la web: nuestro CSS debe escucharla.
    </p>
  </Fragment>,
]
