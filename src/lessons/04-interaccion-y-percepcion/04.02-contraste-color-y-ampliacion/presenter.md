# Notas · 4.2 Contraste, color y tamaño del texto

≈ 7 min · demo: horarios

## 1. Lección

- Estar no basta: hay que poder verlo
- Color · contraste · tamaño de letra · ampliar sin recortes

## 2. Situación · Manuel consulta su autobús

- Daltonismo rojo-verde · vista cansada · letra grande en el navegador

## 3. Error · Solo color y gris claro

- Punto rojo = cancelado… si distingues el rojo
- Medir el gris: 2,07:1
- [Ejemplo: abrir «Con barrera: saber qué autobús está cancelado» → Rendering → simular deuteranopía: los puntos se confunden. El gris de la parada apenas se lee (2,07:1)]

## 4. Solución · Texto y contraste

- Escribir «Cancelado» · el punto se queda como refuerzo
- [Ejemplo: abrir «Con arreglo: saber qué autobús está cancelado» → El estado está escrito («Cancelado») y el gris es más oscuro (7,73:1)]
- > «El color acompaña; nunca habla solo.»
- 4,5:1 texto · 3:1 grande e iconos

## 5. Error · La letra no crece

- Manuel ya pidió letra grande: px la ignora
- vw: depende de la ventana, no de la persona; con zoom encoge
- [Ejemplo: abrir «Con barrera: agrandar la letra» → Ajustes → Aspecto → Tamaño de fuente «Muy grande»: la letra no cambia]

## 6. Solución · rem y clamp()

- rem = preferencia de la persona
- clamp(mínimo en rem, ideal fluido, máximo)
- [Ejemplo: abrir «Con arreglo: agrandar la letra» → Con el mismo ajuste, toda la letra crece]
- > «Letra responsive no es solo adaptarse a la pantalla: es adaptarse a la persona.»

## 7. Error · El aviso se corta

- Caja con alto fijo + overflow hidden
- [Ejemplo: abrir «Con barrera: leer el aviso por obras» → Zoom al 200 % o ventana de 320 px: el aviso se corta]

## 8. Solución · Cajas flexibles

- Sin alturas fijas · que crezca
- [Ejemplo: abrir «Con arreglo: leer el aviso por obras» → Zoom al 200 % o 320 px: el aviso crece y se lee entero]
