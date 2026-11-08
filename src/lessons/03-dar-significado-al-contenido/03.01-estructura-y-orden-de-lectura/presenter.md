# Notas · 3.1 Estructura de página y orden de lectura

≈ 8 min · demo: receta

## 1. Lección

- Con vista: un vistazo · con lector: por partes
- > «La estructura es el mapa de la página.»

## 2. Situación · Elena quiere cocinar

- Salta por encabezados (tecla H en NVDA/JAWS, rotor en VoiceOver)
- Lista de regiones para ir al contenido principal

## 3. Error · Títulos y zonas que solo lo parecen

- `div` grande y en negrita ≠ encabezado
- [Ejemplo: abrir «Recorrer la receta sin estructura»; lista de encabezados vacía]
- Elena escucha menú, cabecera… hasta llegar

## 4. Solución · Encabezados con nivel y regiones

- h1 título · h2 secciones · h3 subsecciones
- Nivel = jerarquía, tamaño = CSS
- header, nav, main, footer · un main

## 5. Error · Se ve en orden, se lee al revés

- `column-reverse`: pantalla ≠ HTML
- El lector sigue el HTML

## 6. Solución · El HTML manda en el orden

- Escribir en orden · `ol` anuncia «lista de 4 elementos»
- [Ejemplo: «Aplicar arreglo»; repetir encabezados, regiones y pasos]
- > «CSS coloca; el HTML cuenta la historia.»
