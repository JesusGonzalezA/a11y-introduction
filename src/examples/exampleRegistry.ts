import { productPageExample } from '../lessons/02-entender-la-accesibilidad/02.01-personas-interaccion-y-barreras/examples/ProductPage/ProductPage.example'
import { cinemaBookingExample } from '../lessons/02-entender-la-accesibilidad/02.02-como-interpreta-el-navegador-la-interfaz/examples/CinemaBooking/CinemaBooking.example'
import { recipePageExample } from '../lessons/03-dar-significado-al-contenido/03.01-estructura-y-orden-de-lectura/examples/RecipePage/RecipePage.example'
import { newsArticleExample } from '../lessons/03-dar-significado-al-contenido/03.02-imagenes-enlaces-y-controles/examples/NewsArticle/NewsArticle.example'
import { libraryLoginExample } from '../lessons/04-interaccion-y-percepcion/04.01-teclado-y-foco-visible/examples/LibraryLogin/LibraryLogin.example'
import { busTimetableExample } from '../lessons/04-interaccion-y-percepcion/04.02-contraste-color-y-ampliacion/examples/BusTimetable/BusTimetable.example'
import { museumExhibitionExample } from '../lessons/05-comprobaciones-y-proximos-pasos/05.01-bookmarklets/examples/MuseumExhibition/MuseumExhibition.example'
import { repairBookingExample } from '../lessons/05-comprobaciones-y-proximos-pasos/05.02-accessibility-insights/examples/RepairBooking/RepairBooking.example'
import type { ExampleDefinition } from './types'

/** Única fuente de las páginas de ejemplo, en el orden del curso. */
export const exampleRegistry: ExampleDefinition[] = [
  productPageExample,
  cinemaBookingExample,
  recipePageExample,
  newsArticleExample,
  libraryLoginExample,
  busTimetableExample,
  museumExhibitionExample,
  repairBookingExample,
]
