import type { ExampleDefinition } from '../../../../../examples/types'
import { ProductPage } from './ProductPage'

export const productPageExample: ExampleDefinition = {
  slug: 'tienda-online',
  name: 'Ficha de producto de una tienda online',
  lesson: '2.1',
  lessonTitle: 'Personas, formas de interacción y barreras',
  title: 'Taza de gres esmaltada · Barro y Fuego',
  tryIt: [
    'Pulsa Tab varias veces desde el enlace «Consultar envíos y devoluciones».',
    'Intenta llegar a «Añadir a la cesta» y pulsarlo con Enter, sin usar el ratón.',
  ],
  fixes: [
    {
      id: 'add-to-cart',
      title: 'El botón es un botón de verdad',
      where: 'Botón «Añadir a la cesta».',
      problem:
        'Es un div con un clic: Tab lo salta y Enter no hace nada. Quien usa solo el teclado no puede comprar.',
      solution:
        'Un button se alcanza con Tab y se pulsa con Enter o Espacio, sin escribir más código.',
      before:
        '<div class="boton" onclick="anadir()">\n  Añadir a la cesta\n</div>',
      after:
        '<button type="button" onclick="anadir()">\n  Añadir a la cesta\n</button>',
    },
  ],
  Page: ProductPage,
}
