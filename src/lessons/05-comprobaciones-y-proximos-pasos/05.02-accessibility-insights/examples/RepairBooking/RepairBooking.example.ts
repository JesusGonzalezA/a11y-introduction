import type { ExampleDefinition } from '../../../../../examples/types'
import { RepairBooking } from './RepairBooking'

export const repairBookingExample: ExampleDefinition = {
  slug: 'taller-bicicletas',
  name: 'Formulario de cita en un taller de bicicletas',
  lesson: '5.2',
  lessonTitle: 'Detectar problemas con Accessibility Insights',
  title: 'Pide cita · Taller La Cadena',
  tryIt: [
    'Cierra esta explicación.',
    'Ejecuta FastPass en Accessibility Insights y busca el campo que falla.',
    'Elige «Con arreglo» y repite el análisis.',
    'Activa Tab stops y recorre el formulario con Tab.',
  ],
  fixes: [
    {
      id: 'label',
      title: 'El campo «Teléfono» tiene etiqueta',
      where: 'Segundo campo del formulario.',
      problem:
        '«Teléfono» se ve encima del campo, pero es un span suelto. El campo no tiene nombre: el lector solo dice «campo de edición».',
      solution: 'Una label unida al campo con for e id le da nombre.',
      before: '<span>Teléfono</span>\n<input id="telefono" type="tel">',
      after:
        '<label for="telefono">Teléfono</label>\n<input id="telefono" type="tel"\n  autocomplete="tel">',
    },
  ],
  Page: RepairBooking,
}
