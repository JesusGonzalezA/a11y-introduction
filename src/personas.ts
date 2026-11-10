/**
 * Personas que acompañan el curso. Cada lección parte de la situación de una
 * de ellas: quién es, qué intenta hacer y cómo usa la web.
 */
export interface Persona {
  id: PersonaId
  name: string
  /** Quién es, en una frase. */
  who: string
  /** Cómo usa la web: herramientas y ajustes. */
  how: string
}

export type PersonaId = 'andres' | 'elena' | 'lucia' | 'manuel' | 'ana'

export const personas: Record<PersonaId, Persona> = {
  andres: {
    id: 'andres',
    name: 'Andrés',
    who: 'Tiene temblor en las manos y no puede usar el ratón con precisión.',
    how: 'Usa solo el teclado: Tab para avanzar, Enter y Espacio para activar.',
  },
  elena: {
    id: 'elena',
    name: 'Elena',
    who: 'Es ciega desde hace diez años.',
    how: 'Usa un lector de pantalla: le lee la página en voz alta y le deja saltar entre encabezados, enlaces y campos.',
  },
  lucia: {
    id: 'lucia',
    name: 'Lucía',
    who: 'Tiene TDAH y dislexia. Le cuesta recordar instrucciones que desaparecen.',
    how: 'Usa ratón y teclado. Necesita textos claros y que la información siga a la vista mientras escribe.',
  },
  manuel: {
    id: 'manuel',
    name: 'Manuel',
    who: 'Tiene 72 años, vista cansada y no distingue bien el rojo del verde.',
    how: 'Ha agrandado la letra en su sistema y en su navegador, y a veces hace zoom.',
  },
  ana: {
    id: 'ana',
    name: 'Ana',
    who: 'Tiene un trastorno vestibular: el movimiento en pantalla la marea.',
    how: 'Ha activado «Reducir movimiento» en los ajustes de su sistema operativo.',
  },
}

export const personaList = Object.values(personas)
