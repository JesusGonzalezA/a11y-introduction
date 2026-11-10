import type { ExampleDefinition } from '../../../../../examples/types'
import { CinemaBooking } from './CinemaBooking'

export const cinemaBookingExample: ExampleDefinition = {
  slug: 'cine',
  name: 'Elegir sesión en la web de un cine',
  lesson: '2.2',
  lessonTitle: 'Cómo interpreta el navegador nuestra interfaz',
  title: 'La ola tranquila · Entradas · Cine Alameda',
  tryIt: [
    'Abre las herramientas del navegador (F12) y busca el panel «Accesibilidad».',
    'Selecciona una sesión y mira su rol, su nombre y su estado.',
    'Elige una sesión y fíjate en el mensaje que aparece debajo.',
  ],
  fixes: [
    {
      id: 'role',
      title: 'Cada sesión es un botón',
      where: 'Horarios bajo «Elige una sesión».',
      problem:
        'Un div parece un botón, pero el navegador lo presenta como texto. Elena no sabe que puede pulsarlo y Tab lo salta.',
      solution:
        'Un button aporta el rol de botón, el nombre (su texto) y el teclado.',
      before: '<div class="sesion" onclick="elegir()">16:30</div>',
      after: '<button type="button" onclick="elegir()">16:30</button>',
    },
    {
      id: 'state',
      title: 'La sesión agotada lo dice',
      where: 'Sesión de las 19:00.',
      problem:
        'Solo el color gris indica que está agotada. El navegador no transmite el color y no todas las personas lo distinguen.',
      solution:
        'disabled comunica que no está disponible y el texto «Agotada» explica por qué.',
      before: '<div class="sesion sesion--agotada">19:00</div>',
      after: '<button type="button" disabled>\n  19:00 · Agotada\n</button>',
    },
    {
      id: 'status',
      title: 'La confirmación se anuncia',
      where: 'Mensaje que aparece bajo los horarios al elegir una sesión.',
      problem:
        'El mensaje aparece en pantalla, pero el lector de pantalla no avisa: Elena no sabe si ha elegido.',
      solution:
        'role="status" hace que el lector lea el mensaje cuando cambia, sin mover el foco.',
      before: '<p class="resultado"></p>',
      after: '<p role="status" aria-atomic="true"></p>',
    },
  ],
  Page: CinemaBooking,
}
