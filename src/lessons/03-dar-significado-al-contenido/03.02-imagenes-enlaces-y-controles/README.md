# 3.2 Imágenes, enlaces y controles comprensibles

**9 minutos, demo incluida.** La persona necesita entender qué información aporta
una imagen, adónde lleva un enlace, qué hace un botón y qué introducir en un campo.
Aprenderá a decidir alt por propósito y a proporcionar nombres y etiquetas visibles.

## Recorrido y ejecución

Ocho slides y ocho apartados del [guion](presenter.md): necesidad (40 s), alt
informativo (75 s), decorativa (50 s), enlace (65 s), botón (55 s), etiqueta (70 s),
demo (145 s), comprobación (40 s). Total 540 s; ensayo humano pendiente.
En la raíz: `pnpm install --frozen-lockfile`, `pnpm dev` y `pnpm storybook`.
Abrir [slides 27–34](http://localhost:5173/#/26). Puertos de sesión 5175/6008 y mapa
en el [README del módulo](../README.md#ejecutar-y-revisar).

## Demo de corrección

Preparar las tres stories y el código de `ActivityPage.tsx` antes de grabar:

1. [Contraejemplo deliberado](http://localhost:6006/iframe.html?id=m3-activity-content--contraejemplo&viewMode=story).
   La imagen tiene alt «actividad.svg»; el enlace, «Ver más»; el botón, «Aceptar».
   Escribir Ana en el campo identificado solo mediante placeholder. Falta una
   etiqueta persistente; no afirmar silencio universal del lector ni fallo
   garantizado de axe. Un nombre de respaldo no resuelve esa barrera visible.
2. [Contenido corregido](http://localhost:6006/iframe.html?id=m3-activity-content--contenido-corregido&viewMode=story).
   Contrastar las ramas del código: alt pertinente, texto de destino, acción
   «Inscribirme», label htmlFor/id. Activar el enlace y verificar que llega a
   Información práctica. Pulsar la etiqueta, escribir Ana, comprobar que sigue
   visible; Tab llega al botón, Enter o Espacio muestra confirmación. Recargar
   reinicia datos y confirmación. No se envían datos a ningún servidor.
3. [Imagen redundante](http://localhost:6006/iframe.html?id=m3-activity-content--imagen-decorativa&viewMode=story).
   El párrafo ya expresa la aportación de la misma ilustración: alt vacío evita
   repetirla. La decisión depende del contexto, no del nombre del archivo. Con
   lector real, comprobar información conservada y omisión de imagen; pendiente.

La selección entre stories representa las correcciones; no hay un interruptor
oculto que cambie la interfaz durante la lectura. Las versiones son recuperables.

## Escenario, semántica y teclado

`examples/ActivityContent` compone `ActivityPage` con la estructura corregida de
3.1 y la [acción compartida](../../shared/README.md). La imagen se carga localmente
como img y obtiene nombre desde alt. La decorativa no tiene title, aria-label ni
foco en el elemento img; su SVG externo contiene un title solo para apertura aislada.

El enlace nativo a/href tiene un destino de fragmento existente. Se activa con
Enter; no se sustituye por role=link. «Ver más» puede ser comprensible por contexto
según WCAG 2.4.4; aquí mejoramos su texto para que funcione también en lista de enlaces.
El botón submit usa texto visible «Inscribirme» como nombre, sin aria-label redundante.

El único campo es input type=text, editable y opcional; autocomplete=given-name.
Label visible usa for/id único por instancia; placeholder «Ej.: Ana» aporta pista.
La etiqueta persiste al escribir. No hay grupo de campos, required, error, ayuda
asociada, readonly ni disabled en esta etapa. El formulario evita navegación de
envío; `RegistrationAction` no recibe ni persiste el valor del campo.

Tab: enlaces de navegación → enlace de información → campo → botón; Shift+Tab
invierte el recorrido. Clic en label enfoca; escribir/editar conserva el valor y
la etiqueta. Enter/Espacio en botón o clic activa una vez la confirmación. El
foco de teclado se conserva en el botón; el status ya existe vacío antes de actuar.
La percepción del mensaje necesita AT real: no se promete un anuncio por ver el DOM.

## Pruebas, criterios y límites

`ActivityContent.test.tsx` comprueba imagen/alt, enlace/href/destino y eventos,
label/id/nombre/type/autocomplete, edición y persistencia, recorrido de Tab en
ambos sentidos, activación única, foco y status, variante decorativa, IDs por
instancia y las barreras esperadas. Axe se ejecuta en solución inicial, confirmada
y decorativa. Tests no prueban pertinencia, lectura real, voz, teclado móvil,
contraste ni zoom. No exigen que axe detecte texto genérico o alt inútil.

Criterios I/D/L/T y botón/status, exclusiones condicionales y evidencia concreta en
la [auditoría separada](../audit.md). Entornos pendientes en la
[matriz manual](../README.md#matriz-manual-pendiente).

## Referencias

[Investigación previa](../../../../docs/research/03-dar-significado-al-contenido.md),
[WAI decisión alt](https://www.w3.org/WAI/tutorials/images/decision-tree/),
[WAI etiquetas](https://www.w3.org/WAI/tutorials/forms/labels/),
[HTML placeholder](https://html.spec.whatwg.org/multipage/input.html#the-placeholder-attribute),
[HTML-AAM img](https://www.w3.org/TR/html-aam/#el-img),
[APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[Magenta imagen](https://www.magentaa11y.com/web-criteria/component/informative-image),
[decorativa](https://www.magentaa11y.com/web-criteria/component/decorative-image),
[enlace](https://www.magentaa11y.com/web-criteria/component/link) y
[campo](https://www.magentaa11y.com/web-criteria/component/text-input).
Originales y condiciones de uso en la investigación; contrato heredado de
[botón/status](../../../../docs/research/02-entender-la-accesibilidad.md).
