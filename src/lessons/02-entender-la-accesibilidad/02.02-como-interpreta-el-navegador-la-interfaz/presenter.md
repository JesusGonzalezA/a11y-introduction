# Notas · 2.2 Cómo interpreta el navegador nuestra interfaz

≈ 5 min · demo: cine

## 1. Lección

- El lector no ve: escucha lo que el navegador le cuenta
- Hoy: árbol, nombre-rol-estado, HTML antes que ARIA

## 2. Nombre, rol y estado

- HTML → árbol de accesibilidad → lector
- Nombre = qué es · rol = qué tipo · estado = cómo está
- Leer en voz alta: «19:00 Agotada, botón, atenuado»

## 3. Situación · Elena elige sesión

- Recordar a Elena: lector, salta por controles
- Necesita: saber qué se pulsa, qué está agotado, si lo ha conseguido

## 4. Error · Parecen botones, no lo son

- Tres fallos: sin rol · agotada solo en gris · confirmación muda
- [Ejemplo: abrir «Ver las sesiones en el árbol de accesibilidad»; devtools → Accessibility]
- > «El aspecto no define el control.»

## 5. Solución · Botones nativos con su estado

- `button` + `disabled` + texto visible «Agotada»
- Gratis: rol, foco, teclado, estado

## 6. Solución · Anunciar con ARIA

- `role="status"`: anuncia sin mover el foco · `aria-atomic`: completo
- [Ejemplo: «Aplicar arreglo», elegir 16:30, «Ver cambios»]
- > «Primero HTML. ARIA solo cuando HTML no llega.»
