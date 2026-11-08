import type { ExampleDefinition } from '../../../../../examples/types'
import { NewsArticle } from './NewsArticle'

export const newsArticleExample: ExampleDefinition = {
  slug: 'noticia',
  name: 'Noticia en un periódico local',
  lesson: '3.2',
  lessonTitle: 'Imágenes, enlaces y controles comprensibles',
  title: 'El carril bici del centro duplica sus viajes · Diario de Barrio',
  tryIt:
    'Lee la noticia con un lector de pantalla o revisa la lista de enlaces y controles. Escribe en el campo del boletín y comprueba si sigues sabiendo qué pide.',
  fixes: [
    {
      id: 'informative-alt',
      title: 'El gráfico tiene una alternativa con sus datos',
      where: 'Gráfico de barras dentro de la noticia.',
      why: 'El nombre del archivo no dice nada a quien no ve la imagen. El alt transmite lo que el gráfico aporta en este contexto: las dos cifras que se comparan.',
      before: '<img src="grafico.svg" alt="grafico_final_v2.png">',
      after:
        '<img src="grafico.svg"\n  alt="Gráfico de barras: 1.200 viajes diarios\n       en marzo de 2025 y 2.450 en marzo de 2026.">',
    },
    {
      id: 'decorative-alt',
      title: 'El icono decorativo tiene alt vacío',
      where: 'Icono de sobre junto a «Recibe las noticias del barrio».',
      why: 'El icono solo adorna un título que ya lo dice todo. Leer «icono-sobre.svg» es ruido; alt="" indica que puede ignorarse. Omitir alt no es lo mismo: algunos lectores leerían el archivo.',
      before: '<img src="icono-sobre.svg" alt="icono-sobre.svg">',
      after: '<img src="icono-sobre.svg" alt="">',
    },
    {
      id: 'link',
      title: 'El enlace anticipa su destino',
      where: 'Enlace al final del segundo párrafo de la noticia.',
      why: '«Leer más» depende del texto que lo rodea y no se entiende en una lista de enlaces. Un texto descriptivo permite decidir si seguirlo.',
      before: '<a href="#informe">Leer más</a>',
      after:
        '<a href="#informe">\n  Consultar el informe de movilidad 2026\n</a>',
    },
    {
      id: 'button',
      title: 'El botón nombra la acción',
      where: 'Botón del formulario del boletín.',
      why: '«Aceptar» no dice qué ocurrirá. El texto visible es también el nombre accesible: «Suscribirme» explica la acción a quien lo ve y a quien lo escucha.',
      before: '<button type="submit">Aceptar</button>',
      after: '<button type="submit">Suscribirme</button>',
    },
    {
      id: 'label',
      title: 'El campo tiene una etiqueta asociada',
      where: 'Campo de correo del boletín.',
      why: 'El placeholder desaparece al escribir y no siempre se usa como nombre. Una label asociada con for e id permanece visible y da nombre al campo.',
      before: '<input type="email" placeholder="Tu correo">',
      after:
        '<label for="correo">Correo electrónico</label>\n<input id="correo" type="email"\n  autocomplete="email"\n  placeholder="nombre@ejemplo.com">',
    },
  ],
  Page: NewsArticle,
}
