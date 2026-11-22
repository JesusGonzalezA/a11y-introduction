# Notas · 2.2 Cómo interpreta el navegador nuestra interfaz

≈ 5 min · demo: cine

## 1. Lección

- El lector no ve: escucha lo que el navegador le cuenta
- Hoy: árbol, nombre-rol-estado, HTML antes que ARIA

## 2. Nombre, rol y estado

- HTML → árbol de accesibilidad → lector
- Nombre = cómo se llama · rol = qué es · estado = cómo está
- Leer en voz alta: «19:00 Agotada, botón, no disponible» (cada lector usa sus palabras)

## 3. Situación · Elena elige sesión

- Recordar a Elena: lector, salta por controles
- Necesita: saber qué se pulsa, qué está agotado, si lo ha conseguido

## 4. Error · Parecen botones, no lo son

- Tres fallos: sin rol · agotada solo en gris · confirmación muda
- [Ejemplo: abrir «Con barrera: elegir una sesión» → Devtools → Accesibilidad sobre «16:30»: no es un botón. «19:00» solo está en gris. Clic en 16:30: el mensaje sale, pero el lector no lo anuncia]
- > «El aspecto no define el control.»

## 5. Solución · Botones nativos con su estado

- `button` + `disabled` + texto visible «Agotada»
- Gratis: rol, foco, teclado, estado
- [Ejemplo: abrir «Con arreglo: elegir una sesión» → Devtools → Accesibilidad: «16:30» es un botón; «19:00» está deshabilitado y dice «Agotada». Tab llega a las sesiones]

## 6. Solución · Anunciar con ARIA

- `role="status"`: anuncia sin mover el foco · `aria-atomic`: completo
- [Ejemplo: abrir «Con arreglo: oír la confirmación» → Elegir 16:30 con el lector (o mirar en el inspector el `p` con `role="status"`): anuncia la sesión elegida]
- > «Primero HTML. ARIA solo cuando HTML no llega.»
