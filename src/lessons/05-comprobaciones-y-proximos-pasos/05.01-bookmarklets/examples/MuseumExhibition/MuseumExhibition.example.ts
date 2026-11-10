import type { ExampleDefinition } from '../../../../../examples/types'
import { MuseumExhibition } from './MuseumExhibition'

export const museumExhibitionExample: ExampleDefinition = {
  slug: 'museo',
  name: 'Exposición temporal en la web de un museo',
  lesson: '5.1',
  lessonTitle: 'Inspeccionar el contenido con bookmarklets',
  title: 'Hilos del Mediterráneo · Museo de Arte Textil',
  tryIt: [
    'Cierra esta explicación.',
    'Pulsa el bookmarklet Headings: ¿los niveles van de sección a subsección?',
    'Pulsa el bookmarklet Images: ¿el alt explica la imagen?',
  ],
  fixes: [
    {
      id: 'headings',
      title: 'Los niveles siguen la jerarquía',
      where:
        '«Sobre la exposición», «Información práctica», «Horarios» y «Entradas».',
      problem:
        'Las secciones son h3 y sus subsecciones h2: la jerarquía está al revés. A la vista no se nota, porque el tamaño lo pone el CSS.',
      solution: 'Secciones en h2 y subsecciones en h3.',
      before:
        '<h1>Hilos del Mediterráneo</h1>\n<h3>Información práctica</h3>\n<h2>Horarios</h2>',
      after:
        '<h1>Hilos del Mediterráneo</h1>\n<h2>Información práctica</h2>\n<h3>Horarios</h3>',
    },
    {
      id: 'alt',
      title: 'La imagen tiene un alt útil',
      where: 'Imagen del tapiz, bajo el título.',
      problem:
        'El alt existe, pero es el nombre del archivo. Images solo muestra el dato: decidir si sirve te toca a ti.',
      solution: 'Un alt que describe la obra.',
      before: '<img src="tapiz.jpg" alt="sala3_IMG_0412.jpg">',
      after:
        '<img src="tapiz.jpg"\n  alt="Tapiz de lana con olas azules y\n       barcas rojas sobre fondo arena.">',
    },
  ],
  Page: MuseumExhibition,
}
