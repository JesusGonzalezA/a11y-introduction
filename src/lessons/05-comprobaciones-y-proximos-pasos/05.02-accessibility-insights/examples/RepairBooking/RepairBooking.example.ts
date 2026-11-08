import type { ExampleDefinition } from '../../../../../examples/types'
import { RepairBooking } from './RepairBooking'

export const repairBookingExample: ExampleDefinition = {
  slug: 'taller-bicicletas',
  name: 'Formulario de cita en un taller de bicicletas',
  lesson: '5.2',
  lessonTitle: 'Detectar problemas con Accessibility Insights',
  title: 'Pide cita · Taller La Cadena',
  tryIt:
    'Cierra este panel y ejecuta FastPass. Localiza el campo que falla, aplica el arreglo y repite la comprobación. Después recorre el formulario con Tab stops.',
  fixes: [
    {
      id: 'label',
      title: 'El campo de teléfono tiene una etiqueta asociada',
      where: 'Segundo campo del formulario, «Teléfono».',
      why: 'El texto «Teléfono» se ve encima del campo, pero es un span sin relación con él: el campo no tiene nombre accesible y FastPass lo marca. Una label con for e id lo nombra y se mantiene visible.',
      before: '<span>Teléfono</span>\n<input id="telefono" type="tel">',
      after:
        '<label for="telefono">Teléfono</label>\n<input id="telefono" type="tel"\n  autocomplete="tel">',
    },
  ],
  Page: RepairBooking,
}
