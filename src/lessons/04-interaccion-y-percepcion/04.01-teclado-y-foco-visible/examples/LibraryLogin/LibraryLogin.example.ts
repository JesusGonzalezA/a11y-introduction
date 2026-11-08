import type { ExampleDefinition } from '../../../../../examples/types'
import { LibraryLogin } from './LibraryLogin'

export const libraryLoginExample: ExampleDefinition = {
  slug: 'biblioteca',
  name: 'Acceso a la cuenta de una biblioteca',
  lesson: '4.1',
  lessonTitle: 'Navegación por teclado y foco visible',
  title: 'Accede a tu cuenta · Biblioteca Municipal',
  tryIt:
    'Recorre la página con Tab hasta el final y vuelve con Shift + Tab. Intenta saber en todo momento dónde está el foco, también cuando la cabecera fija se superpone.',
  fixes: [
    {
      id: 'focus',
      title: 'El foco vuelve a dibujarse',
      where: 'Todos los enlaces y controles del contenido principal.',
      why: 'outline: none elimina el indicador del navegador sin sustituto: el foco sigue moviéndose, pero no se sabe dónde está. :focus-visible dibuja un contorno con contraste suficiente.',
      before: '*:focus {\n  outline: none;\n}',
      after:
        ':focus-visible {\n  outline: 3px solid #6d28d9;\n  outline-offset: 3px;\n}',
    },
    {
      id: 'obscured',
      title: 'La cabecera fija no tapa el foco',
      where: 'Cabecera morada, fija en la parte superior.',
      why: 'Al volver hacia arriba con Shift + Tab, el navegador desplaza el control justo hasta el borde y queda oculto bajo la cabecera. scroll-padding reserva ese espacio al desplazar.',
      before: '.cabecera {\n  position: sticky;\n  top: 0;\n}',
      after:
        '.cabecera {\n  position: sticky;\n  top: 0;\n}\nhtml {\n  scroll-padding-top: 6rem;\n}',
    },
  ],
  Page: LibraryLogin,
}
