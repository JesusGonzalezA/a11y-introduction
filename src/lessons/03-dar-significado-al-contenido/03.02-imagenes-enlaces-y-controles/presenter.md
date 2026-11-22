# Notas · 3.2 Imágenes, enlaces y controles comprensibles

≈ 8 min · demo: noticia

## 1. Lección

- Todo elemento necesita un texto que diga qué es o qué hace
- Imágenes · enlaces · botones · campos

## 2. Situación · Elena lee una noticia

- Gráfico con datos · enlace al informe

## 3. Error · Nombre de archivo como alt

- Leer en voz alta: «grafico final v2 punto png»
- Icono: ruido que no aporta
- [Ejemplo: abrir «Con barrera: leer las imágenes» → Inspector o lector: el gráfico dice «grafico_final_v2.png» y el sobre «icono-sobre.svg»]

## 4. Solución · El alt depende del propósito

- Informativa → lo que aporta (los datos)
- Decorativa → `alt=""`
- [Ejemplo: abrir «Con arreglo: leer las imágenes» → El gráfico da las dos cifras; el sobre tiene `alt=""` y se ignora]
- > «¿Qué se perdería si no vieras la imagen?»

## 5. Error · «Leer más»

- Lista de enlaces del lector: «Leer más, Leer más, Leer más…»
- [Ejemplo: abrir «Con barrera: entender el enlace» → Lista de enlaces del lector: «Leer más», sin contexto]

## 6. Solución · El enlace anticipa el destino

- Se entiende solo · también para control por voz
- [Ejemplo: abrir «Con arreglo: entender el enlace» → El enlace dice «Consultar el informe de movilidad 2026»]

## 7. Situación · Lucía se suscribe

- Le cuesta retener instrucciones que desaparecen

## 8. Error · Placeholder como etiqueta y «Aceptar»

- Escribe → la pista desaparece → ¿qué era?
- Elena: «campo de edición» sin nombre
- [Ejemplo: abrir «Con barrera: suscribirse al boletín» → Escribir en el campo: «Tu correo» desaparece. El botón dice «Aceptar»]

## 9. Solución · Etiqueta visible y botón con acción

- `label for` + `id` · clic en la etiqueta enfoca el campo
- «Suscribirme» dice lo que pasa
- [Ejemplo: abrir «Con arreglo: suscribirse al boletín» → Etiqueta visible «Correo electrónico» y botón «Suscribirme». Clic en la etiqueta: el foco va al campo]
- > «El placeholder es una pista, nunca la etiqueta.»
