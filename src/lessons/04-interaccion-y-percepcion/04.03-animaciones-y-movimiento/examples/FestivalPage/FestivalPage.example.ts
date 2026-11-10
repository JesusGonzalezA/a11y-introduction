import type { ExampleDefinition } from '../../../../../examples/types'
import { FestivalPage } from './FestivalPage'

export const festivalPageExample: ExampleDefinition = {
  slug: 'festival',
  name: 'Portada de un festival de música',
  lesson: '4.3',
  lessonTitle: 'Animaciones y movimiento',
  title: 'Sonidos del Norte 2027 · Festival de música frente al mar',
  tryIt: [
    'Activa «Reducir movimiento» en tu sistema, o emúlalo en las herramientas del navegador (Rendering → prefers-reduced-motion).',
    'Mira si el fondo, el botón y el cartel se siguen moviendo.',
    'Intenta parar el cartel de artistas.',
  ],
  fixes: [
    {
      id: 'reduced-motion',
      title: 'Las animaciones respetan «Reducir movimiento»',
      where: 'Ondas del fondo y botón «Comprar abono».',
      problem:
        'El fondo gira y el botón late siempre, aunque Ana haya pedido menos movimiento a su sistema. A ella ese movimiento la marea.',
      solution:
        'La media query prefers-reduced-motion lee ese ajuste: solo se anima si la persona no pidió reducir el movimiento.',
      before: '.boton {\n  animation: latido 1.2s infinite;\n}',
      after:
        '@media (prefers-reduced-motion: no-preference) {\n  .boton {\n    animation: latido 1.2s infinite;\n  }\n}',
    },
    {
      id: 'pause',
      title: 'El cartel se puede pausar',
      where: 'Banda amarilla «Cartel» con los nombres de los grupos.',
      problem:
        'Los nombres pasan sin fin y no se pueden parar: cuesta leerlos y distraen.',
      solution:
        'Un botón para pausar. Lo necesita todo lo que se mueve solo durante más de 5 segundos. Con «Reducir movimiento», el cartel se queda quieto.',
      before: '<ul class="cartel">…</ul>',
      after:
        '<button type="button">Pausar el cartel</button>\n<ul class="cartel">…</ul>',
    },
  ],
  Page: FestivalPage,
}
