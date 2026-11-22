# Notas · 5.2 Detectar problemas con Accessibility Insights

≈ 4 min · demo: taller de bicicletas

## 1. Lección

- Extensión gratuita · Chrome y Edge
- FastPass (automático) + Tab stops (teclado)

## 2. Situación · Elena pide cita

- Formulario corto · el teléfono no tiene nombre

## 3. Error · Texto no unido al campo

- Regla de etiqueta → instancia → resaltado
- [Ejemplo: abrir «Con barrera: analizar el formulario» → Accessibility Insights → FastPass: falla el campo «Teléfono», sin nombre]

## 4. Solución · Asociar y repetir

- `label for` + `id`
- Tab stops = el recorrido de Andrés dibujado
- [Ejemplo: abrir «Con arreglo: analizar el formulario» → FastPass otra vez: el fallo ya no aparece. Después, Tab stops]

## 5. Cero errores no significa accesible

- La herramienta no sabe si el alt o el enlace se entienden
- > «Una prueba automática limpia es el punto de partida, no la meta.»
