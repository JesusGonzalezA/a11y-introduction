import type { ExampleDefinition } from '../../../../../examples/types'
import { LibraryLogin } from './LibraryLogin'

export const libraryLoginExample: ExampleDefinition = {
  slug: 'biblioteca',
  name: 'Acceso a la cuenta de una biblioteca',
  lesson: '4.1',
  lessonTitle: 'Navegación por teclado y foco visible',
  title: 'Accede a tu cuenta · Biblioteca Municipal',
  tryIt: [
    'Recorre la página con Tab hasta el final: ¿sabes siempre dónde estás?',
    'Vuelve hacia arriba con Shift + Tab y mira qué pasa bajo la cabecera fija.',
  ],
  fixes: [
    {
      id: 'focus',
      title: 'El foco se ve',
      where: 'Enlaces, campos y botones del contenido principal.',
      problem:
        'outline: none borra el indicador de foco. El foco se mueve, pero Andrés no ve dónde está.',
      solution: ':focus-visible dibuja un contorno grueso y con contraste.',
      before: '*:focus {\n  outline: none;\n}',
      after:
        ':focus-visible {\n  outline: 3px solid #6d28d9;\n  outline-offset: 3px;\n}',
    },
    {
      id: 'obscured',
      title: 'La cabecera fija no tapa el foco',
      where: 'Cabecera morada, fija en la parte superior.',
      problem:
        'Al subir con Shift + Tab, el elemento con foco queda escondido debajo de la cabecera.',
      solution:
        'scroll-padding-top deja libre la altura de la cabecera cuando el navegador se desplaza hasta el foco.',
      before: '.cabecera {\n  position: sticky;\n  top: 0;\n}',
      after:
        '.cabecera {\n  position: sticky;\n  top: 0;\n}\nhtml {\n  scroll-padding-top: 6rem;\n}',
    },
  ],
  Page: LibraryLogin,
}
