# Notas · 4.2 Contraste, color y tamaño del texto

≈ 7 min · demo: horarios

## 1. Lección

- Estar no basta: hay que poder verlo
- Color · contraste · tamaño de letra · ampliar sin recortes

## 2. Situación · Manuel consulta su autobús

- Daltonismo rojo-verde · vista cansada · letra grande en el navegador

## 3. Error · Solo color y gris claro

- Punto rojo = cancelado… si distingues el rojo
- [Ejemplo: abrir «Con barrera: consultar el autobús»; devtools → Rendering → simular deuteranopía]
- Medir el gris: 2,07:1

## 4. Solución · Texto y contraste

- Escribir «Cancelado» · el punto se queda como refuerzo
- > «El color acompaña; nunca habla solo.»
- 4,5:1 texto · 3:1 grande e iconos

## 5. Error · La letra no crece

- Manuel ya pidió letra grande: px la ignora
- vw: depende de la ventana, no de la persona; con zoom encoge
- [Ejemplo: Ajustes del navegador → Tamaño de fuente «Muy grande»]

## 6. Solución · rem y clamp()

- rem = preferencia de la persona
- clamp(mínimo en rem, ideal fluido, máximo)
- > «Letra responsive no es solo adaptarse a la pantalla: es adaptarse a la persona.»

## 7. Error · El aviso se corta

- Caja con alto fijo + overflow hidden

## 8. Solución · Cajas flexibles

- Sin alturas fijas · que crezca
- [Ejemplo: elegir «Con arreglo»; zoom 200 % y 320 px]
