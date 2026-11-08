# Notas · 4.3 Animaciones y movimiento

≈ 6 min · demo: festival

## 1. Lección

- Animar ayuda… hasta que marea o distrae
- Ajuste del sistema · media query · pausa

## 2. «Reducir movimiento» en el sistema

- Enseñar la ruta en el propio sistema (macOS o Windows)
- Para probar sin tocar el sistema: devtools → Rendering
- > «La persona ya nos dijo lo que necesita; solo hay que escucharla.»

## 3. Situación · Ana compra un abono

- Trastorno vestibular: movimiento = mareo, náusea
- Ya tiene activado «Reducir movimiento»

## 4. Error · Las animaciones ignoran la preferencia

- [Ejemplo: abrir «Ver el festival con movimiento constante» con la emulación activada]
- Todo se mueve igual

## 5. Solución · prefers-reduced-motion

- Media query = lee el ajuste: `reduce` / `no-preference`
- Animar solo con `no-preference` → mejora progresiva
- [Ejemplo: «Aplicar arreglo»: todo quieto]

## 6. Error · Cartel sin fin

- Ana se marea · Lucía no puede leer
- Más de 5 segundos moviéndose solo → necesita pausa

## 7. Solución · Botón de pausa

- `button` nativo · texto cambia Pausar / Reanudar
- [Ejemplo: quitar la emulación; pausar y reanudar con teclado]

## 8. Otras preferencias que CSS puede leer

- color-scheme · contrast · forced-colors · tamaño de letra → rem
- > «Las preferencias del sistema son la voz de la persona dentro de nuestro CSS.»
