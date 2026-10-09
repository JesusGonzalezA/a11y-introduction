# 3.1 Estructura de página y orden de lectura

**9 minutos, demo incluida.** La persona quiere localizar información antes de
inscribirse. Aprenderá a reconocer secciones, jerarquía y contenido principal y a
comprobar que una secuencia sigue teniendo sentido sin depender de su posición.

## Recorrido y ejecución

Siete slides y siete apartados del [guion](presenter.md): necesidad (45 s),
encabezados (75 s), niveles (75 s), regiones (75 s), secuencia (60 s), demo con
lector (165 s), comprobación (45 s). Total 540 s; ensayo humano pendiente.
En la raíz, `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm storybook`.
Abrir [slides 20–26](http://localhost:5173/#/19). Puertos de sesión 5175/6008 y mapa
completo en el [README del módulo](../README.md#ejecutar-y-revisar).

## Demo preparada con lector de pantalla

Preparar dos pestañas aisladas antes de grabar; no usar el gestor de Storybook:
[contraejemplo](http://localhost:6006/iframe.html?id=m3-activity-structure--contraejemplo&viewMode=story)
y [solución](http://localhost:6006/iframe.html?id=m3-activity-structure--estructura-corregida&viewMode=story).
Registrar versiones y configuración; **AT real no ejecutado en esta entrega**.

1. Activar VoiceOver en Safari/macOS (VO = Control+Option, o modificador configurado).
   En el documento, VO-U abre los menús del rotor; izquierda/derecha elige
   Encabezados y arriba/abajo recorre la lista. Return salta al seleccionado.
   Si la categoría no aparece, revisar sus ajustes. En el contraejemplo los
   títulos son párrafos: no se espera el esquema de encabezados de la solución.
2. En la solución, localizar h1 «Paseo por el jardín botánico»; h2 «Sobre la
   actividad», h2 «Información práctica», h3 «Punto de encuentro», h2 «Inscripción».
   Saltar a Información práctica y continuar leyendo su texto.
3. Consultar regiones en el rotor (si están habilitadas) para localizar main.
   El contraejemplo mantiene cabecera/nav/pie, pero su zona central es div.
   La solución contiene un main con el título al principio.
4. Recorrer el contenido con los comandos de lectura del lector (VoiceOver,
   VO+flecha derecha, entrando en el contenido web si lo pide). Comparar los pasos:
   el contraejemplo escribe segundo→primero en DOM y usa column-reverse; la
   solución escribe primero→segundo sin inversión. No confundir esto con Tab.
5. Alternativa en Windows con NVDA/Firefox o Chrome: modo exploración, H/Shift+H
   para encabezados; D/Shift+D para regiones; flechas para leer en secuencia.
   Registrar lo observado, no una frase de lector prefijada.

Si no hay lector disponible, enseñar la estructura del HTML es solo una
comprobación parcial: mantener pendiente la demo auditiva requerida.
Fuentes de comandos: [Apple rotor](https://support.apple.com/en-lamr/guide/voiceover/mchlp2719/mac)
y [NVDA modo exploración](https://download.nvaccess.org/documentation/userGuide.html#BrowseMode).

## Escenario y contrato

`examples/ActivityStructure` compone la [interfaz compartida](../README.md#interfaces-y-etapas-conservadas).
No crea un componente Heading ni reconstruye regiones con ARIA. La solución usa
h1/h2/h3 y header/nav/main/footer. El nav tiene nombre «Actividad»; los section
organizan contenido sin convertirse todos en regiones adicionales. Un h1 es la
convención del ejemplo, no una cantidad universal impuesta por WCAG. Volver de h3
a h2 es coherente al cerrar una subsección. El tamaño se define con BEM/CSS.

Tab visita «Sobre la actividad» → «Inscripción» → «Consultar información práctica»
→ «Inscribirme»; Shift+Tab recorre en sentido inverso. Enter activa enlaces;
Enter/Espacio activan el botón. Encabezados e imágenes no reciben tabindex. La
acción y el status conservan el contrato heredado; no hay formulario en esta etapa.

`ActivityStructure.test.tsx` comprueba regiones, jerarquía/nombres, secuencia DOM,
paradas de Tab, ausencia de tabindex, barreras deliberadas y axe de la solución.
No prueba navegación H/rotor, percepción del foco, desplazamiento ni lectura real.
Criterios H/M/B/N/F y WCAG 1.3.2, clasificaciones y brechas en la
[auditoría](../audit.md) y la [matriz manual](../README.md#matriz-manual-pendiente).

## Referencias

[Investigación previa](../../../../docs/research/03-dar-significado-al-contenido.md),
[WAI encabezados](https://www.w3.org/WAI/tutorials/page-structure/headings/),
[WAI regiones](https://www.w3.org/WAI/tutorials/page-structure/regions/),
[APG regiones](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/),
[HTML main](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element),
[HTML-AAM headings](https://www.w3.org/TR/html-aam/#el-h1-h6),
[WCAG secuencia](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html),
[Magenta Heading](https://www.magentaa11y.com/web-criteria/component/heading) y
[Magenta Main](https://www.magentaa11y.com/web-criteria/page-level/main-landmark).
Los originales específicos de cada región están fijados en la investigación.
