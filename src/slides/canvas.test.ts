import { describe, expect, it } from 'vitest'
import { canvasWidthFor, maxCanvasWidth, minCanvasWidth } from './canvas'

describe('Lienzo de las diapositivas', () => {
  it('sigue la proporción de la ventana para ocupar todo el ancho', () => {
    expect(canvasWidthFor(1920, 1080)).toBe(1920)
    expect(canvasWidthFor(2000, 1050)).toBe(2057)
    expect(canvasWidthFor(1440, 900)).toBe(1728)
  })

  it('no baja de 16:10 ni pasa de 21:9 para que el contenido quepa', () => {
    expect(canvasWidthFor(1024, 768)).toBe(minCanvasWidth)
    expect(canvasWidthFor(3440, 1080)).toBe(maxCanvasWidth)
  })
})
