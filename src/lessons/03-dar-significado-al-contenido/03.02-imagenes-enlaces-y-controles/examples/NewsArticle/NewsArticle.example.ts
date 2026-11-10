import type { ExampleDefinition } from '../../../../../examples/types'
import { NewsArticle } from './NewsArticle'

export const newsArticleExample: ExampleDefinition = {
  slug: 'noticia',
  name: 'Noticia en un periódico local',
  lesson: '3.2',
  lessonTitle: 'Imágenes, enlaces y controles comprensibles',
  title: 'El carril bici del centro duplica sus viajes · Diario de Barrio',
  tryIt: [
    'Lee la noticia con un lector de pantalla, o mira el alt de las imágenes en el inspector.',
    'Lee solo el texto del enlace y el del botón: ¿sabes qué harán?',
    'Escribe en el campo del boletín: ¿sigues viendo qué pide?',
  ],
  fixes: [
    {
      id: 'informative-alt',
      title: 'El gráfico cuenta sus datos',
      where: 'Gráfico de barras de la noticia.',
      problem:
        'El alt es el nombre del archivo. Elena oye «grafico final v2 punto png» y se queda sin los datos.',
      solution:
        'El alt dice lo que aporta el gráfico: las dos cifras que compara.',
      before: '<img src="grafico.svg" alt="grafico_final_v2.png">',
      after:
        '<img src="grafico.svg"\n  alt="Gráfico de barras: 1.200 viajes diarios\n       en marzo de 2025 y 2.450 en marzo de 2026.">',
    },
    {
      id: 'decorative-alt',
      title: 'El icono decorativo se ignora',
      where: 'Icono de sobre junto a «Recibe las noticias del barrio».',
      problem:
        'El icono solo adorna, pero el lector lee «icono-sobre.svg»: es ruido.',
      solution:
        'alt="" indica que la imagen se puede ignorar. No quites el atributo: sin alt, algunos lectores leen el nombre del archivo.',
      before: '<img src="icono-sobre.svg" alt="icono-sobre.svg">',
      after: '<img src="icono-sobre.svg" alt="">',
    },
    {
      id: 'link',
      title: 'El enlace dice adónde lleva',
      where: 'Enlace al final del segundo párrafo de la noticia.',
      problem:
        '«Leer más» no se entiende solo. En la lista de enlaces del lector, Elena no sabe adónde lleva.',
      solution: 'Un texto que describe el destino.',
      before: '<a href="#informe">Leer más</a>',
      after:
        '<a href="#informe">\n  Consultar el informe de movilidad 2026\n</a>',
    },
    {
      id: 'button',
      title: 'El botón dice lo que hace',
      where: 'Botón del formulario del boletín.',
      problem: '«Aceptar» no dice qué va a pasar.',
      solution:
        '«Suscribirme» nombra la acción para quien lo ve y para quien lo escucha.',
      before: '<button type="submit">Aceptar</button>',
      after: '<button type="submit">Suscribirme</button>',
    },
    {
      id: 'label',
      title: 'El campo tiene una etiqueta visible',
      where: 'Campo de correo del boletín.',
      problem:
        'El placeholder desaparece al escribir: Lucía ya no recuerda qué pedía el campo. A Elena, el lector puede decirle solo «campo de edición».',
      solution:
        'Una label unida al campo con for e id: siempre se ve y le da nombre.',
      before: '<input type="email" placeholder="Tu correo">',
      after:
        '<label for="correo">Correo electrónico</label>\n<input id="correo" type="email"\n  autocomplete="email"\n  placeholder="nombre@ejemplo.com">',
    },
  ],
  Page: NewsArticle,
}
