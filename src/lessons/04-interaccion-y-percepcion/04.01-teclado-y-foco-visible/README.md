# 4.1 Navegación por teclado y foco visible

**9 minutos**, incluida la comparación con/sin foco. La persona necesita completar
un formulario sin ratón y saber en todo momento dónde está. El descubrimiento
parte de la tarea: alcanzar → escribir → reconocer foco → activar → confirmar →
salir. No se estudian todavía controles compuestos ni gestión de foco de diálogos.

## Página de ejemplo

Instalar y arrancar según el [mapa del módulo](../README.md#ejecutar-y-revisar). Ruta: `/ejemplos/biblioteca`, acceso a la cuenta
de una biblioteca municipal con cabecera fija y un catálogo debajo. Enlaces de la
slide 6: «Comparar recorrido sin foco visible» y «Completar el acceso con foco
visible» (`?arreglo=1`).

| Arreglo | Sin arreglo | Con arreglo |
| --- | --- | --- |
| Foco visible | `*:focus { outline: none }` | `:focus-visible` con contorno de 3 px |
| Foco no tapado | Cabecera `position: sticky` tapa el control al volver con Shift + Tab | `html { scroll-padding-top: 6rem }` |

| Lugar | Tecla | Resultado |
| --- | --- | --- |
| Página | Tab / Shift + Tab | Cabecera → carné → PIN → casilla → Entrar → enlaces → catálogo, y vuelta |
| Enlace | Enter | Sigue el href |
| Campo | Caracteres / edición | Escribe el dato |
| Botón | Enter / Espacio | Acceso de prueba y confirmación |

La barrera solo oculta el dibujo del foco con CSS acotado a la página: **no
intercepta Tab** y la herramienta flotante conserva su foco. La trampa se explica
con código no conectado. El cursor del campo puede seguir dando una pista: no se
afirma la desaparición universal de todo indicio. En macOS, comprobar la
navegación de teclado del sistema y del navegador.

## Componentes y pruebas

`LibraryLogin` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `LibraryLogin.example.ts`. El margen de desplazamiento se
aplica como clase en `html` solo mientras la página está montada con el arreglo.

`LibraryLogin.test.tsx` recorre el formulario hacia delante y atrás en ambos
estados, comprueba que no hay `tabindex`, que la clase de barrera y el margen de
desplazamiento dependen del arreglo y se retiran al desmontar, el envío con Enter
y axe sin infracciones detectables. JSDOM no dibuja el foco ni desplaza: foco
visible y no tapado (WCAG 2.4.7 y 2.4.11) se comprueban en navegador según la
[matriz del módulo](../README.md#matriz-manual-pendiente).

[Fuentes y originales Magenta B/L/T/F/P](../../../../docs/research/04-interaccion-y-percepcion.md#magentaa11y-páginas-concretas-trazabilidad-y-reutilización)
y [auditoría cruzada](../audit.md) de los ejemplos anteriores.
