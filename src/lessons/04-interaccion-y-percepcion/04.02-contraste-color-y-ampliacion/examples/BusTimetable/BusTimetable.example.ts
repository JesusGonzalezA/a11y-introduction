import type { ExampleDefinition } from '../../../../../examples/types'
import { BusTimetable } from './BusTimetable'

export const busTimetableExample: ExampleDefinition = {
  slug: 'horarios',
  name: 'Próximas salidas de una línea de autobús',
  lesson: '4.2',
  lessonTitle: 'Contraste, color y ampliación del contenido',
  title: 'Línea 7 · Próximas salidas · Autobuses Ría',
  tryIt:
    'Intenta saber qué salida está cancelada sin distinguir colores. Mide el contraste del texto gris y amplía la página al 200% o reduce la ventana a 320 píxeles de ancho.',
  fixes: [
    {
      id: 'color',
      title: 'El estado de cada salida se escribe',
      where: 'Lista «Próximas salidas».',
      why: 'Verde, ámbar y rojo no se distinguen igual para todas las personas, y el punto de color no tiene texto. Escribir el estado lo hace legible sin depender del color; el punto queda como refuerzo.',
      before:
        '<li>\n  <span class="punto punto--cancelado"></span>\n  09:05\n</li>',
      after:
        '<li>\n  <span class="punto punto--cancelado"></span>\n  09:05 <span>Cancelado</span>\n</li>',
    },
    {
      id: 'contrast',
      title: 'El texto secundario tiene contraste suficiente',
      where: 'Texto de la parada y texto del aviso por obras.',
      why: '#b4b4b4 sobre blanco tiene un contraste de 2,07:1, por debajo del mínimo de 4,5:1 para texto normal. #52525b sobre blanco llega a 7,73:1; el aviso usa el color de texto principal.',
      before: '.parada {\n  color: #b4b4b4; /* 2,07:1 */\n}',
      after: '.parada {\n  color: #52525b; /* 7,73:1 */\n}',
    },
    {
      id: 'reflow',
      title: 'El aviso crece con su contenido',
      where: 'Recuadro «Aviso por obras».',
      why: 'Con ancho y alto fijos y overflow: hidden, al ampliar el texto o estrechar la ventana se corta la información del aviso. Sin tamaños rígidos, el recuadro se adapta y el texto salta de línea.',
      before:
        '.aviso {\n  width: 40rem;\n  height: 9.5rem;\n  overflow: hidden;\n}',
      after:
        '.aviso {\n  max-inline-size: 100%;\n  overflow-wrap: anywhere;\n  /* Sin altura fija ni recorte */\n}',
    },
  ],
  Page: BusTimetable,
}
