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
- Elena escucha menú, cabecera… hasta llegar
- [Ejemplo: abrir «Con barrera: buscar títulos y zonas» → Lector o panel Accesibilidad: no hay encabezados ni regiones]

## 4. Solución · Encabezados con nivel y regiones

- h1 título · h2 secciones · h3 subsecciones
- Nivel = jerarquía, tamaño = CSS
- header, nav, main, footer · un main
- [Ejemplo: abrir «Con arreglo: buscar títulos y zonas» → Encabezados `h1`, `h2`, `h3` y regiones `header`, `nav`, `main`, `footer`]

## 5. Error · Se ve en orden, se lee al revés

- `column-reverse`: pantalla ≠ HTML
- El lector sigue el HTML
- [Ejemplo: abrir «Con barrera: leer los pasos» → Lector o inspector en «Preparación»: el HTML empieza por el paso 4]

## 6. Solución · El HTML manda en el orden

- Escribir en orden · `ol` anuncia «lista de 4 elementos»
- [Ejemplo: abrir «Con arreglo: leer los pasos» → Los pasos son una `ol` y se leen del 1 al 4]
- > «CSS coloca; el HTML cuenta la historia.»
