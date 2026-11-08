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
- [Ejemplo: abrir «Entrar en la cuenta sin foco visible»; Tab varias veces]
- > «Quitar el foco es como quitarle el cursor al ratón.»

## 4. Solución · Foco visible con contraste

- `:focus-visible` = selector que se activa con teclado
- Grosor, separación, contraste 3:1

## 5. Error · Cabecera fija tapa el foco

- Shift + Tab hacia arriba: el foco se esconde detrás

## 6. Solución · scroll-padding-top

- Reservar el alto de la cabecera
- [Ejemplo: «Aplicar arreglo»; recorrer hacia delante y atrás]
- Comprobación de 1 minuto: desenchufar el ratón y recorrer la página
