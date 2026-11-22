# Notas · 4.1 Navegación por teclado y foco visible

≈ 6 min · demo: biblioteca

## 1. Lección

- Foco = dónde irá la próxima tecla
- Tab / Shift + Tab · Enter enlace · Enter o Espacio botón
- Alcanzar · ver · activar · abandonar

## 2. Situación · Andrés entra en la biblioteca

- Vuelve Andrés · ahora un formulario: carné, PIN, Entrar

## 3. Error · Foco borrado con CSS

- `outline: none` «porque queda feo»
- [Ejemplo: abrir «Con barrera: ver dónde está el foco» → Tab varias veces: no se ve dónde está el foco]
- > «Quitar el foco es como quitarle el cursor al ratón.»

## 4. Solución · Foco visible con contraste

- `:focus-visible` = selector que se activa con teclado
- Grosor, separación, contraste 3:1
- [Ejemplo: abrir «Con arreglo: ver dónde está el foco» → Tab: contorno morado grueso en cada elemento]

## 5. Error · Cabecera fija tapa el foco

- Shift + Tab hacia arriba: el foco se esconde detrás
- [Ejemplo: abrir «Con barrera: subir con Shift + Tab» → Tab hasta el final y subir con Shift + Tab: el elemento con foco queda debajo de la cabecera]

## 6. Solución · scroll-padding-top

- Reservar el alto de la cabecera
- Comprobación de 1 minuto: desenchufar el ratón y recorrer la página
- [Ejemplo: abrir «Con arreglo: subir con Shift + Tab» → Shift + Tab: el foco siempre queda a la vista, bajo la cabecera]
