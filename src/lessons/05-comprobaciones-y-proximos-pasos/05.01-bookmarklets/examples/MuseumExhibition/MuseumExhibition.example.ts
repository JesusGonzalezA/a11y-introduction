import type { ExampleDefinition } from '../../../../../examples/types'
import { MuseumExhibition } from './MuseumExhibition'

export const museumExhibitionExample: ExampleDefinition = {
  slug: 'museo',
  name: 'Exposición temporal en la web de un museo',
  lesson: '5.1',
  lessonTitle: 'Inspeccionar el contenido con bookmarklets',
  title: 'Hilos del Mediterráneo · Museo de Arte Textil',
  tryIt:
    'Cierra este panel y activa los bookmarklets Headings e Images. Comprueba si los niveles reflejan secciones y subsecciones y si el alt explica la imagen.',
  fixes: [
    {
      id: 'headings',
      title: 'Los niveles siguen la jerarquía',
      where:
        '«Sobre la exposición», «Información práctica» y sus subsecciones.',
      why: 'Visualmente todo encaja porque el tamaño lo pone el CSS, pero las secciones son h3 y sus subsecciones h2: la jerarquía queda invertida. Headings lo revela; las secciones deben ser h2 y las subsecciones h3.',
      before:
        '<h1>Hilos del Mediterráneo</h1>\n<h3>Información práctica</h3>\n<h2>Horarios</h2>',
      after:
        '<h1>Hilos del Mediterráneo</h1>\n<h2>Información práctica</h2>\n<h3>Horarios</h3>',
    },
    {
      id: 'alt',
      title: 'La imagen tiene una alternativa útil',
      where: 'Imagen del tapiz bajo el título.',
      why: 'Images marca el alt como presente, pero su valor es el nombre del archivo. La herramienta revela el dato; decidir si explica la obra es tarea de quien revisa.',
      before: '<img src="tapiz.jpg" alt="sala3_IMG_0412.jpg">',
      after:
        '<img src="tapiz.jpg"\n  alt="Tapiz de lana con olas azules y\n       barcas rojas sobre fondo arena.">',
    },
  ],
  Page: MuseumExhibition,
}
