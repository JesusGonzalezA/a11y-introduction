import type { ExampleDefinition } from '../../../../../examples/types'
import { FestivalPage } from './FestivalPage'

export const festivalPageExample: ExampleDefinition = {
  slug: 'festival',
  name: 'Portada de un festival de música',
  lesson: '4.3',
  lessonTitle: 'Animaciones y movimiento',
  title: 'Sonidos del Norte 2027 · Festival de música frente al mar',
  tryIt:
    'Activa «Reducir movimiento» en tu sistema operativo o emúlalo en las devtools (Rendering → prefers-reduced-motion: reduce). Con la barrera, el fondo, el botón y el cartel siguen moviéndose. Intenta también detener el cartel de artistas.',
  fixes: [
    {
      id: 'reduced-motion',
      title: 'Las animaciones respetan «Reducir movimiento»',
      where: 'Ondas de fondo de la portada y botón «Comprar abono».',
      why: 'Las ondas que giran y el botón que late se mueven siempre, aunque la persona haya pedido a su sistema operativo reducir el movimiento. Ese movimiento puede provocar mareo a personas con trastornos vestibulares. La media query prefers-reduced-motion lee ese ajuste: las animaciones solo se añaden cuando no hay preferencia.',
      before: '.boton {\n  animation: latido 1.2s infinite;\n}',
      after:
        '@media (prefers-reduced-motion: no-preference) {\n  .boton {\n    animation: latido 1.2s infinite;\n  }\n}',
    },
    {
      id: 'pause',
      title: 'El cartel en movimiento se puede pausar',
      where: 'Banda amarilla «Cartel» con los nombres de los grupos.',
      why: 'El cartel se desplaza sin fin y no hay forma de detenerlo: distrae a quien necesita concentrarse en leer y es difícil de seguir. Todo movimiento automático que dure más de 5 segundos necesita un control para pausarlo. Con «Reducir movimiento», el cartel se muestra quieto como una lista.',
      before: '<ul class="cartel">…</ul>',
      after:
        '<button type="button">Pausar el cartel</button>\n<ul class="cartel">…</ul>',
    },
  ],
  Page: FestivalPage,
}
