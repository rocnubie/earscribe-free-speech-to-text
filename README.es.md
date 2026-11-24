<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a>
</p>

<h1 align="center">EarScribe — Audio y vídeo a texto gratis en tu navegador</h1>

<p align="center">
  <b>Suelta un archivo de audio, un vídeo, o graba desde el micrófono. Obtén una transcripción con marcas de tiempo y subtítulos.</b><br/>
  <sub>Whisper se ejecuta en tu propio dispositivo mediante WebGPU o WebAssembly: la grabación nunca se sube.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="App en vivo" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Gratis" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Sin registro" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privado" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licencia MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — audio y vídeo a texto gratis en el navegador. Suelta un MP3, WAV, M4A o MP4 y obtén una transcripción con marcas de tiempo sin subir nada."></a>
</p>

<p align="center">
  <b>🔗 Abre la app:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Guías</a> ·
  <a href="https://earscribe.app/changelog">Novedades</a> ·
  <a href="https://earscribe.app/about">Acerca de</a>
</p>

---

## 🎙️ Qué es EarScribe

Un espacio de trabajo de transcripción que funciona por completo en la pestaña del navegador. Le das audio, un archivo de vídeo o tu micrófono; te devuelve texto con marcas de tiempo en las que puedes hacer clic para volver a escuchar, además de archivos de subtítulos que puedes pasarle a un editor. Sin cuenta, sin subida y sin factura por minuto.

Tres puertas de entrada, un mismo proceso:

- **Un archivo** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, o casi cualquier cosa que la Web Audio API pueda decodificar, hasta 1 GiB.
- **Un vídeo** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. La pista de audio se separa (demux) y se recodifica a 16 kHz mono **dentro de la pestaña**, y luego se transcribe como cualquier otro archivo. Sin ffmpeg, sin webs de conversión.
- **El micrófono** — graba y transcribe en el mismo sitio: una clase, una llamada que tengas permiso para grabar o una nota de voz que de otro modo perderías.

Súmale la cola y puedes soltar los archivos de una carpeta entera y dejarla trabajar; súmale el espacio de trabajo en `/dashboard` y los resultados se convierten en proyectos que puedes reabrir, editar y exportar más adelante.

> 👉 **App en vivo:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Índice

- [✨ Qué hace](#-qué-hace)
- [🖼️ Capturas de pantalla](#️-capturas-de-pantalla)
- [🚀 Inicio rápido](#-inicio-rápido)
- [🗂️ El espacio de trabajo](#️-el-espacio-de-trabajo)
- [💸 Cuánto cuesta](#-cuánto-cuesta)
- [🆚 Comparativa](#-comparativa)
- [🌍 Entradas y idiomas compatibles](#-entradas-y-idiomas-compatibles)
- [💼 Casos de uso](#-casos-de-uso)
- [🚧 Lo que no hace](#-lo-que-no-hace)
- [❓ Preguntas frecuentes](#-preguntas-frecuentes)
- [🛠️ Stack técnico](#️-stack-técnico)
- [🧑‍💻 Desarrollo local](#-desarrollo-local)
- [☁️ Despliegue](#️-despliegue)
- [🌐 Añadir un idioma](#-añadir-un-idioma)
- [🔬 Añadir un modelo de Whisper](#-añadir-un-modelo-de-whisper)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## ✨ Qué hace

| | Función | Lo que obtienes de verdad |
|---|---|---|
| 🎬 | **Audio, vídeo y micrófono** | Los contenedores de vídeo se aceptan directamente. La pista de audio se extrae en local, así que un MP4 de 200 MB tampoco sale nunca del equipo. |
| 📝 | **Transcripción con marcas de tiempo** | Cada línea lleva hora de inicio y de fin. Haz clic en una para oír ese momento; el cursor de la forma de onda se mueve contigo. |
| 🔍 | **Búsqueda dentro de la transcripción** | Un nombre, una cifra, un término: salta a la frase y vuelve a oírla en lugar de repasar el archivo entero. |
| 🎞️ | **Exportación de subtítulos** | SRT, WebVTT, texto plano, JSON (el objeto de transcripción con códigos de tiempo de precisión completa) o el portapapeles. |
| 🧪 | **Revisión de subtítulos** | Antes de exportar, marca las líneas demasiado largas, demasiado rápidas, repetidas, vacías o solapadas. |
| 📚 | **Cola por lotes** | Suelta varios archivos, elige un modelo y un idioma hablado, y deja que la cola los procese en orden. Puedes pausarla al terminar el archivo actual. |
| 🗂️ | **Proyectos** | Los resultados se guardan en el navegador como proyectos en `/dashboard`: transcripciones, subtítulos, archivos de origen y una papelera, listos para reabrir. |
| ✏️ | **Edición de subtítulos** | Corrige el texto, mueve el punto de entrada o de salida de una línea, divídela o bórrala y vuelve a exportar. |
| 💾 | **Copia de seguridad y restauración** | Exporta todo el espacio de trabajo en un solo archivo e impórtalo en otro navegador. |
| 🔁 | **Conversión de subtítulos** | SRT ⇄ VTT y SRT → texto, en el navegador, sin descargar ningún modelo: la única herramienta de aquí que arranca al instante. |
| 🆓 | **Gratis e ilimitado** | Sin plan de pago, sin cupo diario, sin tarifa por minuto, sin cuenta. |
| 🔒 | **Privado por arquitectura** | La transcripción se ejecuta en local. Las páginas públicas llevan analítica y anuncios; `/dashboard` no tiene anuncios. |
| 🌍 | **27 idiomas de interfaz, 99 idiomas hablados** | La interfaz está traducida a 27 locales; Whisper detecta el idioma hablado automáticamente. |

---

## 🖼️ Capturas de pantalla

> Capturas reales del sitio en vivo, **[earscribe.app](https://earscribe.app)**.

### 1. Suelta un archivo o un vídeo, o graba — sin registro y sin subir nada

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Conversor gratis de audio y vídeo a texto — suelta MP3, WAV, M4A, MP4, MOV o MKV en el navegador. Sin registro, sin inicio de sesión."></a>
</p>

### 2. Transcripción con marcas de tiempo y forma de onda — haz clic en cualquier línea para saltar

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Resultado de EarScribe — audio a texto con marcas de tiempo, cabezal de forma de onda y exportación de subtítulos SRT y VTT en un clic"></a>
</p>

### 3. Tres pasos: suelta el archivo → elige un modelo de Whisper → exporta

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Cómo funciona el audio a texto gratis en EarScribe — suelta audio o vídeo, elige un modelo de Whisper (tiny, base, small o turbo), lee y exporta la transcripción"></a>
</p>

### 4. Por qué EarScribe — Whisper nativo del navegador, privacidad ante todo

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Funciones de EarScribe — privado sin subidas, WebGPU más WASM, 99 idiomas hablados detectados solos, exportación SRT VTT JSON TXT, inferencia en el dispositivo"></a>
</p>

### 5. Quién usa EarScribe — podcasters, periodistas, estudiantes, editores

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Casos de uso de EarScribe — audio a texto gratis para podcasters, periodistas, estudiantes, investigación de usuarios, subtítulos de vídeo y transcripción de audiolibros"></a>
</p>

### 6. EarScribe frente a Otter.ai, Rev, HappyScribe y un Whisper local

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Comparativa de EarScribe con Otter.ai, Rev y HappyScribe — audio a texto gratis e ilimitado con inferencia en el dispositivo y sin tarifas por minuto"></a>
</p>

### 7. Preguntas frecuentes — privacidad, formatos, exportación de subtítulos, uso sin conexión

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="Preguntas frecuentes sobre voz a texto gratis — respuestas sobre privacidad, MP3 y vídeo a texto, exportación de subtítulos SRT y VTT, idiomas compatibles, uso sin conexión y Whisper en el navegador"></a>
</p>

---

## 🚀 Inicio rápido

1. Abre **[earscribe.app](https://earscribe.app)** en Chrome, Edge, Safari o Firefox.
2. Suelta un archivo — o un vídeo, o pulsa grabar. Admite hasta 1 GiB por archivo; el límite real es la memoria de tu equipo, no el tamaño en disco.
3. Elige un modelo. **base** es el predeterminado y sirve para casi cualquier voz; **tiny** es para un móvil o una nota de voz rápida; **small** y **turbo** son para audio con acento, ruidoso o importante.
4. Pulsa **Transcribir**. El audio se decodifica y se entrega a Whisper dentro de la pestaña. La primera vez se descargan los pesos, así que mira el tamaño que aparece en el botón.
5. Lee la transcripción, haz clic en una línea para repetirla, corrige lo que importe y luego **Exportar → SRT / VTT / TXT / JSON** o cópiala.

¿Prefieres un lote? Cambia a la cola, suelta todos los archivos que quieras y elige el modelo una sola vez. La cola procesa de uno en uno, reutiliza el modelo que ya está en memoria y guarda cada resultado como proyecto.

> 💡 **No hace falta convertir nada antes.** Un MP4 de dos horas entra tal cual. Si prefieres quedarte solo con el audio, la app puede extraerte la pista de audio del vídeo.

---

## 🗂️ El espacio de trabajo

`/dashboard` es el mismo motor de transcripción, pero con memoria. Todo se guarda en este navegador —IndexedDB para los registros de proyecto, CacheStorage para los pesos del modelo— y nada se sincroniza con una cuenta, porque no hay cuenta.

| Sección | Qué encuentras |
|---|---|
| **Proyectos** | Todo, lo más reciente primero. |
| **Transcripciones** | Proyectos creados por una transcripción. Editar sus líneas no los saca de aquí. |
| **Subtítulos** | Proyectos creados a partir de un archivo de subtítulos —el conversor y las importaciones—, para que el trabajo de subtitulado no se mezcle con el de voz. |
| **Archivos** | Los medios de origen que guarda el espacio de trabajo, filtrables por tipo: transcripciones, subtítulos, audio. El audio original **no** se guarda por defecto. |
| **Papelera** | Proyectos borrados, recuperables hasta que la vacíes. |

Dentro de un proyecto puedes buscar en la transcripción, hacer clic en una marca de tiempo para repetirla, editar las líneas de subtítulo (texto, puntos de entrada y salida, añadir o quitar), repartir las líneas largas en otras más cortas, exportar de nuevo en cualquier formato o abrir el reproductor sin salir de la página.

**Copia de seguridad:** el espacio de trabajo se exporta como un único archivo (de hasta 320 MB) y se importa en otro navegador o en otro equipo. Como los proyectos nunca salen del dispositivo, ese archivo es la única copia que viaja: trátalo como cualquier otra copia de seguridad de documentos.

---

## 💸 Cuánto cuesta

Gratis no significa sin coste. Estos son los tamaños de descarga medidos por modelo y backend, no estimaciones:

| Modelo | WebGPU | WebAssembly | Uso típico |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Notas de voz, móviles modestos, una primera prueba |
| **base** *(predeterminado)* | 291 MB | 77 MB | Entrevistas, reuniones, pódcast |
| **small** | 968 MB | 249 MB | Voz con acento, salas ruidosas |
| **turbo** | 3.24 GB | 1.09 GB | Transcripciones de estudio, cuando la precisión importa más que el tiempo |

- **Se descarga una vez y queda en caché.** Los pesos viven en la caché del navegador; la segunda vez no se descarga nada. Otro perfil de navegador implica descargarlos de nuevo.
- **La GPU merece la pena.** En el mismo equipo, WebGPU terminó un archivo de 40 minutos con base en unos 3.8 minutos frente a 9.4 en la CPU —unas 2.5× más rápido, a cambio de tres o cuatro veces más descarga. `turbo` en WebGPU nunca llegó a terminar su descarga de 3.24 GB en nuestra prueba, así que aparece como no medido, no como rápido.
- **Manda la memoria, no el tamaño del archivo.** Las grabaciones largas se decodifican a 16 kHz mono antes de transcribir. Un MP3 de 40 minutos necesita unos cientos de megabytes; un WAV estéreo de dos horas puede agotar una pestaña antes de empezar. Ahora la decodificación pide 16 kHz directamente, lo que bajó la memoria máxima de un archivo estéreo de dos horas de unos 1.6 GB a 0.5 GB.
- **Sin servidor ni cola en la máquina de otro.** El tiempo es de tu CPU, así que un portátil lento va lento. Es el precio de no subir nada.

Las mediciones completas, con el método y las pruebas que fallaron, están en las [guías](https://earscribe.app/guides).

---

## 🆚 Comparativa

¿Cómo se compara EarScribe con otras formas de transcribir audio en 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Whisper CLI local |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratis e ilimitado** | ✅ | ⚠️ 300 min/mes | ❌ Solo prueba | ❌ De pago | ✅ |
| **Sin registro ni cuenta** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Sin subida (privado)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Vídeo sin subir** | ✅ Se extrae en local | ❌ Hay que subirlo | ❌ Hay que subirlo | ❌ Hay que subirlo | ✅ Necesita ffmpeg |
| **Funciona en el navegador** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Exportación SRT / VTT** | ✅ | ⚠️ De pago | ✅ | ✅ | ⚠️ Manual |
| **Transcripción con marcas de tiempo** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manual |
| **Inferencia local** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 idiomas hablados** | ✅ | ⚠️ Limitado | ⚠️ Limitado | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Requiere instalación** | ❌ Ninguna | ❌ Ninguna | ❌ Ninguna | ❌ Ninguna | ⚠️ Python + GPU |
| **Coste** | $0 | $0–$30/mes | $0.25/min | €0.20/min | $0 (tu hardware) |

**Dónde pierde:** una instalación local puede mover un modelo más grande en un backend más rápido que una pestaña del navegador, y un servicio de pago añade etiquetas de hablante y un espacio de trabajo en equipo. La ventaja de EarScribe es que es gratis, no hay que instalar nada y el audio no va a ninguna parte.

→ **[Pruébalo en earscribe.app](https://earscribe.app)**

---

## 🌍 Entradas y idiomas compatibles

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Se acepta todo lo que la Web Audio API pueda decodificar; esos siete formatos cubren casi cualquier grabación que te encuentres.

- 🎵 **[MP3 a texto](https://earscribe.app/mp3-to-text)** — el estándar de pódcast y entrevistas
- 🎙️ **[WAV a texto](https://earscribe.app/wav-to-text)** — grabaciones de estudio y de campo sin pérdida
- 📱 **[M4A a texto](https://earscribe.app/m4a-to-text)** — Notas de Voz del iPhone
- 🎧 **[Nota de voz a texto](https://earscribe.app/voice-memo-to-text)** — grabaciones desde el móvil
- 🔊 **[Audio a texto](https://earscribe.app/audio-to-text)** — el punto de entrada general
- 🎬 **[Audio a SRT](https://earscribe.app/audio-to-srt)** — directo a los subtítulos

### Vídeo — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

La pista de audio se separa con [mediabunny](https://mediabunny.dev), se decodifica con WebCodecs y se recodifica como un MP3 mono de 16 kHz pequeño (o WAV cuando no hay codificador MP3): todo en local. Si el navegador no puede decodificar un contenedor, lo dice con un mensaje claro en lugar de devolver una transcripción vacía sin avisar.

### Micrófono

La grabación ocurre en la pestaña con MediaRecorder. Una grabación se transcribe exactamente igual que un archivo que sueltas; los subtítulos en directo durante la grabación **no** se ofrecen (mira [lo que no hace](#-lo-que-no-hace)).

### Idiomas — 99 hablados, 27 de interfaz

Whisper detecta el idioma hablado automáticamente: inglés, español, francés, alemán, italiano, portugués, ruso, japonés, coreano, chino (simplificado y tradicional), árabe, hindi, turco, neerlandés, polaco, indonesio, sueco, noruego, danés, finés, checo, húngaro, griego, hebreo, tailandés, vietnamita y otros 70+ idiomas.

La interfaz está traducida a 27 locales. El inglés vive en `/` y los otros 26 llevan prefijo:

| | | | |
|---|---|---|---|
| [English](https://earscribe.app) | [简体中文](https://earscribe.app/zh-CN) | [日本語](https://earscribe.app/ja) | [한국어](https://earscribe.app/ko) |
| [Español](https://earscribe.app/es) | [Português (BR)](https://earscribe.app/pt-br) | [Deutsch](https://earscribe.app/de) | [Français](https://earscribe.app/fr) |
| [Русский](https://earscribe.app/ru) | [Italiano](https://earscribe.app/it) | [Polski](https://earscribe.app/pl) | [Nederlands](https://earscribe.app/nl) |
| [Українська](https://earscribe.app/uk) | [Türkçe](https://earscribe.app/tr) | [Tiếng Việt](https://earscribe.app/vi) | [ไทย](https://earscribe.app/th) |
| [हिन्दी](https://earscribe.app/hi) | [বাংলা](https://earscribe.app/bn) | [اردو](https://earscribe.app/ur) | [العربية](https://earscribe.app/ar) |
| [فارسی](https://earscribe.app/fa) | [Bahasa Indonesia](https://earscribe.app/id) | [Svenska](https://earscribe.app/sv) | [Norsk](https://earscribe.app/nb) |
| [Dansk](https://earscribe.app/da) | [Suomi](https://earscribe.app/fi) | [繁體中文](https://earscribe.app/zh-TW) | |

---

## 💼 Casos de uso

### 🎙️ Podcasters y creadores
**[Transcripción de pódcast](https://earscribe.app/podcast-transcription)** para notas del programa, SEO del episodio y accesibilidad. Exporta SRT para la versión en vídeo y TXT para el blog.

### 📰 Periodistas e investigadores
**[Transcripción de entrevistas](https://earscribe.app/interview-transcription)** en la que la grabación original se queda en tu portátil. No hay una copia de terceros que se pueda filtrar, citar judicialmente o auditar.

### 🎓 Estudiantes y docentes
**[Transcripción de clases](https://earscribe.app/audio-to-text)** de una sesión grabada, consultable antes de la siguiente. Funciona con Notas de Voz del iPhone y con exportaciones de Zoom.

### 📞 Reuniones e investigación de usuarios
**[Grabación de reuniones a texto](https://earscribe.app/meeting-recording-to-text)** — una transcripción de la llamada, no notas de reunión generadas automáticamente.

### 🎬 Editores de vídeo
**[Audio a SRT](https://earscribe.app/audio-to-srt)** para YouTube, Premiere, Final Cut y Resolve. El tiempo de cada línea sale de las marcas del propio Whisper, y la revisión de subtítulos señala lo que se saldrá de pantalla.

### 📚 Audiolibros y grabaciones largas
Se admiten archivos de dos horas, pero aquí manda la memoria del dispositivo. Lee [cómo se maneja el audio largo](https://earscribe.app/guides/how-to-transcribe-long-audio) antes de empezar uno de cuatro horas.

---

## 🚧 Lo que no hace

Ser explícitos aquí evita que alguien pierda una ejecución:

- **Sin separación de hablantes.** Dos personas en un mismo archivo dan texto plano, sin etiquetas «Hablante 1 / Hablante 2». La página de entrevistas lo dice a propósito.
- **Sin traducción.** La transcripción se queda en el idioma que se habló; el idioma de la interfaz y el hablado no tienen relación.
- **Sin subtítulos en directo.** Grabar y transcribir son pasos distintos: el micrófono graba primero y después se transcribe el archivo.
- **La cola es en serie y necesita la pestaña abierta.** Un modelo y un idioma para todo el lote. Si cierras la pestaña, se detiene.
- **Sin sincronización entre dispositivos.** Los proyectos viven en este navegador. Usa la exportación del espacio de trabajo para moverlos.
- **No es una app sin conexión.** Los pesos quedan en caché, pero la página se carga desde la red. Instalarla añade un acceso directo en el escritorio o en la pantalla de inicio, no una copia sin conexión.
- **1 GiB por archivo es un tope fijo; la memoria es el límite real.**

---

## ❓ Preguntas frecuentes

<details>
<summary><b>¿EarScribe es de verdad gratis y sin límites?</b></summary><br/>
Sí: sin plan de pago, sin tarjeta, sin tarifa por minuto, sin cupo diario ni mensual y sin cuenta. El cálculo corre en tu propio hardware, así que no hay una factura de nube que repercutir. Existe un tope de 1 GiB por archivo, y la memoria de tu dispositivo marca lo que de verdad llega a terminar.
</details>

<details>
<summary><b>¿Mi audio se sube a algún sitio?</b></summary><br/>
No. El audio se decodifica en la pestaña y se pasa a un modelo Whisper que corre en un Web Worker. Los pesos del modelo se descargan <i>hacia</i> tu navegador desde una CDN, lo que significa que la CDN ve tu dirección IP, pero la grabación no se envía. Las páginas públicas llevan Google AdSense —salvo las páginas en persa, que la política de AdSense excluye— y analítica Plausible sin cookies; <code>/dashboard</code> no carga código de anuncios.
</details>

<details>
<summary><b>¿Puedo transcribir un vídeo?</b></summary><br/>
Sí, directamente: MP4, MOV, MKV, WebM, M4V, TS, QT y M2TS. La pista de audio se extrae dentro del navegador y se transcribe como un archivo normal, así que no necesitas ffmpeg ni una web de conversión. Si un contenedor usa un códec que el navegador no puede decodificar, la app lo dice en lugar de devolver una transcripción vacía.
</details>

<details>
<summary><b>¿Por qué la primera ejecución es lenta?</b></summary><br/>
La primera vez que usas un modelo, el navegador descarga sus pesos: 41 MB para tiny en WebAssembly y hasta 3.24 GB para turbo en WebGPU. Después quedan en caché. Para casi todo, elige <b>base</b> (77 MB en WebAssembly, 291 MB en WebGPU).
</details>

<details>
<summary><b>¿Qué precisión tiene y qué modelo elijo?</b></summary><br/>
En el mismo clip de 34 segundos, nuestros cuatro modelos discreparon en 26 de 111 palabras, y el mismo modelo en dos tamaños de descarga discrepó consigo mismo. Elige por las palabras que te importan, no por un porcentaje de precisión: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">la guía de modelos</a> muestra las diferencias reales.
</details>

<details>
<summary><b>¿Puedo obtener subtítulos SRT o VTT?</b></summary><br/>
Sí: Exportar → SRT o VTT. Los tiempos salen de los límites de segmento del propio Whisper, no de partir el texto después. La revisión de subtítulos marca las líneas demasiado largas, demasiado rápidas, repetidas, vacías o solapadas, y puedes editar texto y tiempos antes de exportar.
</details>

<details>
<summary><b>¿Y si ya tengo un archivo SRT o VTT?</b></summary><br/>
Conviértelo sin descargar ningún modelo: <a href="https://earscribe.app/srt-to-vtt">SRT a VTT</a> y <a href="https://earscribe.app/srt-to-txt">SRT a texto</a> leen el archivo en local. No se sube nada ni se descargan pesos de Whisper.
</details>

<details>
<summary><b>¿Funciona sin conexión?</b></summary><br/>
El paso de transcripción sí: una vez cargados la página y el modelo, el audio se procesa sin contactar con ningún servidor de transcripción. La app no es un paquete sin conexión: abrirla necesita red, y un modelo que nunca hayas descargado hay que traerlo. Instalarla desde el pie añade un acceso directo que abre el espacio de trabajo; no añade una copia sin conexión.
</details>

<details>
<summary><b>¿Etiqueta quién habla?</b></summary><br/>
No. La salida es texto plano con códigos de tiempo. La diarización de hablantes no forma parte de esta versión, y la app no finge lo contrario.
</details>

<details>
<summary><b>¿Dónde se guardan mis resultados?</b></summary><br/>
En este navegador: los proyectos en IndexedDB, los pesos del modelo en CacheStorage. El audio original no se guarda con un proyecto salvo que tú lo conserves. Una página que nunca se guardó en el espacio de trabajo empieza limpia al recargar; usa <code>/dashboard</code> y su exportación para conservar lo que te importe.
</details>

<details>
<summary><b>¿Hay una alternativa gratis a Otter.ai o Rev?</b></summary><br/>
EarScribe es una alternativa gratuita a los servicios de transcripción en la nube: el cálculo lo haces tú, el audio se queda donde está y no hay tarifas por minuto. El intercambio es real: sin etiquetas de hablante, sin espacio de trabajo en equipo y los archivos largos dependen de tu máquina.
</details>

<details>
<summary><b>¿Cómo convierto un MP3 a texto gratis?</b></summary><br/>
Suelta el MP3 en <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (o en la página de inicio). Se decodifica en tu navegador, se transcribe en local y puedes copiarlo o exportarlo como SRT, VTT, TXT o JSON.
</details>

> Más respuestas en la **[página Acerca de](https://earscribe.app/about)** y notas de medición en las **[guías](https://earscribe.app/guides)**.

---

## 🛠️ Stack técnico

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU con fallback a WebAssembly
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small y large-v3-turbo, cuantizados en ONNX
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — demux de vídeo y extracción de audio en la pestaña
- **[next-intl](https://next-intl.dev)** — 27 locales, un catálogo de mensajes por idioma
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** para el alojamiento, con algunas Pages Functions (host de modelos, endpoint de feedback)

El sitio se renderiza de forma estática e hidrata en el navegador; la transcripción y la conversión de subtítulos son solo del lado del cliente. Los pesos del modelo vienen de la CDN de Hugging Face en el primer uso y quedan en CacheStorage.

---

## 🧑‍💻 Desarrollo local

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Comprobaciones que se ejecutan antes de un despliegue:

```bash
pnpm typecheck
pnpm lint
pnpm test              # node:test — queue state machine, subtitle parsers, release id
pnpm i18n:gate         # no missing keys, no English leftovers, no broken placeholders
pnpm seo:check         # page copy, keyword coverage, FAQ and cursor audits
node scripts/sitemap-audit.mjs
node scripts/llms-txt-audit.mjs
pnpm readme:audit      # README sizes vs lib/models.ts, links, 9-language parity
```

`pnpm build` genera una exportación estática en `out/`. Varias auditorías leen `out/`, así que ejecuta el build primero.

---

## ☁️ Despliegue

Los despliegues de producción pasan por un solo comando, que ejecuta todas las auditorías en orden:

```bash
pnpm pages:deploy
```

Primero compara el marcador de despliegue local (`deployId` en `lib/release.ts`) con el que sirve `/changelog` en el sitio en vivo y se niega a continuar si coinciden: así se detecta un build obsoleto. Después construye, ejecuta las auditorías de enlaces, guías, `llms.txt`, i18n, sitemap y PWA, y publica `out/` en Cloudflare Pages.

`/changelog` es una lista de cambios pensada para quien la lee y puede actuar sobre ella. No es un registro de build: los refactors internos, las correcciones de textos y el trabajo de traducción generan un nuevo `deployId`, pero ninguna entrada en el changelog.

Entorno y bindings:

| Nombre | Para qué sirve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URLs canónicas, sitemap, etiquetas OG |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Identificador del sitio en Plausible |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL del script de Plausible |
| `FEEDBACK_DB` (binding de D1) | El endpoint `/feedback`; esquema en `migrations/` |

---

## 🌐 Añadir un idioma

1. Añade el código del locale a `ALL_LOCALE_NAMES` en [`i18n/locale.ts`](i18n/locale.ts).
2. Crea `messages/<code>.json` junto a `en.json`, completamente traducido.
3. Ejecuta `pnpm i18n:gate`: el enrutado, el sitemap, el hreflang y los metadatos OG recogen el locale automáticamente, pero una clave que falte hace fallar el gate.

Solo los locales que pasan el gate pertenecen a `translatedLocales`; el selector de idioma marca el resto como parcial.

---

## 🔬 Añadir un modelo de Whisper

Añade una entrada a `MODELS` en [`lib/models.ts`](lib/models.ts) con un `sizeMB` **medido** para `wasm` y para `webgpu`: los dos backends envían archivos de pesos distintos, y citar un solo número para ambos es cómo la app llegó a prometer 500 MB y entregar 968 MB. El repositorio debe existir en Hugging Face como `onnx-community/<name>` o ser compatible con ONNX-Whisper. Añade un bloque `models.<id>` equivalente en cada `messages/*.json` para los textos de ventajas e inconvenientes.

---

## 🤝 Contribuir

Las pull requests son bienvenidas, sobre todo:

- Traducciones (`messages/<code>.json`) y correcciones del README propias de cada locale
- Informes de errores con el archivo que falló, el navegador y la memoria del dispositivo
- Mediciones: tamaño del modelo, tiempo y memoria máxima en hardware que no tenemos
- Correcciones de accesibilidad

Abre un issue o una PR aquí, o prueba primero **[earscribe.app](https://earscribe.app)** para ver a qué contribuirías.

---

## 📄 Licencia

El sitio de marketing y las páginas de este repositorio son [MIT](LICENSE): libres para uso personal y comercial. El worker de transcripción, el decodificador de audio y los exportadores de subtítulos no se publican aquí, así que este repositorio no es una copia completa del servicio que puedas alojar por tu cuenta.

---

<p align="center">
  <b>👉 Prueba la app en vivo: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio a texto · Vídeo a texto · Voz a texto · Exportación de subtítulos · 100% gratis · Sin registro · En el dispositivo</sub>
</p>

<p align="center">
  Hecho con ❤️ sobre <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> y <a href="https://mediabunny.dev">mediabunny</a>.
</p>
