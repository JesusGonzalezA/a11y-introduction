/** Alto fijo del lienzo; el ancho se adapta a la ventana. */
export const canvasHeight = 1080
/**
 * Entre 16:10 y 21:9 el lienzo llena la ventana sin franjas. Por debajo de
 * 16:10 (1728 px) el contenido más largo ya no cabe: en pantallas 4:3 quedan
 * franjas arriba y abajo en lugar de recortar texto.
 */
export const minCanvasWidth = 1728
export const maxCanvasWidth = 2560

/**
 * Ancho del lienzo con la misma proporción que la ventana, para que las
 * diapositivas ocupen todo el ancho en cualquier pantalla.
 */
export function canvasWidthFor(viewportWidth: number, viewportHeight: number) {
  if (!viewportWidth || !viewportHeight) return 1920
  const width = Math.round((canvasHeight * viewportWidth) / viewportHeight)
  return Math.min(maxCanvasWidth, Math.max(minCanvasWidth, width))
}
