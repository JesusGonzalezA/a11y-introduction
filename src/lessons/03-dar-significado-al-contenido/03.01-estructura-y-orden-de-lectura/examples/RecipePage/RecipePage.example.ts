import type { ExampleDefinition } from '../../../../../examples/types'
import { RecipePage } from './RecipePage'

export const recipePageExample: ExampleDefinition = {
  slug: 'receta',
  name: 'Receta en un blog de cocina',
  lesson: '3.1',
  lessonTitle: 'Estructura de página y orden de lectura',
  title: 'Lentejas estofadas con verduras · La Cuchara Lenta',
  tryIt:
    'Con un lector de pantalla, abre la lista de encabezados y la de regiones. Después lee los pasos de la preparación en orden.',
  fixes: [
    {
      id: 'headings',
      title: 'Los títulos son encabezados con nivel',
      where:
        'Título de la receta, «Ingredientes», sus subsecciones, «Preparación» y «Consejo».',
      why: 'Un div con letra grande parece un título, pero el navegador no lo expone como encabezado: no aparece en la lista de encabezados ni permite saltar entre secciones. h1, h2 y h3 expresan la jerarquía.',
      before:
        '<div class="titulo">Ingredientes</div>\n<div class="subtitulo">Para el sofrito</div>',
      after: '<h2>Ingredientes</h2>\n<h3>Para el sofrito</h3>',
    },
    {
      id: 'landmarks',
      title: 'Las grandes áreas son regiones',
      where: 'Cabecera, navegación, contenido principal y pie de la página.',
      why: 'Sin regiones no hay forma rápida de ir al contenido principal o volver a la navegación. header, nav, main y footer identifican esas áreas sin cambiar el aspecto.',
      before: '<div class="cabecera">…</div>\n<div class="contenido">…</div>',
      after:
        '<header>…</header>\n<nav aria-label="Principal">…</nav>\n<main>…</main>\n<footer>…</footer>',
    },
    {
      id: 'order',
      title: 'Los pasos siguen el orden del documento',
      where: 'Lista de pasos bajo «Preparación».',
      why: 'En pantalla los pasos se ven bien porque column-reverse los reordena, pero el documento empieza por el último: un lector de pantalla los lee al revés. Una lista ordenada en el HTML conserva la secuencia.',
      before:
        '<div style="flex-direction: column-reverse">\n  <p>4. Cuece 35 minutos…</p>\n  …\n  <p>1. Pica la cebolla…</p>\n</div>',
      after:
        '<ol>\n  <li>Pica la cebolla…</li>\n  …\n  <li>Cuece 35 minutos…</li>\n</ol>',
    },
  ],
  Page: RecipePage,
}
