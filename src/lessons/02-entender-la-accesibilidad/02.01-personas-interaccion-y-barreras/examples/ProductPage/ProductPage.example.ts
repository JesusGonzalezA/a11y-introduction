import type { ExampleDefinition } from '../../../../../examples/types'
import { ProductPage } from './ProductPage'

export const productPageExample: ExampleDefinition = {
  slug: 'tienda-online',
  name: 'Ficha de producto de una tienda online',
  lesson: '2.1',
  lessonTitle: 'Personas, formas de interacción y barreras',
  title: 'Taza de gres esmaltada · Barro y Fuego',
  tryIt:
    'Recorre la ficha con Tab desde «Consultar envíos y devoluciones» e intenta añadir la taza a la cesta sin usar el ratón.',
  fixes: [
    {
      id: 'add-to-cart',
      title: 'La acción de añadir es un botón HTML',
      where: 'Botón «Añadir a la cesta», debajo de la descripción.',
      why: 'Un div con un evento de clic solo responde al puntero: el foco del teclado lo salta y Enter o Espacio no hacen nada. Un button entra en el recorrido con Tab y se activa con Enter y Espacio sin código adicional.',
      before:
        '<div class="boton" onclick="anadir()">\n  Añadir a la cesta\n</div>',
      after:
        '<button type="button" onclick="anadir()">\n  Añadir a la cesta\n</button>',
    },
  ],
  Page: ProductPage,
}
