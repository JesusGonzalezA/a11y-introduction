import type { ExampleDefinition } from '../../../../../examples/types'
import { RecipePage } from './RecipePage'

export const recipePageExample: ExampleDefinition = {
  slug: 'receta',
  name: 'Receta en un blog de cocina',
  lesson: '3.1',
  lessonTitle: 'Estructura de página y orden de lectura',
  title: 'Lentejas estofadas con verduras · La Cuchara Lenta',
  tryIt: [
    'Con un lector de pantalla, o con el panel «Accesibilidad» del navegador, busca los encabezados y las regiones.',
    'Lee los pasos de «Preparación» y comprueba en qué orden se oyen.',
  ],
  fixes: [
    {
      id: 'headings',
      title: 'Los títulos son encabezados',
      where:
        'Título de la receta, «Ingredientes», «Preparación», «Consejo» y sus subtítulos.',
      problem:
        'Son div con letra grande: parecen títulos, pero el lector no los encuentra. Elena no puede saltar de una sección a otra.',
      solution:
        'h1, h2 y h3 marcan cada título y su nivel: sección y subsección.',
      before:
        '<div class="titulo">Ingredientes</div>\n<div class="subtitulo">Para el sofrito</div>',
      after: '<h2>Ingredientes</h2>\n<h3>Para el sofrito</h3>',
    },
    {
      id: 'landmarks',
      title: 'Las zonas de la página son regiones',
      where: 'Cabecera, menú, contenido principal y pie.',
      problem:
        'Con div no hay forma rápida de ir al contenido principal o de volver al menú.',
      solution:
        'header, nav, main y footer identifican cada zona sin cambiar el aspecto.',
      before: '<div class="cabecera">…</div>\n<div class="contenido">…</div>',
      after:
        '<header>…</header>\n<nav aria-label="Principal">…</nav>\n<main>…</main>\n<footer>…</footer>',
    },
    {
      id: 'order',
      title: 'Los pasos están en orden en el HTML',
      where: 'Pasos bajo «Preparación».',
      problem:
        'El HTML empieza por el último paso y el CSS (column-reverse) les da la vuelta en pantalla. El lector sigue el HTML: lee la receta al revés.',
      solution: 'Una lista ol con los pasos escritos en su orden real.',
      before:
        '<div style="flex-direction: column-reverse">\n  <p>4. Cuece 35 minutos…</p>\n  …\n  <p>1. Pica la cebolla…</p>\n</div>',
      after:
        '<ol>\n  <li>Pica la cebolla…</li>\n  …\n  <li>Cuece 35 minutos…</li>\n</ol>',
    },
  ],
  Page: RecipePage,
}
