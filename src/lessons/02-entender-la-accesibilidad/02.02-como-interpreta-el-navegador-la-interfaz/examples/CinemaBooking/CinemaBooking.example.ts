import type { ExampleDefinition } from '../../../../../examples/types'
import { CinemaBooking } from './CinemaBooking'

export const cinemaBookingExample: ExampleDefinition = {
  slug: 'cine',
  name: 'Elegir sesión en la web de un cine',
  lesson: '2.2',
  lessonTitle: 'Cómo interpreta el navegador nuestra interfaz',
  title: 'La ola tranquila · Entradas · Cine Alameda',
  tryIt:
    'Abre el árbol de accesibilidad de las devtools del navegador y compara qué rol, nombre y estado expone cada sesión. Después elige una sesión.',
  fixes: [
    {
      id: 'role',
      title: 'Cada sesión es un botón',
      where: 'Lista de horarios bajo «Elige una sesión».',
      why: 'Con el mismo aspecto, un div se expone como texto genérico: no tiene rol de botón ni recibe foco. El button aporta rol, nombre a partir de su texto y activación con teclado.',
      before: '<div class="sesion" onclick="elegir()">16:30</div>',
      after: '<button type="button" onclick="elegir()">16:30</button>',
    },
    {
      id: 'state',
      title: 'La sesión agotada comunica su estado',
      where: 'Sesión de las 19:00.',
      why: 'El color apagado no se expone al navegador y no todas las personas lo distinguen. disabled comunica el estado «no disponible» y el texto visible explica el motivo.',
      before: '<div class="sesion sesion--agotada">19:00</div>',
      after: '<button type="button" disabled>\n  19:00 · Agotada\n</button>',
    },
    {
      id: 'status',
      title: 'La confirmación es un mensaje de estado',
      where: 'Texto que aparece bajo los horarios al elegir una sesión.',
      why: 'Un párrafo que cambia no avisa a quien no lo está mirando. role="status" identifica un mensaje no urgente para que las tecnologías de apoyo puedan presentarlo sin mover el foco.',
      before: '<p class="resultado"></p>',
      after: '<p role="status" aria-atomic="true"></p>',
    },
  ],
  Page: CinemaBooking,
}
