/** Sitio publicado con las páginas de ejemplo del curso. */
export const examplesBase =
  'https://weaaare.github.io/curso-introduccion-desarrollo-web-accesible/'

/** Páginas de ejemplo publicadas, en el orden del curso. */
export interface ExampleLink {
  /** Segmento de la URL en el sitio de ejemplos: `/<slug>/`. */
  slug: string
  /** Qué página es. */
  name: string
  lesson: string
  lessonTitle: string
}

export const exampleRegistry: ExampleLink[] = [
  {
    slug: 'tienda-online',
    name: 'Ficha de producto de una tienda online',
    lesson: '2.1',
    lessonTitle: 'Personas, formas de interacción y barreras',
  },
  {
    slug: 'cine',
    name: 'Elegir sesión en la web de un cine',
    lesson: '2.2',
    lessonTitle: 'Cómo interpreta el navegador nuestra interfaz',
  },
  {
    slug: 'receta',
    name: 'Receta en un blog de cocina',
    lesson: '3.1',
    lessonTitle: 'Estructura de página y orden de lectura',
  },
  {
    slug: 'noticia',
    name: 'Noticia en un periódico local',
    lesson: '3.2',
    lessonTitle: 'Imágenes, enlaces y controles comprensibles',
  },
  {
    slug: 'biblioteca',
    name: 'Acceso a la cuenta de una biblioteca',
    lesson: '4.1',
    lessonTitle: 'Navegación por teclado y foco visible',
  },
  {
    slug: 'horarios',
    name: 'Próximas salidas de una línea de autobús',
    lesson: '4.2',
    lessonTitle: 'Contraste, color y tamaño del texto',
  },
  {
    slug: 'festival',
    name: 'Portada de un festival de música',
    lesson: '4.3',
    lessonTitle: 'Animaciones y movimiento',
  },
  {
    slug: 'museo',
    name: 'Exposición temporal en la web de un museo',
    lesson: '5.1',
    lessonTitle: 'Inspeccionar el contenido con bookmarklets',
  },
  {
    slug: 'taller-bicicletas',
    name: 'Formulario de cita en un taller de bicicletas',
    lesson: '5.2',
    lessonTitle: 'Detectar problemas con Accessibility Insights',
  },
]
