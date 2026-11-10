import type { ExampleDefinition } from '../../../../../examples/types'
import { BusTimetable } from './BusTimetable'

export const busTimetableExample: ExampleDefinition = {
  slug: 'horarios',
  name: 'Próximas salidas de una línea de autobús',
  lesson: '4.2',
  lessonTitle: 'Contraste, color y tamaño del texto',
  title: 'Línea 7 · Próximas salidas · Autobuses Ría',
  tryIt: [
    'Sin fijarte en los colores, ¿qué salida está cancelada?',
    'Lee el texto gris de la parada y el aviso por obras.',
    'Sube el tamaño de letra del navegador (Ajustes → Aspecto → Tamaño de fuente) y mira qué texto no crece.',
    'Amplía al 200 % o estrecha la ventana a 320 píxeles: ¿se corta el aviso?',
  ],
  fixes: [
    {
      id: 'color',
      title: 'El estado está escrito',
      where: 'Lista «Próximas salidas».',
      problem:
        'El estado solo se ve en un punto verde, ámbar o rojo. Manuel no distingue el rojo del verde: no sabe que su autobús está cancelado.',
      solution:
        'El estado se escribe con texto. El punto de color queda como refuerzo.',
      before:
        '<li>\n  <span class="punto punto--cancelado"></span>\n  09:05\n</li>',
      after:
        '<li>\n  <span class="punto punto--cancelado"></span>\n  09:05 <span>Cancelado</span>\n</li>',
    },
    {
      id: 'contrast',
      title: 'El texto gris se lee',
      where: 'Texto de la parada y texto del aviso por obras.',
      problem:
        'El gris #b4b4b4 sobre blanco tiene un contraste de 2,07:1. El mínimo para texto normal es 4,5:1.',
      solution:
        'El gris #52525b llega a 7,73:1. El aviso usa el color del texto principal.',
      before: '.parada {\n  color: #b4b4b4; /* 2,07:1 */\n}',
      after: '.parada {\n  color: #52525b; /* 7,73:1 */\n}',
    },
    {
      id: 'font-size',
      title: 'La letra crece con el tamaño elegido',
      where: 'Todo el texto; se nota más en el título de la línea.',
      problem:
        'En px, el texto ignora el tamaño de letra que Manuel configuró. En vw, el título depende solo del ancho de la ventana: con zoom no crece.',
      solution:
        'rem parte del tamaño que eligió la persona. clamp() adapta el título a la pantalla entre un mínimo y un máximo en rem.',
      before:
        '.horarios {\n  font-size: 15px;\n}\n.horarios h1 {\n  font-size: 4vw;\n}',
      after:
        '.horarios {\n  font-size: 1rem;\n}\n.horarios h1 {\n  font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);\n}',
    },
    {
      id: 'reflow',
      title: 'El aviso crece con su texto',
      where: 'Recuadro «Aviso por obras».',
      problem:
        'La caja tiene ancho y alto fijos y recorta lo que no cabe. Con letra grande o pantalla estrecha, parte del aviso desaparece.',
      solution:
        'Sin tamaños fijos, la caja se adapta y el texto salta de línea.',
      before:
        '.aviso {\n  width: 40rem;\n  height: 9.5rem;\n  overflow: hidden;\n}',
      after:
        '.aviso {\n  max-inline-size: 100%;\n  overflow-wrap: anywhere;\n  /* Sin altura fija ni recorte */\n}',
    },
  ],
  Page: BusTimetable,
}
